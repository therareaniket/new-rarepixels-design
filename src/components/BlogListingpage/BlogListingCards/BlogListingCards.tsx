'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './bloglistingcard.css';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { blogs } from '@/data/blogs';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BlogListingCards = () => {
    const categories = ["All", "UI/UX", "Technical", "Life at Rarepixels", "Branding", "Comic"];
    const sectionRef = useRef<HTMLElement>(null);
    const tabStickyWrapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        const stickyWrap = tabStickyWrapRef.current;

        if (!section || !stickyWrap) return;

        const ctx = gsap.context(() => {
            // Calculate travel distance dynamically so it moves from top to the bottom of the viewport
            const getTravelDistance = () => {
                const sectionRect = section.getBoundingClientRect();
                const wrapHeight = stickyWrap.offsetHeight;
                // Distance from top of section to viewport bottom minus element height & bottom padding
                return sectionRect.height - wrapHeight - 150;
            };

            gsap.fromTo(
                stickyWrap,
                { y: 0 },
                {
                    y: getTravelDistance,
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: "top top+=100",
                        end: "bottom bottom-=100",
                        scrub: 0.5,
                        invalidateOnRefresh: true, // Recalculates on window resize
                    }
                }
            );
        }, sectionRef);

        ScrollTrigger.refresh();

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id='blog-listing-cate-section' className='section blog-listing-cate-section'>
            <div className="container-sm">
                <div className="bloglisting-title-wrapper w-[780px]">
                    <h2 className='font-semibold'>Top Picks</h2>
                    <p className='text-18 font-normal mt-[30px]'>A collection of thoughts, learnings, and perspectives from our work in design, technology, and building impactful digital experiences.</p>
                </div>

                <Tabs className="bloglisting-layout">
                    <div className="blog-list-tabs">
                        <div ref={tabStickyWrapRef} className="bloglisting-tab-sticky-wrap">
                            <TabsList className="bloglisting-tab-wrapper">
                                {categories.map((category) => (
                                    <TabsTrigger key={category} value={category} className="blog-listing-tab text-18 font-normal py-[6px] px-[18px] rounded-[20px] cursor-pointer">
                                        {category}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </div>
                    </div>

                    <div className="bloglisting-content-wrapper">
                        {categories.map((category) => (
                            <TabsContent key={category} value={category}>
                                <div className="blog-listing-card-wrapper flex gap-[40px] flex-wrap">
                                    {(category === "All" ? blogs : blogs.filter((blog) => blog.category === category)).map((blog) => (
                                        <Link key={blog.href} href={blog.href} title={blog.title} className="block blog-listing-card">
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
            </div>
        </section>
    );
};

export default BlogListingCards;