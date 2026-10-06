"use client";

import Image from "next/image";
import "./servicehero.css";
import gsap from "gsap";
import { useEffect } from "react";

const ServiceHero = () => {

    useEffect(() => {
        const strip = document.querySelector<HTMLElement>(".services-strip");

        if (!strip) return;

        const items = gsap.utils.toArray<HTMLElement>( ".services-strip span" );

        if (!items.length) return;

        const maxScale = 1.3;
        const bound = 300;
        const maxPush = 50;

        gsap.set(items, { transformOrigin: "50% 350%" });

        const handleMouseMove = (event: MouseEvent) => {

            items.forEach((item) => {

                const rect = item.getBoundingClientRect();
                const itemCenter = rect.left + rect.width / 2;

                const distance = itemCenter - event.clientX;

                let scale = 1;
                let x = 0;

                if (Math.abs(distance) < bound) {

                    const normalized = distance / bound;

                    const influence = Math.cos(normalized * Math.PI / 2);
                    scale = 1 + (maxScale - 1) * influence;
                    x = Math.sin(normalized * Math.PI / 2) * maxPush;

                } else {
                    x = distance < 0 ? -maxPush : maxPush;
                }

                gsap.to(item, {
                    duration: 0.3,
                    scale,
                    x,
                    ease: "power2.out",
                    overwrite: true
                });
            });
        };

        const handleMouseLeave = () => {
            gsap.to(items, {
                duration: 0.3,
                scale: 1,
                x: 0,
                ease: "power2.out",
                overwrite: true
            });
        };

        strip.addEventListener("mousemove", handleMouseMove);
        strip.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            strip.removeEventListener("mousemove", handleMouseMove);
            strip.removeEventListener("mouseleave", handleMouseLeave);
        };

    }, []);

    return (
        <section id='first-section' className=" bg-[white] services-section pt-[103px] pb-[11px] overflow-hidden">
            <div className="container">
                <div className="servcies-hero-wrapper flex flex-row-reverse justify-between items-center pb-[40px]">
                    <div className="services-hero-left services-hero-video-desktop w-[790] h-[760px]">
                        <video className='services-video' src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/services-listing/hero/serv-hero-globe-white.mp4" autoPlay muted loop playsInline width={790} height={760}></video>
                    </div>

                    <div className="services-hero-right w-[744px]">
                        <h1 className='text-[black]'>We Build <span className='text-[#ED0180]'>Experiences</span>  That Businesses Choose First Worldwide</h1>

                        <p className='text-18 font-normal text-[black] mt-[108px] services-hero-subtitile'>It has stood the test of time and proceeds Elevate your brand with RarePixels Design everything from strategy to advertising & scale.</p>

                        <div className="services-hero-left services-hero-video-tablet hidden w-[790] h-[760px]">
                            <video className='services-video' src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/services-listing/hero/serv-hero-globe-white.mp4" autoPlay muted loop playsInline width={790} height={760}></video>
                        </div>

                        <div className="services-stats-wrapper flex gap-[60px] mt-[30px]">
                            <div className="services-stat services-stat-1">
                                <div className='se-stats-title flex items-center gap-[20px]'>
                                    <h2 className='text-[#ED0180]'>100+</h2>
                                    <div className='w-[32px] h-[32px]'>
                                        <Image className='services-gif' src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/services-listing/hero/stats-bar.svg" alt='services-bar' width={32} height={32}></Image>
                                    </div>
                                </div>

                                <p className='text-18 font-medium text-[black] w-[156px] mt-[6px]'>Brands Transformed</p>
                            </div>

                            <div className="services-stat services-stat-2">
                                <div className='se-stats-title flex items-center gap-[20px]'>
                                    <h2 className='text-[#ED0180]'>50+</h2>
                                    <div className='w-[32px] h-[32px]'>
                                        <Image className='services-gif' src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/services-listing/hero/stats-clock.svg" alt='services-bar' width={32} height={32}></Image>
                                    </div>
                                </div>

                                <p className='text-18 font-medium text-[black] w-[200px] mt-[6px]'>Bespoke Digital Products Engineered </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="services-hero-animation-strip w-[max-content]">
                <div className="services-strip flex items-start gap-[26px]">
                    <span className='h4 text-[black]'>UXUI Design</span>
                    <span className='h4 text-[black]'>*</span>
                    <span className='h4 text-[black]'> Branding</span>
                    <span className='h4 text-[black]'>*</span>
                    <span className='h4 text-[black]'>Digital Marketing</span>
                    <span className='h4 text-[black]'>*</span>
                    <span className='h4 text-[black]'>Development</span>
                    <span className='h4 text-[black]'>*</span>
                    <span className='h4 text-[black]'>Strategy</span>
                    <span className='h4 text-[black]'> * </span>
                    <span className='h4 text-[black]'>UXUI Design</span>
                    <span className='h4 text-[black]'>*</span>
                    <span className='h4 text-[black]'> Branding</span>
                    <span className='h4 text-[black]'>*</span>
                    <span className='h4 text-[black]'>Digital Marketing</span>
                    <span className='h4 text-[black]'>*</span>
                    <span className='h4 text-[black]'>Development</span>
                    <span className='h4 text-[black]'>*</span>
                    <span className='h4 text-[black]'>Strategy</span>
                    <span className='h4 text-[black]'> * </span>
                    <span className='h4 text-[black]'>UXUI Design</span>
                    <span className='h4 text-[black]'>*</span>
                    <span className='h4 text-[black]'> Branding</span>
                    <span className='h4 text-[black]'>*</span>
                    <span className='h4 text-[black]'>Digital Marketing</span>
                    <span className='h4 text-[black]'>*</span>
                    <span className='h4 text-[black]'>Development</span>
                    <span className='h4 text-[black]'>*</span>
                    <span className='h4 text-[black]'>Strategy</span>
                    <span className='h4 text-[black]'> * </span>
                    <span className='h4 text-[black]'>UXUI Design</span>
                    <span className='h4 text-[black]'>*</span>
                    <span className='h4 text-[black]'> Branding</span>
                    <span className='h4 text-[black]'>*</span>
                    <span className='h4 text-[black]'>Digital Marketing</span>
                    <span className='h4 text-[black]'>*</span>
                    <span className='h4 text-[black]'>Development</span>
                    <span className='h4 text-[black]'>*</span>
                    <span className='h4 text-[black]'>Strategy</span>
                    <span className='h4 text-[black]'> * </span>
                    <span className='h4 text-[black]'>UXUI Design</span>
                    <span className='h4 text-[black]'>*</span>
                    <span className='h4 text-[black]'> Branding</span>
                    <span className='h4 text-[black]'>*</span>
                    <span className='h4 text-[black]'>Digital Marketing</span>
                    <span className='h4 text-[black]'>*</span>
                    <span className='h4 text-[black]'>Development</span>
                    <span className='h4 text-[black]'>*</span>
                    <span className='h4 text-[black]'>Strategy</span>
                    <span className='h4 text-[black]'> * </span>
                </div>
            </div>
        </section>
    )
}

export default ServiceHero