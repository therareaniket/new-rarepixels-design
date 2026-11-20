"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scene3D from "@/components/Homepage/Hero/Hero3D/Scene3D";
import "./hero.css";
import SlideUpText from "./SlideUpText";

gsap.registerPlugin(ScrollTrigger);

const HERO_STAGES = [
	{
		index: 0,
		title: "UI/UX Design",
		subtitle:
			"Frictionless experiences designed specifically for your users, not adapted from a template.",
	},
	{
		index: 1,
		title: "Web & App Development",
		subtitle:
			"Custom-engineered web and mobile products built for speed, scale, and reliability.",
	},
	{
		index: 2,
		title: "Brand Identity Design",
		subtitle:
			"Distinctive visual systems and brand stories that make people remember and trust you.",
	},
	{
		index: 3,
		title: "Social Media Management",
		subtitle:
			"Consistent, strategy-led content and community growth tailored to your audience.",
	},
] as const;

const Hero = () => {
	const sectionRef = useRef<HTMLElement>(null);
	const pinInnerRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);
	const subtitleRef = useRef<HTMLParagraphElement>(null);

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
				end: "+=300%", // 100vh initial + 300vh scroll = 400vh total scroll travel
				pin: pinTarget,
				pinSpacing: true,
				anticipatePin: 1,
				scrub: 1,
				onUpdate: (self) => {
					const total = HERO_STAGES.length;
					const nextIndex = Math.min(
						total - 1,
						Math.max(0, Math.floor(self.progress * total))
					);

					if (nextIndex !== currentIndexRef.current) {
						currentIndexRef.current = nextIndex;
						setActiveIndex(nextIndex);

						if (titleRef.current && subtitleRef.current) {
							gsap.fromTo(
								[titleRef.current, subtitleRef.current],
								{ y: 18, opacity: 0 },
								{
									y: 0,
									opacity: 1,
									duration: 0.35,
									stagger: 0.05,
									ease: "power2.out",
									overwrite: "auto",
								}
							);
						}
					}
				},
			});
		}, sectionRef);

		return () => ctx.revert();
	}, []);

	const activeStage = HERO_STAGES[activeIndex] ?? HERO_STAGES[0];

	return (
		<section ref={sectionRef} id="first-section" className="home-hero">
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
											From original brand identities to custom-engineered digital
											products conceived from scratch, built to last.
										</span>

										<span className="font-semibold">
											Creativity That Businesses Can Measure.
										</span>
									</p>

									<Link
										href="#"
										title="Start Your Project"
										className="inline-block text-20 px-[20px] py-[10px] bg-[#ED0180] text-white rounded-[30px] website-link"
									>
										Start Your Project{" "}
										<span className="mm-cta inline-block ml-[12px] icon-hero-cta-arrow text-[16px]"></span>
									</Link>
								</div>

								<div className="hm-3d-model-artboard w-[600px] h-[600px] flex items-center justify-center absolute left-[50%] translate-x-[-50%] bottom-[90px] overflow-visible">
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

					{/* <div className="hm-hero-text-wrapper text-center pt-[152px] pb-[137px]">
						<h2 ref={titleRef} className="font-extrabold h1">
							{activeStage.title}
						</h2>

						<p ref={subtitleRef} className="text-18 font-normal mt-[32px]">
							{activeStage.subtitle}
						</p>
					</div> */}

					<div className="hm-hero-text-wrapper text-center pt-[152px] pb-[137px]">
						<SlideUpText
							triggerKey={activeIndex}
							text={activeStage.title}
							subtitle={activeStage.subtitle}
							className="font-extrabold h1"
							subtitleClassName="text-18 font-normal"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;