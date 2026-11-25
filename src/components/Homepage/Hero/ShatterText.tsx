"use client";

import React, { useCallback, useEffect, useRef } from "react";

interface ShatterTextProps {
	text: string;
	subtitle?: string;
	className?: string;
	subtitleClassName?: string;
	cols?: number;
	rows?: number;
	blastRadius?: number;
	hoverInfluenceRadius?: number;
	accentColors?: string[];
}

interface Point2D {
	x: number;
	y: number;
}

interface Point3D {
	x: number;
	y: number;
	z: number;
}

interface Shard {
	poly: [Point2D, Point2D, Point2D];
	cx: number;
	cy: number;
	blastX: number;
	blastY: number;
	blastZ: number;
	rotX: number;
	rotY: number;
	rotZ: number;
	shapePoly: [Point2D, Point2D, Point2D];
	accentColor: string | null;
	// 0..1 states
	crack: number;
	blast: number;
	morph: number;
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

function applyTextTransform(value: string, transform: string): string {
	if (transform === "uppercase") return value.toUpperCase();
	if (transform === "lowercase") return value.toLowerCase();
	if (transform === "capitalize") {
		return value.replace(/\b\w/g, (c) => c.toUpperCase());
	}
	return value;
}

function buildTextSnapshot(
	width: number,
	height: number,
	originX: number,
	originY: number,
	titleEl: HTMLElement,
	rawText: string,
	dpr: number
): HTMLCanvasElement | null {
	const canvas = document.createElement("canvas");
	canvas.width = Math.max(1, Math.floor(width * dpr));
	canvas.height = Math.max(1, Math.floor(height * dpr));

	const ctx = canvas.getContext("2d");
	if (!ctx) return null;

	const style = window.getComputedStyle(titleEl);
	const rect = titleEl.getBoundingClientRect();
	const fontSize = parseFloat(style.fontSize) || 64;
	const lineHeight =
		style.lineHeight === "normal"
			? fontSize * 1.05
			: parseFloat(style.lineHeight) || fontSize * 1.05;

	ctx.scale(dpr, dpr);
	ctx.font = `${style.fontStyle} ${style.fontWeight} ${fontSize}px ${style.fontFamily}`;
	ctx.fillStyle = style.color || "#010101";
	ctx.textBaseline = "top";

	if ("letterSpacing" in ctx) {
		(ctx as CanvasRenderingContext2D & { letterSpacing: string }).letterSpacing =
			style.letterSpacing !== "normal" ? style.letterSpacing : "0px";
	}

	const padLeft = parseFloat(style.paddingLeft) || 0;
	const padRight = parseFloat(style.paddingRight) || 0;
	const availW = Math.max(10, rect.width - padLeft - padRight);

	const align = style.textAlign;
	let drawX = rect.left - originX + padLeft + availW / 2;
	ctx.textAlign = "center";
	if (align === "left" || align === "start") {
		ctx.textAlign = "left";
		drawX = rect.left - originX + padLeft;
	} else if (align === "right" || align === "end") {
		ctx.textAlign = "right";
		drawX = rect.right - originX - padRight;
	}

	const drawY = rect.top - originY;
	const transformed = applyTextTransform(rawText, style.textTransform);
	const lines = wrapCanvasText(ctx, transformed, availW + 1);
	lines.forEach((line, idx) => {
		ctx.fillText(line, drawX, drawY + idx * lineHeight);
	});

	return canvas;
}

function polyHasText(
	ctx: CanvasRenderingContext2D,
	poly: [Point2D, Point2D, Point2D],
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
	for (let i = 3; i < data.length; i += 12) {
		if (data[i] > 35) return true;
	}
	return false;
}

function createPolygonShape(radius: number): [Point2D, Point2D, Point2D] {
	const startAngle = Math.random() * Math.PI * 2;
	return [0, 1, 2].map((i) => {
		const a = startAngle + (i * Math.PI * 2) / 3 + (Math.random() - 0.5) * 0.35;
		const r = radius * (0.65 + Math.random() * 0.55);
		return { x: Math.cos(a) * r, y: Math.sin(a) * r };
	}) as [Point2D, Point2D, Point2D];
}

function generateShards(
	textWidth: number,
	textHeight: number,
	padX: number,
	padY: number,
	cols: number,
	rows: number,
	textCtx: CanvasRenderingContext2D,
	dpr: number,
	blastRadius: number,
	accentColors: string[]
): Shard[] {
	const shards: Shard[] = [];
	const cellW = textWidth / cols;
	const cellH = textHeight / rows;

	const grid: Point2D[][] = [];
	for (let r = 0; r <= rows; r++) {
		const rowPts: Point2D[] = [];
		for (let c = 0; c <= cols; c++) {
			const jx = c === 0 || c === cols ? 0 : (Math.random() - 0.5) * cellW * 0.95;
			const jy = r === 0 || r === rows ? 0 : (Math.random() - 0.5) * cellH * 0.95;
			rowPts.push({
				x: padX + c * cellW + jx,
				y: padY + r * cellH + jy,
			});
		}
		grid.push(rowPts);
	}

	const centerX = padX + textWidth * 0.5;
	const centerY = padY + textHeight * 0.5;

	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < cols; c++) {
			const p00 = grid[r][c];
			const p10 = grid[r][c + 1];
			const p01 = grid[r + 1][c];
			const p11 = grid[r + 1][c + 1];

			const tris: [Point2D, Point2D, Point2D][] =
				Math.random() > 0.5
					? [
							[p00, p10, p11],
							[p00, p11, p01],
					  ]
					: [
							[p00, p10, p01],
							[p10, p11, p01],
					  ];

			for (const poly of tris) {
				if (!polyHasText(textCtx, poly, dpr)) continue;

				const cx = (poly[0].x + poly[1].x + poly[2].x) / 3;
				const cy = (poly[0].y + poly[1].y + poly[2].y) / 3;

				const dx = cx - centerX;
				const dy = cy - centerY;
				const angle = Math.atan2(dy, dx) + (Math.random() - 0.5) * 1.1;
				const push = blastRadius * (0.35 + Math.random() * 0.85);

				const blastZ = (Math.random() * 2 - 0.55) * 220;
				const rotX = (Math.random() - 0.5) * Math.PI * 1.3;
				const rotY = (Math.random() - 0.5) * Math.PI * 1.5;
				const rotZ = (Math.random() - 0.5) * Math.PI * 1.7;

				const shapeR = Math.max(7, Math.min(18, Math.min(cellW, cellH) * 0.5));
				const hasAccent = Math.random() < 0.28;
				const accentColor = hasAccent
					? accentColors[Math.floor(Math.random() * accentColors.length)]
					: null;

				shards.push({
					poly,
					cx,
					cy,
					blastX: Math.cos(angle) * push,
					blastY: Math.sin(angle) * push,
					blastZ,
					rotX,
					rotY,
					rotZ,
					shapePoly: createPolygonShape(shapeR),
					accentColor,
					crack: 0,
					blast: 0,
					morph: 0,
				});
			}
		}
	}

	return shards;
}

