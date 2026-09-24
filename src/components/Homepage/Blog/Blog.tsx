"use client";

import Link from 'next/link';
import './blog.css'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Blog = () => {
    return (
        <section className='section blog-section'>
            <div className="container">
                <div className="hm-blog-title text-center">
                    <h2 className='font-semibold'>Our Blog</h2>

                    <p className='font-normal text-18 w-[780px] website-subtitle-mt m-[auto]'>A collection of thoughts, learnings, and perspectives from our work in design, technology, and building impactful digital experiences.</p>
                </div>

                <div className="hm-blog-wrapper flex align-start gap-[30px] mt-[60px]">
                    <div className="hm-blog-left w-[785px] blog-card-desktop">
                        <div className="hm-blog-image-l w-[100%] h-[442px] rounded-[20px] bg-[black]"></div>

                        <h3 className='font-semibold mt-[30px] mb-[20px]'>RarePixels Turns 2. The Big Game Is Still Loading.</h3>

                        <div className="hm-blog-author-wrapper flex items-center justify-between">
                            <div className="hm-blog-author-name">
                                <p className='font-normal flex items-center gap-[6px] text-18 text-[#8C8B8C]'>
                                    <span>By Bina Yogesh</span>
                                    |
                                    <span>June 25, 2026</span>
                                    |
                                    <span>7 mins read</span>
                                </p>
                            </div>

                            <div className="hm-blog-social-share flex align-center gap-[20px] text-[#8C8B8C]">
                                <span className='icon-linkedin'></span>
                                <span className='icon-instagram'></span>
                                <span className='icon-threads'></span>
                                <span className='icon-facebook'></span>
                                <span className='icon-twitter'></span>
                                <span className='icon-youtube'></span>
                            </div>
                        </div>

                        <p className='blog-redirect text-18 font-normal mt-[30px]'>Two years of ideas turning into brands. Two years of challenges turning into opportunities. Two years of helping businesses become easier to notice, trust, and remember.
                            <Link href="#">Read More</Link>
                        </p>
                    </div>

                    <div className="hm-blog-right w-[785px]">
                        <div className="hm-small-blog-card w-[100%] h-[434px] flex items-start justify-between blog-card-desktop">
                            <div className="hm-small-blog-image w-[350px] h-[100%] rounded-[20px] bg-[black]"></div>

                            <div className="hm-blog-text w-[405px]">
                                <h3 className='font-semibold'>Why Serious Businesses Invest in UX Masters, Not Just Creative Designers</h3>

                                <div className="hm-blog-author-wrapper hm-blog-author-wrapper-2 flex flex-col gap-[14] mt-[20px]">
                                    <div className="hm-blog-author-name">
                                        <p className='font-normal flex flex-wrap items-center gap-[6px] text-18 text-[#8C8B8C]'>
                                            <span>By Bina Yogesh</span>
                                            |
                                            <span>June 25, 2026</span>
                                            |
                                            <span>7 mins read</span>
                                        </p>
                                    </div>

                                    <div className="hm-blog-social-share flex align-center gap-[20px] text-[#8C8B8C]">
                                        <span className='icon-linkedin'></span>
                                        <span className='icon-instagram'></span>
                                        <span className='icon-threads'></span>
                                        <span className='icon-facebook'></span>
                                        <span className='icon-twitter'></span>
                                        <span className='icon-youtube'></span>
                                    </div>
                                </div>

                                <p className='text-18 font-normal mt-[30px] blog-redirect'>A visually attractive interface may convince users to explore your platform once. But whether they stay, engage, and return depends entirely on experience.
                                    <Link href="#">Read More</Link>
                                </p>
                            </div>
                        </div>

                        <div className="hm-blog-tablet-swiper hidden">
                            <Swiper
                                modules={[Autoplay]}
                                slidesPerView={2}
                                spaceBetween={20}
                                speed={1000}
                                // loop={true}
                                autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: false }}
                                breakpoints={{
                                    0: { slidesPerView: 1.1 },
                                    576: { slidesPerView: 1.4 },
                                    992: { slidesPerView: 1.8 },
                                }}
                            >
                                <SwiperSlide>
                                    <div className="blog-swiper-slide">
                                        <div className="hm-small-blog-image w-[350px] h-[100%] rounded-[20px] bg-[black]"></div>

                                        <div className="hm-blog-text w-[405px]">
                                            <h3 className='font-semibold'>RarePixels Turns 2. The Big Game Is Still Loading.</h3>

                                            <div className="hm-blog-author-wrapper hm-blog-author-wrapper-2 flex flex-col gap-[14] mt-[20px]">
                                                <div className="hm-blog-author-name">
                                                    <p className='font-normal flex flex-wrap items-center gap-[6px] text-18 text-[#8C8B8C]'>
                                                        <span>By Bina Yogesh</span>
                                                        |
                                                        <span>June 25, 2026</span>
                                                        |
                                                        <span>7 mins read</span>
                                                    </p>
                                                </div>

                                                <div className="hm-blog-social-share flex align-center gap-[20px] text-[#8C8B8C]">
                                                    <span className='icon-linkedin'></span>
                                                    <span className='icon-instagram'></span>
                                                    <span className='icon-threads'></span>
                                                    <span className='icon-facebook'></span>
                                                    <span className='icon-twitter'></span>
                                                    <span className='icon-youtube'></span>
                                                </div>
                                            </div>

                                            <p className='text-18 font-normal mt-[30px] blog-redirect'>Two years of ideas turning into brands. Two years of challenges turning into opportunities. Two years of helping businesses become easier to notice, trust, and remember.
                                                <Link href="#">Read More</Link>
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="blog-swiper-slide">
                                        <div className="hm-small-blog-image w-[350px] h-[100%] rounded-[20px] bg-[black]"></div>

                                        <div className="hm-blog-text w-[405px]">
                                            <h3 className='font-semibold'>Why Serious Businesses Invest in UX Masters, Not Just Creative Designers</h3>

                                            <div className="hm-blog-author-wrapper hm-blog-author-wrapper-2 flex flex-col gap-[14] mt-[20px]">
                                                <div className="hm-blog-author-name">
                                                    <p className='font-normal flex flex-wrap items-center gap-[6px] text-18 text-[#8C8B8C]'>
                                                        <span>By Bina Yogesh</span>
                                                        |
                                                        <span>June 25, 2026</span>
                                                        |
                                                        <span>7 mins read</span>
                                                    </p>
                                                </div>

                                                <div className="hm-blog-social-share flex align-center gap-[20px] text-[#8C8B8C]">
                                                    <span className='icon-linkedin'></span>
                                                    <span className='icon-instagram'></span>
                                                    <span className='icon-threads'></span>
                                                    <span className='icon-facebook'></span>
                                                    <span className='icon-twitter'></span>
                                                    <span className='icon-youtube'></span>
                                                </div>
                                            </div>

                                            <p className='text-18 font-normal mt-[30px] blog-redirect'>A visually attractive interface may convince users to explore your platform once. But whether they stay, engage, and return depends entirely on experience.
                                                <Link href="#">Read More</Link>
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>

                        <div className="hm-blog-hr"></div>

                        <div className="hm-blog-cta w-[100%] h-[222px] bg-[#040E36] rounded-[20px] mt-[30px] p-[30px] flex items-end justify-between">
                            <div className="hm-blog-cta-left w-[432px]">
                                <h3 className='font-semibold text-[white]'>Ideas to Insights</h3>

                                <p className=' text-18 font-normal text-[#C6C6C6] mt-[20px]'>Thoughtful perspectives on design, development, branding, and digital strategy. Practical ideas shaped by real projects, real challenges, and real business outcomes.</p>
                            </div>

                            <Link href="#" title="Start Your Project" className="text-20 px-[20px] py-[10px] bg-[#ED0180] text-white rounded-[30px]">View All Categories <span className="mm-cta inline-block ml-[12px] icon-hero-cta-arrow text-[16px]"></span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog