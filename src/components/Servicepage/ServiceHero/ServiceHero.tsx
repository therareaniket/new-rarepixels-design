"use client";

import Image from 'next/image';
import './servicehero.css'

const ServiceHero = () => {
    return (
        <section className=" bg-[white] services-section pt-[103px] pb-[11px] overflow-hidden">
            <div className="container">
                <div className="servcies-hero-wrapper flex flex-row-reverse justify-between items-center pb-[40px]">
                    <div className="services-hero-left w-[790] h-[760px]">
                        <video className='services-video' src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/services-listing/services-hero-video.mp4" autoPlay muted loop playsInline width={790} height={760}></video>
                    </div>

                    <div className="services-hero-right w-[744px]">
                        <h1 className='text-[black]'>We Build <span className='text-[#ED0180]'>Experiences</span>  That Businesses Choose First Worldwide</h1>

                        <p className='text-18 font-normal text-[black] mt-[108px] services-hero-subtitile'>It has stood the test of time and proceeds Elevate your brand with RarePixels Design everything from strategy to advertising & scale.</p>

                        <div className="services-stats-wrapper flex gap-[60px] mt-[30px]">
                            <div className="services-stat services-stat-1">
                                <div className='se-stats-title flex items-center gap-[20px]'>
                                    <h2 className='text-[#ED0180]'>100+</h2>
                                    <div className='w-[32px] h-[32px]'>
                                        <Image className='services-gif' src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/services-listing/hero/services-stat-bar.gif" alt='services-bar' width={32} height={32}></Image>
                                    </div>
                                </div>

                                <p className='text-18 font-medium text-[black] w-[156px] mt-[6px]'>Brands Transformed</p>
                            </div>

                            <div className="services-stat services-stat-2">
                                <div className='se-stats-title flex items-center gap-[20px]'>
                                    <h2 className='text-[#ED0180]'>50+</h2>
                                    <div className='w-[32px] h-[32px]'>
                                        <Image className='services-gif' src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/services-listing/hero/services-stat-clock.gif" alt='services-bar' width={32} height={32}></Image>
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
                </div>
            </div>
        </section>
    )
}

export default ServiceHero