function project3D(
	pt: Point3D,
	rx: number,
	ry: number,
	rz: number,
	offset: Point3D,
	fov: number
): { x: number; y: number; scale: number; light: number } {
	const cosX = Math.cos(rx);
	const sinX = Math.sin(rx);
	const cosY = Math.cos(ry);
	const sinY = Math.sin(ry);
	const cosZ = Math.cos(rz);
	const sinZ = Math.sin(rz);

	const x1 = pt.x * cosZ - pt.y * sinZ;
	const y1 = pt.x * sinZ + pt.y * cosZ;
	const z1 = pt.z;

	const x2 = x1 * cosY + z1 * sinY;
	const z2 = -x1 * sinY + z1 * cosY;
	const y2 = y1;

	const y3 = y2 * cosX - z2 * sinX;
	const z3 = y2 * sinX + z2 * cosX;
	const x3 = x2;

	const nx = sinY * cosX;
	const ny = -sinX;
	const nz = cosX * cosY;
	const light = Math.max(0.45, 0.75 + 0.25 * (nz * 0.7 - ny * 0.4 + nx * 0.2));

	const tx = x3 + offset.x;
	const ty = y3 + offset.y;
	const tz = z3 + offset.z;

	const scale = fov / Math.max(150, fov - tz);
	return {
		x: tx * scale,
		y: ty * scale,
		scale,
		light,
	};
}

function easeOutCubic(t: number): number {
	return 1 - Math.pow(1 - t, 3);
}

