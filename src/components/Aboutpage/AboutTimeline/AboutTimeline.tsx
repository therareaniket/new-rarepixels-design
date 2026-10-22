// "use client"

// import "./aboutTimeline.css"
// import Image from "next/image";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// export default function AboutTimeline() {

//     useGSAP(() => {
//         if (typeof window === "undefined") return;
//         const screenWidth = window.innerWidth;
//         const screenHeight = window.innerHeight;

//         const isTablet = screenWidth <= 1024 && screenHeight > 768;
//         const isMobile = screenWidth <= 439;

//         if (isTablet || isMobile) {


//         } else {
//             const dotPosition = screenWidth < 840 ? "400px" : screenWidth < 1200 ? "450px" : screenWidth < 1440 ? "400px" : "500px";

//             const yearFontSize = screenWidth < 576 ? "26px" : "34px";
//             const yearFontSizeActive = screenWidth < 576 ? "40px" : "64px";
//             gsap.set(".years-dot", { right: "100%", fontSize: yearFontSize, color: "rgba(253, 253, 253, 0.2)", });
//             gsap.set(".the-dot", { backgroundColor: "#363E5E", });
//             gsap.set(` .year-description-desktop .year-detail-info .h4, .year-description-desktop .details-info-text img, .year-description-desktop .details-info-text p `, { opacity: 0, scale: 0.5, });

//             // FOR TIMELINE OF YEAR 2024
//             gsap.to(".years-dot-2024",
//                 {
//                     right: dotPosition,
//                     fontSize: yearFontSizeActive,
//                     color: "rgba(253, 253, 253, 1)",
//                     duration: 1,
//                     scrollTrigger: {
//                         trigger: ".timeline-section",
//                         start: "top top",
//                         end: "top -60%",
//                         scrub: 1,
//                     }
//                 }
//             )

//             gsap.to(".years-dot-2024 .the-dot",
//                 {
//                     backgroundColor: "#ED0180",
//                     duration: 1,
//                     scrollTrigger: {
//                         trigger: ".timeline-section",
//                         start: "top top",
//                         end: "top -60%",
//                         scrub: 1,
//                     }
//                 }
//             )

//             gsap.fromTo(".year-detail-info-2024 .h4, .year-detail-info-2024 .details-info-text img, .year-detail-info-2024 .details-info-text p",
//                 { scale: 0.5, opacity: 0, },
//                 {
//                     scale: 1,
//                     opacity: 1,
//                     ease: "power3.out",
//                     duration: 1,
//                     scrollTrigger: {
//                         trigger: ".timeline-section",
//                         start: "top -40%",
//                         end: "top -60%",
//                         scrub: 1,
//                     }
//                 }
//             )

//             gsap.to({}, { duration: 3 });

//             // FOR TIMELINE OF YEAR 2025
//             gsap.to(".years-dot-2025",
//                 {
//                     right: dotPosition,
//                     fontSize: yearFontSizeActive,
//                     color: "rgba(253, 253, 253, 1)",
//                     duration: 1,
//                     scrollTrigger: {
//                         trigger: ".timeline-section",
//                         start: "top -70%",
//                         end: "top -130%",
//                         scrub: 1,
//                     }
//                 }
//             )

//             gsap.to(".years-dot-2025 .the-dot",
//                 {
//                     backgroundColor: "#ED0180",
//                     duration: 1,
//                     scrollTrigger: {
//                         trigger: ".timeline-section",
//                         start: "top -70%",
//                         end: "top -130%",
//                         scrub: 1,
//                     }
//                 }
//             )

//             gsap.to(".years-dot-2024",
//                 {
//                     opacity: 0,
//                     scrollTrigger: {
//                         trigger: ".timeline-section",
//                         start: "top -80%",
//                         end: "top -100%",
//                         scrub: 1,
//                     }
//                 }
//             )

//             gsap.fromTo(".year-detail-info-2024 .h4, .year-detail-info-2024 .details-info-text img, .year-detail-info-2024 .details-info-text p",
//                 { scale: 1, },
//                 {
//                     scale: 0.5,
//                     opacity: 0,
//                     ease: "power3.out",
//                     duration: 1,
//                     scrollTrigger: {
//                         trigger: ".timeline-section",
//                         start: "top -80%",
//                         end: "top -100%",
//                         scrub: 1,
//                     }
//                 }
//             )

