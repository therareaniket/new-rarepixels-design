"use client";
import './aboutlifeatrarepixels.css'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image';
import { useEffect } from 'react';

const AboutLifeAtRarePixels = () => {

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.innerWidth >= 840) {
                gsap.fromTo( ".life-at-desktop .abt-life-card-1", { opacity: 0, scale: 0.5, x: -300, y: -200, }, { opacity: 1, scale: 1, x: 0, y: 0, duration: 0.8, scrollTrigger: { trigger: ".life-at-desktop .abt-life-card-1", start: "top 70%", once: true, }, } );
                gsap.fromTo( ".life-at-desktop .abt-life-card-2", { opacity: 0, scale: 0.5, x: -350, y: 200, }, { opacity: 1, scale: 1, x: 0, y: 0, duration: 0.8, scrollTrigger: { trigger: ".life-at-desktop .abt-life-card-2", start: "top 100%", once: true, }, } );
                gsap.fromTo( ".life-at-desktop .abt-life-card-3", { opacity: 0, scale: 0.5, x: 0, y: -300, }, { opacity: 1, scale: 1, x: 0, y: 0, duration: 0.8, scrollTrigger: { trigger: ".life-at-desktop .abt-life-card-3", start: "top 60%", once: true, }, } );
                gsap.fromTo( ".life-at-desktop .abt-life-card-4", { opacity: 0, scale: 0.5, x: -150, y: 200, }, { opacity: 1, scale: 1, x: 0, y: 0, duration: 0.8, scrollTrigger: { trigger: ".life-at-desktop .abt-life-card-4", start: "top 80%", once: true, }, } );
                gsap.fromTo( ".life-at-desktop .abt-life-card-5", { opacity: 0, scale: 0.5, x: 150, y: 300, }, { opacity: 1, scale: 1, x: 0, y: 0, duration: 0.8, scrollTrigger: { trigger: ".life-at-desktop .abt-life-card-5", start: "top 90%", once: true, }, } );
                gsap.fromTo( ".life-at-desktop .abt-life-card-6", { opacity: 0, scale: 0.5, x: 300, y: -200, }, { opacity: 1, scale: 1, x: 0, y: 0, duration: 0.8, scrollTrigger: { trigger: ".life-at-desktop .abt-life-card-6", start: "top 50%", once: true, }, } );
                gsap.fromTo( ".life-at-desktop .abt-life-card-7", { opacity: 0, scale: 0.5, x: 350, y: 100, }, { opacity: 1, scale: 1, x: 0, y: 0, duration: 0.8, scrollTrigger: { trigger: ".life-at-desktop .abt-life-card-7", start: "top 60%", once: true, }, } );
                gsap.fromTo( ".life-at-desktop .abt-life-card-8", { opacity: 0, scale: 0.5, x: 300, y: 300, }, { opacity: 1, scale: 1, x: 0, y: 0, duration: 0.8, scrollTrigger: { trigger: ".life-at-desktop .abt-life-card-8", start: "top 90%", once: true, }, } );
        }

        else if (typeof window !== 'undefined' && window.innerWidth >= 480) {
                gsap.fromTo( ".life-at-tablet div .abt-life-card-tab-1", { opacity: 0, scale: 0.5, x: -300, y: -200, }, { opacity: 1, scale: 1, x: 0, y: 0, duration: 1, scrollTrigger: { trigger: ".abt-life-card-tab-1", start: "top 70%", once: true, }, } );
                gsap.fromTo( ".life-at-tablet div .abt-life-card-tab-2", { opacity: 0, scale: 0.5, x: -350, y: 200, }, { opacity: 1, scale: 1, x: 0, y: 0, duration: 1, scrollTrigger: { trigger: ".abt-life-card-tab-2", start: "top 70%", once: true, }, } );
                gsap.fromTo( ".life-at-tablet div .abt-life-card-tab-3", { opacity: 0, scale: 0.5, x: 0, y: -300, }, { opacity: 1, scale: 1, x: 0, y: 0, duration: 1, scrollTrigger: { trigger: ".abt-life-card-tab-3", start: "top 70%", once: true, }, } );
                gsap.fromTo( ".life-at-tablet div .abt-life-card-tab-4", { opacity: 0, scale: 0.5, x: -150, y: 200, }, { opacity: 1, scale: 1, x: 0, y: 0, duration: 1, scrollTrigger: { trigger: ".abt-life-card-tab-4", start: "top 70%", once: true, }, } );
                gsap.fromTo( ".life-at-tablet div .abt-life-card-tab-5", { opacity: 0, scale: 0.5, x: 150, y: 300, }, { opacity: 1, scale: 1, x: 0, y: 0, duration: 1, scrollTrigger: { trigger: ".abt-life-card-tab-5", start: "top 70%", once: true, }, } );
                gsap.fromTo( ".life-at-tablet div .abt-life-card-tab-6", { opacity: 0, scale: 0.5, x: 300, y: -200, }, { opacity: 1, scale: 1, x: 0, y: 0, duration: 1, scrollTrigger: { trigger: ".abt-life-card-tab-6", start: "top 70%", once: true, }, } );
                gsap.fromTo( ".life-at-tablet div .abt-life-card-tab-7", { opacity: 0, scale: 0.5, x: 350, y: 100, }, { opacity: 1, scale: 1, x: 0, y: 0, duration: 1, scrollTrigger: { trigger: ".abt-life-card-tab-7", start: "top 70%", once: true, }, } );
                gsap.fromTo( ".life-at-tablet div .abt-life-card-tab-8", { opacity: 0, scale: 0.5, x: 300, y: 300, }, { opacity: 1, scale: 1, x: 0, y: 0, duration: 1, scrollTrigger: { trigger: ".abt-life-card-tab-8", start: "top 70%", once: true, }, } );
        }

        else if (typeof window !== 'undefined' && window.innerWidth <= 479) {
            gsap.fromTo(".life-at-tablet div .abt-life-card-1", { opacity: 0, scale: 0.5, y: 100 }, { opacity: 1, scale: 1, y: 0, scrollTrigger: { trigger: ".life-at-tablet div .abt-life-card-1", start: "top 70%", once: true } })
            gsap.fromTo(".life-at-tablet div .abt-life-card-2", { opacity: 0, scale: 0.5, y: 100 }, { opacity: 1, scale: 1, y: 0, scrollTrigger: { trigger: ".life-at-tablet div .abt-life-card-2", start: "top 70%", once: true } })
            gsap.fromTo(".life-at-tablet div .abt-life-card-3", { opacity: 0, scale: 0.5, y: 100 }, { opacity: 1, scale: 1, y: 0, scrollTrigger: { trigger: ".life-at-tablet div .abt-life-card-3", start: "top 70%", once: true } })
            gsap.fromTo(".life-at-tablet div .abt-life-card-4", { opacity: 0, scale: 0.5, y: 100 }, { opacity: 1, scale: 1, y: 0, scrollTrigger: { trigger: ".life-at-tablet div .abt-life-card-4", start: "top 70%", once: true } })
            gsap.fromTo(".life-at-tablet div .abt-life-card-5", { opacity: 0, scale: 0.5, y: 100 }, { opacity: 1, scale: 1, y: 0, scrollTrigger: { trigger: ".life-at-tablet div .abt-life-card-5", start: "top 70%", once: true } })
            gsap.fromTo(".life-at-tablet div .abt-life-card-6", { opacity: 0, scale: 0.5, y: 100 }, { opacity: 1, scale: 1, y: 0, scrollTrigger: { trigger: ".life-at-tablet div .abt-life-card-6", start: "top 70%", once: true } })
            gsap.fromTo(".life-at-tablet div .abt-life-card-7", { opacity: 0, scale: 0.5, y: 100 }, { opacity: 1, scale: 1, y: 0, scrollTrigger: { trigger: ".life-at-tablet div .abt-life-card-7", start: "top 70%", once: true } })
            gsap.fromTo(".life-at-tablet div .abt-life-card-8", { opacity: 0, scale: 0.5, y: 100 }, { opacity: 1, scale: 1, y: 0, scrollTrigger: { trigger: ".life-at-tablet div .abt-life-card-8", start: "top 70%", once: true } })
        }
    }, [])


    return (
        <section className="section overflow-hidden life-at-rpd">
            <div className="container">
                <div className="life-at-rare-title relative z-[5]">
                    <h2 className="text-80 font-semibold">Life at RarePixels</h2>

                    <p className="h2 font-semibold website-subtitle-mt">Real people. Real Work. Real Culture.</p>
                </div>

                <div className="life-at-rarepixels-card-wrapper relative z-[4] flex gap-[30px] mt-[60px] life-at-desktop">
                    <div className="life-at-rarepixels-col life-at-rarepixels-col-1 flex flex-col gap-[30px] mt-[64px]">
                        <div className="abt-life-card-1 w-[540px] h-[530px] bg-[#DEDEDE]">
                            <Image className='w-[100%] h-[100%] object-cover object-center' src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/aboutpage/abt-life-at-rpd/life-rare-1.webp" alt='life-at-rarepixels' width={540} height={530}></Image>
                        </div>
                        <div className="abt-life-card-2 w-[540px] h-[467px] bg-[#DEDEDE]">
                            <Image className='w-[100%] h-[100%] object-cover object-center' src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/aboutpage/abt-life-at-rpd/life-rare-2.webp" alt='life-at-rarepixels' width={540} height={467}></Image>
                        </div>
                    </div>

                    <div className="life-at-rarepixels-col life-at-rarepixels-col-2 flex flex-col gap-[30px]">
                        <div className="abt-life-card-3 w-[460px] h-[417px] bg-[#DEDEDE]">
                            <Image className='w-[100%] h-[100%] object-cover object-center' src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/aboutpage/abt-life-at-rpd/life-rare-3.webp" alt='life-at-rarepixels' width={460} height={417}></Image>
                        </div>
                        <div className="abt-life-card-4 w-[460px] h-[530px] bg-[#DEDEDE]">
                            <Image className='w-[100%] h-[100%] object-cover object-center' src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/aboutpage/abt-life-at-rpd/life-rare-4.webp" alt='life-at-rarepixels' width={460} height={530}></Image>
                        </div>
                        <div className="abt-life-card-5 w-[460px] h-[450px] bg-[#DEDEDE]">
                            <Image className='w-[100%] h-[100%] object-cover object-center' src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/aboutpage/abt-life-at-rpd/life-rare-5.webp" alt='life-at-rarepixels' width={460} height={450}></Image>
                        </div>
                    </div>

                    <div className="life-at-rarepixels-col life-at-rarepixels-col-3 flex flex-col gap-[30px]">
                        <div className="abt-life-card-6 w-[540px] h-[530px] bg-[#DEDEDE]">
                            <Image className='w-[100%] h-[100%] object-cover object-center' src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/aboutpage/abt-life-at-rpd/life-rare-6.webp" alt='life-at-rarepixels' width={540} height={530}></Image>
                        </div>
                        <div className="abt-life-card-7 w-[540px] h-[530px] bg-[#DEDEDE]">
                            <Image className='w-[100%] h-[100%] object-cover object-center' src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/aboutpage/abt-life-at-rpd/life-rare-7.webp" alt='life-at-rarepixels' width={540} height={530}></Image>
                        </div>
                        <div className="abt-life-card-8 w-[540px] h-[353px] bg-[#DEDEDE]">
                            <Image className='w-[100%] h-[100%] object-cover object-center' src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/aboutpage/abt-life-at-rpd/life-rare-8.webp" alt='life-at-rarepixels' width={540} height={353}></Image>
                        </div>
                    </div>
                </div>

                <div className="life-at-rarepixels-card-wrapper relative z-[4] flex gap-[30px] mt-[60px] life-at-tablet">
                    <div className="life-at-rarepixels-col life-at-rarepixels-col-1 flex flex-col gap-[30px] mt-[64px]">
                        <div className="abt-life-card-1 abt-life-card-tab-1 w-[540px] h-[530px] bg-[#DEDEDE]">
                            <Image className='w-[100%] h-[100%] object-cover object-center' src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/aboutpage/abt-life-at-rpd/life-rare-1.webp" alt='life-at-rarepixels' width={540} height={530}></Image>
                        </div>
                        <div className="abt-life-card-6 abt-life-card-tab-3 w-[540px] h-[530px] bg-[#DEDEDE]">
                            <Image className='w-[100%] h-[100%] object-cover object-center' src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/aboutpage/abt-life-at-rpd/life-rare-6.webp" alt='life-at-rarepixels' width={540} height={530}></Image>
                        </div>
                        <div className="abt-life-card-2 abt-life-card-tab-2 w-[540px] h-[467px] bg-[#DEDEDE]">
                            <Image className='w-[100%] h-[100%] object-cover object-center' src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/aboutpage/abt-life-at-rpd/life-rare-2.webp" alt='life-at-rarepixels' width={540} height={467}></Image>
                        </div>
                        <div className="abt-life-card-3 abt-life-card-tab-4 w-[460px] h-[417px] bg-[#DEDEDE]">
                            <Image className='w-[100%] h-[100%] object-cover object-center' src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/aboutpage/abt-life-at-rpd/life-rare-3.webp" alt='life-at-rarepixels' width={460} height={417}></Image>
                        </div>
                    </div>
                    <div className="life-at-rarepixels-col life-at-rarepixels-col-2 flex flex-col gap-[30px]">
                        <div className="abt-life-card-7 abt-life-card-tab-6 w-[540px] h-[530px] bg-[#DEDEDE]">
                            <Image className='w-[100%] h-[100%] object-cover object-center' src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/aboutpage/abt-life-at-rpd/life-rare-7.webp" alt='life-at-rarepixels' width={540} height={530}></Image>
                        </div>
                        <div className="abt-life-card-8 abt-life-card-tab-5 w-[540px] h-[353px] bg-[#DEDEDE]">
                            <Image className='w-[100%] h-[100%] object-cover object-center' src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/aboutpage/abt-life-at-rpd/life-rare-8.webp" alt='life-at-rarepixels' width={540} height={353}></Image>
                        </div>
                        <div className="abt-life-card-4 abt-life-card-tab-7 w-[460px] h-[530px] bg-[#DEDEDE]">
                            <Image className='w-[100%] h-[100%] object-cover object-center' src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/aboutpage/abt-life-at-rpd/life-rare-4.webp" alt='life-at-rarepixels' width={460} height={530}></Image>
                        </div>
                        <div className="abt-life-card-5 abt-life-card-tab-8 w-[460px] h-[450px] bg-[#DEDEDE]">
                            <Image className='w-[100%] h-[100%] object-cover object-center' src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/aboutpage/abt-life-at-rpd/life-rare-5.webp" alt='life-at-rarepixels' width={460} height={450}></Image>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutLifeAtRarePixels