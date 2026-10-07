'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

interface PixelImageCanvasProps { 
    src: string; 
    alt: string; 
    pixelSize?: number; 
}

export default function PixelImageCanvas({ src, alt, pixelSize }: PixelImageCanvasProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [imageLoaded, setImageLoaded] = useState(false);
    const imgRef = useRef<HTMLImageElement | null>(null);

    // 1. Preload Image safely
    useGSAP(() => {
        const img = new window.Image();
        img.src = src;
        img.onload = () => {
            imgRef.current = img;
            setImageLoaded(true);
        };
    }, [src]);

    // 2. Run GSAP Animation & Canvas Drawing using useGSAP
    useGSAP(() => {
        if (!imageLoaded || !imgRef.current || !containerRef.current || !canvasRef.current) return;

        const container = containerRef.current;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        const img = imgRef.current;

        // Read dimensions ONCE before drawing (Prevents forced reflow inside frame loops)
        const width = container.clientWidth;
        const height = container.clientHeight;
        if (width === 0 || height === 0) return;

        // Determine dynamic pixel size without window checks in props
        const effectivePixelSize = pixelSize || (window.innerWidth > 1024 ? 26 : 18);

        const dpr = window.devicePixelRatio || 1;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);

        const cols = Math.ceil(width / effectivePixelSize);
        const rows = Math.ceil(height / effectivePixelSize);
        const tileW = width / cols;
        const tileH = height / rows;

        // Generate tiles
        const tiles: Array<{ col: number; row: number; scale: number; opacity: number }> = [];
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                tiles.push({ col: c, row: r, scale: 0, opacity: 0 });
            }
        }

        // Highly optimized Draw Loop (Minimized save/restore state overhead)
        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            for (let i = 0; i < tiles.length; i++) {
                const tile = tiles[i];
                if (tile.opacity <= 0 || tile.scale <= 0) continue;

                const destX = tile.col * tileW;
                const destY = tile.row * tileH;

                const srcX = (tile.col / cols) * img.naturalWidth;
                const srcY = (tile.row / rows) * img.naturalHeight;
                const srcW = img.naturalWidth / cols;
                const srcH = img.naturalHeight / rows;

                const centerX = destX + tileW / 2;
                const centerY = destY + tileH / 2;

                ctx.save();
                ctx.globalAlpha = tile.opacity;
                ctx.translate(centerX, centerY);
                ctx.scale(tile.scale, tile.scale);
                ctx.translate(-centerX, -centerY);
                ctx.drawImage(img, srcX, srcY, srcW, srcH, destX - 0.25, destY - 0.25, tileW + 0.5, tileH + 0.5);
                ctx.restore();
            }
        };

        // GSAP Stagger Animation scoped safely
        gsap.to(tiles, {
            scale: 1,
            opacity: 1,
            duration: window.innerWidth > 1024 ? 0.35 : 0.2,
            ease: 'back.out(4)',
            stagger: { amount: 1.2, from: 'random' },
            onUpdate: draw,
            scrollTrigger: {
                trigger: container,
                start: window.innerWidth > 1024 ? 'top 70%' : 'top 60%',
                once: true,
            },
        });

    }, { dependencies: [imageLoaded], scope: containerRef });

    return (
        <div ref={containerRef} className="pixel-canvas-container" style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
            <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} aria-label={alt} />
        </div>
    );
}