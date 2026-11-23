"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface DisintegrateTextProps {
    text: string;
    subtitle?: string;
    triggerKey: string | number;
    className?: string;
    subtitleClassName?: string;
    sliceCount?: number;
    repeatCount?: number;
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
    containerRect: DOMRect,
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

    // Match CSS letter-spacing if supported by browser
    if ("letterSpacing" in ctx && style.letterSpacing !== "normal") {
        (ctx as CanvasRenderingContext2D & { letterSpacing: string }).letterSpacing =
            style.letterSpacing;
    }

    const transformedText = applyTextTransform(rawText, style.textTransform);

    // Use the ACTUAL rendered inner width of the DOM element instead of guessing
    const paddingLeft = parseFloat(style.paddingLeft) || 0;
    const paddingRight = parseFloat(style.paddingRight) || 0;
    const availableWidth = Math.max(10, elRect.width - paddingLeft - paddingRight);

    // Match text alignment
    const align = style.textAlign;
    let drawX = elRect.left - containerRect.left + paddingLeft + availableWidth / 2;
    ctx.textAlign = "center";

    if (align === "left" || align === "start") {
        ctx.textAlign = "left";
        drawX = elRect.left - containerRect.left + paddingLeft;
    } else if (align === "right" || align === "end") {
        ctx.textAlign = "right";
        drawX = elRect.right - containerRect.left - paddingRight;
    }

    // Offset slightly to account for half-leading in CSS line-height
    const halfLeading = Math.max(0, (lineHeight - fontSize) / 2);
    const drawTop = elRect.top - containerRect.top + halfLeading;

    const lines = wrapCanvasText(ctx, transformedText, availableWidth + 1);
    lines.forEach((line, idx) => {
        ctx.fillText(line, drawX, drawTop + idx * lineHeight);
    });
}

function buildPixelSliceCanvases(
    containerRect: DOMRect,
    titleEl: HTMLElement,
    subEl: HTMLElement | null,
    targetText: string,
    targetSubtitle: string | undefined,
    sliceCount: number,
    repeatCount: number
): { canvases: HTMLCanvasElement[]; pxW: number; pxH: number } | null {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.max(1, Math.floor(containerRect.width));
    const height = Math.max(1, Math.floor(containerRect.height));

    const sourceCanvas = document.createElement("canvas");
    sourceCanvas.width = Math.max(1, Math.floor(width * dpr));
    sourceCanvas.height = Math.max(1, Math.floor(height * dpr));

    const srcCtx = sourceCanvas.getContext("2d");
    if (!srcCtx) return null;

    srcCtx.scale(dpr, dpr);

    drawElementTextToCanvas(srcCtx, titleEl, containerRect, targetText);

    if (targetSubtitle && subEl) {
        drawElementTextToCanvas(srcCtx, subEl, containerRect, targetSubtitle);
    }

    const pxW = sourceCanvas.width;
    const pxH = sourceCanvas.height;
    const imageData = srcCtx.getImageData(0, 0, pxW, pxH);
    const dataList: ImageData[] = [];

    for (let i = 0; i < sliceCount; i++) {
        dataList.push(srcCtx.createImageData(pxW, pxH));
    }

    for (let x = 0; x < pxW; x++) {
        for (let y = 0; y < pxH; y++) {
            const alphaIdx = (x + y * pxW) * 4 + 3;
            if (imageData.data[alphaIdx] < 16) continue;

            for (let l = 0; l < repeatCount; l++) {
                const bucket = Math.floor(
                    (sliceCount * (Math.random() + (2 * x) / pxW)) / 3
                );
                const clampedIdx = Math.min(sliceCount - 1, Math.max(0, bucket));
                const base = (x + y * pxW) * 4;
                dataList[clampedIdx].data[base] = imageData.data[base];
                dataList[clampedIdx].data[base + 1] = imageData.data[base + 1];
                dataList[clampedIdx].data[base + 2] = imageData.data[base + 2];
                dataList[clampedIdx].data[base + 3] = imageData.data[base + 3];
            }
        }
    }

    const canvases: HTMLCanvasElement[] = dataList.map((sliceData) => {
        const c = document.createElement("canvas");
        c.width = pxW;
        c.height = pxH;
        c.style.position = "absolute";
        c.style.inset = "0";
        c.style.width = "100%";
        c.style.height = "100%";
        c.style.pointerEvents = "none";
        c.style.willChange = "transform, opacity";
        c.getContext("2d")?.putImageData(sliceData, 0, 0);
        return c;
    });

    return { canvases, pxW, pxH };
}

