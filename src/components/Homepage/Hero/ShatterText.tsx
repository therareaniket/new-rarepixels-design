"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface ShatterTextProps {
	text: string;
	subtitle?: string;
	triggerKey: string | number;
	direction?: number; // 1 = scrolling down, -1 = scrolling up
	className?: string;
	subtitleClassName?: string;
	cols?: number;
	rows?: number;
	blastRadius?: number;
	accentColors?: string[];
	bgColor?: string;
}

interface Point {
	x: number;
	y: number;
}

interface Shard {
	poly: [Point, Point, Point];
	cx: number;
	cy: number;
	// Normalized horizontal/radial position (0..1) for wave sweep
	waveOrder: number;
	// Scatter target around wrapper
	blastX: number;
	blastY: number;
	blastRot: number;
	blastScale: number;
	// Current animated state
	x: number;
	y: number;
	rot: number;
	scale: number;
	crackGap: number; // 0 = solid locked text, 1 = fractured with visible seams
	morph: number; // 0 = outgoing text, 1 = incoming text
	accentColor: string | null;
	accentStrength: number;
}

function wrapCanvasText(
	ctx: CanvasRenderingContext2D,
	rawText: string,
	maxWidth: number
): string[] {
	const words = rawText.split(/\s+/).filter(Boolean);
	if (words.length === 0) return [];
	const lines: string[] = [];
	let current = words[0];

	for (let i = 1; i < words.length; i++) {
		const candidate = `${current} ${words[i]}`;
		if (ctx.measureText(candidate).width <= maxWidth) {
			current = candidate;
		} else {
			lines.push(current);
			current = words[i];
		}
	}
	lines.push(current);
	return lines;
}

function applyTextTransform(text: string, transform: string): string {
	if (transform === "uppercase") return text.toUpperCase();
	if (transform === "lowercase") return text.toLowerCase();
	if (transform === "capitalize") {
		return text.replace(/\b\w/g, (c) => c.toUpperCase());
	}
	return text;
}

function drawElementTextToCanvas(
	ctx: CanvasRenderingContext2D,
	el: HTMLElement,
	originX: number,
	originY: number,
	rawText: string
) {
	const style = window.getComputedStyle(el);
	const elRect = el.getBoundingClientRect();

	const fontSize = parseFloat(style.fontSize) || 16;
	const lineHeight =
		style.lineHeight === "normal"
			? fontSize * 1.2
			: parseFloat(style.lineHeight) || fontSize * 1.2;

	ctx.font = `${style.fontStyle} ${style.fontWeight} ${fontSize}px ${style.fontFamily}`;
	ctx.fillStyle = style.color || "#010101";
	ctx.textBaseline = "top";

	if ("letterSpacing" in ctx) {
		(ctx as CanvasRenderingContext2D & { letterSpacing: string }).letterSpacing =
			style.letterSpacing !== "normal" ? style.letterSpacing : "0px";
	}

	const transformedText = applyTextTransform(rawText, style.textTransform);

	const paddingLeft = parseFloat(style.paddingLeft) || 0;
	const paddingRight = parseFloat(style.paddingRight) || 0;
	const availableWidth = Math.max(10, elRect.width - paddingLeft - paddingRight);

	const align = style.textAlign;
	let drawX = elRect.left - originX + paddingLeft + availableWidth / 2;
	ctx.textAlign = "center";

	if (align === "left" || align === "start") {
		ctx.textAlign = "left";
		drawX = elRect.left - originX + paddingLeft;
	} else if (align === "right" || align === "end") {
		ctx.textAlign = "right";
		drawX = elRect.right - originX - paddingRight;
	}

	const drawTop = elRect.top - originY;
	const lines = wrapCanvasText(ctx, transformedText, availableWidth + 1);
	lines.forEach((line, idx) => {
		ctx.fillText(line, drawX, drawTop + idx * lineHeight);
	});
}

function buildTextSnapshotCanvas(
	stageWidth: number,
	stageHeight: number,
	stageLeft: number,
	stageTop: number,
	titleEl: HTMLElement,
	subEl: HTMLElement | null,
	targetText: string,
	targetSubtitle: string | undefined,
	dpr: number
): HTMLCanvasElement | null {
	const canvas = document.createElement("canvas");
	canvas.width = Math.max(1, Math.floor(stageWidth * dpr));
	canvas.height = Math.max(1, Math.floor(stageHeight * dpr));

	const ctx = canvas.getContext("2d");
	if (!ctx) return null;

	ctx.scale(dpr, dpr);
	drawElementTextToCanvas(ctx, titleEl, stageLeft, stageTop, targetText);

	if (targetSubtitle && subEl) {
		drawElementTextToCanvas(ctx, subEl, stageLeft, stageTop, targetSubtitle);
	}

	return canvas;
}

