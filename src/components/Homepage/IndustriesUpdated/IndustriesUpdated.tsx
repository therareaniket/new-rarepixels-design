// "use client"

// import "./industriesUpdated.css";
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger"; 

// gsap.registerPlugin(ScrollTrigger);

// interface IndustryItem { id: number; title: string; videoURL: string; description1?: string; description2?: string; }

// const industriesData: IndustryItem[] = [
//     {
//         id: 1,
//         title: "Technology & SaaS",
//         videoURL: "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/homepage/industries/technology-and-saas.mp4",
//         description1: "Complex products fail when users don't understand them.",
//         description2: "We transform powerful SaaS platforms into intuitive experiences that drive adoption, retention, and growth.",
//     },
//     {
//         id: 2,
//         title: "Finance & FinTech",
//         videoURL: "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/homepage/industries/finance.mp4",
//         description1: "Trust is the product before the product.",
//         description2: "We create secure, credible, and intuitive financial experiences that help users transact with confidence.",
//     },
//     {
//         id: 3,
//         title: "Healthcare & MedTech",
//         videoURL: "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/homepage/industries/healthcare.mp4",
//         description1: "Every second matters when people seek care.",
//         description2: "We design healthcare experiences that make information accessible, decisions easier, and journeys less stressful.",
//     },
//     {
//         id: 4,
//         title: "E-Commerce & Retail",
//         videoURL: "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/homepage/industries/e-commerce.mp4",
//         description1: "Customers don't buy products. They buy experiences.",
//         description2: "We build shopping journeys that reduce hesitation, increase conversions, and encourage repeat purchases.",
//     },
//     {
//         id: 5,
//         title: "Real Estate & PropTech",
//         videoURL: "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/homepage/industries/real-estate.mp4",
//         description1: "People invest in confidence before they invest in property.",
//         description2: "We help real estate brands create digital experiences that build trust long before a site visit.",
//     },
//     {
//         id: 6,
//         title: "Education & EdTech",
//         videoURL: "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/homepage/industries/education-industry.mp4",
//         description1: "The best learning experiences never feel complicated.",
//         description2: "We create intuitive platforms that keep students focused on learning, not figuring out how things work.",
//     },
//     {
//         id: 7,
//         title: "AI & Emerging Tech",
//         videoURL: "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/homepage/industries/ai-industry.mp4",
//         description1: "Innovation means little if people can't understand it.",
//         description2: "We humanize emerging technologies through experiences that make complex products easier to adopt and trust.",
//     },
//     {
//         id: 8,
//         title: "Food & Lifestyle",
//         videoURL: "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/homepage/industries/food-industry.mp4",
//         description1: "People remember how brands make them feel.",
//         description2: "We help food and lifestyle brands create memorable identities that drive loyalty beyond the first purchase.",
//     },
// ];

// const IndustriesUpdated: React.FC = () => {
//     const sectionRef = useRef<HTMLElement>(null);
//     const listsRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         const section = sectionRef.current;
//         const lists = listsRef.current;
//         if (!section || !lists) return;

//         const getScrollAmount = () => { 
//             let listWidth = lists.scrollWidth;
//             const fullWidth = window.innerWidth >= 1600 ? 318 : window.innerWidth >= 1440 ? 200 : 318;

//             return -(listWidth - window.innerWidth + fullWidth);
//         };

//         const totalItems = lists.children.length;

//         const tween = gsap.to(lists, { 
//             x: getScrollAmount, 
//             ease: "none",
//             scrollTrigger: {
//                 trigger: section,
//                 pin: true,
//                 scrub: 2, 
//                 end: () => `+=${lists.scrollWidth}`,
//                 invalidateOnRefresh: true,
//                 snap: {
//                     snapTo: 1 / (totalItems - 1), 
//                     duration: { min: 0.2, max: 0.6 }, 
//                     delay: 0.1, 
//                     ease: "power1.inOut", 
//                 },
//             },
//         });

//         return () => {
//             tween.kill();
//             ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//         };
//     }, []);

//     return (
//         <section ref={sectionRef} className="industry bg-[#F7F2EC] h-screen flex flex-col justify-center overflow-hidden">
//             <div className="container overflow-hidden w-full">
//                 <div className="industries-headings flex items-center justify-between">
//                     <h2>Industries We Serve</h2>
//                     <p className="text-18 w-[540px]">Every industry is different. But the need to earn trust, create memorable experiences, and stay relevant isn't.</p>
//                 </div>

//                 <div ref={listsRef} className="industries-lists w-max mt-[60px] flex gap-[60px]">
//                     {industriesData.map((item) => (
//                         <div key={item.id} className={`industry-list w-[1600px] h-[600px] flex items-center justify-between gap-[60px]`}>
//                             <div className="indust-video w-[1000px] h-full rounded-br-[100px] overflow-hidden">
//                                 <video src={item.videoURL} width={1000} height={600} autoPlay loop playsInline muted preload="metadata"></video>
//                             </div>

//                             <div className="indust-text w-[540px] h-[540px] flex flex-col justify-between">
//                                 <h3 className="text-80">{item.title}</h3>

