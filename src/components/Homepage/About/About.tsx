"use client";

import './about.css'
import PixelImageCanvas from "@/animations/PixelImageReveal";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useEffect, useLayoutEffect } from 'react';

const CDN_URL = "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev";

const About = () => {
    gsap.registerPlugin(ScrollTrigger);
    
    useEffect(() => {
        if(typeof window !== 'undefined' && window.innerWidth >= 640) {

            gsap.set(".hm-abt-card:nth-child(1)", { xPercent: 50, yPercent: 50, opacity: 0, scale: 0.5, } )
            gsap.set(".hm-abt-card:nth-child(2)", { xPercent: -50, yPercent: 50, opacity: 0, scale: 0.5, } )
            gsap.set(".hm-abt-card:nth-child(3)", { xPercent: 50, yPercent: -50, opacity: 0, scale: 0.5, } )
            gsap.set(".hm-abt-card:nth-child(4)", { xPercent: -50, yPercent: -50, opacity: 0, scale: 0.5, } )
            
            gsap.to(".hm-abt-card",
                { opacity: 1, scale: 1, xPercent: 0, yPercent: 0, duration: 0.5, stagger: 0.5,
                    scrollTrigger: {
                        trigger: ".hm-abt-content-wrapper",
                        start: "top 60%",
                    }
                } 
            )
        } else {
            gsap.fromTo(".hm-abt-card", 
                { opacity: 0, scale: 0.5, y: 100 }, 
                { opacity: 1, scale: 1, y: 0, duration: 0.8, delay: 0.3, stagger: 0.5,
                    scrollTrigger: {
                        trigger: ".hm-abt-pointers",
                        start: "top 70%",
                    }
                } 
            )
        }
    }, []);

    return (
        <section className="section bg-[#040E36]">
            <div className="container">
                <div className="hm-abt-wrapper">
                    <div className="hm-abt-title-wrapper flex justify-between text-[white]">
                        <h2 className="text-semibold w-[632px]">Making Businesses Easier To Notice, Trust, And Remember.</h2>
                        <p className="text-18 w-[802px] flex flex-col gap-[18px]">
                            <span className="font-normal">At RarePixels, we bring together strategy, creativity, and technology to create brands and digital experiences that leave a lasting impact. Everything we build is designed with purpose, shaped by insight, and aligned with business growth. Nothing generic. Nothing without intent.</span>
                            <span className="font-medium">Because being noticed gets you seen.Being remembered gets you chosen.</span>
                        </p>
                    </div>

                    <div className="hm-abt-content-wrapper flex justify-between items-center mt-[60px] overflow-hidden">
                        <div className="hm-abt-logo w-[273] h-[349] ml-[65px]">
                            <PixelImageCanvas src={`${CDN_URL}/images/homepage/about/abt-rpd-logo.png`} alt="rarepixels-R-logo" />
                        </div>
                        

                        <div className="hm-abt-pointers w-[822px] flex flex-wrap gap-[30px]">
                            <div className="hm-abt-card w-[396px] h-[250px] flex p-[20px] gap-[10px] rounded-[20px] ">
                                <span className="w-[8px] h-[8px] mt-[12px] bg-[#ED0180] flex"></span>

                                <div className="hm-abt-card-text w-[338] text-[white]">
                                    <h3 className="h6 font-semibold text-[#ED0180]">Design That Creates Clarity</h3>

                                    <p className="text-18 font-normal flex flex-col gap-[18px] mt-[10px] ">
                                        <span>Great experiences don&apos;t happen by accident.</span>
                                        <span>We believe every interaction should feel natural, every journey should feel effortless, and every decision should help users go forward with confidence.</span>
                                    </p>
                                </div>
                            </div>

                            <div className="hm-abt-card w-[396px] h-[250px] flex p-[20px] gap-[10px] rounded-[20px] ">
                                <span className="w-[8px] h-[8px] mt-[12px] bg-[#ED0180] flex"></span>

                                <div className="hm-abt-card-text w-[338] text-[white]">
                                    <h3 className="h6 font-semibold text-[#ED0180]">Technology Built For Growth</h3>

                                    <p className="text-18 font-normal flex flex-col gap-[18px] mt-[10px] ">
                                        <span>Technology should support ambition, not limit it.</span>
                                        <span>From websites to digital products, we build solutions designed to perform reliably today and scale with your business tomorrow.</span>
                                    </p>
                                </div>
                            </div>

                            <div className="hm-abt-card w-[396px] h-[250px] flex p-[20px] gap-[10px] rounded-[20px] ">
                                <span className="w-[8px] h-[8px] mt-[12px] bg-[#ED0180] flex"></span>

                                <div className="hm-abt-card-text w-[338] text-[white]">
                                    <h3 className="h6 font-semibold text-[#ED0180]">Creativity With Direction</h3>

                                    <p className="text-18 font-normal flex flex-col gap-[18px] mt-[10px] ">
                                        <span>Creativity is powerful when it has a purpose.</span>
                                        <span>Every idea, design, and experience we create is guided by strategy, ensuring it contributes to a larger business objective.</span>
                                    </p>
                                </div>
                            </div>

                            <div className="hm-abt-card w-[396px] h-[250px] flex p-[20px] gap-[10px] rounded-[20px] ">
                                <span className="w-[8px] h-[8px] mt-[12px] bg-[#ED0180] flex"></span>

                                <div className="hm-abt-card-text w-[338] text-[white]">
                                    <h3 className="h6 font-semibold text-[#ED0180]">Brands People Remember</h3>

                                    <p className="text-18 font-normal flex flex-col gap-[18px] mt-[10px] ">
                                        <span>Recognition is earned through consistency.</span>
                                        <span>We help businesses create meaningful brand experiences that stay relevant, build trust, and leave a lasting impression over time.</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About