function hasTextPixels(
	ctx: CanvasRenderingContext2D,
	poly: [Point, Point, Point],
	dpr: number
): boolean {
	const minX = Math.max(0, Math.floor(Math.min(poly[0].x, poly[1].x, poly[2].x) * dpr));
	const maxX = Math.ceil(Math.max(poly[0].x, poly[1].x, poly[2].x) * dpr);
	const minY = Math.max(0, Math.floor(Math.min(poly[0].y, poly[1].y, poly[2].y) * dpr));
	const maxY = Math.ceil(Math.max(poly[0].y, poly[1].y, poly[2].y) * dpr);

	const w = Math.max(1, maxX - minX);
	const h = Math.max(1, maxY - minY);
	if (minX + w > ctx.canvas.width || minY + h > ctx.canvas.height) return false;

	const data = ctx.getImageData(minX, minY, w, h).data;
	for (let i = 3; i < data.length; i += 16) {
		if (data[i] > 40) return true;
	}
	return false;
}

function createOrganicShards(
	textWidth: number,
	textHeight: number,
	padX: number,
	padY: number,
	cols: number,
	rows: number,
	outCtx: CanvasRenderingContext2D,
	inCtx: CanvasRenderingContext2D,
	dpr: number,
	blastRadius: number,
	accentColors: string[],
	bgColor: string
): Shard[] {
	const shards: Shard[] = [];
	const cellW = textWidth / cols;
	const cellH = textHeight / rows;

	// Build heavily jittered mesh for jagged glass-like triangles (like video_1)
	const pts: Point[][] = [];
	for (let r = 0; r <= rows; r++) {
		const rowPts: Point[] = [];
		for (let c = 0; c <= cols; c++) {
			const jitterX =
				c === 0 || c === cols ? 0 : (Math.random() - 0.5) * cellW * 0.95;
			const jitterY =
				r === 0 || r === rows ? 0 : (Math.random() - 0.5) * cellH * 0.95;
			rowPts.push({
				x: c * cellW + jitterX + padX,
				y: r * cellH + jitterY + padY,
			});
		}
		pts.push(rowPts);
	}

	const centerX = padX + textWidth / 2;
	const centerY = padY + textHeight / 2;

	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < cols; c++) {
			const p00 = pts[r][c];
			const p10 = pts[r][c + 1];
			const p01 = pts[r + 1][c];
			const p11 = pts[r + 1][c + 1];

			// Randomize diagonal split per cell so shards aren't uniform
			const splitFlip = Math.random() > 0.5;
			const tris: [Point, Point, Point][] = splitFlip
				? [
						[p00, p10, p11],
						[p00, p11, p01],
				  ]
				: [
						[p00, p10, p01],
						[p10, p11, p01],
				  ];

			for (const poly of tris) {
				const activeInOut = hasTextPixels(outCtx, poly, dpr);
				const activeInNext = hasTextPixels(inCtx, poly, dpr);

				// Keep shards that contain either text OR ~18% empty-space debris shards
				// (Empty-space shards filled with bgColor punch holes & fly around just like video_1)
				const isDebrisShard = !activeInOut && !activeInNext;
				if (isDebrisShard && Math.random() > 0.18) continue;

				const cx = (poly[0].x + poly[1].x + poly[2].x) / 3;
				const cy = (poly[0].y + poly[1].y + poly[2].y) / 3;

				const dx = cx - centerX;
				const dy = cy - centerY;
				const radialAngle = Math.atan2(dy, dx);
				const scatterAngle = radialAngle + (Math.random() - 0.5) * 1.6;
				const dist = blastRadius * (0.25 + Math.random() * 0.85);

				// Assign accent colors to ~22% of flying shards (pink/navy/bg punches)
				let accentColor: string | null = null;
				if (isDebrisShard) {
					accentColor =
						Math.random() < 0.45
							? accentColors[Math.floor(Math.random() * accentColors.length)]
							: bgColor;
				} else if (Math.random() < 0.22) {
					accentColor =
						accentColors[Math.floor(Math.random() * accentColors.length)];
				}

				// Wave order from left (0) to right (1) + subtle vertical noise
				const normX = Math.max(0, Math.min(1, (cx - padX) / textWidth));
				const waveOrder = Math.max(
					0,
					Math.min(1, normX * 0.82 + Math.random() * 0.18)
				);

				shards.push({
					poly,
					cx,
					cy,
					waveOrder,
					blastX: Math.cos(scatterAngle) * dist,
					blastY: Math.sin(scatterAngle) * dist,
					blastRot: (Math.random() - 0.5) * 5.2,
					blastScale: 0.35 + Math.random() * 0.65,
					x: 0,
					y: 0,
					rot: 0,
					scale: 1,
					crackGap: 0,
					morph: 0,
					accentColor,
					accentStrength: 0,
				});
			}
		}
	}

	return shards;
}

