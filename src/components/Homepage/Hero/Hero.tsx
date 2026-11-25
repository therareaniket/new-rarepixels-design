"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scene3D from "@/components/Homepage/Hero/Hero3D/Scene3D";
import "./hero.css";
import DisintegrateText from "./DisintegrateText";
import ShatterText from "./ShatterText";

gsap.registerPlugin(ScrollTrigger);

const HERO_STAGES = [
	{
		index: 0,
		title: "UI/UX Design",
		subtitle: "Frictionless experiences designed specifically for your users, not adapted from a template.",
	},
	{
		index: 1,
		title: "Web & App Development",
		subtitle: "Bespoke platforms, SaaS products, and e-commerce builds engineered from the ground up for your exact business requirements.",
	},
	{
		index: 2,
		title: "Brand Identity Design",
		subtitle: "Original marks, visual systems, and brand architectures conceived from scratch and owned entirely by you. ",
	},
	{
		index: 3,
		title: "Social Media Management",
		subtitle: "Custom content strategies built around your brand voice, your audience behaviour, and your business goals. ",
	},
] as const;

const Hero = () => {
	const sectionRef = useRef<HTMLElement>(null);
	const pinInnerRef = useRef<HTMLDivElement>(null);

	const [activeIndex, setActiveIndex] = useState<number>(0);
	const [scrollDirection, setScrollDirection] = useState<number>(1);
	const currentIndexRef = useRef<number>(0);
	const scrollDirRef = useRef<number>(1);
	const isTransitioningRef = useRef<boolean>(false);
	const stInstanceRef = useRef<ScrollTrigger | null>(null);

	const handleTransitionStart = useCallback(() => {
		isTransitioningRef.current = true;
	}, []);

	const handleTransitionEnd = useCallback(() => {
		isTransitioningRef.current = false;
		const st = stInstanceRef.current;
		if (!st) return;

		const total = HERO_STAGES.length;
		const clampedProgress = Math.min(st.progress / 0.92, 0.9999);
		const targetIndex = Math.min(
			total - 1,
			Math.max(0, Math.floor(clampedProgress * total))
		);
		const current = currentIndexRef.current;
		if (targetIndex !== current) {
			const nextIndex =
				targetIndex > current ? current + 1 : Math.max(0, current - 1);
			currentIndexRef.current = nextIndex;
			setActiveIndex(nextIndex);
		}
	}, []);

	useEffect(() => {
		const preventScroll = (e: Event) => {
			if (!isTransitioningRef.current) return;
			e.preventDefault();
		};

		const preventKeyScroll = (e: KeyboardEvent) => {
			if (!isTransitioningRef.current) return;
			const keys = [
				"ArrowUp",
				"ArrowDown",
				"PageUp",
				"PageDown",
				"Home",
				"End",
				"Space",
				" ",
			];
			if (keys.includes(e.key)) {
				e.preventDefault();
			}
		};

		window.addEventListener("wheel", preventScroll, { passive: false });
		window.addEventListener("touchmove", preventScroll, { passive: false });
		window.addEventListener("keydown", preventKeyScroll, { passive: false });

		return () => {
			window.removeEventListener("wheel", preventScroll);
			window.removeEventListener("touchmove", preventScroll);
			window.removeEventListener("keydown", preventKeyScroll);
		};
	}, []);

	useEffect(() => {
		const section = sectionRef.current;
		const pinTarget = pinInnerRef.current;
		if (!section || !pinTarget) return;

		const ctx = gsap.context(() => {
			const st = ScrollTrigger.create({
				trigger: section,
				start: "top top",
				end: "+=300%",
				pin: pinTarget,
				pinSpacing: true,
				anticipatePin: 1,
				scrub: true,
				onUpdate: (self) => {
					if (isTransitioningRef.current) return;

					if (self.direction && self.direction !== scrollDirRef.current) {
						scrollDirRef.current = self.direction;
						setScrollDirection(self.direction);
					}

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

			stInstanceRef.current = st;
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
			stInstanceRef.current = null;
			ctx.revert();
		};
	}, []);

	const activeStage = HERO_STAGES[activeIndex] ?? HERO_STAGES[0];

	return (
		<section ref={sectionRef} id="first-section" className="home-hero overflow-x-clip">
			<div ref={pinInnerRef} className="hm-hero-sticky-inner">
				<div className="hm-hero-wrapper">
					<div className="hm-hero-btm-wrapper bg-[#040E36] pt-[70px] pb-[150px] relative">
						<div className="container">
							<div className="hm-hero-btm-text flex justify-between items-end">
								<div className="hm-hero-btm-text-left w-[460px] text-[#fff]">
									<h1 className="font-semibold h2">
										Building Brands People Choose First.
									</h1>

									<p className="text-18 flex flex-col gap-[18px] py-[30px] text-[#C6C6C6]">
										<span className="font-normal">
											From original brand identities to custom-engineered digital products conceived from scratch, built to last.
										</span>

										<span className="font-semibold">
											Creativity That Businesses Can Measure.
										</span>
									</p>

									<Link href="#" title="Start Your Project" className="inline-block text-20 px-[20px] py-[10px] bg-[#ED0180] text-white rounded-[30px] website-link">
										Start Your Project{" "}
										<span className="mm-cta inline-block ml-[12px] icon-hero-cta-arrow text-[16px]"></span>
									</Link>
								</div>

								<div className="hm-3d-model-artboard w-[600px] h-[600px] flex items-center justify-center absolute left-[50%] translate-x-[-50%] bottom-[90px] overflow-visible z-[999]">
									<Scene3D activeIndex={activeIndex} />
								</div>

								<div className="hm-hero-btm-text-right w-[459px]">
									<p className="text-18 flex flex-col gap-[18px] text-[#C6C6C6]">
										<span className="font-normal">
											Most brands compete for attention. The memorable ones earn
											it. At RarePixels, we blend strategy, creativity, and
											technology to create digital experiences that people notice,
											trust, and return to.
										</span>

										<span className="font-normal">
											Nothing off the shelf. Nothing assembled from parts that
											existed before you walked in. Everything built for you.
										</span>
									</p>

									<div className="hm-hero-stats flex items-start justify-between mt-[30px]">
										<div className="hm-stat-card">
											<div className="hm-stat-num flex items-center gap-[12px]">
												<span className="h5 font-semibold text-[#ed0180]">
													100+
												</span>

												<div className="w-[20px] h-[20px] object-contain">
													<Image
														className=""
														src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/homepage/hero/statistic1-graph.gif"
														alt="brand-transform"
														width={20}
														height={20}
													/>
												</div>
											</div>

											<p className="text-[12px] text-[#C6C6C6]">
												Brands Transformed
											</p>
										</div>

										<div className="hm-stat-card">
											<div className="hm-stat-num flex items-center gap-[12px]">
												<span className="h5 font-semibold text-[#ed0180]">
													6000+
												</span>

												<div className="w-[20px] h-[20px] object-contain">
													<Image
														className=""
														src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/homepage/hero/statistic2-clock.gif"
														alt="brand-transform"
														width={20}
														height={20}
													/>
												</div>
											</div>

											<p className="text-[12px] text-[#C6C6C6]">
												Hours of Strategic Design
											</p>
										</div>

										<div className="hm-stat-card">
											<div className="hm-stat-num flex items-center gap-[12px]">
												<span className="h5 font-semibold text-[#ed0180]">
													50+
												</span>

												<div className="w-[20px] h-[20px] object-contain">
													<Image
														className=""
														src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/homepage/hero/statistic3-engineer.gif"
														alt="brand-transform"
														width={20}
														height={20}
													/>
												</div>
											</div>

											<p className="text-[12px] text-[#C6C6C6]">
												Digital Products Engineered
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="hm-hero-text-wrapper relative overflow-hidden bg-white text-center pt-[152px] pb-[137px] cursor-pointer">
						<div className="relative text-[#010101]">
							<DisintegrateText
								triggerKey={activeIndex}
								text={activeStage.title}
								subtitle={activeStage.subtitle}
								className="font-extrabold h1"
								subtitleClassName="text-18 font-normal"
								onTransitionStart={handleTransitionStart}
								onTransitionEnd={handleTransitionEnd}
							/>

						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;