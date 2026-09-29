"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Link from 'next/link';
import './aboutteams.css'
import Image from "next/image";

const AboutTeams = () => {
    return (
        <section className="section">
            <div className="container-sm ">
                <div className="teams-container relative">
                <div className="abt-teams-wrapper w-[1200px] m-auto flex justify-between items-end">
                    <div className="abt-teams-left">
                        <h2 className='text-80 w-[287px] mb-[40px]'>People Behind The Pixels</h2>
                        <Link href="#" title="Start Your Project" className="text-20 px-[20px] py-[10px] bg-[#ED0180] text-white rounded-[30px]">Life at RPD<span className="mm-cta inline-block ml-[12px] icon-hero-cta-arrow text-[16px]"></span></Link>
                    </div>

                    <div className="abt-teams-right w-[768]">
                        <Swiper
                            modules={[Autoplay]}
                            slidesPerView={1}
                            spaceBetween={20}
                            speed={1000}
                            autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: false }}
                        >
                            <SwiperSlide className="flex items-end w-[100%]">
                                <div className="abt-author-wrapper w-[100%] flex items-end">
                                    <div className="abt-author-story w-[400px] bg-[#ED0180] h-[max-content]">
                                        <p className='text-18 font-normal text-[white]'>At RarePixels, Bina brings together creativity, curiosity, and a sharp eye for what makes an experience meaningful. She believes great work starts by understanding the problem, asking the right questions, and finding a better way forward. Her approach blends creative thinking with purpose, shaping the vision and the culture behind RarePixels.</p>
                                        <div className='teams-authorname pt-[20px] mt-[20px]'>
                                            <h3 className='h5 font-semibold text-[white]'>Bina Yogesh</h3>
                                            <p className='text-18 font-normal text-[white]'>Founder</p>
                                        </div>
                                    </div>

                                    <div className="abt-author-image relative z-[2]">
                                        <Image src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/aboutpage/abt-teams/teams-author.webp" alt="" width={417} height={516}></Image>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="flex items-end w-[100%]">
                                <div className="abt-author-wrapper w-[100%] flex items-end">
                                    <div className="abt-author-story w-[400px] bg-[#040E36] h-[max-content]">
                                        <p className='text-18 font-normal text-[white]'>Yogesh brings a balance of strategic thinking, execution, and a constant drive to make things better. He believes ideas become valuable when they are thoughtfully built and made to work in the real world. From shaping solutions to pushing projects forward, he plays a key role in turning the RarePixels vision into meaningful work.</p>
                                        <div className='teams-authorname pt-[20px] mt-[20px]'>
                                            <h3 className='h5 font-semibold text-[white]'>Yogesh</h3>
                                            <p className='text-18 font-normal text-[white]'>Co-founder</p>
                                        </div>
                                    </div>

                                    <div className="abt-author-image relative z-[2]">
                                        <Image src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/aboutpage/abt-teams/teams-author.webp" alt="" width={417} height={516}></Image>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>

                <div className="teams-sections-pixels">
                    <Image className="teams-pixel-1 absolute top-[0] left-[0]" src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/aboutpage/abt-teams/teams-pixel-1.svg" alt="teams-pixel" width={152} height={232}></Image>
                    <Image className="teams-pixel-2 absolute top-[0] right-[0]" src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/aboutpage/abt-teams/teams-pixel-2.svg" alt="teams-pixel" width={186} height={205}></Image>
                    <Image className="teams-pixel-3 absolute bottom-[0] left-[0] z-[-1]" src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/aboutpage/abt-teams/teams-pixel-3.svg" alt="teams-pixel" width={186} height={205}></Image>
                    <Image className="teams-pixel-4 absolute bottom-[0] right-[0] z-[3]" src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/aboutpage/abt-teams/teams-pixel-4.svg" alt="teams-pixel" width={312} height={296}></Image>
                </div>
                </div>
            </div>
        </section>
    )
}

export default AboutTeams