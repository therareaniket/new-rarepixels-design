"use client";

import { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import gsap from "gsap";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import './servicefaq.css'

const faqs = [
    {
        question: "How do I know which service is right for my business?",
        answer: "You don't need to have it all figured out. Tell us what you're trying to achieve, what's not working, or what you want to build. We'll help you identify the right service, whether that's branding, design, development, social media, or a combination of them."
    },
    {
        question: "Can RarePixels handle both design and development?",
        answer: "Absolutely. We bring design and development together to create digital experiences that look good and work seamlessly. From UI/UX design to website, web application, and mobile app development, we can help take your idea from the first sketch to a working product."
    },
    {
        question: "Can you work with an existing brand or digital product? ",
        answer: "Yes. Whether you need a brand refresh, a website redesign, better user experiences, or a stronger social media presence, we can build on what you already have. We'll first understand what's working, what's missing, and where things can improve. "
    },
    {
        question: "What if I only need one specific service?",
        answer: "That's perfectly fine. You can work with us for a single requirement, whether it's a logo, website, app, social media management, or print design. If your needs change later, we can explore how other services might support your next steps."
    },
    {
        question: " How does a project with RarePixels get started? ",
        answer: "It starts with a conversation. We'll learn about your business, goals, audience, and challenges before discussing the right approach. Once we're aligned on the scope, deliverables, timeline, and investment, we'll map out the next steps and get things moving."
    },
    // {
    //     question: "Do you manage social media for businesses?",
    //     answer: "Yes. We create content strategies, creative assets, and campaigns that help brands grow."
    // },
    // {
    //     question: "How do you approach a new project?",
    //     answer: "Every project begins with understanding your business, users, and goals."
    // },
    // {
    //     question: "Can RarePixels redesign an existing website or product?",
    //     answer: "Yes. We redesign websites and products to improve usability, performance, and business results."
    // },
    // {
    //     question: "Do you work with businesses outside India?",
    //     answer: "Yes. We collaborate with businesses across multiple countries."
    // },
    // {
    //     question: "How do I get started with RarePixels?",
    //     answer: "Simply reach out through our contact page and we'll discuss the right approach."
    // }
];


const ServiceFAQ = () => {

    const [expanded, setExpanded] = useState(false);
    const [showAll, setShowAll] = useState(false);

    const handleToggle = () => {
        if (!expanded) {
            setShowAll(true);

            setTimeout(() => {
                gsap.fromTo(
                    ".extra-faq",
                    {
                        opacity: 0,
                        y: -30,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        stagger: 0.08,
                        ease: "power3.out",
                    }
                );
            }, 50);

            setExpanded(true);
        }
        else {
            gsap.to(".extra-faq", {
                opacity: 0,
                y: -30,
                duration: 0.4,
                stagger: 0.05,
                ease: "power3.in",
                onComplete: () => {
                    setShowAll(false);
                    setExpanded(false);
                },
            });
        }
    };

    return (
        <section className='section'>
            <div className="container">
                <div className="faq-title">
                    <div className="hm-faq-title">
                        <h2 className="font-semibold">FAQs</h2>
                        <p className="text-18 font-normal w-[780px] website-subtitle-mt">
                            Answers to the most common questions helping you understand how we work,
                            what we offer, and how we can support your next project.
                        </p>
                    </div>

                    <div className="faq-small-container container-sm ">
                        <div className={`faq-expand-wrapper mt-[60px] ${expanded ? "expanded" : ""}`}>
                            <Accordion defaultValue={["faq-1"]} className="faq-accordion-wrapper flex flex-col gap-[20px]" >
                                {faqs.slice(0, 5).map((faq, index) =>
                                    <div className="accordion-item-wrapper flex gap-[20px] " key={index}>
                                        <span className="accordion-number text-18 font-semibold flex text-[#A5B4A5] items-center justify-center w-[52px] h-[52px]  bg-[#F5F8F5] rounded-[20px]">
                                            {index + 1}
                                        </span>

                                        <AccordionItem value={`faq-${index + 1}`} className="faq-accordion w-[100%] bg-[#F5F8F5] rounded-[20px]" >
                                            <AccordionTrigger className="faq-accordion-title">
                                                <h3 className="h6 font-semibold text-[black]">
                                                    {faq.question}
                                                </h3>
                                            </AccordionTrigger>

                                            <AccordionContent className="faq-content pl-[40px] pb-[20px] pr-[20px]">
                                                <p className="text-18 font-normal text-[black]">
                                                    {faq.answer}
                                                </p>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </div>
                                )}

                                {showAll &&
                                    faqs.slice(5).map((faq, index) => (
                                        <div className="accordion-item-wrapper extra-faq flex gap-[20px]" key={index + 5} >
                                            <span className="accordion-number text-18 font-semibold flex text-[#A5B4A5] items-center justify-center w-[52px] h-[52px] shrink-0 bg-[#F5F8F5] rounded-[20px]">
                                                {index + 6}
                                            </span>

                                            <AccordionItem value={`faq-${index + 6}`} className="faq-accordion w-full bg-[#F5F8F5] rounded-[20px]" >
                                                <AccordionTrigger className="faq-accordion-title w-full">
                                                    <h3 className="h6 font-semibold text-black text-left">
                                                        {faq.question}
                                                    </h3>
                                                </AccordionTrigger>

                                                                                            <AccordionContent className="faq-content pl-[40px] pb-[20px] pr-[20px]">
                                                    <p className="text-18 font-normal text-black">
                                                        {faq.answer}
                                                    </p>
                                                </AccordionContent>
                                            </AccordionItem>
                                        </div>
                                    ))}
                            </Accordion>

                            <div className="faq-btn-wrapper-arrow flex gap-[20px] justify-end mt-[30px]">
                                {/* <button type="button" className="expand-faq" onClick={handleToggle} >
                                    <span className="text-18 text-normal text-[#ED0180]">
                                        {expanded ? "Less FAQs" : "More FAQs"}
                                    </span>
                                </button> */}

                                <Link href="#" title="Start Your Project" className="text-20 px-[20px] py-[10px] bg-[#ED0180] text-white rounded-[30px] website-link flex items-center gap-[6]">Ask Your Queries <span><Image src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/homepage/faq/settings_voice.svg" alt="faq-mic" width={10} height={10}></Image></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default ServiceFAQ