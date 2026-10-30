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

// const blogs = [
// 	{
// 		title: "From Unknown to Unforgettable: How Branding Makes Businesses Recognisable",
// 		href: "/Blog/from-unknown-to-unforgettable-branding",
// 		image: "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/articles-image-set/unknown-to-unforgettable-blog.webp",
// 		category: "Branding",
// 	},
// 	{
// 		title: "Why DIY UI/UX Falls Short and Your Business Needs Experts",
// 		href: "/Blog/diy-ui-ux-vs-experts-business-growth",
// 		image: "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/articles-image-set/ux-falls-short.webp",
// 		category: "UI/UX",
// 	},
// 	{
// 		title: "RarePixels Turns 2. The Big Game Is Still Loading.",
// 		href: "/Blog/rarepixels-turns-2-the-big-game-is-still-loading",
// 		image: "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/articles-image-set/2nd-Anniversary-web.webp",
// 		category: "Life at Rarepixels",
// 	},
// 	{
// 		title: "Why Serious Businesses Invest in UX Masters, Not Just Creative Designers",
// 		href: "/Blog/why-businesses-need-ux-masters-not-just-creative-designers",
// 		image: "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/articles-image-set/Why-Serious-Businesses-Invest-in-UX-Masters.webp",
// 		category: "UI/UX",
// 	},
// 	{
// 		title: "When UI/UX Loses Emotion, Users Lose Interest: The Crisis No One Talks About",
// 		href: "/Blog/emotion-in-ui-ux-and-user-loyalty",
// 		image: "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/articles-image-set/UX-Makes-Users-Lose-Interest.webp",
// 		category: "UI/UX",
// 	},
// 	{
// 		title: "Exclusive UI/UX Strategies That Can Double Your Client Retention",
// 		href: "/Blog/ui-ux-strategies-client-retention",
// 		image: "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/articles-image-set/UX-Strategies-That-Can-Double-Your-Client-Retention.webp",
// 		category: "UI/UX",
// 	},
// 	{
// 		title: "How UI/UX Design Decides Whether Your Social Media Traffic Stays or Leaves",
// 		href: "/Blog/ui-ux-social-media-marketing-success",
// 		image: "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/articles-image-set/UX-Turns-Social-Media-Traffic-into-Result.webp",
// 		category: "UI/UX",
// 	},
// 	{
// 		title: "Clients Don’t Need More Design Options. They Need One Option That Works.",
// 		href: "/Blog/clients-dont-need-more-design-options-they-need-one-option-that-works",
// 		image: "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/articles-image-set/Design-One-Options.webp",
// 		category: "UI/UX",
// 	},
// 	{
// 		title: "The Gap Between You and Your Competitors Isn’t Marketing. It’s User Experience.",
// 		href: "/Blog/the-gap-between-you-and-your-competitors-isnt-marketing-its-user-experience",
// 		image: "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/articles-image-set/You-and-Your-Competitors.webp",
// 		category: "UI/UX",
// 	},
// 	{
// 		title: "Trending Reels vs Real Branding: What Businesses Might Get Wrong in 2026",
// 		href: "/Blog/trending-reels-vs-real-branding-what-businesses-might-get-wrong-in-2026",
// 		image: "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/articles-image-set/Trending-Reel-Real-Branding.webp",
// 		category: "Branding",
// 	},
// 	{
// 		title: "Why Businesses in 2026 Must Choose UI/UX Partners With Proof, Not Promises",
// 		href: "/Blog/choose-proven-ui-ux-partners-2026",
// 		image: "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/articles-image-set/Why-Businesses-Blog-webp.webp",
// 		category: "UI/UX",
// 	},
// 	{
// 		title: "The UX Mistakes That Cost Startups Their First 1,000 Users - Are You Making Them?",
// 		href: "/Blog/the-ux-mistakes-that-cost-startups-their-first-1000-users-are-you-making-them",
// 		image: "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/articles-image-set/UX-Mistakes.webp",
// 		category: "UI/UX",
// 	},
// 	{
// 		title: "The Power Shift in Branding: Why People No Longer Buy Products, They Buy Purpose and Personality",
// 		href: "/Blog/why-people-buy-purpose-not-products",
// 		image: "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/articles-image-set/why-people-buy-purpose-not-products.webp",
// 		category: "Branding",
// 	},
// 	{
// 		title: "Why Even the Best Designs Fail and What That Teaches Us About the Creative Mindset",
// 		href: "/Blog/why-even-the-best-designs-fail-creative-mindset",
// 		image: "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/articles-image-set/why-even-the-best-designs-fail-and-what-that-teaches-us-about-the-creative-mindset.webp",
// 		category: "UI/UX",
// 	},
// 	{
// 		title: "Design for People, Not for Praise: The Shift That Changes Everything",
// 		href: "/Blog/design-for-people-not-praise",
// 		image: "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/articles-image-set/Design-for-People-Not-for-Praise-webp.webp",
// 		category: "UI/UX",
// 	},
// 	{
// 		title: "At RarePixels, We Don’t Design for Brands That Don’t Know Their Audience. Know Why?",
// 		href: "/Blog/why-our-branding-agency-rejects-brands-without-audience-clarity",
// 		image: "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/articles-image-set/build-your-brand.webp",
// 		category: "Branding",
// 	},
// 	{
// 		title: "The Power of NO in UI/UX: When UI/UX Designers Must Draw the Line",
// 		href: "/Blog/when-uiux-designers-must-say-no",
// 		image: "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/articles-image-set/the_power_of_no_in_uiux.webp",
// 		category: "UI/UX",
// 	},
// 	{
// 		title: "RarePixels Turns One - A Year of Pixels, People & Pure Magic",
// 		href: "/Blog/rarepixels-1st-anniversary-celebration",
// 		image: "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/articles-image-set/rarePixels-turns-one-a-year-of-pixels-people-pure-magic-final.webp",
// 		category: "Life at Rarepixels",
// 	},
// 	{
// 		title: "Stop Stepping In: Hire Experts for UI UX Gems for Your Business",
// 		href: "/Blog/stop-stepping-in-hire-experts-for-ui-ux-gems-for-your-business",
// 		image: "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/articles-image-set/hire-experts-for-ui-ux-gems-for-business.webp",
// 		category: "UI/UX",
// 	},
// 	{
// 		title: "Why MVP is Your Startup's Best Friend – A Complete Guide by RarePixels",
// 		href: "/Blog/why-mvp-is-your-startups-best-friend",
// 		image: "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/articles-image-set/why-MVP-is-your-best-friend.webp",
// 		category: "Technical",
// 	},
// 	{
// 		title: "UI/UX Outsourcing vs In-House Team: Which One Do You Prefer for Your Business?",
// 		href: "/Blog/ui-ux-outsourcing-vs-inhouse",
// 		image: "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/articles-image-set/ux-outsourcing-blog-image.webp",
// 		category: "UI/UX",
// 	},
// 	{
// 		title: "Rebranding Your Business: Smart Move or Just a Cover-Up? Let’s Break It Down.",
// 		href: "/Blog/rebranding-your-business-smart-move-or-just-coverup",
// 		image: "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/articles-image-set/rebranding-your-business.webp",
// 		category: "Branding",
// 	},
// 	{
// 		title: "The Creative Shift: How AI is Redefining Creativity in Design, Storytelling & Art",
// 		href: "/Blog/the-creative-shift-how-ai-is-redefining",
// 		image: "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/articles-image-set/how-ai-is-redefining-creativity.webp",
// 		category: "Comic",
// 	},
// 	{
// 		title: "Choosing a UI/UX Design Company in 2025: Are You Prioritizing Cost Over Quality?",
// 		href: "/Blog/choosing-ui-ux-design-company-in-2025",
// 		image: "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/articles-image-set/choosing-a-ui-ux-design-company-in-2025.webp",
// 		category: "UI/UX",
// 	},
// 	{
// 		title: "Will AI-Generated UI Designs Replace Human Designers (Or Not?)",
// 		href: "/Blog/will-ai-generated-ui-design-replace-human",
// 		image: "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/articles-image-set/ai-vs-human-uiux-design.webp",
// 		category: "UI/UX",
// 	},
// 	{
// 		title: "Top 10 UI Designing Tools You Must Know in 2025",
// 		href: "/Blog/top-10-ui-designing-tools-you-must-know",
// 		image: "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/articles-image-set/top-10-UI-design-tools.webp",
// 		category: "Technical",
// 	},
// 	{
// 		title: "8 Best Practices for Designing Mobile-Friendly Interfaces",
// 		href: "/Blog/practices-for-designing-mobile-friendly",
// 		image: "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/articles-image-set/8-best-practices-for-designing-mobile-friendly-interfaces.webp",
// 		category: "UI/UX",
// 	},
// 	{
// 		title: "The Design Journey: How Your Brand Journey Shapes Your Business",
// 		href: "/Blog/the-design-journey-how-brand",
// 		image: "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/articles-image-set/brand-Jouney.webp",
// 		category: "Branding",
// 	},
// 	{
// 		title: "Top 10 Mistakes Businesses Should Avoid When Selecting a UI/UX Agency in 2025",
// 		href: "/Blog/top-10-mistakes-businesses-avoid",
// 		image: "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/articles-image-set/work-coverize.webp",
// 		category: "UI/UX",
// 	},
// 	{
// 		title: "The Importance of UI/UX Design in Modern Web Development",
// 		href: "/Blog/the-importance-of-ui-ux-design-in-modern-web-development",
// 		image: "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/articles-image-set/the-importance-of-uiux-design-in-modern-web-development.jpg",
// 		category: "UI/UX",
// 	},
// ];