const DisintegrateText: React.FC<DisintegrateTextProps> = ({
    text,
    subtitle,
    triggerKey,
    className = "",
    subtitleClassName = "",
    sliceCount = 100,
    repeatCount = 2,
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleElRef = useRef<HTMLHeadingElement>(null);
    const subtitleElRef = useRef<HTMLParagraphElement>(null);
    const slicesLayerRef = useRef<HTMLDivElement>(null);

    const isFirstRenderRef = useRef(true);
    const prevContentRef = useRef({ text, subtitle });
    const tlRef = useRef<gsap.core.Timeline | null>(null);

    useEffect(() => {
        const container = containerRef.current;
        const slicesLayer = slicesLayerRef.current;
        const titleEl = titleElRef.current;
        const subEl = subtitleElRef.current;

        if (!container || !slicesLayer || !titleEl) return;

        if (isFirstRenderRef.current) {
            isFirstRenderRef.current = false;
            prevContentRef.current = { text, subtitle };
            return;
        }

        const outgoingText = prevContentRef.current.text;
        const outgoingSubtitle = prevContentRef.current.subtitle;
        prevContentRef.current = { text, subtitle };

        tlRef.current?.kill();
        slicesLayer.innerHTML = "";

        const rect = container.getBoundingClientRect();

        // Lock container min-height during animation so wrapping changes don't cause layout jumps
        const prevMinHeight = container.style.minHeight;
        container.style.minHeight = `${rect.height}px`;

        const outBuilt = buildPixelSliceCanvases(
            rect,
            titleEl,
            subEl,
            outgoingText,
            outgoingSubtitle,
            sliceCount,
            repeatCount
        );

        const inBuilt = buildPixelSliceCanvases(
            rect,
            titleEl,
            subEl,
            text,
            subtitle,
            sliceCount,
            repeatCount
        );

        if (!outBuilt || !inBuilt) {
            container.style.minHeight = prevMinHeight;
            return;
        }

        const targets = [titleEl, subEl].filter(Boolean) as HTMLElement[];
        gsap.set(targets, { opacity: 0 });

        outBuilt.canvases.forEach((c) => slicesLayer.appendChild(c));
        inBuilt.canvases.forEach((c) => {
            const angle = (Math.random() - 0.5) * 2 * Math.PI;
            const rot = 28 * (Math.random() - 0.5);
            const scatter = 34 + Math.random() * 24;
            gsap.set(c, {
                x: scatter * Math.sin(angle),
                y: scatter * Math.cos(angle),
                rotation: rot,
                opacity: 0,
            });
            slicesLayer.appendChild(c);
        });

        const tl = gsap.timeline({
            onComplete: () => {
                slicesLayer.innerHTML = "";
                container.style.minHeight = prevMinHeight;
                gsap.set(targets, { opacity: 1, clearProps: "transform" });
            },
        });
        tlRef.current = tl;

        // 1. Outgoing text breaks into pixels and scatters
        outBuilt.canvases.forEach((sliceCanvas, i) => {
            const angle = (Math.random() - 0.5) * 2 * Math.PI;
            const rot = 30 * (Math.random() - 0.5);
            const drift = 36 + Math.random() * 24;

            tl.to(
                sliceCanvas,
                {
                    x: drift * Math.sin(angle),
                    y: drift * Math.cos(angle),
                    rotation: rot,
                    opacity: 0,
                    duration: 1,
                    ease: "power2.out",
                },
                (i / outBuilt.canvases.length) * 0.25
            );
        });

        // 2. Incoming text merges from pixels into position
        inBuilt.canvases.forEach((sliceCanvas, i) => {
            tl.to(
                sliceCanvas,
                {
                    x: 0,
                    y: 0,
                    rotation: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                },
                0.22 + (i / inBuilt.canvases.length) * 0.28
            );
        });

        return () => {
            tl.kill();
            slicesLayer.innerHTML = "";
            container.style.minHeight = prevMinHeight;
        };
    }, [triggerKey, text, subtitle, sliceCount, repeatCount]);

    return (
        <div ref={containerRef} className="relative">
            <div
                ref={slicesLayerRef}
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-20 overflow-visible"
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

export default DisintegrateText;