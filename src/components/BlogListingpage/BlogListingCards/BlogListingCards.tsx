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

		let removeViewportListeners = () => { };

		const context = gsap.context(() => {
			const DESKTOP_BOTTOM_GAP = 50;
			const MOBILE_DOWN_BOTTOM_GAP = 30;
			const MOBILE_UP_BOTTOM_GAP = 20;

			const SAFETY_GAP = 30;
			const DIRECTION_THRESHOLD = 12;

			let previousDirection = 1;
			let pendingDirection = 1;
			let directionStartScroll = window.scrollY;

			let hasReachedStickyPosition = false;

			let currentBottomGap = window.matchMedia(
				"(max-width: 575px)"
			).matches
				? MOBILE_DOWN_BOTTOM_GAP
				: DESKTOP_BOTTOM_GAP;

			let viewportUpdateFrame: number | null = null;

			const isMobile = () => {
				return window.matchMedia(
					"(max-width: 575px)"
				).matches;
			};

			const getBottomGap = (direction: number) => {
				if (!isMobile()) {
					return DESKTOP_BOTTOM_GAP;
				}

				return direction === -1
					? MOBILE_UP_BOTTOM_GAP
					: MOBILE_DOWN_BOTTOM_GAP;
			};

			const getVisibleViewportBottom = () => {
				const visualViewport = window.visualViewport;

				if (visualViewport) {
					return (
						visualViewport.offsetTop +
						visualViewport.height
					);
				}

				return window.innerHeight;
			};

			const calculateBottomTop = (bottomGap: number) => {
				const wrapperHeight = tabWrapper.offsetHeight;
				const visibleViewportBottom =
					getVisibleViewportBottom();

				return Math.max(
					0,
					visibleViewportBottom -
					wrapperHeight -
					bottomGap
				);
			};

			const updateBottomSpace = () => {
				const wrapperHeight = tabWrapper.offsetHeight;

				const largestBottomGap = isMobile() ? MOBILE_UP_BOTTOM_GAP : DESKTOP_BOTTOM_GAP;

				section.style.setProperty(
					"--tab-bottom-space",
					`${wrapperHeight +
					largestBottomGap +
					SAFETY_GAP
					}px`
				);
			};

			const animateToBottom = (
				direction: number,
				duration = 0.4
			) => {
				const nextBottomGap = getBottomGap(direction);

				if (nextBottomGap === currentBottomGap) return;

				currentBottomGap = nextBottomGap;

				tabAnimationRef.current?.kill();

				tabAnimationRef.current = gsap.to(
					tabWrapper,
					{
						top: calculateBottomTop(
							currentBottomGap
						),
						duration,
						ease: "power2.out",
						overwrite: true,
					}
				);
			};

			const animateToInitialPosition = () => {
				hasReachedStickyPosition = false;

				tabAnimationRef.current?.kill();

				tabAnimationRef.current = gsap.to(
					tabWrapper,
					{
						top: 0,
						duration: 0.9,
						ease: "power3.out",
						overwrite: true,
					}
				);
			};

			const updateViewportPosition = () => {
				if (viewportUpdateFrame !== null) {
					window.cancelAnimationFrame(
						viewportUpdateFrame
					);
				}

				viewportUpdateFrame =
					window.requestAnimationFrame(() => {
						viewportUpdateFrame = null;

						updateBottomSpace();

						if (!hasReachedStickyPosition) {
							return;
						}

						tabAnimationRef.current?.kill();

						gsap.set(tabWrapper, {
							top: calculateBottomTop(
								currentBottomGap
							),
						});
					});
			};

			updateBottomSpace();

			const scrollTrigger = ScrollTrigger.create({
				trigger: tabWrapper,
				start: "top top",
				endTrigger: section,
				end: "bottom bottom",

				onEnter: () => {
					hasReachedStickyPosition = true;

					previousDirection = 1;
					pendingDirection = 1;
					directionStartScroll = window.scrollY;

					currentBottomGap = isMobile()
						? MOBILE_DOWN_BOTTOM_GAP
						: DESKTOP_BOTTOM_GAP;

					tabAnimationRef.current?.kill();

					tabAnimationRef.current = gsap.to(
						tabWrapper,
						{
							top: calculateBottomTop(
								currentBottomGap
							),
							duration: 1.3,
							ease: "power3.out",
							overwrite: true,
						}
					);
				},

				onEnterBack: () => {
					hasReachedStickyPosition = true;

					previousDirection = -1;
					pendingDirection = -1;
					directionStartScroll = window.scrollY;

					if (isMobile()) {
						currentBottomGap =
							MOBILE_UP_BOTTOM_GAP;

						tabAnimationRef.current?.kill();

						tabAnimationRef.current = gsap.to(
							tabWrapper,
							{
								top: calculateBottomTop(
									currentBottomGap
								),
								duration: 1.4,
								ease: "power2.out",
								overwrite: true,
							}
						);
					}
				},

				onUpdate: (self) => {
					if (
						!hasReachedStickyPosition ||
						!self.isActive
					) {
						return;
					}

					const direction = self.direction;
					const currentScroll = window.scrollY;

					if (direction !== pendingDirection) {
						pendingDirection = direction;
						directionStartScroll = currentScroll;
						return;
					}

					const directionDistance = Math.abs(
						currentScroll - directionStartScroll
					);

					if (
						directionDistance <
						DIRECTION_THRESHOLD
					) {
						return;
					}

					if (direction === previousDirection) {
						return;
					}

					previousDirection = direction;
					directionStartScroll = currentScroll;

					if (direction === -1) {
						animateToBottom(-1, 0.4);
					} else {
						animateToBottom(1, 0.4);
					}
				},

				onLeaveBack: () => {
					previousDirection = -1;
					pendingDirection = -1;
					directionStartScroll = window.scrollY;

					animateToInitialPosition();
				},

				invalidateOnRefresh: true,

				onRefresh: (self) => {
					updateBottomSpace();

					if (
						self.isActive &&
						hasReachedStickyPosition
					) {
						gsap.set(tabWrapper, {
							top: calculateBottomTop(
								currentBottomGap
							),
						});
					} else if (
						self.scroll() <= self.start
					) {
						gsap.set(tabWrapper, {
							top: 0,
						});
					}
				},
			});

			const visualViewport = window.visualViewport;

			visualViewport?.addEventListener("resize", updateViewportPosition);
			visualViewport?.addEventListener("scroll", updateViewportPosition);
			window.addEventListener("resize", updateViewportPosition);

			tabScrollTriggerRef.current = scrollTrigger;

			removeViewportListeners = () => {
				visualViewport?.removeEventListener(
					"resize",
					updateViewportPosition
				);

				visualViewport?.removeEventListener(
					"scroll",
					updateViewportPosition
				);

				window.removeEventListener(
					"resize",
					updateViewportPosition
				);

				if (viewportUpdateFrame !== null) {
					window.cancelAnimationFrame(
						viewportUpdateFrame
					);

					viewportUpdateFrame = null;
				}
			};
		}, section);

		return () => {
			removeViewportListeners();

			tabAnimationRef.current?.kill();
			tabScrollTriggerRef.current?.kill();

			tabAnimationRef.current = null;
			tabScrollTriggerRef.current = null;

			section.style.removeProperty(
				"--tab-bottom-space"
			);

			context.revert();
		};
	}, []);

	const scrollResetTimerRef = useRef<number | null>(null);
	const scrollListenerRef = useRef<(() => void) | null>(null);

	const handleCategoryChange = () => {
		const section = sectionRef.current;
		const tabWrapper = tabWrapperRef.current;
		const scrollTrigger = tabScrollTriggerRef.current;

		if (!section || !tabWrapper) return;

		if (scrollResetTimerRef.current !== null) {
			window.clearTimeout(scrollResetTimerRef.current);
			scrollResetTimerRef.current = null;
		}
		
		if (scrollListenerRef.current) {
			window.removeEventListener("scroll", scrollListenerRef.current);
			scrollListenerRef.current = null;
		}

		scrollTrigger?.disable(false);
		tabAnimationRef.current?.kill();
		tabAnimationRef.current = null;

		gsap.set(tabWrapper, { top: 0 });

		const sectionTop =
			section.getBoundingClientRect().top + window.scrollY;

		if (window.scrollY > sectionTop) {
			window.scrollTo({
				top: sectionTop,
				behavior: "auto",
			});
		}

		const finalizeReset = () => {
			if (scrollListenerRef.current) {
				window.removeEventListener("scroll", scrollListenerRef.current);
				scrollListenerRef.current = null;
			}

			requestAnimationFrame(() => {
				gsap.set(tabWrapper, { top: 0 });
				ScrollTrigger.refresh();

				if (scrollTrigger) {
					scrollTrigger.enable();

					if (window.scrollY > scrollTrigger.start && window.scrollY < scrollTrigger.end) {
						scrollTrigger.refresh();
					}
				}
			});
		};

		const onScroll = () => {
			if (scrollResetTimerRef.current !== null) {
				window.clearTimeout(scrollResetTimerRef.current);
			}
			scrollResetTimerRef.current = window.setTimeout(finalizeReset, 120);
		};

		scrollListenerRef.current = onScroll;
		window.addEventListener("scroll", onScroll, { passive: true });
		scrollResetTimerRef.current = window.setTimeout(finalizeReset, 120);
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