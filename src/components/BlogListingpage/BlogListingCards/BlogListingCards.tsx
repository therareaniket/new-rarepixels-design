'use client';

import Image from 'next/image';
import Link from 'next/link';
import './bloglistingcard.css'
import { Tabs, TabsContent, TabsList, TabsTrigger, } from "@/components/ui/tabs"
import { blogs } from '@/data/blogs';
import { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BlogListingCards = () => {
	const categories = ["All", "UI/UX", "Technical", "Life at Rarepixels", "Branding", "Comic",];

	const sectionRef = useRef<HTMLElement | null>(null);
	const tabWrapperRef = useRef<HTMLDivElement | null>(null);

	const tabAnimationRef = useRef<gsap.core.Tween | null>(null);
	const tabScrollTriggerRef = useRef<ScrollTrigger | null>(null);

	useLayoutEffect(() => {
		const section = sectionRef.current;
		const tabWrapper = tabWrapperRef.current;

		if (!section || !tabWrapper) return;

		const context = gsap.context(() => {
			const bottomGap = 50;

			const updateBottomSpace = () => {
				const wrapperHeight = tabWrapper.offsetHeight;
				const safetyGap = 30;

				section.style.setProperty(
					"--tab-bottom-space",
					`${wrapperHeight + bottomGap + safetyGap}px`
				);
			};

			const calculateBottomTop = () => {
				const wrapperHeight = tabWrapper.offsetHeight;

				return window.innerHeight - wrapperHeight - bottomGap;
			};

			updateBottomSpace();

			const animation = gsap.fromTo(
				tabWrapper,
				{
					top: 0,
				},
				{
					top: calculateBottomTop,
					duration: 1.3,
					ease: "power3.out",
					paused: true,
					overwrite: true,
				}
			);

			const scrollTrigger = ScrollTrigger.create({
				trigger: tabWrapper,
				start: "top top",
				onEnter: () => { animation.play(); },
				onLeaveBack: () => { animation.reverse(); },
				invalidateOnRefresh: true,
				onRefresh: () => {
					updateBottomSpace();
					animation.invalidate();
				},
			});

			tabAnimationRef.current = animation;
			tabScrollTriggerRef.current = scrollTrigger;
		}, section);

		return () => {
			tabAnimationRef.current?.kill();
			tabScrollTriggerRef.current?.kill();

			tabAnimationRef.current = null;
			tabScrollTriggerRef.current = null;

			section.style.removeProperty("--tab-bottom-space");

			context.revert();
		};
	}, []);

	const handleCategoryChange = () => {
		const section = sectionRef.current;
		const tabWrapper = tabWrapperRef.current;
		const animation = tabAnimationRef.current;
		const scrollTrigger = tabScrollTriggerRef.current;

		if (!section || !tabWrapper) return;

		scrollTrigger?.disable(false);
		animation?.pause(0);

		gsap.set(tabWrapper, {
			top: 0,
		});

		const sectionTop = section.getBoundingClientRect().top + window.scrollY;

		window.scrollTo({
			top: sectionTop,
			behavior: "smooth",
		});

		let scrollEndTimer: number;

		const handleScrollEnd = () => {
			window.clearTimeout(scrollEndTimer);

			scrollEndTimer = window.setTimeout(() => {
				window.removeEventListener("scroll", handleScrollEnd);
				animation?.pause(0);
				gsap.set(tabWrapper, {
					top: 0,
				});
				ScrollTrigger.refresh();
				scrollTrigger?.enable();
			}, 150);
		};

		window.addEventListener("scroll", handleScrollEnd, {
			passive: true,
		});

		handleScrollEnd();
	};

	return (
		<section ref={sectionRef} id="blog-listing-cate-section" className='section blog-listing-cate-section' >
			<div className="container-sm">
				<div className="bloglisting-title-wrapper w-[780px]">
					<h2 className='font-semibold'>Top Picks</h2>
					<p className='text-18 font-normal mt-[30px]'>A collection of thoughts, learnings, and perspectives from our work in design, technology, and building impactful digital experiences.</p>
				</div>

				<Tabs defaultValue="All" onValueChange={handleCategoryChange} className="bloglisting-layout">
					<div ref={tabWrapperRef} className="bloglisting-tab-sticky-wrap" >
						<TabsList className="bloglisting-tab-wrapper">
							{categories.map((category) => (
								<TabsTrigger key={category} value={category} className="blog-listing-tab text-18 font-normal py-[6px] px-[18px] rounded-[20px] cursor-pointer" >
									{category}
								</TabsTrigger>
							))}
						</TabsList>
					</div>

					<div className="bloglisting-content-wrapper">
						{categories.map((category) => (
							<TabsContent key={category} value={category}>
								<div className="blog-listing-card-wrapper flex gap-[40px] flex-wrap">
									{(category === "All"
										? blogs
										: blogs.filter((blog) => blog.category === category)
									).map((blog) => (
										<Link key={blog.href} href={blog.href} title={blog.title} className="block blog-listing-card" >
											<div className="blog-listing-image w-[100%] h-[400px] rounded-[20px] overflow-hidden">
												<Image className="w-[100%] h-[100%] object-cover" src={blog.image} alt={blog.title} width={1000} height={562} draggable={false} />
											</div>

											<h3 className="h6 font-semibold mt-[20px]">
												{blog.title}
											</h3>
										</Link>
									))}
								</div>
							</TabsContent>
						))}
					</div>
				</Tabs>
			</div >
		</section >
	)
}

export default BlogListingCards