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
	const svgRef = useRef<SVGSVGElement>(null);
	const containerRef = useRef<SVGGElement>(null);

	useEffect(() => {
		const hero = heroRef.current;
		const svg = svgRef.current;
		const container = containerRef.current;
		if (!hero || !svg || !container) return;

		const NS = "http://www.w3.org/2000/svg";
		let circles: SVGCircleElement[] = [];

		const getZigZagPosition = (progress: number) => {
			const { innerWidth: w, innerHeight: h } = window;
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

		const ctx = gsap.context(() => {
			buildCircles();

			const render = (progress: number) => {
				// Use requestAnimationFrame to lock animations to the display refresh rate smoothly
				requestAnimationFrame(() => {
					circles.forEach((circle, index) => {
						const p = index / (CONFIG.totalPoints - 1);
						const r = progress >= p ? Math.min(1, (progress - p) * 4 + 0.3) * CONFIG.maxRadius : 0;
						circle.setAttribute("r", String(r));
					});
				});
			};

			ScrollTrigger.create({
				trigger: hero,
				start: "top top",
				end: "+=2000",
				pin: true,
				pinSpacing: true, // Cleanly manages spacing so unpinning doesn't jump
				anticipatePin: 1,
				scrub: 0.1, // Slightly tightened scrub response for instant, lag-free following
				refreshPriority: 1,   
				invalidateOnRefresh: true,
				onUpdate: (self) => render(self.progress),
				onRefresh: () => { buildCircles(); },
			});
		}, wrapperRef);

		return () => { ctx.revert(); };
	}, []);

	return (
		<div ref={wrapperRef} className="relative w-full">
			<section 
				ref={heroRef} 
				className="relative w-full h-screen overflow-hidden select-none bg-[#2a2a2a]"
				style={{ willChange: "transform" }}
			>
				{/* 1. Foreground Layer (Scroll Down) */}
				<div className="absolute inset-0 z-10 flex flex-col justify-center items-center p-8 text-[#fed2ed] pointer-events-none">
					<h1 className="text-[clamp(5rem,22.5vw,20rem)] text-center font-bold uppercase leading-[1] font-casko">
						Scroll Down
					</h1>
				</div>

				{/* 
				  2. Revealed Layer 
				  Using CSS mask pointing to the SVG definition. 
				  Completely eliminates foreignObject overhead, making text razor sharp and butter-smooth on mobile & desktop.
				*/}
				<div 
					className="absolute inset-0 z-20 flex flex-col justify-center items-center p-8 bg-[#cbc4c2] text-[#232332]"
					style={{ 
						mask: "url(#smudge-mask)", 
						WebkitMask: "url(#smudge-mask)",
						willChange: "mask-image, -webkit-mask-image",
						transform: "translateZ(0)"
					}}
				>
					<h2 className="h3 text-[clamp(3rem,5vw,6rem)] font-bold uppercase leading-[0.9] text-center max-w-4xl font-casko">
						THE THINGS WORTH FINDING ARE NEVER ON THE SURFACE. THEY LIVE IN THE PARTS YOU ALMOST SCROLLED PAST.
					</h2>
				</div>

				{/* 3. Hidden SVG Container holding only the Gooey Filter & Circles for the mask */}
				<svg 
					ref={svgRef} 
					className="absolute top-0 left-0 pointer-events-none z-30 overflow-hidden opacity-0" 
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
				>
					<defs>
						<filter id="smudge-goo" colorInterpolationFilters="sRGB">
							<feGaussianBlur in="SourceGraphic" stdDeviation="25" result="blur" />
							<feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 60 -14" />
						</filter>
						<mask id="smudge-mask">
							<rect width="100%" height="100%" fill="black" />
							<g ref={containerRef} filter="url(#smudge-goo)" />
						</mask>
					</defs>
				</svg>
			</section>
		</div>
	);
}