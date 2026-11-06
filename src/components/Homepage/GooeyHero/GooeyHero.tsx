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
			svg.setAttribute("width", `${window.innerWidth}`);
			svg.setAttribute("height", `${window.innerHeight}`);
			svg.setAttribute("viewBox", `0 0 ${window.innerWidth} ${window.innerHeight}`);

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
				// Wrap inside requestAnimationFrame to force Safari to repaint on the next tick
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
				pinSpacing: true,
				anticipatePin: 1,
				scrub: 0.2,
				refreshPriority: 1,   
				invalidateOnRefresh: true,
				onUpdate: (self) => render(self.progress),
				onRefresh: (self) => { buildCircles(); render(self.progress); },
			});
		}, wrapperRef);

		return () => { ctx.revert(); };
	}, []);

	return (
		<div ref={wrapperRef}>
			<section ref={heroRef} className="relative w-full h-screen overflow-hidden select-none">
				{/* Foreground Layer */}
				<div className="absolute inset-0 z-10 flex flex-col justify-center items-center p-8 bg-[#2a2a2a] text-[#fed2ed]">
					<h1 className="text-[clamp(5rem,22.5vw,20rem)] text-center font-bold uppercase leading-[1] font-casko">
						Scroll Down
					</h1>
				</div>

				{/* 
				  Optimised SVG Layer: Containing both the mask definition and the masked layer.
				  Using foreignObject avoids CSS mask paint bugs on iOS Safari completely.
				*/}
				<svg 
					ref={svgRef} 
					className="absolute top-0 left-0 pointer-events-none w-full h-full z-20" 
					xmlns="http://www.w3.org/2000/svg"
					style={{ willChange: "transform", transform: "translateZ(0)" }}
				>
					<defs>
						<filter id="smudge-goo" colorInterpolationFilters="sRGB">
							<feGaussianBlur in="SourceGraphic" stdDeviation="25" result="blur" />
							<feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 60 -14" />
						</filter>
						<mask id="smudge-mask" maskUnits="userSpaceOnUse">
							<g ref={containerRef} filter="url(#smudge-goo)" fill="#ffffff" />
						</mask>
					</defs>

					{/* The Masked Wrapper Group */}
					<g 
						mask="url(#smudge-mask)" 
						style={{ willChange: "mask-image, transform", transform: "translateZ(0)" }}
					>
						<foreignObject x="0" y="0" width="100%" height="100%">
							{/* Revealed HTML Layer inside SVG */}
							<div className="w-full h-full flex flex-col justify-center items-center p-8 bg-[#cbc4c2] text-[#232332] pointer-events-auto">
								<h2 className="h3 text-[clamp(3rem,5vw,6rem)] font-bold uppercase leading-[0.9] text-center max-w-4xl font-casko">
									THE THINGS WORTH FINDING ARE NEVER ON THE SURFACE. THEY LIVE IN THE PARTS YOU ALMOST SCROLLED PAST.
								</h2>
							</div>
						</foreignObject>
					</g>
				</svg>
			</section>
		</div>
	);
}