//                                 <p className="text-18">
//                                     {item.description1 && (<span className="block mb-[18px]">{item.description1}</span>)}
//                                     {item.description2 && ( <span>{item.description2}</span>)}
//                                 </p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default IndustriesUpdated;
























































"use client";

import "./industriesUpdated.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 

gsap.registerPlugin(ScrollTrigger);

interface IndustryItem { 
    id: number; 
    title: string; 
    videoURL: string; 
    description1?: string; 
    description2?: string; 
}

const industriesData: IndustryItem[] = [
    {
        id: 1,
        title: "Technology & SaaS",
        videoURL: "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/homepage/industries/technology-and-saas.mp4",
        description1: "Complex products fail when users don't understand them.",
        description2: "We transform powerful SaaS platforms into intuitive experiences that drive adoption, retention, and growth.",
    },
    {
        id: 2,
        title: "Finance & FinTech",
        videoURL: "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/homepage/industries/finance.mp4",
        description1: "Trust is the product before the product.",
        description2: "We create secure, credible, and intuitive financial experiences that help users transact with confidence.",
    },
    {
        id: 3,
        title: "Healthcare & MedTech",
        videoURL: "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/homepage/industries/healthcare.mp4",
        description1: "Every second matters when people seek care.",
        description2: "We design healthcare experiences that make information accessible, decisions easier, and journeys less stressful.",
    },
    {
        id: 4,
        title: "E-Commerce & Retail",
        videoURL: "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/homepage/industries/e-commerce.mp4",
        description1: "Customers don't buy products. They buy experiences.",
        description2: "We build shopping journeys that reduce hesitation, increase conversions, and encourage repeat purchases.",
    },
    {
        id: 5,
        title: "Real Estate & PropTech",
        videoURL: "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/homepage/industries/real-estate.mp4",
        description1: "People invest in confidence before they invest in property.",
        description2: "We help real estate brands create digital experiences that build trust long before a site visit.",
    },
    {
        id: 6,
        title: "Education & EdTech",
        videoURL: "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/homepage/industries/education-industry.mp4",
        description1: "The best learning experiences never feel complicated.",
        description2: "We create intuitive platforms that keep students focused on learning, not figuring out how things work.",
    },
    {
        id: 7,
        title: "AI & Emerging Tech",
        videoURL: "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/homepage/industries/ai-industry.mp4",
        description1: "Innovation means little if people can't understand it.",
        description2: "We humanize emerging technologies through experiences that make complex products easier to adopt and trust.",
    },
    {
        id: 8,
        title: "Food & Lifestyle",
        videoURL: "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/homepage/industries/food-industry.mp4",
        description1: "People remember how brands make them feel.",
        description2: "We help food and lifestyle brands create memorable identities that drive loyalty beyond the first purchase.",
    },
];

export default function IndustriesUpdated() {
    const sectionRef = useRef<HTMLElement>(null);
    const listsRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const section = sectionRef.current;
        const lists = listsRef.current;
        const firstCard = cardRefs.current[0];
        if (!section || !lists || !firstCard) return;

        // Simple step size calculation like your Projects component
        const style = window.getComputedStyle(lists);
        const gap = parseFloat(style.gap) || 0;
        const cardWidth = firstCard.offsetWidth;
        const stepSize = cardWidth + gap;

        // Total distance to scroll horizontally based on step size
        const totalItems = industriesData.length;
        const scrollDistance = stepSize * (totalItems - 1);

        const tween = gsap.to(lists, {
            x: -scrollDistance,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                pin: true,
                scrub: 1,
                end: () => `+=${scrollDistance}`,
                invalidateOnRefresh: true,
                snap: {
                    snapTo: 1 / (totalItems - 1),
                    duration: { min: 0.2, max: 0.5 },
                    delay: 0.1,
                },
            },
        });

        return () => { tween.kill(); ScrollTrigger.getAll().forEach((trigger) => trigger.kill());};
    }, []);

    return (
        <section ref={sectionRef} className="industry bg-[#F7F2EC] h-screen flex flex-col justify-center overflow-hidden">
            <div className="container overflow-hidden w-full">
                <div className="industries-headings flex items-center justify-between">
                    <h2>Industries We Serve</h2>
                    <p className="text-18">
                        Every industry is different. <br />But the need to earn trust, create memorable experiences, and stay relevant isn't.
                    </p>
                </div>

                <div className="industries-lists-wrapper overflow-hidden mt-[60px]">
                    <div ref={listsRef} className="industries-lists flex gap-[60px] w-max">
                        {industriesData.map((item, index) => (
                            <div key={item.id} ref={(el) => { cardRefs.current[index] = el; }} className="industry-list w-[1600px] h-[600px] flex items-center justify-between gap-[60px] flex-shrink-0">
                                <div className="indust-video w-[1000px] h-full rounded-br-[100px] overflow-hidden">
                                    <video src={item.videoURL} width={1000} height={600} className="w-full h-full object-cover" autoPlay loop playsInline muted preload="metadata"></video>
                                </div>

                                <div className="indust-text w-[540px] h-[540px] flex flex-col justify-between">
                                    <h3 className="text-80">{item.title}</h3>
                                    <p className="text-18">
                                        {item.description1 && (<span className="block mb-[18px]">{item.description1}</span>)}
                                        {item.description2 && (<span>{item.description2}</span>)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}