'use client';

import Image from 'next/image';
import Link from 'next/link';
import './bloglistingcard.css'
import { Tabs, TabsContent, TabsList, TabsTrigger, } from "@/components/ui/tabs"
import { useEffect, useRef } from "react";
import { blogs } from '@/data/blogs';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(ScrollTrigger, Flip);

const BlogListingCards = () => {

	const categories = ["All", "UI/UX", "Technical", "Life at Rarepixels", "Branding", "Comic",];

	const sectionRef = useRef<HTMLDivElement>(null);

	const handleTabChange = () => {
		sectionRef.current?.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	};

	useEffect(() => {
		const section = sectionRef.current;
		if (!section) return;
		const tabs = section.querySelector<HTMLElement>( ".bloglisting-tab-wrapper" );
		const tabsPlaceholder = section.querySelector<HTMLElement>( ".blog-list-tabs" );
		if (!tabs || !tabsPlaceholder) return;

		let flipAnimation: gsap.core.Timeline | null = null;

		const changeTabState = (
			state: "normal" | "fixed" | "section-end"
		) => {
			flipAnimation?.kill();
			const flipState = Flip.getState(tabs);
			tabs.classList.remove("is-bottom", "is-section-end");

			if (state === "fixed") { tabs.classList.add("is-bottom"); }
			if (state === "section-end") { tabs.classList.add("is-section-end"); }
			flipAnimation = Flip.from(flipState, {
				duration: 0.8,
				ease: "power3.inOut",
				nested: true,
				overwrite: true,
			});
		};

		const scrollTrigger = ScrollTrigger.create({
			trigger: tabsPlaceholder,
			start: "bottom bottom-=20",
			endTrigger: section,
			end: "bottom bottom-=20",
			onEnter: () => { changeTabState("fixed"); },
			onLeave: () => { changeTabState("section-end"); },
			onEnterBack: () => { changeTabState("fixed"); },
			onLeaveBack: () => { changeTabState("normal"); },
			invalidateOnRefresh: true,
		});

		const handleResize = () => { ScrollTrigger.refresh(); };
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
			flipAnimation?.kill();
			scrollTrigger.kill();
			tabs.classList.remove("is-bottom", "is-section-end");
			gsap.set(tabs, { clearProps: "transform", });
		};
	}, []);

	return (
		<section ref={sectionRef} className='section blog-listing-cate-section' >
			<div className="container-sm">
				<div className="bloglisting-title-wrapper w-[780px]">
					<h2 className='font-semibold'>Top Picks</h2>
					<p className='text-18 font-normal mt-[30px]'>A collection of thoughts, learnings, and perspectives from our work in design, technology, and building impactful digital experiences.</p>
				</div>

				<Tabs defaultValue="All" onValueChange={handleTabChange} className="bloglisting-layout">
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
												<Image className="w-[100%] h-[100%] object-cover" src={blog.image} alt={blog.title} width={1000} height={562} />
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