//             gsap.fromTo(".year-detail-info-2025 .h4, .year-detail-info-2025 .details-info-text img, .year-detail-info-2025 .details-info-text p",
//                 { scale: 0.5, opacity: 0, },
//                 {
//                     scale: 1,
//                     opacity: 1,
//                     ease: "power3.out",
//                     duration: 1,
//                     scrollTrigger: {
//                         trigger: ".timeline-section",
//                         start: "top -110%",
//                         end: "top -130%",
//                         scrub: 1,
//                     }
//                 }
//             )


//             // FOR TIMELINE OF YEAR 2026
//             gsap.to(".years-dot-2026",
//                 {
//                     right: dotPosition,
//                     fontSize: yearFontSizeActive,
//                     color: "rgba(253, 253, 253, 1)",
//                     duration: 1,
//                     scrollTrigger: {
//                         trigger: ".timeline-section",
//                         start: "top -140%",
//                         end: "top -200%",
//                         scrub: 1,
//                     }
//                 }
//             )

//             gsap.to(".years-dot-2026 .the-dot",
//                 {
//                     backgroundColor: "#ED0180",
//                     duration: 1,
//                     scrollTrigger: {
//                         trigger: ".timeline-section",
//                         start: "top -140%",
//                         end: "top -200%",
//                         scrub: 1,
//                     }
//                 }
//             )

//             gsap.to(".years-dot-2025",
//                 {
//                     opacity: 0,
//                     scrollTrigger: {
//                         trigger: ".timeline-section",
//                         start: "top -140%",
//                         end: "top -160%",
//                         scrub: 1,
//                     }
//                 }
//             )

//             gsap.fromTo(".year-detail-info-2025 .h4, .year-detail-info-2025 .details-info-text img, .year-detail-info-2025 .details-info-text p",
//                 { scale: 1, },
//                 {
//                     scale: 0.5,
//                     opacity: 0,
//                     ease: "power3.out",
//                     duration: 1,
//                     scrollTrigger: {
//                         trigger: ".timeline-section",
//                         start: "top -140%",
//                         end: "top -160%",
//                         scrub: 1,
//                     }
//                 }
//             )

//             gsap.fromTo(".year-detail-info-2026 .h4, .year-detail-info-2026 .details-info-text img, .year-detail-info-2026 .details-info-text p",
//                 { scale: 0.5, opacity: 0, },
//                 {
//                     scale: 1,
//                     opacity: 1,
//                     ease: "power3.out",
//                     duration: 1,
//                     scrollTrigger: {
//                         trigger: ".timeline-section",
//                         start: "top -180%",
//                         end: "top -200%",
//                         scrub: 1,
//                     }
//                 }
//             )
//         }
//     });

//     return (
//         <>
//             <section className="timeline-section bg-[#040E36]">
//                 <div className="abt-tl-sticky section">
//                     <div className="container">
//                         <div className="timeline-titles">
//                             <h2 className="text-sb text-white">Our story is more than a timeline of milestones.</h2>

//                             <div className="timeline-subtitles">
//                                 <div className="bold-subtitle">
//                                     <p className="h5 text-sb text-white">It&apos;s a journey of learning, growing, and continuously evolving to create work that truly matters.</p>
//                                 </div>

//                                 <div className="regular-subtitle">
//                                     <p className="text-18 text-white">A journey shaped by creativity, collaboration, and continuous growth, reflecting the milestones, experiences, and values that have defined RarePixels from day one.</p>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="">
//                             <div className="year-timeline-line">
//                                 <div className="tl-baseline">
//                                     <div className="years-dot years-dot-2024 active h1 text-sb text-white">2024 <span className="the-dot" /></div>
//                                     <div className="years-dot years-dot-2025 h1 text-sb text-white">2025<span className="the-dot" /></div>
//                                     <div className="years-dot years-dot-2026 h1 text-sb text-white">2026<span className="the-dot" /></div>
//                                 </div>
//                             </div>

//                             <div className="year-description year-description-desktop">
//                                 <div className="year-detail-info year-detail-info-2024">
//                                     <h3 className="h4 text-sb text-white">The Launch of RarePixels</h3>

//                                     <div className="details-info-text">
//                                         <Image src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/aboutpage/about-timeline/timeline-2024.svg" alt="timeline-2024" width={200} height={260} className="timeline-image"></Image>

//                                         <p className="text-18 text-white">From the very beginning, our focus extended beyond aesthetics. Every project was approached with a commitment to understanding business goals, user needs, and long-term growth opportunities. This foundation shaped the way we work today combining creativity with execution to deliver experiences that are both visually compelling and strategically effective.</p>
//                                     </div>
//                                 </div>

