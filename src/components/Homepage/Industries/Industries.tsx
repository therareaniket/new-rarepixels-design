"use client"

import "./industries.css"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

const Industries = () => {
    const root = useRef<HTMLElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set(".indust-list:not(:nth-child(1))", { xPercent: 102 })
            // gsap.set(".indust-list:nth-child(3)", { xPercent: 102 })

            const tl = gsap.timeline({
                defaults: { ease: "none" },
                scrollTrigger: {
                    trigger: root.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                    snap: {
                        snapTo: "labelsDirectional", // go to next/prev label based on scroll direction
                        // duration: { min: 0.5, max: 1 },
                        duration: 0.8,
                        delay: 0,
                    },
                },
            })

            tl.addLabel("first")
              .to(".indust-list:nth-child(2)", { xPercent: 0, duration: 1 })
              .addLabel("second")
              .to(".indust-list:nth-child(3)", { xPercent: 0, duration: 1 })
              .addLabel("third")
              .to(".indust-list:nth-child(4)", { xPercent: 0, duration: 1 })
              .addLabel("forth")
              .to(".indust-list:nth-child(5)", { xPercent: 0, duration: 1 })
              .addLabel("fifth")
              .to(".indust-list:nth-child(6)", { xPercent: 0, duration: 1 })
              .addLabel("sixth")
              .to(".indust-list:nth-child(7)", { xPercent: 0, duration: 1 })
              .addLabel("seventh")
              .to(".indust-list:nth-child(8)", { xPercent: 0, duration: 1 })
              .addLabel("eighth")
        }, root)

        return () => ctx.revert() // cleanup (important in Next.js / React strict mode)
    }, [])

    return (
        <section ref={root} className="industries bg-[#F7F2EC]">
            <div className="section indust-sticky-wrapper">
                <div className="container overflow-hidden">
                    <div className="indust-headings flex flex-wrap justify-between">
                        <h2 className=''>Industries We Serve</h2>

                        <p className='w-[680px] max-w-full flex flex-col justify-center text-18'>
                            <span>Every industry is different.</span>

                            <span>But the need to earn trust, create memorable experiences, and stay relevant isn't.</span>
                        </p>
                    </div>

                    <div className="indust-list-wrapper w-max mt-[40px]">
                        <div className="indust-lists w-[1600px] h-[550px] relative">
                            <div className="indust-list absolute top-0 left-0 bg-[#F7F2EC] w-full h-full flex justify-between">
                                <div className="indust-video-wrapper w-[1000px] h-full relative">
                                    <video src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/homepage/industries/technology-and-saas.mp4" loop autoPlay muted playsInline width={1000} height={550}></video>

                                    <svg className="indust-top-left-svg absolute top-0 left-0" width="170" height="150" viewBox="0 0 170 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="50" height="50" fill="#F7F2EC"/>
                                        <rect x="50" y="50" width="50" height="50" fill="#F7F2EC"/>
                                        <rect x="100" y="100" width="40" height="40" fill="#F7F2EC"/>
                                        <rect x="140" y="70" width="30" height="30" fill="#F7F2EC"/>
                                        <rect y="100" width="50" height="50" fill="#F7F2EC"/>
                                    </svg>

                                    <svg className="indust-top-right-svg absolute top-0 right-[-1px]" width="130" height="100" viewBox="0 0 130 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="80" y="50" width="50" height="50" fill="#F7F2EC"/>
                                        <rect x="30" width="50" height="50" fill="#F7F2EC"/>
                                        <rect y="50" width="30" height="30" fill="#F7F2EC"/>
                                    </svg>

                                    <svg className="indust-bottom-left-svg absolute bottom-0 left-0" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="50" height="50" fill="#F7F2EC"/>
                                    </svg>
                                </div>

                                <div className="indust-details-wrapper w-[540px] h-full py-[30px] flex flex-col justify-between">
                                    <h3 className="text-80">Technology & SaaS</h3>

                                    <p className="flex flex-col gap-[10px] text-18">
                                        <span>Complex products fail when users don't understand them.</span>

                                        <span>We transform powerful SaaS platforms into intuitive experiences that drive adoption, retention, and growth.</span>
                                    </p>
                                </div>
                            </div>

                            <div className="indust-list absolute top-0 left-0 bg-[#F7F2EC] w-full h-full flex justify-between">
                                <div className="indust-video-wrapper w-[1000px] h-full relative">
                                    <video src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/homepage/industries/finance.mp4" loop autoPlay muted playsInline width={1000} height={550} preload="none"></video>

                                    <svg className="indust-top-left-svg absolute top-0 left-0" width="170" height="150" viewBox="0 0 170 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="50" height="50" fill="#F7F2EC"/>
                                        <rect x="50" y="50" width="50" height="50" fill="#F7F2EC"/>
                                        <rect x="100" y="100" width="40" height="40" fill="#F7F2EC"/>
                                        <rect x="140" y="70" width="30" height="30" fill="#F7F2EC"/>
                                        <rect y="100" width="50" height="50" fill="#F7F2EC"/>
                                    </svg>

                                    <svg className="indust-top-right-svg absolute top-0 right-[-1px]" width="130" height="100" viewBox="0 0 130 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="80" y="50" width="50" height="50" fill="#F7F2EC"/>
                                        <rect x="30" width="50" height="50" fill="#F7F2EC"/>
                                        <rect y="50" width="30" height="30" fill="#F7F2EC"/>
                                    </svg>

                                    <svg className="indust-bottom-left-svg absolute bottom-0 left-0" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="50" height="50" fill="#F7F2EC"/>
                                    </svg>
                                </div>

                                <div className="indust-details-wrapper w-[540px] h-full py-[30px] flex flex-col justify-between">
                                    <h3 className="text-80">Finance & FinTech</h3>

                                    <p className="flex flex-col gap-[10px] text-18">
                                        <span>Trust is the product before the product.</span>

                                        <span>We create secure, credible, and intuitive financial experiences that help users transact with confidence.</span>
                                    </p>
                                </div>
                            </div>

                            <div className="indust-list absolute top-0 left-0 bg-[#F7F2EC] w-full h-full flex justify-between">
                                <div className="indust-video-wrapper w-[1000px] h-full relative">
                                    <video src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/homepage/industries/healthcare.mp4" loop autoPlay muted playsInline width={1000} height={550} preload="none"></video>

                                    <svg className="indust-top-left-svg absolute top-0 left-0" width="170" height="150" viewBox="0 0 170 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="50" height="50" fill="#F7F2EC"/>
                                        <rect x="50" y="50" width="50" height="50" fill="#F7F2EC"/>
                                        <rect x="100" y="100" width="40" height="40" fill="#F7F2EC"/>
                                        <rect x="140" y="70" width="30" height="30" fill="#F7F2EC"/>
                                        <rect y="100" width="50" height="50" fill="#F7F2EC"/>
                                    </svg>

                                    <svg className="indust-top-right-svg absolute top-0 right-[-1px]" width="130" height="100" viewBox="0 0 130 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="80" y="50" width="50" height="50" fill="#F7F2EC"/>
                                        <rect x="30" width="50" height="50" fill="#F7F2EC"/>
                                        <rect y="50" width="30" height="30" fill="#F7F2EC"/>
                                    </svg>

                                    <svg className="indust-bottom-left-svg absolute bottom-0 left-0" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="50" height="50" fill="#F7F2EC"/>
                                    </svg>
                                </div>

                                <div className="indust-details-wrapper w-[540px] h-full py-[30px] flex flex-col justify-between">
                                    <h3 className="text-80">Healthcare & MedTech</h3>

                                    <p className="flex flex-col gap-[10px] text-18">
                                        <span>Every second matters when people seek care.</span>

                                        <span>We design healthcare experiences that make information accessible, decisions easier, and journeys less stressful.</span>
                                    </p>
                                </div>
                            </div>

                            <div className="indust-list absolute top-0 left-0 bg-[#F7F2EC] w-full h-full flex justify-between">
                                <div className="indust-video-wrapper w-[1000px] h-full relative">
                                    <video src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/homepage/industries/e-commerce.mp4" loop autoPlay muted playsInline width={1000} height={550} preload="none"></video>
                                
                                    <svg className="indust-top-left-svg absolute top-0 left-0" width="170" height="150" viewBox="0 0 170 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="50" height="50" fill="#F7F2EC"/>
                                        <rect x="50" y="50" width="50" height="50" fill="#F7F2EC"/>
                                        <rect x="100" y="100" width="40" height="40" fill="#F7F2EC"/>
                                        <rect x="140" y="70" width="30" height="30" fill="#F7F2EC"/>
                                        <rect y="100" width="50" height="50" fill="#F7F2EC"/>
                                    </svg>

                                    <svg className="indust-top-right-svg absolute top-0 right-[-1px]" width="130" height="100" viewBox="0 0 130 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="80" y="50" width="50" height="50" fill="#F7F2EC"/>
                                        <rect x="30" width="50" height="50" fill="#F7F2EC"/>
                                        <rect y="50" width="30" height="30" fill="#F7F2EC"/>
                                    </svg>

                                    <svg className="indust-bottom-left-svg absolute bottom-0 left-0" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="50" height="50" fill="#F7F2EC"/>
                                    </svg>
                                </div>

                                <div className="indust-details-wrapper w-[540px] h-full py-[30px] flex flex-col justify-between">
                                    <h3 className="text-80">E-commerce & Retail</h3>

                                    <p className="flex flex-col gap-[10px] text-18">
                                        <span>Customers don't buy products. They buy experiences.</span>

                                        <span>We build shopping journeys that reduce hesitation, increase conversions, and encourage repeat purchases.</span>
                                    </p>
                                </div>
                            </div>

                            <div className="indust-list absolute top-0 left-0 bg-[#F7F2EC] w-full h-full flex justify-between">
                                <div className="indust-video-wrapper w-[1000px] h-full relative">
                                    <video src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/homepage/industries/real-estate.mp4" loop autoPlay muted playsInline width={1000} height={550} preload="none"></video>

                                    <svg className="indust-top-left-svg absolute top-0 left-0" width="170" height="150" viewBox="0 0 170 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="50" height="50" fill="#F7F2EC"/>
                                        <rect x="50" y="50" width="50" height="50" fill="#F7F2EC"/>
                                        <rect x="100" y="100" width="40" height="40" fill="#F7F2EC"/>
                                        <rect x="140" y="70" width="30" height="30" fill="#F7F2EC"/>
                                        <rect y="100" width="50" height="50" fill="#F7F2EC"/>
                                    </svg>

                                    <svg className="indust-top-right-svg absolute top-0 right-[-1px]" width="130" height="100" viewBox="0 0 130 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="80" y="50" width="50" height="50" fill="#F7F2EC"/>
                                        <rect x="30" width="50" height="50" fill="#F7F2EC"/>
                                        <rect y="50" width="30" height="30" fill="#F7F2EC"/>
                                    </svg>

                                    <svg className="indust-bottom-left-svg absolute bottom-0 left-0" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="50" height="50" fill="#F7F2EC"/>
                                    </svg>
                                </div>

                                <div className="indust-details-wrapper w-[540px] h-full py-[30px] flex flex-col justify-between">
                                    <h3 className="text-80">Real Estate & PropTech</h3>

                                    <p className="flex flex-col gap-[10px] text-18">
                                        <span>People invest in confidence before they invest in property.</span>

                                        <span>We help real estate brands create digital experiences that build trust long before a site visit.</span>
                                    </p>
                                </div>
                            </div>

                            <div className="indust-list absolute top-0 left-0 bg-[#F7F2EC] w-full h-full flex justify-between">
                                <div className="indust-video-wrapper w-[1000px] h-full relative">
                                    <video src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/homepage/industries/education-industry.mp4" loop autoPlay muted playsInline width={1000} height={550} preload="none"></video>
                                
                                    <svg className="indust-top-left-svg absolute top-0 left-0" width="170" height="150" viewBox="0 0 170 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="50" height="50" fill="#F7F2EC"/>
                                        <rect x="50" y="50" width="50" height="50" fill="#F7F2EC"/>
                                        <rect x="100" y="100" width="40" height="40" fill="#F7F2EC"/>
                                        <rect x="140" y="70" width="30" height="30" fill="#F7F2EC"/>
                                        <rect y="100" width="50" height="50" fill="#F7F2EC"/>
                                    </svg>

                                    <svg className="indust-top-right-svg absolute top-0 right-[-1px]" width="130" height="100" viewBox="0 0 130 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="80" y="50" width="50" height="50" fill="#F7F2EC"/>
                                        <rect x="30" width="50" height="50" fill="#F7F2EC"/>
                                        <rect y="50" width="30" height="30" fill="#F7F2EC"/>
                                    </svg>

                                    <svg className="indust-bottom-left-svg absolute bottom-0 left-0" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="50" height="50" fill="#F7F2EC"/>
                                    </svg>
                                </div>

                                <div className="indust-details-wrapper w-[540px] h-full py-[30px] flex flex-col justify-between">
                                    <h3 className="text-80">Education & EdTech</h3>

                                    <p className="flex flex-col gap-[10px] text-18">
                                        <span>The best learning experiences never feel complicated.</span>

                                        <span>We create intuitive platforms that keep students focused on learning, not figuring out how things work.</span>
                                    </p>
                                </div>
                            </div>

                            <div className="indust-list absolute top-0 left-0 bg-[#F7F2EC] w-full h-full flex justify-between">
                                <div className="indust-video-wrapper w-[1000px] h-full relative">
                                    <video src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/homepage/industries/ai-industry.mp4" loop autoPlay muted playsInline width={1000} height={550} preload="none"></video>
                                
                                    <svg className="indust-top-left-svg absolute top-0 left-0" width="170" height="150" viewBox="0 0 170 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="50" height="50" fill="#F7F2EC"/>
                                        <rect x="50" y="50" width="50" height="50" fill="#F7F2EC"/>
                                        <rect x="100" y="100" width="40" height="40" fill="#F7F2EC"/>
                                        <rect x="140" y="70" width="30" height="30" fill="#F7F2EC"/>
                                        <rect y="100" width="50" height="50" fill="#F7F2EC"/>
                                    </svg>

                                    <svg className="indust-top-right-svg absolute top-0 right-[-1px]" width="130" height="100" viewBox="0 0 130 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="80" y="50" width="50" height="50" fill="#F7F2EC"/>
                                        <rect x="30" width="50" height="50" fill="#F7F2EC"/>
                                        <rect y="50" width="30" height="30" fill="#F7F2EC"/>
                                    </svg>

                                    <svg className="indust-bottom-left-svg absolute bottom-0 left-0" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="50" height="50" fill="#F7F2EC"/>
                                    </svg>
                                </div>

                                <div className="indust-details-wrapper w-[540px] h-full py-[30px] flex flex-col justify-between">
                                    <h3 className="text-80">Emerging & AI Tech</h3>

                                    <p className="flex flex-col gap-[10px] text-18">
                                        <span>Innovation means little if people can't understand it.</span>

                                        <span>We humanize emerging technologies through experiences that make complex products easier to adopt and trust.</span>
                                    </p>
                                </div>
                            </div>

                            <div className="indust-list absolute top-0 left-0 bg-[#F7F2EC] w-full h-full flex justify-between">
                                <div className="indust-video-wrapper w-[1000px] h-full relative">
                                    <video src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/homepage/industries/food-industry.mp4" loop autoPlay muted playsInline width={1000} height={550} preload="none"></video>
                                
                                    <svg className="indust-top-left-svg absolute top-0 left-0" width="170" height="150" viewBox="0 0 170 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="50" height="50" fill="#F7F2EC"/>
                                        <rect x="50" y="50" width="50" height="50" fill="#F7F2EC"/>
                                        <rect x="100" y="100" width="40" height="40" fill="#F7F2EC"/>
                                        <rect x="140" y="70" width="30" height="30" fill="#F7F2EC"/>
                                        <rect y="100" width="50" height="50" fill="#F7F2EC"/>
                                    </svg>

                                    <svg className="indust-top-right-svg absolute top-0 right-[-1px]" width="130" height="100" viewBox="0 0 130 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="80" y="50" width="50" height="50" fill="#F7F2EC"/>
                                        <rect x="30" width="50" height="50" fill="#F7F2EC"/>
                                        <rect y="50" width="30" height="30" fill="#F7F2EC"/>
                                    </svg>

                                    <svg className="indust-bottom-left-svg absolute bottom-0 left-0" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="50" height="50" fill="#F7F2EC"/>
                                    </svg>
                                </div>

                                <div className="indust-details-wrapper w-[540px] h-full py-[30px] flex flex-col justify-between">
                                    <h3 className="text-80">Food & Lifestyle</h3>

                                    <p className="flex flex-col gap-[10px] text-18">
                                        <span>People remember how brands make them feel.</span>

                                        <span>We help food and lifestyle brands create memorable identities that drive loyalty beyond the first purchase.</span>
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

export default Industries