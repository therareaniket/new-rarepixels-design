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
	const wrapperRef = useRef<HTMLDivElement>(null); // React-owned wrapper
	const heroRef = useRef<HTMLElement>(null);       // the pinned element
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
			svg.style.width = `${window.innerWidth}px`;
			svg.style.height = `${window.innerHeight}px`;

			container.replaceChildren(); // clear previous circles
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
				scrub: 0.2,
				refreshPriority: 1,   // <- added: pin is measured before later sections
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

				{/* Revealed Layer */}
				<div className="absolute inset-0 z-20 flex flex-col justify-center items-center p-8 bg-[#cbc4c2] text-[#232332]"
					style={{ mask: "url(#smudge-mask)", WebkitMask: "url(#smudge-mask)"}} >
					<h2 className="h3 text-[clamp(3rem,5vw,6rem)] font-bold uppercase leading-[0.9] text-center max-w-4xl font-casko">
						THE THINGS WORTH FINDING ARE NEVER ON THE SURFACE. THEY LIVE IN THE PARTS YOU ALMOST SCROLLED PAST.
					</h2>
				</div>

				<svg ref={svgRef} className="absolute top-0 left-0 pointer-events-none z-30" xmlns="http://www.w3.org/2000/svg" >
					<defs>
						<filter id="smudge-goo">
							<feGaussianBlur in="SourceGraphic" stdDeviation="25" result="blur" />
							<feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 60 -14" />
						</filter>
						<mask id="smudge-mask">
							<g ref={containerRef} filter="url(#smudge-goo)" />
						</mask>
					</defs>
				</svg>
			</section>
		</div>
	);
}