//                                 <div className="year-detail-info year-detail-info-2025">
//                                     <h3 className="h4 text-sb text-white">Purposeful Growth</h3>

//                                     <div className="details-info-text">
//                                         <Image src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/aboutpage/about-timeline/timeline-2025.svg" alt="timeline-2024" width={200} height={260} className="timeline-image"></Image>

//                                         <p className="text-18 text-white">Every project brought new challenges, fresh perspectives, and valuable opportunities to grow. As RarePixels expanded its reach, we continued refining our approach and strengthening our expertise across multiple disciplines. The trust placed in us by growing brands allowed us to take on more ambitious projects, and create experiences that combined creativity, strategy, and technology.</p>
//                                     </div>
//                                 </div>

//                                 <div className="year-detail-info year-detail-info-2026">
//                                     <h3 className="h4 text-sb text-white">Shaping What&apos;s Next</h3>

//                                     <div className="details-info-text">
//                                         <Image src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/aboutpage/about-timeline/timeline-2026.svg" alt="timeline-2024" width={200} height={260} className="timeline-image"></Image>

//                                         <p className="text-18 text-white">Today, RarePixels continues to evolve as a creative and technology partner for ambitious brands. We remain focused on helping businesses create meaningful experiences through innovation, collaboration, and purposeful execution. Every project we take on reflects our commitment to quality, creativity, and delivering value that extends far beyond the final deliverable.</p>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="year-description year-description-tablet relative">
//                                 <div className="year-detail-info year-detail-info-2024">
//                                     <div className="details-info-text">
//                                         <div className="timeline-image-art">
//                                             <Image src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/aboutpage/about-timeline/timeline-2024.svg" alt="timeline-2024" width={200} height={260} className="timeline-image"></Image>
//                                         </div>

//                                         <div>
//                                             <h3 className="timeline-year-title h1 text-white mb-[20px]">2024</h3>

//                                             <h3 className="h4 text-sb text-white">The Launch of RarePixels</h3>

//                                             <p className="text-18 text-white">From the very beginning, our focus extended beyond aesthetics. Every project was approached with a commitment to understanding business goals, user needs, and long-term growth opportunities. This foundation shaped the way we work today combining creativity with execution to deliver experiences that are both visually compelling and strategically effective.</p>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="year-detail-info year-detail-info-2025">
//                                     <div className="details-info-text">
//                                         <div className="timeline-image-art">
//                                             <Image src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/aboutpage/about-timeline/timeline-2025.svg" alt="timeline-2024" width={200} height={260} className="timeline-image"></Image>
//                                         </div>

//                                         <div>
//                                             <h3 className="timeline-year-title h1 text-white mb-[20px]">2025</h3>

//                                             <h3 className="h4 text-sb text-white">Purposeful Growth</h3>

//                                             <p className="text-18 text-white">Every project brought new challenges, fresh perspectives, and valuable opportunities to grow. As RarePixels expanded its reach, we continued refining our approach and strengthening our expertise across multiple disciplines. The trust placed in us by growing brands allowed us to take on more ambitious projects, and create experiences that combined creativity, strategy, and technology.</p>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="year-detail-info year-detail-info-2026">
//                                     <div className="details-info-text">
//                                         <div className="timeline-image-art">
//                                             <Image src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/aboutpage/about-timeline/timeline-2026.svg" alt="timeline-2024" width={200} height={260} className="timeline-image"></Image>
//                                         </div>

//                                         <div>
//                                             <h3 className="timeline-year-title h1 text-white mb-[20px]">2026</h3>

//                                             <h3 className="h4 text-sb text-white">Shaping What&apos;s Next</h3>

//                                             <p className="text-18 text-white">Today, RarePixels continues to evolve as a creative and technology partner for ambitious brands. We remain focused on helping businesses create meaningful experiences through innovation, collaboration, and purposeful execution. Every project we take on reflects our commitment to quality, creativity, and delivering value that extends far beyond the final deliverable.</p>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <span className="tablet-timeline-progress-line" aria-hidden="true" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }


































"use client"

