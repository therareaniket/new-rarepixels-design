// "use client"

// import "./industries.css"
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useLayoutEffect } from "react";

// const Industries = () => {

//     gsap.registerPlugin(ScrollTrigger);

//     useLayoutEffect(() => {
//         gsap.set(".indust-list:nth-child(2)", { xPercent: 102, } )
//         gsap.set(".indust-list:nth-child(3)", { xPercent: 200, } )

//         gsap.to(".indust-list:nth-child(2)", { xPercent: 0, scrollTrigger: { trigger: ".industries", start: "top -2%", end: "top -105%", scrub: 1, } })
//         gsap.to(".indust-list:nth-child(3)", { xPercent: 0, scrollTrigger: { trigger: ".industries", start: "top -105%", end: "bottom bottom", scrub: 1, } })
//     }, [])

//     return (
//         <section className="industries bg-[#F7F2EC]">
//             <div className="section indust-sticky-wrapper">
//                 <div className="container overflow-hidden">
//                     <div className="indust-headings flex flex-wrap justify-between">
//                         <h2 className=''>Industries We Serve</h2>

//                         <p className='w-[680px] max-w-full flex flex-col justify-center text-18'>
//                             <span>Every industry is different.</span>

//                             <span>But the need to earn trust, create memorable experiences, and stay relevant isn't.</span>
//                         </p>
//                     </div>

//                     <div className="indust-list-wrapper w-max mt-[40px]">
//                         <div className="indust-lists w-[1600px] h-[550px] relative">
//                             <div className="indust-list absolute top-0 left-0 bg-red-500 w-full h-full"></div>

//                             <div className="indust-list absolute top-0 left-0 bg-green-500 w-full h-full"></div>

//                             <div className="indust-list absolute top-0 left-0 bg-yellow-500 w-full h-full"></div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }   

// export default Industries

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
            gsap.set(".indust-list:nth-child(2)", { xPercent: 102 })
            gsap.set(".indust-list:nth-child(3)", { xPercent: 102 })

            const tl = gsap.timeline({
                defaults: { ease: "none" },
                scrollTrigger: {
                    trigger: root.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                    snap: {
                        snapTo: "labelsDirectional", // go to next/prev label based on scroll direction
                        duration: { min: 0.5, max: 1 },
                        delay: 0,
                    },
                },
            })

            tl.addLabel("first")
              .to(".indust-list:nth-child(2)", { xPercent: 0, duration: 1 })
              .addLabel("second")
              .to(".indust-list:nth-child(3)", { xPercent: 0, duration: 1 })
              .addLabel("third")
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
                                <div className="indust-video-wrapper w-[1000px] h-full">
                                    <video src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/homepage/industries/technology-and-saas.mp4" loop autoPlay muted playsInline width={1000} height={550}></video>
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
                                <div className="indust-video-wrapper w-[1000px] h-full">
                                    <video src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/homepage/industries/finance.mp4" loop autoPlay muted playsInline width={1000} height={550}></video>
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
                                <div className="indust-video-wrapper w-[1000px] h-full">
                                    <video src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/homepage/industries/healthcare.mp4" loop autoPlay muted playsInline width={1000} height={550}></video>
                                </div>

                                <div className="indust-details-wrapper w-[540px] h-full py-[30px] flex flex-col justify-between">
                                    <h3 className="text-80">Healthcare & MedTech</h3>

                                    <p className="flex flex-col gap-[10px] text-18">
                                        <span>Every second matters when people seek care.</span>

                                        <span>We design healthcare experiences that make information accessible, decisions easier, and journeys less stressful.</span>
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