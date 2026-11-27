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

import './contactfaq.css'

const faqs = [
    {
        question: "What if I don’t have a proper brief yet?",
        answer: "That’s completely fine. You don’t need to have everything figured out before talking to us. Tell us what you’re trying to build, fix, change, or achieve. We’ll ask the right questions and help shape the direction with you."
    },
    {
        question: "How do I know if RarePixels is the right fit for my project?",
        answer: " Start with a conversation. Tell us what you need and what you’re trying to achieve. We’ll look at the challenge, ask questions, and tell you honestly where we can help. If we’re not the right fit, we’ll say that too."
    },
    {
        question: "Will I actually get to talk to someone from the team?",
        answer: "Yes. Your message doesn't disappear into a generic inbox. A real person from the RarePixels team reads it, understands the context, and gets back to you. We’d rather have a conversation than send you an automated reply."
    },
    {
        question: " Do you only work with brands that already know exactly what they want?",
        answer: "Not at all. Sometimes you come to us with a clear brief. Sometimes you just have a problem, a rough idea, or a feeling that something isn't working. We’re happy to start there and figure out the next step together."
    },
    {
        question: "What happens after I contact RarePixels?",
        answer: "First, we listen. Then we talk. If there’s a good fit, we get into the details through a discovery call and share our thinking. From there, we put together a proposal around your actual needs, not a one-size-fits-all package."
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


const ContactFAQ = () => {

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

                                                <AccordionContent className="faq-content pr-[20px]">
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

                                {/* <Link href="#" title="Ask your Queries" className="text-20 px-[20px] py-[10px] bg-[#ED0180] text-white rounded-[30px] flex items-center gap-[6] website-link">Ask Your Queries <span><Image src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/homepage/faq/settings_voice.svg" alt="faq-mic" width={10} height={10}></Image></span></Link> */}

                                <Link href="/Contact" title="Ask your queries" className="cyber-cta-btn cyber-white-bg group relative inline-flex h-[40px] items-center text-white transition-colors duration-200" >
                                    <span className="relative z-10 flex items-center pl-[20px] pr-[35px] text-14 tracking-[1px] website-link-text white-bg">
                                        Ask your queries

                                        <span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_5045_10047" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                                <rect width="24" height="24" fill="#000" />
                                            </mask>
                                            <g mask="url(#mask0_5045_10047)">
                                                <path d="M7.2875 23.7125C7.09583 23.5208 7 23.2833 7 23C7 22.7167 7.09583 22.4792 7.2875 22.2875C7.47917 22.0958 7.71667 22 8 22C8.28333 22 8.52083 22.0958 8.7125 22.2875C8.90417 22.4792 9 22.7167 9 23C9 23.2833 8.90417 23.5208 8.7125 23.7125C8.52083 23.9042 8.28333 24 8 24C7.71667 24 7.47917 23.9042 7.2875 23.7125ZM12 24C11.7167 24 11.4792 23.9042 11.2875 23.7125C11.0958 23.5208 11 23.2833 11 23C11 22.7167 11.0958 22.4792 11.2875 22.2875C11.4792 22.0958 11.7167 22 12 22C12.2833 22 12.5208 22.0958 12.7125 22.2875C12.9042 22.4792 13 22.7167 13 23C13 23.2833 12.9042 23.5208 12.7125 23.7125C12.5208 23.9042 12.2833 24 12 24ZM15.2875 23.7125C15.0958 23.5208 15 23.2833 15 23C15 22.7167 15.0958 22.4792 15.2875 22.2875C15.4792 22.0958 15.7167 22 16 22C16.2833 22 16.5208 22.0958 16.7125 22.2875C16.9042 22.4792 17 22.7167 17 23C17 23.2833 16.9042 23.5208 16.7125 23.7125C16.5208 23.9042 16.2833 24 16 24C15.7167 24 15.4792 23.9042 15.2875 23.7125ZM9.875 13.125C9.29167 12.5417 9 11.8333 9 11V5C9 4.16667 9.29167 3.45833 9.875 2.875C10.4583 2.29167 11.1667 2 12 2C12.8333 2 13.5417 2.29167 14.125 2.875C14.7083 3.45833 15 4.16667 15 5V11C15 11.8333 14.7083 12.5417 14.125 13.125C13.5417 13.7083 12.8333 14 12 14C11.1667 14 10.4583 13.7083 9.875 13.125ZM11 21V17.9C9.26667 17.6667 7.83333 16.8958 6.7 15.5875C5.56667 14.2792 5 12.75 5 11H7C7 12.3833 7.4875 13.5625 8.4625 14.5375C9.4375 15.5125 10.6167 16 12 16C13.3833 16 14.5625 15.5125 15.5375 14.5375C16.5125 13.5625 17 12.3833 17 11H19C19 12.75 18.4333 14.2792 17.3 15.5875C16.1667 16.8958 14.7333 17.6667 13 17.9V21H11ZM12.7125 11.7125C12.9042 11.5208 13 11.2833 13 11V5C13 4.71667 12.9042 4.47917 12.7125 4.2875C12.5208 4.09583 12.2833 4 12 4C11.7167 4 11.4792 4.09583 11.2875 4.2875C11.0958 4.47917 11 4.71667 11 5V11C11 11.2833 11.0958 11.5208 11.2875 11.7125C11.4792 11.9042 11.7167 12 12 12C12.2833 12 12.5208 11.9042 12.7125 11.7125Z" fill="black" />
                                            </g>
                                        </svg>
                                        </span>
                                    </span>

                                    <span className="cyber-pink-pixels" aria-hidden="true">
                                        <span className="cyber-pink-box cyber-pink-lg" />
                                        <span className="cyber-pink-box cyber-pink-sm" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default ContactFAQ