function easeInOutCubic(t: number): number {
	return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

const ShatterText: React.FC<ShatterTextProps> = ({
	text,
	subtitle,
	className = "",
	subtitleClassName = "",
	cols = 44,
	rows = 9,
	blastRadius = 260,
	hoverInfluenceRadius = 260,
	accentColors = ["#2b2144", "#ED0180", "#A855F7"],
}) => {
	const wrapperRef = useRef<HTMLDivElement>(null);
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);
	const subtitleRef = useRef<HTMLParagraphElement>(null);

	const isHoveredRef = useRef(false);
	const pointerStageRef = useRef<{ x: number; y: number } | null>(null);
	const shardsRef = useRef<Shard[]>([]);
	const snapshotRef = useRef<{
		canvas: HTMLCanvasElement;
		stageWidth: number;
		stageHeight: number;
		padX: number;
		padY: number;
		dpr: number;
	} | null>(null);
	const rafRef = useRef<number | null>(null);
	const lastTimeRef = useRef<number | null>(null);

	const rebuild = useCallback(() => {
		const wrapper = wrapperRef.current;
		const canvas = canvasRef.current;
		const titleEl = titleRef.current;
		if (!wrapper || !canvas || !titleEl) return;

		const prevOpacity = titleEl.style.opacity;
		titleEl.style.opacity = "1";

		const rect = wrapper.getBoundingClientRect();
		const textWidth = Math.max(1, Math.floor(rect.width));
		const textHeight = Math.max(1, Math.floor(rect.height));

		const padX = Math.max(130, Math.round(blastRadius * 1.1));
		const padY = Math.max(95, Math.round(blastRadius * 0.85));
		const stageWidth = textWidth + padX * 2;
		const stageHeight = textHeight + padY * 2;
		const dpr = Math.min(window.devicePixelRatio || 1, 2);

		canvas.style.left = `${-padX}px`;
		canvas.style.top = `${-padY}px`;
		canvas.style.width = `${stageWidth}px`;
		canvas.style.height = `${stageHeight}px`;
		canvas.width = Math.floor(stageWidth * dpr);
		canvas.height = Math.floor(stageHeight * dpr);

		const snapCanvas = buildTextSnapshot(
			stageWidth,
			stageHeight,
			rect.left - padX,
			rect.top - padY,
			titleEl,
			text,
			dpr
		);
		titleEl.style.opacity = prevOpacity;

		const snapCtx = snapCanvas?.getContext("2d");
		if (!snapCanvas || !snapCtx) return;

		snapshotRef.current = {
			canvas: snapCanvas,
			stageWidth,
			stageHeight,
			padX,
			padY,
			dpr,
		};

		shardsRef.current = generateShards(
			textWidth,
			textHeight,
			padX,
			padY,
			cols,
			rows,
			snapCtx,
			dpr,
			blastRadius,
			accentColors
		);
	}, [text, cols, rows, blastRadius, accentColors]);

	const runLoop = useCallback(() => {
		if (rafRef.current !== null) return;
		lastTimeRef.current = performance.now();

		const tick = (now: number) => {
			const prev = lastTimeRef.current ?? now;
			lastTimeRef.current = now;
			const dt = Math.min(0.05, (now - prev) / 1000);

			const canvas = canvasRef.current;
			const titleEl = titleRef.current;
			const snap = snapshotRef.current;
			const shards = shardsRef.current;

			if (!canvas || !snap) {
				rafRef.current = null;
				return;
			}

			const ctx = canvas.getContext("2d");
			if (!ctx) {
				rafRef.current = null;
				return;
			}

			const hovered = isHoveredRef.current;
			const ptr = pointerStageRef.current;
			let anyAnimating = false;

			for (let i = 0; i < shards.length; i++) {
				const s = shards[i];

				let proximity = 0;
				if (hovered && ptr) {
					const dist = Math.hypot(s.cx - ptr.x, s.cy - ptr.y);
					proximity = Math.max(0, 1 - dist / hoverInfluenceRadius);
				}

				if (hovered && proximity > 0.04) {
					// Step 1: Crack appears first where hovered
					s.crack = Math.min(proximity, s.crack + dt * 6.5);

					// Step 2: Once cracked, blast outward in 3D and convert into shapes
					if (s.crack > 0.25) {
						const power = Math.min(1, (s.crack - 0.25) / 0.75);
						s.blast = Math.min(power, s.blast + dt * 4.5);
						s.morph = Math.min(power, s.morph + dt * 4.2);
					}
				} else {
					// Smoothly return to intact text
					s.morph = Math.max(0, s.morph - dt * 4.2);
					s.blast = Math.max(0, s.blast - dt * 4.0);
					if (s.blast < 0.2) {
						s.crack = Math.max(0, s.crack - dt * 4.5);
					}
				}

				if (s.crack > 0.002 || s.blast > 0.002 || s.morph > 0.002) {
					anyAnimating = true;
				}
			}

			if (titleEl) {
				titleEl.style.opacity = anyAnimating ? "0" : "1";
			}

			ctx.setTransform(snap.dpr, 0, 0, snap.dpr, 0, 0);
			ctx.clearRect(0, 0, snap.stageWidth, snap.stageHeight);

			if (!anyAnimating) {
				canvas.style.opacity = "0";
				rafRef.current = null;
				lastTimeRef.current = null;
				return;
			}

			canvas.style.opacity = "1";

			const fov = 800;
			const centerX = snap.stageWidth * 0.5;
			const centerY = snap.stageHeight * 0.5;

			const sorted = shards
				.map((s) => {
					const crackE = easeOutCubic(s.crack);
					const blastE = easeInOutCubic(s.blast);
					const morphE = easeInOutCubic(s.morph);

					const worldX = s.cx - centerX + s.blastX * blastE;
					const worldY = s.cy - centerY + s.blastY * blastE;
					const worldZ = s.blastZ * blastE;

					return { s, crackE, blastE, morphE, worldX, worldY, worldZ };
				})
				.sort((a, b) => a.worldZ - b.worldZ);

			for (let i = 0; i < sorted.length; i++) {
				const { s, crackE, blastE, morphE, worldX, worldY, worldZ } = sorted[i];

				const seamScale = 1 - crackE * 0.14;
				const rx = s.rotX * blastE;
				const ry = s.rotY * blastE;
				const rz = s.rotZ * blastE;

				const textVerts = s.poly.map((pt) =>
					project3D(
						{
							x: (pt.x - s.cx) * seamScale,
							y: (pt.y - s.cy) * seamScale,
							z: 0,
						},
						rx,
						ry,
						rz,
						{ x: worldX, y: worldY, z: worldZ },
						fov
					)
				);

				const shapeVerts = s.shapePoly.map((pt) =>
					project3D(
						{ x: pt.x, y: pt.y, z: 0 },
						rx,
						ry,
						rz,
						{ x: worldX, y: worldY, z: worldZ },
						fov
					)
				);

				const pts = [0, 1, 2].map((idx) => ({
					x:
						centerX +
						textVerts[idx].x * (1 - morphE) +
						shapeVerts[idx].x * morphE,
					y:
						centerY +
						textVerts[idx].y * (1 - morphE) +
						shapeVerts[idx].y * morphE,
				}));

				// Draw text slice (visible when un-morphed or during initial crack)
				if (morphE < 0.99) {
					ctx.save();
					ctx.beginPath();
					ctx.moveTo(pts[0].x, pts[0].y);
					ctx.lineTo(pts[1].x, pts[1].y);
					ctx.lineTo(pts[2].x, pts[2].y);
					ctx.closePath();
					ctx.clip();

					ctx.globalAlpha = 1 - morphE * 0.85;
					ctx.drawImage(
						snap.canvas,
						0,
						0,
						snap.canvas.width,
						snap.canvas.height,
						worldX * 0.3,
						worldY * 0.3,
						snap.stageWidth,
						snap.stageHeight
					);
					ctx.restore();
				}

				// Draw converted 3D polygon facet
				if (morphE > 0.01) {
					ctx.save();
					ctx.beginPath();
					ctx.moveTo(pts[0].x, pts[0].y);
					ctx.lineTo(pts[1].x, pts[1].y);
					ctx.lineTo(pts[2].x, pts[2].y);
					ctx.closePath();

					const shade = Math.round(210 * textVerts[0].light);
					ctx.globalAlpha = Math.min(1, morphE) * textVerts[0].light;
					ctx.fillStyle =
						s.accentColor ?? `rgb(${shade}, ${shade}, ${Math.min(255, shade + 12)})`;
					ctx.fill();
					ctx.restore();
				}
			}

			rafRef.current = requestAnimationFrame(tick);
		};

		rafRef.current = requestAnimationFrame(tick);
	}, [hoverInfluenceRadius]);

	useEffect(() => {
		rebuild();
		const onResize = () => rebuild();
		window.addEventListener("resize", onResize);
		document.fonts?.ready?.then(() => rebuild());

		return () => {
			window.removeEventListener("resize", onResize);
			if (rafRef.current !== null) {
				cancelAnimationFrame(rafRef.current);
				rafRef.current = null;
			}
		};
	}, [rebuild]);

	const updatePointer = (e: React.MouseEvent<HTMLDivElement>) => {
		const wrapper = wrapperRef.current;
		const snap = snapshotRef.current;
		if (!wrapper || !snap) return;
		const rect = wrapper.getBoundingClientRect();
		pointerStageRef.current = {
			x: e.clientX - rect.left + snap.padX,
			y: e.clientY - rect.top + snap.padY,
		};
	};

	const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
		rebuild();
		isHoveredRef.current = true;
		updatePointer(e);
		runLoop();
	};

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!isHoveredRef.current) return;
		updatePointer(e);
		runLoop();
	};

	const handleMouseLeave = () => {
		isHoveredRef.current = false;
		pointerStageRef.current = null;
		runLoop();
	};

	return (
		<div
			ref={wrapperRef}
			onMouseEnter={handleMouseEnter}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			className="relative select-none"
		>
			<canvas
				ref={canvasRef}
				aria-hidden="true"
				className="pointer-events-none absolute z-20 opacity-0"
			/>

			<div className="relative z-10">
				<h2 ref={titleRef} className={className}>
					{text}
				</h2>

				{typeof subtitle === "string" && (
					<div className="mt-[32px]">
						<p ref={subtitleRef} className={subtitleClassName}>
							{subtitle}
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default ShatterText;