const BlogListingCards = () => {

	const categories = ["All", "UI/UX", "Technical", "Life at Rarepixels", "Branding", "Comic",];

	// const [activeTab, setActiveTab] = useState("All");
	const sectionRef = useRef<HTMLDivElement>(null);

	const handleTabChange = () => {
		sectionRef.current?.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	};

	useEffect(() => {
		const section = sectionRef.current;
		const tabs = document.querySelector<HTMLElement>( ".bloglisting-tab-wrapper" );

		if (!section || !tabs) return;

		let flipAnimation: gsap.core.Timeline | null = null;

		const moveToBottom = () => {
			if (tabs.classList.contains("is-bottom")) return;
			flipAnimation?.kill();
			const state = Flip.getState(tabs);
			tabs.classList.add("is-bottom");
			flipAnimation = Flip.from(state, {
				duration: 2,
				ease: "power3.inOut",
				// absolute: true,
				nested: true,
				overwrite: true,
			});
		};

		const moveToOriginalPosition = () => {
			if (!tabs.classList.contains("is-bottom")) return;
			flipAnimation?.kill();
			const state = Flip.getState(tabs);
			tabs.classList.remove("is-bottom");
			flipAnimation = Flip.from(state, {
				duration: 2,
				ease: "power3.inOut",
				// absolute: true,
				nested: true,
				overwrite: true,
			});
		};

		const scrollTrigger = ScrollTrigger.create({
			trigger: tabs,
			start: "top top",
			end: "bottom bottom",
			endTrigger: section,
			onEnter: () => { moveToBottom(); },
			onLeave: () => { moveToOriginalPosition(); },
			onEnterBack: () => { moveToBottom(); },
			onLeaveBack: () => { moveToOriginalPosition(); },
			invalidateOnRefresh: true,
		});

		const handleRefresh = () => { ScrollTrigger.refresh(); };
		window.addEventListener("resize", handleRefresh);
		return () => {
			window.removeEventListener("resize", handleRefresh);
			flipAnimation?.kill();
			scrollTrigger.kill();
			tabs.classList.remove("is-bottom");
			gsap.set(tabs, { clearProps: "all", });
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
									<TabsTrigger key={category} value={category} className="blog-listing-tab text-18 font-normal py-[6px] px-[20px] border border-[#D9D9D9] rounded-[20px] cursor-pointer" >
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