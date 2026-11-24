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
	crackColor?: string;
}

interface Point {
	x: number;
	y: number;
}

interface Shard {
	poly: [Point, Point, Point];
	cx: number;
	cy: number;
	x: number;
	y: number;
	rot: number;
	scale: number;
	alpha: number;
	crackOpacity: number;
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

function createShards(width: number, height: number, cols: number, rows: number): Shard[] {
	const shards: Shard[] = [];
	const cellW = width / cols;
	const cellH = height / rows;

	const pts: Point[][] = [];
	for (let r = 0; r <= rows; r++) {
		const rowPts: Point[] = [];
		for (let c = 0; c <= cols; c++) {
			const jitterX =
				c === 0 || c === cols ? 0 : (Math.random() - 0.5) * cellW * 0.7;
			const jitterY =
				r === 0 || r === rows ? 0 : (Math.random() - 0.5) * cellH * 0.7;
			rowPts.push({
				x: c * cellW + jitterX,
				y: r * cellH + jitterY,
			});
		}
		pts.push(rowPts);
	}

	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < cols; c++) {
			const p00 = pts[r][c];
			const p10 = pts[r][c + 1];
			const p01 = pts[r + 1][c];
			const p11 = pts[r + 1][c + 1];

			const tris: [Point, Point, Point][] =
				(r + c) % 2 === 0
					? [
							[p00, p10, p11],
							[p00, p11, p01],
					  ]
					: [
							[p00, p10, p01],
							[p10, p11, p01],
					  ];

			for (const poly of tris) {
				const cx = (poly[0].x + poly[1].x + poly[2].x) / 3;
				const cy = (poly[0].y + poly[1].y + poly[2].y) / 3;
				shards.push({
					poly,
					cx,
					cy,
					x: 0,
					y: 0,
					rot: 0,
					scale: 1,
					alpha: 1,
					crackOpacity: 0,
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
	cols = 30,
	rows = 10,
	blastRadius = 320,
	crackColor = "rgba(1, 1, 1, 0.2)",
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

		// Expand canvas around the wrapper so shards can blast in all directions
		const padX = Math.max(240, Math.round(blastRadius * 0.85));
		const padY = Math.max(220, Math.round(blastRadius * 0.75));
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
		if (!outSnapshot || !inSnapshot || !ctx) {
			container.style.minHeight = "";
			gsap.set(targets, { opacity: 1 });
			return;
		}

		stageCanvas.width = Math.floor(stageWidth * dpr);
		stageCanvas.height = Math.floor(stageHeight * dpr);
		stageCanvas.style.opacity = "1";

		gsap.set(targets, { opacity: 0 });

		const isUp = latestDirectionRef.current === -1;
		const dirSign = isUp ? -1 : 1;

		// Shards sit inside the text box area within the larger stage
		const outShards = createShards(textWidth, textHeight, cols, rows).map((s) => ({
			...s,
			poly: s.poly.map((p) => ({ x: p.x + padX, y: p.y + padY })) as [Point, Point, Point],
			cx: s.cx + padX,
			cy: s.cy + padY,
		}));

		const inShards = createShards(textWidth, textHeight, cols, rows).map((s) => ({
			...s,
			poly: s.poly.map((p) => ({ x: p.x + padX, y: p.y + padY })) as [Point, Point, Point],
			cx: s.cx + padX,
			cy: s.cy + padY,
		}));

		const centerX = stageWidth / 2;
		const centerY = stageHeight / 2;

		// Scatter incoming shards all around the wrapper before converging
		inShards.forEach((s) => {
			const angle = Math.random() * Math.PI * 2;
			const dist = blastRadius * (0.55 + Math.random() * 0.75);

			s.x = Math.cos(angle) * dist;
			s.y = Math.sin(angle) * dist + dirSign * 45;
			s.rot = (Math.random() - 0.5) * 2.2;
			s.scale = 0.6 + Math.random() * 0.45;
			s.alpha = 0;
			s.crackOpacity = 1;
		});

		const drawShardGroup = (shards: Shard[], snapshot: HTMLCanvasElement) => {
			for (let i = 0; i < shards.length; i++) {
				const s = shards[i];
				if (s.alpha <= 0.01) continue;

				ctx.save();
				ctx.globalAlpha = s.alpha;
				ctx.translate(s.cx + s.x, s.cy + s.y);
				ctx.rotate(s.rot);
				ctx.scale(s.scale, s.scale);

				ctx.beginPath();
				ctx.moveTo(s.poly[0].x - s.cx, s.poly[0].y - s.cy);
				ctx.lineTo(s.poly[1].x - s.cx, s.poly[1].y - s.cy);
				ctx.lineTo(s.poly[2].x - s.cx, s.poly[2].y - s.cy);
				ctx.closePath();
				ctx.clip();

				ctx.drawImage(
					snapshot,
					0,
					0,
					snapshot.width,
					snapshot.height,
					-s.cx,
					-s.cy,
					stageWidth,
					stageHeight
				);

				if (s.crackOpacity > 0.02) {
					ctx.strokeStyle = crackColor;
					ctx.globalAlpha = s.alpha * s.crackOpacity;
					ctx.lineWidth = 0.8;
					ctx.stroke();
				}

				ctx.restore();
			}
		};

		const renderFrame = () => {
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			ctx.clearRect(0, 0, stageWidth, stageHeight);
			drawShardGroup(outShards, outSnapshot);
			drawShardGroup(inShards, inSnapshot);
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

		// 1. Outgoing text blasts in all directions around the wrapper
		outShards.forEach((s) => {
			const dx = s.cx - centerX;
			const dy = s.cy - centerY;
			const distFromCenter = Math.hypot(dx, dy);
			const maxDist = Math.hypot(textWidth / 2, textHeight / 2) || 1;
			const radialRatio = Math.min(1, distFromCenter / maxDist);

			// Blend radial outward angle with full 360-degree scatter
			const radialAngle = Math.atan2(dy, dx);
			const randomAngle = Math.random() * Math.PI * 2;
			const angle = radialAngle + Math.sin(randomAngle) * 1.35;
			const blast = blastRadius * (0.55 + Math.random() * 0.8);

			const delay = radialRatio * 0.12;

			tl.to(
				s,
				{
					x: Math.cos(angle) * blast,
					y: Math.sin(angle) * blast - dirSign * 30,
					rot: (Math.random() - 0.5) * 2.4,
					scale: 0.65 + Math.random() * 0.35,
					alpha: 0,
					crackOpacity: 1,
					duration: 1,
					ease: "power2.out",
				},
				delay
			);
		});

		// 2. Incoming shards fly in from all around the wrapper into place
		const assembleStart = 0.16;
		inShards.forEach((s) => {
			const dx = s.cx - centerX;
			const dy = s.cy - centerY;
			const distFromCenter = Math.hypot(dx, dy);
			const maxDist = Math.hypot(textWidth / 2, textHeight / 2) || 1;
			const radialRatio = Math.min(1, distFromCenter / maxDist);

			const delay = assembleStart + (1 - radialRatio) * 0.16;

			tl.to(
				s,
				{
					x: 0,
					y: 0,
					rot: 0,
					scale: 1,
					alpha: 1,
					crackOpacity: 0,
					duration: 1,
					ease: "power3.out",
				},
				delay
			);
		});

		return () => {
			tl.kill();
			cleanupVisuals();
		};
	}, [triggerKey, text, subtitle, cols, rows, blastRadius, crackColor]);

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