"use client";

import React from "react";
import Link from "next/link";
import Scene3D from "@/components/hero-3d/Scene3D";
import "./hero.css";
import Image from "next/image";

const Hero = () => {
	return (
		<section id="first-section" className="home-hero">
			<div className="hm-hero-wrapper">
				<div className="hm-hero-text-wrapper text-center pt-[152px] pb-[137px]">
					<h1 className="font-extrabold">Social Media Management</h1>

					<p className="text-18 font-normal mt-[32px]">
						Frictionless experiences designed specifically for your users, not
						adapted from a template.
					</p>
				</div>

				<div className="hm-hero-btm-wrapper bg-[#040E36] pt-[70px] pb-[150px] relative">
					<div className="container">
						<div className="hm-hero-btm-text flex justify-between items-end">
							<div className="hm-hero-btm-text-left w-[460px] text-[#fff]">
								<h2 className="font-semibold">
									Building Brands People Choose First.
								</h2>

								<p className="text-18 flex flex-col gap-[18px] py-[30px] text-[#C6C6C6]">
									<span className="font-normal">
										From original brand identities to custom-engineered digital
										products conceived from scratch, built to last.
									</span>

									<span className="font-semibold">
										Creativity That Businesses Can Measure.
									</span>
								</p>

								<Link href="#" title="Start Your Project" className="inline-block text-20 px-[20px] py-[10px] bg-[#ED0180] text-white rounded-[30px] website-link" >
									Start Your Project{" "}
									<span className="mm-cta inline-block ml-[12px] icon-hero-cta-arrow text-[16px]"></span>
								</Link>
							</div>

							<div className="hm-3d-model-artboard w-[600px] h-[600px] flex items-center justify-center absolute left-[50%] translate-x-[-50%] bottom-[90px] overflow-visible">
								{/* <Scene3D activeIndex={0} /> */}
								{/* <Scene3D activeIndex={1} /> */}
								{/* <Scene3D activeIndex={2} /> */}
								<Scene3D activeIndex={3} />
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
												<Image className="" src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/homepage/hero/statistic1-graph.gif" alt="brand-transform" width={20} height={20}></Image>
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
												<Image className="" src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/homepage/hero/statistic2-clock.gif" alt="brand-transform" width={20} height={20}></Image>
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
												<Image className="" src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/homepage/hero/statistic3-engineer.gif" alt="brand-transform" width={20} height={20}></Image>
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
			</div>
		</section>
	);
};

export default Hero;