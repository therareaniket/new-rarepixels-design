'use client';

import Image from 'next/image';
import Link from 'next/link';
import './bloglistingcard.css'
import { Tabs, TabsContent, TabsList, TabsTrigger, } from "@/components/ui/tabs"
import { useEffect, useLayoutEffect, useRef, useState, } from "react";
import { blogs } from '@/data/blogs';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(ScrollTrigger, Flip);

const BlogListingCards = () => {

	const categories = ["All", "UI/UX", "Technical", "Life at Rarepixels", "Branding", "Comic",];

	type TabPosition = "normal" | "fixed" | "section-end";

	const [activeCategory, setActiveCategory] = useState("All");

	const sectionRef = useRef<HTMLDivElement>(null);
	const isCategoryChangingRef = useRef(false);
	const tabStateRef = useRef<TabPosition>("normal");
	const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
	const previousSectionBottomRef = useRef<number | null>(null);

	const shouldScrollToSectionTopRef = useRef(false);

	const handleTabChange = (nextCategory: string) => {
		if (nextCategory === activeCategory) return;
		isCategoryChangingRef.current = true;
		shouldScrollToSectionTopRef.current = true;

		previousSectionBottomRef.current = null;

		setActiveCategory(nextCategory);
	};

	useLayoutEffect(() => {
		const section = sectionRef.current;
		if (!section) return;

		if (shouldScrollToSectionTopRef.current) {
			shouldScrollToSectionTopRef.current = false;

			const sectionTop = section.getBoundingClientRect().top + window.scrollY;

			requestAnimationFrame(() => {
				ScrollTrigger.refresh();

				requestAnimationFrame(() => {
					window.scrollTo({
						top: sectionTop,
						behavior: "smooth",
					});

					isCategoryChangingRef.current = false;
				});
			});

			return;
		}

		const tabs = section.querySelector<HTMLElement>(".bloglisting-tab-wrapper");
		if (!tabs) return;

		const previousSectionBottom = previousSectionBottomRef.current;
		if (
			tabStateRef.current !== "section-end" ||
			previousSectionBottom === null
		) {
			requestAnimationFrame(() => {
				ScrollTrigger.refresh();
			});

			return;
		}

		gsap.killTweensOf(tabs);

		tabs.classList.remove("is-bottom");
		tabs.classList.add("is-section-end");

		gsap.set(tabs, { clearProps: "transform", });
		const newSectionBottom = section.getBoundingClientRect().bottom + window.scrollY;
		const heightDifference = newSectionBottom - previousSectionBottom;
		window.scrollBy({ top: heightDifference, behavior: "auto", });

		requestAnimationFrame(() => {
			tabs.classList.remove("is-bottom");
			tabs.classList.add("is-section-end");

			tabStateRef.current = "section-end";

			ScrollTrigger.refresh();

			requestAnimationFrame(() => {
				tabs.classList.remove("is-bottom");
				tabs.classList.add("is-section-end");

				gsap.set(tabs, { clearProps: "transform", });

				tabStateRef.current = "section-end";
				previousSectionBottomRef.current = null;
				isCategoryChangingRef.current = false;
			});
		});
	}, [activeCategory]);

	useEffect(() => {
		const section = sectionRef.current;

		if (!section) return;

		const tabs = section.querySelector<HTMLElement>(".bloglisting-tab-wrapper");
		const tabsPlaceholder = section.querySelector<HTMLElement>(".blog-list-tabs");

		if (!tabs || !tabsPlaceholder) return;

		const getTriggerStart = () => {
			const naturalStart = tabsPlaceholder.getBoundingClientRect().top + window.scrollY;
			const naturalEnd = section.getBoundingClientRect().bottom + window.scrollY - window.innerHeight;

			const minimumScrollDistance = 150;

			if (naturalEnd - naturalStart >= minimumScrollDistance) {
				return naturalStart;
			}

			return Math.max(0, naturalEnd - minimumScrollDistance);
		};

		let flipAnimation: gsap.core.Timeline | null = null;

		const changeTabState = (state: TabPosition) => {
			if (isCategoryChangingRef.current) return;
			if (tabStateRef.current === state) return;

			flipAnimation?.kill();
			Flip.killFlipsOf(tabs);

			const flipState = Flip.getState(tabs, { props: "transform", });
			tabs.classList.remove("is-bottom", "is-section-end");
			if (state === "fixed") { tabs.classList.add("is-bottom"); }
			if (state === "section-end") { tabs.classList.add("is-section-end"); }

			tabStateRef.current = state;

			flipAnimation = Flip.from(flipState, {
				duration: 0.9,
				ease: "power2.out",
				nested: true,
				overwrite: true,
				prune: true,

				onComplete: () => {
					flipAnimation = null;
					gsap.set(tabs, { clearProps: "transform", });
				},
				onInterrupt: () => { flipAnimation = null; },
			});
		};

		scrollTriggerRef.current = ScrollTrigger.create({
			trigger: tabsPlaceholder,
			start: getTriggerStart,
			endTrigger: section,
			end: "bottom bottom",

			onEnter: () => { if (isCategoryChangingRef.current) return; changeTabState("fixed"); },
			onLeave: () => { if (isCategoryChangingRef.current) return; changeTabState("section-end"); },
			onEnterBack: () => { if (isCategoryChangingRef.current) return; changeTabState("fixed"); },
			onLeaveBack: () => { if (isCategoryChangingRef.current) return; changeTabState("normal"); },

			invalidateOnRefresh: true,
		});

		const scrollTrigger = scrollTriggerRef.current;

		const handleResize = () => { ScrollTrigger.refresh(); };

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);

			flipAnimation?.kill();
			scrollTrigger.kill();

			tabs.classList.remove("is-bottom", "is-section-end");
			gsap.set(tabs, { clearProps: "transform", });

			tabStateRef.current = "normal";
			scrollTriggerRef.current = null;
		};
	}, []);

	return (
		<section ref={sectionRef} id='blog-listing-cate-section' className='section blog-listing-cate-section' >
			<div className="container-sm">
				<div className="bloglisting-title-wrapper w-[780px]">
					<h2 className='font-semibold'>Top Picks</h2>
					<p className='text-18 font-normal mt-[30px]'>A collection of thoughts, learnings, and perspectives from our work in design, technology, and building impactful digital experiences.</p>
				</div>

				<Tabs value={activeCategory} onValueChange={handleTabChange} className="bloglisting-layout" >
					<div className="blog-list-tabs">
						<div className="bloglisting-tab-sticky-wrap">
							<TabsList className="bloglisting-tab-wrapper">
								{categories.map((category) => (
									<TabsTrigger key={category} value={category} className="blog-listing-tab text-18 font-normal py-[6px] px-[18px] rounded-[20px] cursor-pointer" >
										{category}
									</TabsTrigger>
								))}
							</TabsList>
						</div>
					</div>

					<div className="bloglisting-content-wrapper">
						{categories.map((category) => (
							<TabsContent key={category} value={category} >
								<div className="blog-listing-card-wrapper flex gap-[40px] flex-wrap">
									{(category === "All" ? blogs : blogs.filter((blog) => blog.category === category)).map((blog) => (
										<Link key={blog.href} href={blog.href} title={blog.title} className="block blog-listing-card" >
											<div className="blog-listing-image w-[100%] h-[400px] rounded-[20px] overflow-hidden">
												<Image className="w-[100%] h-[100%] object-cover" src={blog.image} alt={blog.title} width={1000} height={562} draggable={false} />
											</div>
											<h3 className="h6 font-semibold mt-[20px]"> {blog.title} </h3>
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