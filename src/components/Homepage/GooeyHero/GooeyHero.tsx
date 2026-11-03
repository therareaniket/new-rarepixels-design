"use client";

import React, { useEffect, useRef, useState } from "react";
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
    const svgRef = useRef<SVGSVGElement>(null);
    const containerRef = useRef<SVGGElement>(null);

    // Detect iOS / Safari safely on initial load without triggering cascading render warnings
    const [isIOS] = useState(() => {
        if (typeof window === "undefined") return false;
        const ua = window.navigator.userAgent;
        return /iPad|iPhone|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    });

    useEffect(() => {
        const hero = heroRef.current;
        if (!hero) return;

        const ctx = gsap.context(() => {
            if (isIOS) {
                // --- IOS / SAFARI BULLETPROOF FALLBACK ANIMATION ---
                gsap.to(".ios-reveal-layer", {
                    clipPath: "circle(150% at 50% 50%)",
                    ease: "none",
                    scrollTrigger: {
                        trigger: hero,
                        start: "top top",
                        end: "+=2000",
                        pin: true,
                        pinSpacing: true,
                        scrub: 0.05,
                        invalidateOnRefresh: true,
                    },
                });
            } else {
                // --- DESKTOP / ANDROID GOOEY SVG FILTER ANIMATION ---
                const svg = svgRef.current;
                const container = containerRef.current;
                if (!svg || !container) return;

                const NS = "http://www.w3.org/2000/svg";
                let circles: SVGCircleElement[] = [];

                const getZigZagPosition = (progress: number) => {
                    const w = window.innerWidth;
                    const h = window.innerHeight;
                    const wave = Math.abs(((progress * CONFIG.zigzagFrequency) % 2) - 1);
                    const offset = (wave - 0.5) * 2 * CONFIG.zigzagAmplitude;
                    return { x: progress * w + offset, y: progress * h - offset };
                };

                const buildCircles = () => {
                    const w = window.innerWidth;
                    const h = window.innerHeight;
                    svg.setAttribute("width", `${w}`);
                    svg.setAttribute("height", `${h}`);
                    svg.setAttribute("viewBox", `0 0 ${w} ${h}`);

                    container.replaceChildren();
                    circles = [];

                    const baseRect = document.createElementNS(NS, "rect");
                    baseRect.setAttribute("width", "100%");
                    baseRect.setAttribute("height", "100%");
                    baseRect.setAttribute("fill", "transparent");
                    container.appendChild(baseRect);

                    for (let i = 0; i < CONFIG.totalPoints; i++) {
                        const { x, y } = getZigZagPosition(i / (CONFIG.totalPoints - 1));
                        const c = document.createElementNS(NS, "circle");
                        c.setAttribute("cx", String(x));
                        c.setAttribute("cy", String(y));
                        c.setAttribute("r", "0");
                        c.setAttribute("fill", "#FFFFFF");
                        container.appendChild(c);
                        circles.push(c);
                    }
                };

                buildCircles();

                const render = (progress: number) => {
                    circles.forEach((circle, index) => {
                        const p = index / (CONFIG.totalPoints - 1);
                        const r = progress >= p ? Math.min(1, (progress - p) * 4 + 0.3) * CONFIG.maxRadius : 0;
                        circle.setAttribute("r", String(r));
                    });
                };

                ScrollTrigger.create({
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
                    onUpdate: (self) => render(self.progress),
                    onRefresh: (self) => {
                        buildCircles();
                        render(self.progress);
                    },
                });
            }
        }, wrapperRef);

        return () => {
            ctx.revert();
        };
    }, [isIOS]);

    return (
        <div ref={wrapperRef} className="w-full">
            <section ref={heroRef} className="relative w-full h-screen overflow-hidden select-none">
                {/* Foreground Layer */}
                <div className="absolute inset-0 z-10 flex flex-col justify-center items-center p-8 bg-[#2a2a2a] text-[#fed2ed]">
                    <h1 className="text-[clamp(5rem,22.5vw,20rem)] text-center font-bold uppercase leading-[1] font-casko">
                        Scroll Down
                    </h1>
                </div>

                {/* Revealed Layer */}
                <div
                    className="ios-reveal-layer absolute inset-0 z-20 flex flex-col justify-center items-center p-8 bg-[#cbc4c2] text-[#232332]"
                    style={
                        isIOS
                            ? {
                                  clipPath: "circle(0% at 50% 50%)",
                                  WebkitClipPath: "circle(0% at 50% 50%)",
                              }
                            : {
                                  maskImage: "url(#smudge-mask)",
                                  WebkitMaskImage: "url(#smudge-mask)",
                                  maskPosition: "center",
                                  WebkitMaskPosition: "center",
                                  maskRepeat: "no-repeat",
                                  WebkitMaskRepeat: "no-repeat",
                                  maskSize: "cover",
                                  WebkitMaskSize: "cover",
                              }
                    }
                >
                    <h2 className="h3 text-[clamp(3rem,5vw,6rem)] font-bold uppercase leading-[0.9] text-center max-w-4xl font-casko">
                        THE THINGS WORTH FINDING ARE NEVER ON THE SURFACE. THEY LIVE IN THE PARTS YOU ALMOST SCROLLED PAST.
                    </h2>
                </div>

                {/* SVG Filter rendered only on non-iOS devices */}
                {!isIOS && (
                    <svg ref={svgRef} className="absolute top-0 left-0 pointer-events-none z-30" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <filter id="smudge-goo" x="-50%" y="-50%" width="200%" height="200%" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="25" result="blur" />
                                <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 60 -14" result="goo" />
                                <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                            </filter>
                            <mask id="smudge-mask" maskUnits="userSpaceOnUse">
                                <g ref={containerRef} filter="url(#smudge-goo)" />
                            </mask>
                        </defs>
                    </svg>
                )}
            </section>
        </div>
    );
}