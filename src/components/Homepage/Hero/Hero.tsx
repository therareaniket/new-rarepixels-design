"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./hero.css";

gsap.registerPlugin(ScrollTrigger);

const HERO_STAGES = [
	{
		index: 0,
		title: "UI/UX Design",
		subtitle: "Frictionless experiences designed specifically for your users, not adapted from a template.",
		imageSrc: "/home-hero/ui-svg.svg",
		imageClass: "hero-ui-svg",
		alt: "UI/UX Design illustration",
	},
	{
		index: 1,
		title: "Web & App Development",
		subtitle: "Bespoke platforms, SaaS products, and e-commerce builds engineered from the ground up for your exact business requirements.",
		imageSrc: "/home-hero/web-svg.svg",
		imageClass: "web-ui-svg",
		alt: "Web and App Development illustration",
	},
	{
		index: 2,
		title: "Brand Identity Design",
		subtitle: "Original marks, visual systems, and brand architectures conceived from scratch and owned entirely by you.",
		imageSrc: "/home-hero/brand-svg.svg",
		imageClass: "brand-ui-svg",
		alt: "Brand Identity Design illustration",
	},
	{
		index: 3,
		title: "Social Media Management",
		subtitle: "Custom content strategies built around your brand voice, your audience behaviour, and your business goals.",
		imageSrc: "/home-hero/social-svg.svg",
		imageClass: "social-ui-svg",
		alt: "Social Media Management illustration",
	},
] as const;

const Hero = () => {
	const sectionRef = useRef<HTMLElement>(null);
	const pinInnerRef = useRef<HTMLDivElement>(null);

	const [activeIndex, setActiveIndex] = useState<number>(0);
	const currentIndexRef = useRef<number>(0);

	useEffect(() => {
		const section = sectionRef.current;
		const pinTarget = pinInnerRef.current;
		if (!section || !pinTarget) return;

		const ctx = gsap.context(() => {
			ScrollTrigger.create({
				trigger: section,
				start: "top top",
				end: "+=300%",
				pin: pinTarget,
				pinSpacing: true,
				anticipatePin: 1,
				scrub: true,
				onUpdate: (self) => {
					const total = HERO_STAGES.length;
					const clampedProgress = Math.min(self.progress / 0.92, 0.9999);
					const nextIndex = Math.min(
						total - 1,
						Math.max(0, Math.floor(clampedProgress * total))
					);

					if (nextIndex !== currentIndexRef.current) {
						currentIndexRef.current = nextIndex;
						setActiveIndex(nextIndex);
					}
				},
			});
		}, sectionRef);

		const syncTriggers = () => {
			ScrollTrigger.sort();
			ScrollTrigger.refresh();
		};

		const refreshTimer = window.setTimeout(syncTriggers, 250);
		window.addEventListener("load", syncTriggers);
		document.fonts?.ready?.then(syncTriggers);

		return () => {
			window.clearTimeout(refreshTimer);
			window.removeEventListener("load", syncTriggers);
			ctx.revert();
		};
	}, []);

	const activeStage = HERO_STAGES[activeIndex] ?? HERO_STAGES[0];

	return (
		<section ref={sectionRef} id="first-section" className="home-hero overflow-x-clip" >
			<div ref={pinInnerRef} className="hm-hero-sticky-inner">
				<div className="hm-hero-wrapper">
					<div className="hm-hero-btm-wrapper bg-[#040E36] pt-[70px] pb-[150px] relative">
						<div className="container">
							<div className="hm-hero-btm-text flex justify-between items-end">
								<div className="hm-hero-btm-text-left w-[460px] text-[#fff]">
									<h1 className="font-semibold h2"> Building Brands People Choose First. </h1>

									<p className="text-18 flex flex-col gap-[18px] py-[30px] text-[#C6C6C6]">
										<span className="font-normal"> From original brand identities to custom-engineered digital products conceived from scratch, built to last. </span>

										<span className="font-semibold"> Creativity That Businesses Can Measure. </span>
									</p>

									<Link href="/Contact" title="Start Your Project" className="cyber-cta-btn group relative inline-flex h-[40px] items-center text-white transition-colors duration-200" >
										<span className="relative z-10 flex items-center pl-[20px] pr-[35px] text-14 tracking-[1px] website-link-text">
											Start Your Project
										</span>

										<span className="cyber-pink-pixels" aria-hidden="true">
											<span className="cyber-pink-box cyber-pink-lg" />
											<span className="cyber-pink-box cyber-pink-sm" />
										</span>
									</Link>
								</div>

								<div className="hm-3d-model-artboard w-[600px] h-[600px] flex items-center justify-center absolute left-[50%] translate-x-[-50%] bottom-[0] overflow-visible z-[999]">
									<Image key={activeStage.imageSrc} className={`w-[100%] h-[100%] object-contain ${activeStage.imageClass}`} src={activeStage.imageSrc} alt={activeStage.alt} width={600} height={600} draggable={false} />
								</div>

								<div className="hm-hero-btm-text-right w-[459px]">
									<p className="text-18 flex flex-col gap-[18px] text-[#C6C6C6]">
										<span className="font-normal"> Most brands compete for attention. The memorable ones earn it. At RarePixels, we blend strategy, creativity, and technology to create digital experiences that people notice, trust, and return to. </span>

										<span className="font-normal"> Nothing off the shelf. Nothing assembled from parts that existed before you walked in. Everything built for you. </span>
									</p>

									<div className="hm-hero-stats flex items-start justify-between mt-[30px]">
										<div className="hm-stat-card">
											<div className="hm-stat-num flex items-center gap-[12px]">
												<span className="h5 font-semibold text-[#ed0180]"> 100+ </span>

												<div className="w-[20px] h-[20px] object-contain">
													<Image className="" src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/homepage/hero/statistic1-graph.gif" alt="brand-transform" width={20} height={20} />
												</div>
											</div>

											<p className="text-[12px] text-[#C6C6C6]">Brands Transformed</p>
										</div>

										<div className="hm-stat-card">
											<div className="hm-stat-num flex items-center gap-[12px]">
												<span className="h5 font-semibold text-[#ed0180]"> 6000+ </span>

												<div className="w-[20px] h-[20px] object-contain">
													<Image className="" src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/homepage/hero/statistic2-clock.gif" alt="brand-transform" width={20} height={20} />
												</div>
											</div>

											<p className="text-[12px] text-[#C6C6C6]"> Hours of Strategic Design </p>
										</div>

										<div className="hm-stat-card">
											<div className="hm-stat-num flex items-center gap-[12px]">
												<span className="h5 font-semibold text-[#ed0180]"> 50+ </span>

												<div className="w-[20px] h-[20px] object-contain">
													<Image className="" src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/homepage/hero/statistic3-engineer.gif" alt="brand-transform" width={20} height={20} />
												</div>
											</div>

											<p className="text-[12px] text-[#C6C6C6]"> Digital Products Engineered </p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="hm-hero-text-wrapper relative overflow-hidden bg-white text-center pt-[152px] pb-[137px]">
						<h2 className="h1">{activeStage.title}</h2>

						<div className="mt-[32px]">
							<p className="text-18 font-normal">{activeStage.subtitle}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;