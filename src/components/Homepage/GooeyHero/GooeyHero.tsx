"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CONFIG = {
	zigzagFrequency: 8,
	zigzagAmplitude: 160,
	totalPoints: 60,       // Total stamps along the zig-zag path
	maxRadius: 280,        // Max circle radius to ensure full screen coverage
};

export default function GooeyHero() {
	const heroRef = useRef<HTMLElement>(null);
	const svgRef = useRef<SVGSVGElement>(null);
	const containerRef = useRef<SVGGElement>(null);

	useEffect(() => {
		const hero = heroRef.current;
		const svg = svgRef.current;
		const container = containerRef.current;

		if (!hero || !svg || !container) return;

		// Synchronize SVG canvas dimensions to viewport
		const matchSvgToViewport = () => {
			svg.style.width = `${window.innerWidth}px`;
			svg.style.height = `${window.innerHeight}px`;
		};

		matchSvgToViewport();
		window.addEventListener("resize", matchSvgToViewport);

		// 1. Calculate positions for points along top-left to bottom-right zig-zag
		const getZigZagPosition = (progress: number) => {
			const width = window.innerWidth;
			const height = window.innerHeight;

			const baseX = progress * width;
			const baseY = progress * height;

			const wave = Math.abs((((progress * CONFIG.zigzagFrequency) % 2) - 1));
			const offset = (wave - 0.5) * 2 * CONFIG.zigzagAmplitude;

			return {
				x: baseX + offset,
				y: baseY - offset,
			};
		};

		// 2. Pre-generate persistent mask circles in the DOM
		container.innerHTML = "";
		const circles: SVGCircleElement[] = [];

		for (let i = 0; i < CONFIG.totalPoints; i++) {
			const pointProgress = i / (CONFIG.totalPoints - 1);
			const { x, y } = getZigZagPosition(pointProgress);

			const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
			circle.setAttribute("cx", x.toString());
			circle.setAttribute("cy", y.toString());
			circle.setAttribute("r", "0");
			circle.setAttribute("fill", "#FFFFFF");

			container.appendChild(circle);
			circles.push(circle);
		}

		// 3. Drive circle radius expansions directly via ScrollTrigger
		const trigger = ScrollTrigger.create({
			trigger: hero,
			start: "top top",
			end: "+=2000",
			pin: true,
			scrub: 0.2, // Adds smooth easing on scroll direction change
			onUpdate: (self) => {
				const scrollProgress = self.progress;

				circles.forEach((circle, index) => {
					const pointProgress = index / (CONFIG.totalPoints - 1);

					// Calculate how much this point should be expanded based on scroll position
					if (scrollProgress >= pointProgress) {
						// Point is active: expand based on how far past it we have scrolled
						const activeRatio = Math.min(1, (scrollProgress - pointProgress) * 4 + 0.3);
						circle.setAttribute("r", (activeRatio * CONFIG.maxRadius).toString());
					} else {
						// Scroll hasn't reached this point yet
						circle.setAttribute("r", "0");
					}
				});
			},
		});

		return () => {
			window.removeEventListener("resize", matchSvgToViewport);
			trigger.kill();
		};
	}, []);

	return (
		<section ref={heroRef} className="relative w-full h-screen overflow-hidden select-none">
			{/* Foreground Layer */}
			<div className="absolute inset-0 z-10 flex flex-col justify-center items-center p-8 bg-[#2a2a2a] text-[#fed2ed]">
				<h1 className="text-[clamp(5rem,22.5vw,20rem)] text-center font-bold uppercase leading-[1] font-casko">
					Scroll Down
				</h1>
			</div>

			{/* Background Hidden Layer (Revealed via Mask) */}
			<div
				className="absolute inset-0 z-20 flex flex-col justify-center items-center p-8 bg-[#cbc4c2] text-[#232332]"
				style={{
					mask: "url(#smudge-mask)",
					WebkitMask: "url(#smudge-mask)",
				}}
			>
				<h3 className="text-[clamp(3rem,5vw,6rem)] font-bold uppercase leading-[0.9] text-center max-w-4xl font-casko">
					THE THINGS WORTH FINDING ARE NEVER ON THE SURFACE. THEY LIVE IN THE PARTS YOU ALMOST SCROLLED PAST.
				</h3>
			</div>

			{/* SVG Mask Definition */}
			<svg ref={svgRef} className="absolute top-0 left-0 pointer-events-none z-30" xmlns="http://www.w3.org/2000/svg">
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
	);
}