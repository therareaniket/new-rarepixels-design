"use client";

import Image from "next/image";
import "./servicehero.css";

const ServiceHero = () => {

    return (
        <section id='first-section' className=" bg-[black] services-hero-section overflow-hidden section">
            <div className="container">
                <div className="flex flex-col-reverse gap-[50px] services-hero-content">
                    <div className="services-special-wrapper flex items-center justify-between">
                        <div className="services-special-left flex justify-between text-[#fff]">
                            <h2 className='font-semibold flex flex-col services-spec-h2-tablet'>
                                One Vision. <br /> One Team.<br /> Everything Connected.
                            </h2>

                            <p className='text-18 flex flex-col gap-[18px] w-[45%]'>
                                <span className='font-regular'>Different agencies often mean different ideas, disconnected communication, and a brand experience that doesn&apos;t quite come together.</span>
                                <span className='font-semibold'>At RarePixels, strategy, branding, design, development, and social media work as parts of one bigger picture. Every team works towards the same vision, every detail follows the same direction, and every deliverable feels like it belongs. No disconnected pieces. Just one consistent experience built around your business.</span>
                            </p>
                        </div>
                    </div>
                    <div className="servcies-hero-wrapper flex flex-row-reverse justify-between items-center">
                        <div className="services-hero-left services-hero-video-desktop w-[790] h-[760px]">
                            {/* <video className='services-video' src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/services-listing/hero/serv-hero-globe-white.mp4" autoPlay muted loop playsInline width={790} height={760}></video> */}
                            <video className='services-video' src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/services-listing/globe-video-4.mp4" autoPlay muted loop playsInline width={790} height={760}></video>
                        </div>

                        <div className="services-hero-right w-[744px]">
                            <h1 className='text-[white]'> Everything Your <span className='text-[#ED0180]'>Brand</span> Needs to Move Forward.</h1>

                            <p className='text-18 font-normal text-[white] mt-[30px] services-hero-subtitile'>From brand identity and digital design to development and social media, we bring strategy and creativity together to build solutions that solve real problems and create meaningful business impact.</p>

                            <div className="services-hero-left services-hero-video-tablet hidden w-[790] h-[760px]">
                                <video className='services-video' src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/services-listing/globe-video-4.mp4" autoPlay muted loop playsInline width={790} height={760}></video>
                                {/* <video className='services-video' src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/services-listing/hero/serv-hero-globe-white.mp4" autoPlay muted loop playsInline width={790} height={760}></video> */}
                            </div>

                            <div className="services-stats-wrapper flex gap-[60px] mt-[108px]">
                                <div className="services-stat services-stat-1">
                                    <div className='se-stats-title flex items-center gap-[20px]'>
                                        <h2 className='text-[#ED0180]'>100+</h2>
                                        <div className='w-[32px] h-[32px]'>
                                            <Image className='services-gif' src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/services-listing/hero/stats-bar.svg" alt='services-bar' width={32} height={32}></Image>
                                        </div>
                                    </div>

                                    <p className='text-18 font-medium text-[white] w-[156px] mt-[6px]'>Brands Transformed</p>
                                </div>

                                <div className="services-stat services-stat-2">
                                    <div className='se-stats-title flex items-center gap-[20px]'>
                                        <h2 className='text-[#ED0180]'>50+</h2>
                                        <div className='w-[32px] h-[32px]'>
                                            <Image className='services-gif' src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/services-listing/hero/stats-clock.svg" alt='services-bar' width={32} height={32}></Image>
                                        </div>
                                    </div>

                                    <p className='text-18 font-medium text-[white] w-[200px] mt-[6px]'>Digital Products Engineered</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceHero