"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

interface DisintegrateTextProps {
	text: string;
	subtitle?: string;
	triggerKey: string | number;
	className?: string;
	subtitleClassName?: string;
	pixelSize?: number;
	spread?: number;
	onTransitionStart?: () => void;
	onTransitionEnd?: () => void;
}

interface TextMetrics {
	wrapperWidth: number;
	wrapperHeight: number;
	containerHeight: number;
	titleRect: { left: number; top: number; width: number };
	subRect: { left: number; top: number; width: number } | null;
}

interface Particle {
	x: number;
	y: number;
	ox: number;
	oy: number;
	bx: number;
	by: number;
	tx: number;
	ty: number;
	size: number;
	color: string;
	angle: number;
	spin: number;
	alpha: number;
	delay: number;
	isIncomingOnly?: boolean;
	isOutgoingOnly?: boolean;
}

function wrapCanvasText(
	ctx: CanvasRenderingContext2D,
	rawText: string,
	maxWidth: number
): string[] {
	const words = rawText.trim().split(/\s+/).filter(Boolean);
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
	rect: { left: number; top: number; width: number },
	rawText: string
) {
	const style = window.getComputedStyle(el);

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
	const availableWidth = Math.max(10, rect.width - paddingLeft - paddingRight);

	const align = style.textAlign;
	let drawX = rect.left + paddingLeft + availableWidth / 2;
	ctx.textAlign = "center";

	if (align === "left" || align === "start") {
		ctx.textAlign = "left";
		drawX = rect.left + paddingLeft;
	} else if (align === "right" || align === "end") {
		ctx.textAlign = "right";
		drawX = rect.left + rect.width - paddingRight;
	}

	const lines = wrapCanvasText(ctx, transformedText, availableWidth + 1);
	lines.forEach((line, idx) => {
		ctx.fillText(line, drawX, rect.top + idx * lineHeight);
	});
}

function sampleTextPixels(
	metrics: TextMetrics,
	titleEl: HTMLElement,
	subEl: HTMLElement | null,
	text: string,
	subtitle: string | undefined,
	pixelSize: number
): { x: number; y: number; color: string; size: number }[] {
	const width = Math.max(1, Math.floor(metrics.wrapperWidth));
	const height = Math.max(1, Math.floor(metrics.wrapperHeight));

	const offCanvas = document.createElement("canvas");
	offCanvas.width = width;
	offCanvas.height = height;
	const ctx = offCanvas.getContext("2d");
	if (!ctx) return [];

	drawElementTextToCanvas(ctx, titleEl, metrics.titleRect, text);
	if (subtitle && subEl && metrics.subRect) {
		drawElementTextToCanvas(ctx, subEl, metrics.subRect, subtitle);
	}

	const imgData = ctx.getImageData(0, 0, width, height).data;
	const points: { x: number; y: number; color: string; size: number }[] = [];

	for (let y = 0; y < height; y += pixelSize) {
		for (let x = 0; x < width; x += pixelSize) {
			const idx = (y * width + x) * 4;
			const a = imgData[idx + 3];
			if (a > 40) {
				points.push({
					x,
					y,
					color: `rgba(${imgData[idx]},${imgData[idx + 1]},${imgData[idx + 2]},${(a / 255).toFixed(2)})`,
					size: pixelSize,
				});
			}
		}
	}

	return points;
}

function shuffleArray<T>(arr: T[]): T[] {
	const copy = [...arr];
	for (let i = copy.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[copy[i], copy[j]] = [copy[j], copy[i]];
	}
	return copy;
}

function measureMetrics(
	wrapperEl: HTMLElement,
	containerEl: HTMLElement,
	titleEl: HTMLElement,
	subEl: HTMLElement | null
): TextMetrics {
	const wrapperRect = wrapperEl.getBoundingClientRect();
	const containerRect = containerEl.getBoundingClientRect();
	const titleRect = titleEl.getBoundingClientRect();
	const subRect = subEl ? subEl.getBoundingClientRect() : null;

	return {
		wrapperWidth: wrapperRect.width,
		wrapperHeight: wrapperRect.height,
		containerHeight: containerRect.height,
		titleRect: {
			left: titleRect.left - wrapperRect.left,
			top: titleRect.top - wrapperRect.top,
			width: titleRect.width,
		},
		subRect: subRect
			? {
					left: subRect.left - wrapperRect.left,
					top: subRect.top - wrapperRect.top,
					width: subRect.width,
			  }
			: null,
	};
}