const ShatterText: React.FC<ShatterTextProps> = ({
	text,
	subtitle,
	triggerKey,
	direction = 1,
	className = "",
	subtitleClassName = "",
	cols = 42,
	rows = 14,
	blastRadius = 210,
	accentColors = ["#ED0180", "#040E36", "#9333EA"],
	bgColor = "#ffffff",
}) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const stageCanvasRef = useRef<HTMLCanvasElement>(null);
	const titleElRef = useRef<HTMLHeadingElement>(null);
	const subtitleElRef = useRef<HTMLParagraphElement>(null);

	const isFirstRenderRef = useRef(true);
	const prevContentRef = useRef({ text, subtitle });
	const latestDirectionRef = useRef<number>(direction);
	const tlRef = useRef<gsap.core.Timeline | null>(null);
	const tickerFnRef = useRef<(() => void) | null>(null);

	useEffect(() => {
		latestDirectionRef.current = direction;
	}, [direction]);

	useEffect(() => {
		const container = containerRef.current;
		const stageCanvas = stageCanvasRef.current;
		const titleEl = titleElRef.current;
		const subEl = subtitleElRef.current;

		if (!container || !stageCanvas || !titleEl) return;

		if (isFirstRenderRef.current) {
			isFirstRenderRef.current = false;
			prevContentRef.current = { text, subtitle };
			return;
		}

		const outgoingText = prevContentRef.current.text;
		const outgoingSubtitle = prevContentRef.current.subtitle;
		prevContentRef.current = { text, subtitle };

		tlRef.current?.kill();
		if (tickerFnRef.current) {
			gsap.ticker.remove(tickerFnRef.current);
			tickerFnRef.current = null;
		}

		const targets = [titleEl, subEl].filter(Boolean) as HTMLElement[];
		const rect = container.getBoundingClientRect();
		const textWidth = Math.max(1, Math.floor(rect.width));
		const textHeight = Math.max(1, Math.floor(rect.height));

		const padX = Math.max(190, Math.round(blastRadius * 0.95));
		const padY = Math.max(140, Math.round(blastRadius * 0.75));
		const stageWidth = textWidth + padX * 2;
		const stageHeight = textHeight + padY * 2;
		const stageLeft = rect.left - padX;
		const stageTop = rect.top - padY;

		const dpr = Math.min(window.devicePixelRatio || 1, 2);

		container.style.minHeight = `${textHeight}px`;
		stageCanvas.style.left = `${-padX}px`;
		stageCanvas.style.top = `${-padY}px`;
		stageCanvas.style.width = `${stageWidth}px`;
		stageCanvas.style.height = `${stageHeight}px`;

		const outSnapshot = buildTextSnapshotCanvas(
			stageWidth,
			stageHeight,
			stageLeft,
			stageTop,
			titleEl,
			subEl,
			outgoingText,
			outgoingSubtitle,
			dpr
		);
		const inSnapshot = buildTextSnapshotCanvas(
			stageWidth,
			stageHeight,
			stageLeft,
			stageTop,
			titleEl,
			subEl,
			text,
			subtitle,
			dpr
		);

		const ctx = stageCanvas.getContext("2d");
		const outCtx = outSnapshot?.getContext("2d");
		const inCtx = inSnapshot?.getContext("2d");

		if (!outSnapshot || !inSnapshot || !ctx || !outCtx || !inCtx) {
			container.style.minHeight = "";
			gsap.set(targets, { opacity: 1 });
			return;
		}

		stageCanvas.width = Math.floor(stageWidth * dpr);
		stageCanvas.height = Math.floor(stageHeight * dpr);
		stageCanvas.style.opacity = "1";

		gsap.set(targets, { opacity: 0 });

		const isUp = latestDirectionRef.current === -1;
		const shards = createOrganicShards(
			textWidth,
			textHeight,
			padX,
			padY,
			cols,
			rows,
			outCtx,
			inCtx,
			dpr,
			blastRadius,
			accentColors,
			bgColor
		);

		const renderFrame = () => {
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			ctx.clearRect(0, 0, stageWidth, stageHeight);

			for (let i = 0; i < shards.length; i++) {
				const s = shards[i];
				if (s.scale <= 0.02) continue;

				// Shrink vertices slightly toward centroid when cracked so white/bg crack lines appear inside letters
				const shrink = 1 - s.crackGap * 0.14;

				ctx.save();
				ctx.translate(s.cx + s.x, s.cy + s.y);
				ctx.rotate(s.rot);
				ctx.scale(s.scale, s.scale);

				ctx.beginPath();
				for (let v = 0; v < 3; v++) {
					const vx = (s.poly[v].x - s.cx) * shrink;
					const vy = (s.poly[v].y - s.cy) * shrink;
					if (v === 0) ctx.moveTo(vx, vy);
					else ctx.lineTo(vx, vy);
				}
				ctx.closePath();
				ctx.clip();

				// Outgoing text texture
				if (s.morph < 1) {
					ctx.globalAlpha = 1 - s.morph;
					ctx.drawImage(
						outSnapshot,
						0,
						0,
						outSnapshot.width,
						outSnapshot.height,
						-s.cx,
						-s.cy,
						stageWidth,
						stageHeight
					);
				}

				// Incoming text texture
				if (s.morph > 0) {
					ctx.globalAlpha = s.morph;
					ctx.drawImage(
						inSnapshot,
						0,
						0,
						inSnapshot.width,
						inSnapshot.height,
						-s.cx,
						-s.cy,
						stageWidth,
						stageHeight
					);
				}

				// Flash brand/debris triangle fill while mid-flight (just like the purple/black shards in video_1)
				if (s.accentColor && s.accentStrength > 0.02) {
					ctx.globalAlpha = s.accentStrength;
					ctx.fillStyle = s.accentColor;
					ctx.fill();
				}

				ctx.restore();
			}
		};

		tickerFnRef.current = renderFrame;
		gsap.ticker.add(renderFrame);

		const cleanupVisuals = () => {
			if (tickerFnRef.current) {
				gsap.ticker.remove(tickerFnRef.current);
				tickerFnRef.current = null;
			}
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			ctx.clearRect(0, 0, stageWidth, stageHeight);
			stageCanvas.style.opacity = "0";
			container.style.minHeight = "";
			gsap.set(targets, { opacity: 1 });
		};

		const tl = gsap.timeline({
			onComplete: cleanupVisuals,
		});
		tlRef.current = tl;

		// Directional wave sweep across the text (left->right on scroll down, right->left on scroll up)
		const maxWaveDelay = 1;

		shards.forEach((s) => {
			const order = isUp ? 1 - s.waveOrder : s.waveOrder;
			const startAt = order * maxWaveDelay;

			// Phase 1: Hairline fracture lines appear right before the shard breaks loose
			tl.to(
				s,
				{
					crackGap: 1,
					duration: 0.14,
					ease: "power1.out",
				},
				startAt
			)
				// Phase 2: Shard blasts outward into the swirling debris field around the wrapper
				.to(
					s,
					{
						x: s.blastX,  
						y: s.blastY,
						rot: s.blastRot,
						scale: s.blastScale,
						accentStrength: s.accentColor ? 0.92 : 0,
						duration: 0.34,
						ease: "power3.out",
					},
					startAt + 0.08
				)
				// Phase 3: Mid-air swap to the incoming text shard & snap back into place with brief crack lines
				.to(
					s,
					{
						x: 0,
						y: 0,
						rot: 0,
						scale: 1,
						morph: 1,
						accentStrength: 0,
						duration: 0.44,
						ease: "expo.inOut",
					},
					startAt + 0.42
				)
				// Phase 4: Residual fracture lines seal shut cleanly
				.to(
					s,
					{
						crackGap: 0,
						duration: 1,
						ease: "power2.out",
					},
					startAt + 0.78
				);
		});

		return () => {
			tl.kill();
			cleanupVisuals();
		};
	}, [
		triggerKey,
		text,
		subtitle,
		cols,
		rows,
		blastRadius,
		accentColors,
		bgColor,
	]);

	return (
		<div ref={containerRef} className="relative">
			<canvas
				ref={stageCanvasRef}
				aria-hidden="true"
				className="pointer-events-none absolute z-20 opacity-0"
			/>

			<div className="relative z-10">
				<h2 ref={titleElRef} className={className}>
					{text}
				</h2>

				{typeof subtitle === "string" && (
					<div className="mt-[32px]">
						<p ref={subtitleElRef} className={subtitleClassName}>
							{subtitle}
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default ShatterText;