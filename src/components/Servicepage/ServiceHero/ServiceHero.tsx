"use client";

import Image from 'next/image';
import './servicehero.css'

const ServiceHero = () => {
    return (
        <section className=" bg-[white] services-section pt-[103px] pb-[11px] overflow-hidden">
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
                    <span className='h4 text-[#ED0180]'>UXUI Design</span>
                    <span className='h4 text-[#ED0180]'>*</span>
                    <span className='h4 text-[#ED0180]'> Branding</span>
                    <span className='h4 text-[#ED0180]'>*</span>
                    <span className='h4 text-[#ED0180]'>Digital Marketing</span>
                    <span className='h4 text-[#ED0180]'>*</span>
                    <span className='h4 text-[#ED0180]'>Development</span>
                    <span className='h4 text-[#ED0180]'>*</span>
                    <span className='h4 text-[#ED0180]'>Strategy</span>
                    <span className='h4 text-[#ED0180]'> * </span>
                    <span className='h4 text-[#ED0180]'>UXUI Design</span>
                    <span className='h4 text-[#ED0180]'>*</span>
                    <span className='h4 text-[#ED0180]'> Branding</span>
                    <span className='h4 text-[#ED0180]'>*</span>
                    <span className='h4 text-[#ED0180]'>Digital Marketing</span>
                    <span className='h4 text-[#ED0180]'>*</span>
                    <span className='h4 text-[#ED0180]'>Development</span>
                    <span className='h4 text-[#ED0180]'>*</span>
                    <span className='h4 text-[#ED0180]'>Strategy</span>
                    <span className='h4 text-[#ED0180]'> * </span>
                    <span className='h4 text-[#ED0180]'>UXUI Design</span>
                    <span className='h4 text-[#ED0180]'>*</span>
                    <span className='h4 text-[#ED0180]'> Branding</span>
                    <span className='h4 text-[#ED0180]'>*</span>
                    <span className='h4 text-[#ED0180]'>Digital Marketing</span>
                    <span className='h4 text-[#ED0180]'>*</span>
                    <span className='h4 text-[#ED0180]'>Development</span>
                    <span className='h4 text-[#ED0180]'>*</span>
                    <span className='h4 text-[#ED0180]'>Strategy</span>
                    <span className='h4 text-[#ED0180]'> * </span>
                    <span className='h4 text-[#ED0180]'>UXUI Design</span>
                    <span className='h4 text-[#ED0180]'>*</span>
                    <span className='h4 text-[#ED0180]'> Branding</span>
                    <span className='h4 text-[#ED0180]'>*</span>
                    <span className='h4 text-[#ED0180]'>Digital Marketing</span>
                    <span className='h4 text-[#ED0180]'>*</span>
                    <span className='h4 text-[#ED0180]'>Development</span>
                    <span className='h4 text-[#ED0180]'>*</span>
                    <span className='h4 text-[#ED0180]'>Strategy</span>
                    <span className='h4 text-[#ED0180]'> * </span>
                    <span className='h4 text-[#ED0180]'>UXUI Design</span>
                    <span className='h4 text-[#ED0180]'>*</span>
                    <span className='h4 text-[#ED0180]'> Branding</span>
                    <span className='h4 text-[#ED0180]'>*</span>
                    <span className='h4 text-[#ED0180]'>Digital Marketing</span>
                    <span className='h4 text-[#ED0180]'>*</span>
                    <span className='h4 text-[#ED0180]'>Development</span>
                    <span className='h4 text-[#ED0180]'>*</span>
                    <span className='h4 text-[#ED0180]'>Strategy</span>
                    <span className='h4 text-[#ED0180]'> * </span>
                </div>
            </div>
        </section>
    )
}

export default ServiceHero