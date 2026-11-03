"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CONFIG = {
    zigzagFrequency: 8,
    zigzagAmplitude: 160,
    totalPoints: 60,
    maxRadius: 280,
};

export default function GooeyHero() {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const hero = heroRef.current;
        const canvas = canvasRef.current;
        if (!hero || !canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;

        const updateCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        updateCanvasSize();

        const getZigZagPosition = (progress: number) => {
            const w = window.innerWidth;
            const h = window.innerHeight;
            const wave = Math.abs(((progress * CONFIG.zigzagFrequency) % 2) - 1);
            const offset = (wave - 0.5) * 2 * CONFIG.zigzagAmplitude;
            return { x: progress * w + offset, y: progress * h - offset };
        };

        const renderCanvas = (progress: number) => {
            const w = canvas.width;
            const h = canvas.height;

            ctx.clearRect(0, 0, w, h);
            ctx.fillStyle = "#FFFFFF";

            for (let i = 0; i < CONFIG.totalPoints; i++) {
                const p = i / (CONFIG.totalPoints - 1);
                const r = progress >= p ? Math.min(1, (progress - p) * 4 + 0.3) * CONFIG.maxRadius : 0;
                
                if (r > 0) {
                    const pos = getZigZagPosition(p);
                    ctx.beginPath();
                    ctx.arc(pos.x, pos.y, r, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
        };

        // Render initial state
        renderCanvas(0);

        const st = ScrollTrigger.create({
            trigger: hero,
            start: "top top",
            end: "+=2000",
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            scrub: 0.05,
            refreshPriority: 1,
            invalidateOnRefresh: true,
            fastScrollEnd: true,
            onUpdate: (self) => {
                if (animationFrameId) cancelAnimationFrame(animationFrameId);
                animationFrameId = requestAnimationFrame(() => {
                    renderCanvas(self.progress);
                });
            },
            onRefresh: (self) => {
                updateCanvasSize();
                renderCanvas(self.progress);
            },
        });

        return () => {
            st.kill();
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div ref={wrapperRef} className="w-full">
            <section ref={heroRef} className="relative w-full h-screen overflow-hidden select-none">
                {/* Foreground Layer */}
                <div className="absolute inset-0 z-10 flex flex-col justify-center items-center p-8 bg-[#2a2a2a] text-[#fed2ed]">
                    <h1 className="text-[clamp(5rem,22.5vw,20rem)] text-center font-bold uppercase leading-[1] font-casko">
                        Scroll Down
                    </h1>
                </div>

                {/* Revealed Layer Masked directly by the Gooey SVG Filter */}
                <div 
                    className="absolute inset-0 z-20 flex flex-col justify-center items-center p-8 bg-[#cbc4c2] text-[#232332]"
                    style={{ 
                        mask: "url(#canvas-mask)",
                        WebkitMask: "url(#canvas-mask)"
                    }}
                >
                    <h2 className="h3 text-[clamp(3rem,5vw,6rem)] font-bold uppercase leading-[0.9] text-center max-w-4xl font-casko">
                        THE THINGS WORTH FINDING ARE NEVER ON THE SURFACE. THEY LIVE IN THE PARTS YOU ALMOST SCROLLED PAST.
                    </h2>
                </div>

                {/* Hidden canvas rendering engine & SVG filter definitions */}
                <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
                    <canvas 
                        ref={canvasRef} 
                        className="absolute inset-0 w-full h-full block"
                        style={{ filter: "url(#smudge-goo)" }}
                    />
                </div>

                {/* SVG Gooey Filter & Mask Setup */}
                <svg className="absolute w-0 h-0 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <filter id="smudge-goo" x="-50%" y="-50%" width="200%" height="200%" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="25" result="blur" />
                            <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 60 -14" result="goo" />
                            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                        </filter>
                        {/* Mask definition using a white background fill that punches holes using the canvas filter stream */}
                        <mask id="canvas-mask" maskUnits="userSpaceOnUse">
                            <rect width="100%" height="100%" fill="black" />
                        </mask>
                    </defs>
                </svg>
            </section>
        </div>
    );
}