import "./aboutTimeline.css"
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutTimeline() {

    useGSAP(() => {
        if (typeof window === "undefined") return;

        // These two queries MUST mirror the breakpoints in aboutTimeline.css,
        // otherwise the layout and the animation can disagree (e.g. 440px–767px).
        const CARD_SLIDER_QUERY = "(max-width: 767px), (min-width: 768px) and (max-width: 1024px) and (min-height: 771px)";
        const DESKTOP_QUERY = "(min-width: 1025px), (min-width: 768px) and (max-width: 1024px) and (max-height: 770px)";

        const mm = gsap.matchMedia();

        // ─────────────── MOBILE + TABLET (card slider, left → right) ───────────────
        mm.add(CARD_SLIDER_QUERY, () => {
            const cardsAfterFirst = ".year-description-tablet .year-detail-info-2025, .year-description-tablet .year-detail-info-2026";
            const line = ".year-description-tablet .tablet-timeline-progress-line";

            // Cards 2025 & 2026 wait off-screen on the LEFT (Industries uses +102 for the right side)
            gsap.set(cardsAfterFirst, { xPercent: -110 });

            // Progress line: full width, scaled to 0 so it can "draw" from left to right
            gsap.set(line, { width: "calc(100% - 30px)", scaleX: 0, transformOrigin: "left center" });

            const tl = gsap.timeline({
                defaults: { ease: "none" },
                scrollTrigger: {
                    trigger: ".timeline-section",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 2,
                    snap: {
                        snapTo: "labelsDirectional", // snap to next/prev card based on scroll direction
                        duration: 0.8,
                        delay: 0,
                    },
                },
            });

            tl.addLabel("first")
              .to(".year-description-tablet .year-detail-info-2025", { xPercent: 0, duration: 1 })
              .to(line, { scaleX: 0.5, duration: 1 }, "<")
              .addLabel("second")
              .to(".year-description-tablet .year-detail-info-2026", { xPercent: 0, duration: 1 })
              .to(line, { scaleX: 1, duration: 1 }, "<")
              .addLabel("third");
        });

        // ─────────────── DESKTOP (unchanged logic) ───────────────
        mm.add(DESKTOP_QUERY, () => {
            const screenWidth = window.innerWidth;
            const dotPosition = screenWidth < 840 ? "400px" : screenWidth < 1200 ? "450px" : screenWidth < 1440 ? "400px" : "500px";

            const yearFontSize = screenWidth < 576 ? "26px" : "34px";
            const yearFontSizeActive = screenWidth < 576 ? "40px" : "64px";
            gsap.set(".years-dot", { right: "100%", fontSize: yearFontSize, color: "rgba(253, 253, 253, 0.2)", });
            gsap.set(".the-dot", { backgroundColor: "#363E5E", });
            gsap.set(` .year-description-desktop .year-detail-info .h4, .year-description-desktop .details-info-text img, .year-description-desktop .details-info-text p `, { opacity: 0, scale: 0.5, });

            // FOR TIMELINE OF YEAR 2024
            gsap.to(".years-dot-2024",
                {
                    right: dotPosition,
                    fontSize: yearFontSizeActive,
                    color: "rgba(253, 253, 253, 1)",
                    duration: 1,
                    scrollTrigger: {
                        trigger: ".timeline-section",
                        start: "top top",
                        end: "top -60%",
                        scrub: 1,
                    }
                }
            )

            gsap.to(".years-dot-2024 .the-dot",
                {
                    backgroundColor: "#ED0180",
                    duration: 1,
                    scrollTrigger: {
                        trigger: ".timeline-section",
                        start: "top top",
                        end: "top -60%",
                        scrub: 1,
                    }
                }
            )

            gsap.fromTo(".year-detail-info-2024 .h4, .year-detail-info-2024 .details-info-text img, .year-detail-info-2024 .details-info-text p",
                { scale: 0.5, opacity: 0, },
                {
                    scale: 1,
                    opacity: 1,
                    ease: "power3.out",
                    duration: 1,
                    scrollTrigger: {
                        trigger: ".timeline-section",
                        start: "top -40%",
                        end: "top -60%",
                        scrub: 1,
                    }
                }
            )

            gsap.to({}, { duration: 3 });

            // FOR TIMELINE OF YEAR 2025
            gsap.to(".years-dot-2025",
                {
                    right: dotPosition,
                    fontSize: yearFontSizeActive,
                    color: "rgba(253, 253, 253, 1)",
                    duration: 1,
                    scrollTrigger: {
                        trigger: ".timeline-section",
                        start: "top -70%",
                        end: "top -130%",
                        scrub: 1,
                    }
                }
            )

            gsap.to(".years-dot-2025 .the-dot",
                {
                    backgroundColor: "#ED0180",
                    duration: 1,
                    scrollTrigger: {
                        trigger: ".timeline-section",
                        start: "top -70%",
                        end: "top -130%",
                        scrub: 1,
                    }
                }
            )

            gsap.to(".years-dot-2024",
                {
                    opacity: 0,
                    scrollTrigger: {
                        trigger: ".timeline-section",
                        start: "top -80%",
                        end: "top -100%",
                        scrub: 1,
                    }
                }
            )

            gsap.fromTo(".year-detail-info-2024 .h4, .year-detail-info-2024 .details-info-text img, .year-detail-info-2024 .details-info-text p",
                { scale: 1, },
                {
                    scale: 0.5,
                    opacity: 0,
                    ease: "power3.out",
                    duration: 1,
                    scrollTrigger: {
                        trigger: ".timeline-section",
                        start: "top -80%",
                        end: "top -100%",
                        scrub: 1,
                    }
                }
            )

            gsap.fromTo(".year-detail-info-2025 .h4, .year-detail-info-2025 .details-info-text img, .year-detail-info-2025 .details-info-text p",
                { scale: 0.5, opacity: 0, },
                {
                    scale: 1,
                    opacity: 1,
                    ease: "power3.out",
                    duration: 1,
                    scrollTrigger: {
                        trigger: ".timeline-section",
                        start: "top -110%",
                        end: "top -130%",
                        scrub: 1,
                    }
                }
            )


            // FOR TIMELINE OF YEAR 2026
            gsap.to(".years-dot-2026",
                {
                    right: dotPosition,
                    fontSize: yearFontSizeActive,
                    color: "rgba(253, 253, 253, 1)",
                    duration: 1,
                    scrollTrigger: {
                        trigger: ".timeline-section",
                        start: "top -140%",
                        end: "top -200%",
                        scrub: 1,
                    }
                }
            )

            gsap.to(".years-dot-2026 .the-dot",
                {
                    backgroundColor: "#ED0180",
                    duration: 1,
                    scrollTrigger: {
                        trigger: ".timeline-section",
                        start: "top -140%",
                        end: "top -200%",
                        scrub: 1,
                    }
                }
            )

            gsap.to(".years-dot-2025",
                {
                    opacity: 0,
                    scrollTrigger: {
                        trigger: ".timeline-section",
                        start: "top -140%",
                        end: "top -160%",
                        scrub: 1,
                    }
                }
            )

            gsap.fromTo(".year-detail-info-2025 .h4, .year-detail-info-2025 .details-info-text img, .year-detail-info-2025 .details-info-text p",
                { scale: 1, },
                {
                    scale: 0.5,
                    opacity: 0,
                    ease: "power3.out",
                    duration: 1,
                    scrollTrigger: {
                        trigger: ".timeline-section",
                        start: "top -140%",
                        end: "top -160%",
                        scrub: 1,
                    }
                }
            )

            gsap.fromTo(".year-detail-info-2026 .h4, .year-detail-info-2026 .details-info-text img, .year-detail-info-2026 .details-info-text p",
                { scale: 0.5, opacity: 0, },
                {
                    scale: 1,
                    opacity: 1,
                    ease: "power3.out",
                    duration: 1,
                    scrollTrigger: {
                        trigger: ".timeline-section",
                        start: "top -180%",
                        end: "top -200%",
                        scrub: 1,
                    }
                }
            )
        });

        return () => mm.revert();
    });

    return (
        <>
            <section className="timeline-section bg-[#040E36]">
                <div className="abt-tl-sticky section">
                    <div className="container">
                        <div className="timeline-titles">
                            <h2 className="text-sb text-white">Our story is more than a timeline of milestones.</h2>

                            <div className="timeline-subtitles">
                                <div className="bold-subtitle">
                                    <p className="h5 text-sb text-white">It&apos;s a journey of learning, growing, and continuously evolving to create work that truly matters.</p>
                                </div>

                                <div className="regular-subtitle">
                                    <p className="text-18 text-white">A journey shaped by creativity, collaboration, and continuous growth, reflecting the milestones, experiences, and values that have defined RarePixels from day one.</p>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <div className="year-timeline-line">
                                <div className="tl-baseline">
                                    <div className="years-dot years-dot-2024 active h1 text-sb text-white">2024 <span className="the-dot" /></div>
                                    <div className="years-dot years-dot-2025 h1 text-sb text-white">2025<span className="the-dot" /></div>
                                    <div className="years-dot years-dot-2026 h1 text-sb text-white">2026<span className="the-dot" /></div>
                                </div>
                            </div>

                            <div className="year-description year-description-desktop">
                                <div className="year-detail-info year-detail-info-2024">
                                    <h3 className="h4 text-sb text-white">The Launch of RarePixels</h3>

                                    <div className="details-info-text">
                                        <Image src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/aboutpage/about-timeline/timeline-2024.svg" alt="timeline-2024" width={200} height={260} className="timeline-image"></Image>

                                        <p className="text-18 text-white">From the very beginning, our focus extended beyond aesthetics. Every project was approached with a commitment to understanding business goals, user needs, and long-term growth opportunities. This foundation shaped the way we work today combining creativity with execution to deliver experiences that are both visually compelling and strategically effective.</p>
                                    </div>
                                </div>

                                <div className="year-detail-info year-detail-info-2025">
                                    <h3 className="h4 text-sb text-white">Purposeful Growth</h3>

                                    <div className="details-info-text">
                                        <Image src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/aboutpage/about-timeline/timeline-2025.svg" alt="timeline-2024" width={200} height={260} className="timeline-image"></Image>

                                        <p className="text-18 text-white">Every project brought new challenges, fresh perspectives, and valuable opportunities to grow. As RarePixels expanded its reach, we continued refining our approach and strengthening our expertise across multiple disciplines. The trust placed in us by growing brands allowed us to take on more ambitious projects, and create experiences that combined creativity, strategy, and technology.</p>
                                    </div>
                                </div>

                                <div className="year-detail-info year-detail-info-2026">
                                    <h3 className="h4 text-sb text-white">Shaping What&apos;s Next</h3>

                                    <div className="details-info-text">
                                        <Image src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/aboutpage/about-timeline/timeline-2026.svg" alt="timeline-2024" width={200} height={260} className="timeline-image"></Image>

                                        <p className="text-18 text-white">Today, RarePixels continues to evolve as a creative and technology partner for ambitious brands. We remain focused on helping businesses create meaningful experiences through innovation, collaboration, and purposeful execution. Every project we take on reflects our commitment to quality, creativity, and delivering value that extends far beyond the final deliverable.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="year-description year-description-tablet relative">
                                <div className="year-detail-info year-detail-info-2024">
                                    <div className="details-info-text">
                                        <div className="timeline-image-art">
                                            <Image src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/aboutpage/about-timeline/timeline-2024.svg" alt="timeline-2024" width={200} height={260} className="timeline-image"></Image>
                                        </div>

                                        <div>
                                            <h3 className="timeline-year-title h1 text-white mb-[20px]">2024</h3>

                                            <h3 className="h4 text-sb text-white">The Launch of RarePixels</h3>

                                            <p className="text-18 text-white">From the very beginning, our focus extended beyond aesthetics. Every project was approached with a commitment to understanding business goals, user needs, and long-term growth opportunities. This foundation shaped the way we work today combining creativity with execution to deliver experiences that are both visually compelling and strategically effective.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="year-detail-info year-detail-info-2025">
                                    <div className="details-info-text">
                                        <div className="timeline-image-art">
                                            <Image src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/aboutpage/about-timeline/timeline-2025.svg" alt="timeline-2024" width={200} height={260} className="timeline-image"></Image>
                                        </div>

                                        <div>
                                            <h3 className="timeline-year-title h1 text-white mb-[20px]">2025</h3>

                                            <h3 className="h4 text-sb text-white">Purposeful Growth</h3>

                                            <p className="text-18 text-white">Every project brought new challenges, fresh perspectives, and valuable opportunities to grow. As RarePixels expanded its reach, we continued refining our approach and strengthening our expertise across multiple disciplines. The trust placed in us by growing brands allowed us to take on more ambitious projects, and create experiences that combined creativity, strategy, and technology.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="year-detail-info year-detail-info-2026">
                                    <div className="details-info-text">
                                        <div className="timeline-image-art">
                                            <Image src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/aboutpage/about-timeline/timeline-2026.svg" alt="timeline-2024" width={200} height={260} className="timeline-image"></Image>
                                        </div>

                                        <div>
                                            <h3 className="timeline-year-title h1 text-white mb-[20px]">2026</h3>

                                            <h3 className="h4 text-sb text-white">Shaping What&apos;s Next</h3>

                                            <p className="text-18 text-white">Today, RarePixels continues to evolve as a creative and technology partner for ambitious brands. We remain focused on helping businesses create meaningful experiences through innovation, collaboration, and purposeful execution. Every project we take on reflects our commitment to quality, creativity, and delivering value that extends far beyond the final deliverable.</p>
                                        </div>
                                    </div>
                                </div>

                                <span className="tablet-timeline-progress-line" aria-hidden="true" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}