const DisintegrateText: React.FC<DisintegrateTextProps> = ({
	text,
	subtitle,
	triggerKey,
	className = "",
	subtitleClassName = "",
	pixelSize = 3,
	spread = 1.4,
	onTransitionStart,
	onTransitionEnd,
}) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const titleElRef = useRef<HTMLHeadingElement>(null);
	const subtitleElRef = useRef<HTMLParagraphElement>(null);
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	const isFirstRenderRef = useRef(true);
	const prevContentRef = useRef({ text, subtitle });
	const prevMetricsRef = useRef<TextMetrics | null>(null);
	const tlRef = useRef<gsap.core.Timeline | null>(null);
	const onStartRef = useRef(onTransitionStart);
	const onEndRef = useRef(onTransitionEnd);

	useEffect(() => {
		onStartRef.current = onTransitionStart;
		onEndRef.current = onTransitionEnd;
	}, [onTransitionStart, onTransitionEnd]);

	useLayoutEffect(() => {
		const container = containerRef.current;
		const titleEl = titleElRef.current;
		const subEl = subtitleElRef.current;
		if (!container || !titleEl) return;

		const wrapperEl =
			(container.closest(".hm-hero-text-wrapper") as HTMLElement) || container;

		// Clear previous minHeight briefly to measure natural incoming layout accurately
		container.style.minHeight = "";
		const incomingMetrics = measureMetrics(wrapperEl, container, titleEl, subEl);

		if (isFirstRenderRef.current) {
			isFirstRenderRef.current = false;
			prevContentRef.current = { text, subtitle };
			prevMetricsRef.current = incomingMetrics;
			return;
		}

		const outgoingText = prevContentRef.current.text;
		const outgoingSubtitle = prevContentRef.current.subtitle;
		const outgoingMetrics = prevMetricsRef.current || incomingMetrics;

		prevContentRef.current = { text, subtitle };
		prevMetricsRef.current = incomingMetrics;

		if (tlRef.current) {
			tlRef.current.eventCallback("onComplete", null);
			tlRef.current.kill();
			tlRef.current = null;
		}

		if (incomingMetrics.wrapperWidth < 2 || incomingMetrics.wrapperHeight < 2) {
			gsap.set([titleEl, subEl].filter(Boolean) as HTMLElement[], { opacity: 1 });
			onEndRef.current?.();
			return;
		}

		// Lock height to the taller of outgoing/incoming so layout never jumps mid-animation
		const lockedHeight = Math.max(
			outgoingMetrics.containerHeight,
			incomingMetrics.containerHeight
		);
		container.style.minHeight = `${lockedHeight}px`;

		const dpr = Math.min(window.devicePixelRatio || 1, 2);
		const W = Math.max(
			1,
			Math.floor(Math.max(outgoingMetrics.wrapperWidth, incomingMetrics.wrapperWidth))
		);
		const H = Math.max(
			1,
			Math.floor(Math.max(outgoingMetrics.wrapperHeight, incomingMetrics.wrapperHeight))
		);

		const extraX = Math.max(0, Math.round((W * (spread - 1)) / 2));
		const extraY = Math.max(0, Math.round((H * (spread - 1)) / 2));
		const canvasW = W + extraX * 2;
		const canvasH = H + extraY * 2;

		let canvas = canvasRef.current;
		if (!canvas || !canvas.isConnected) {
			canvas = document.createElement("canvas");
			canvas.style.position = "absolute";
			canvas.style.pointerEvents = "none";
			canvas.style.zIndex = "120";
			wrapperEl.appendChild(canvas);
			canvasRef.current = canvas;
		}

		canvas.style.left = `${-extraX}px`;
		canvas.style.top = `${-extraY}px`;
		canvas.style.width = `${canvasW}px`;
		canvas.style.height = `${canvasH}px`;
		canvas.width = canvasW * dpr;
		canvas.height = canvasH * dpr;

		const ctx = canvas.getContext("2d");
		const targets = [titleEl, subEl].filter(Boolean) as HTMLElement[];

		if (!ctx) {
			container.style.minHeight = "";
			gsap.set(targets, { opacity: 1 });
			onEndRef.current?.();
			return;
		}

		const outPixels = sampleTextPixels(
			outgoingMetrics,
			titleEl,
			subEl,
			outgoingText,
			outgoingSubtitle,
			pixelSize
		);
		const inPixels = shuffleArray(
			sampleTextPixels(incomingMetrics, titleEl, subEl, text, subtitle, pixelSize)
		);

		if (outPixels.length === 0 && inPixels.length === 0) {
			container.style.minHeight = "";
			gsap.set(targets, { opacity: 1 });
			onEndRef.current?.();
			return;
		}

		gsap.set(targets, { opacity: 0 });
		onStartRef.current?.();

		const maxCount = Math.max(outPixels.length, inPixels.length);
		const particles: Particle[] = [];

		for (let i = 0; i < maxCount; i++) {
			const hasOut = i < outPixels.length;
			const hasIn = i < inPixels.length;

			const outPt = hasOut ? outPixels[i] : inPixels[i % inPixels.length];
			const inPt = hasIn ? inPixels[i] : outPixels[i % outPixels.length];

			const bx = -extraX + Math.random() * Math.max(1, canvasW - pixelSize);
			const by = -extraY + Math.random() * Math.max(1, canvasH - pixelSize);

			particles.push({
				x: outPt.x,
				y: outPt.y,
				ox: outPt.x,
				oy: outPt.y,
				bx,
				by,
				tx: inPt.x,
				ty: inPt.y,
				size: pixelSize * (0.85 + Math.random() * 0.65),
				color: hasOut ? outPt.color : inPt.color,
				angle: 0,
				spin: (Math.random() - 0.5) * Math.PI * 4,
				alpha: hasOut ? 1 : 0,
				delay: Math.random() * 0.18,
				isIncomingOnly: !hasOut && hasIn,
				isOutgoingOnly: hasOut && !hasIn,
			});
		}

		const state = { blast: 0, merge: 0 };

		const renderParticles = () => {
			if (!canvas) return;
			ctx.save();
			ctx.scale(dpr, dpr);
			ctx.clearRect(0, 0, canvasW, canvasH);
			ctx.translate(extraX, extraY);

			for (let i = 0; i < particles.length; i++) {
				const p = particles[i];

				const bProg = Math.min(
					1,
					Math.max(0, (state.blast - p.delay * 0.4) / (1 - p.delay * 0.4))
				);
				const mProg = Math.min(
					1,
					Math.max(0, (state.merge - p.delay * 0.5) / (1 - p.delay * 0.5))
				);

				if (state.merge === 0) {
					p.x = p.ox + (p.bx - p.ox) * bProg;
					p.y = p.oy + (p.by - p.oy) * bProg;
					p.angle = p.spin * bProg;
					p.alpha = p.isIncomingOnly ? bProg * 0.85 : 1;
				} else {
					p.x = p.bx + (p.tx - p.bx) * mProg;
					p.y = p.by + (p.ty - p.by) * mProg;
					p.angle = p.spin * (1 - mProg);
					p.alpha = p.isOutgoingOnly ? 1 - mProg : 1;
				}

				if (p.alpha <= 0.01) continue;

				const drawX = mProg > 0.85 ? Math.round(p.x) : p.x;
				const drawY = mProg > 0.85 ? Math.round(p.y) : p.y;

				ctx.save();
				ctx.globalAlpha = p.alpha;
				ctx.fillStyle = p.color;

				if (Math.abs(p.angle) < 0.05) {
					const currentSize = state.merge > 0.7 ? pixelSize : p.size;
					ctx.fillRect(drawX, drawY, currentSize, currentSize);
				} else {
					ctx.translate(drawX + p.size / 2, drawY + p.size / 2);
					ctx.rotate(p.angle);
					ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
				}
				ctx.restore();
			}

			ctx.restore();
		};

		let cancelled = false;

		const resetVisuals = () => {
			if (canvas) {
				ctx.clearRect(0, 0, canvas.width, canvas.height);
			}
			container.style.minHeight = "";
			gsap.set(targets, { opacity: 1 });
			// Refresh cached metrics post-reset
			prevMetricsRef.current = measureMetrics(wrapperEl, container, titleEl, subEl);
		};

		const tl = gsap.timeline({
			onUpdate: renderParticles,
			onComplete: () => {
				resetVisuals();
				if (!cancelled) {
					onEndRef.current?.();
				}
			},
		});
		tlRef.current = tl;

		tl.to(state, { blast: 1, duration: 0.85, ease: "power3.out" });
		tl.to(state, { merge: 1, duration: 0.85, ease: "power3.inOut" }, "-=0.2");

		return () => {
			cancelled = true;
			tl.kill();
			resetVisuals();
		};
	}, [triggerKey, text, subtitle, pixelSize, spread]);

	useEffect(() => {
		return () => {
			if (canvasRef.current && canvasRef.current.parentNode) {
				canvasRef.current.parentNode.removeChild(canvasRef.current);
				canvasRef.current = null;
			}
		};
	}, []);

	return (
		<div ref={containerRef} className="relative">
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

export default DisintegrateText;