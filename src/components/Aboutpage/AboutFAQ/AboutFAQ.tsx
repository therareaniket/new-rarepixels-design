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

import './aboutfaq.css'

const faqs = [
    {
        question: "What makes RarePixels different from a typical creative agency?",
        answer: " We look beyond the brief. We combine strategy, creativity, and technology to understand the real problem before creating the solution. The goal is not simply to make something look good, but to make it work, connect, and create value."
    },
    {
        question: "How does RarePixels approach a new project?",
        answer: "Every project starts with understanding. We explore the business, audience, challenges, and goals before deciding what needs to be created. From there, we shape the right direction and bring it to life through thoughtful design and execution."
    },
    {
        question: "Who works behind the pixels at RarePixels?",
        answer: "RarePixels is a multidisciplinary team of designers, developers, strategists, branding specialists, and creative thinkers. Led by Founder Bina and Co-founder Yogesh, we bring different perspectives together to create stronger work."
    },
    {
        question: "What does RarePixels believe in?",
        answer: "We believe every business has an idea worth building and a story worth telling. Whether it’s through branding, UI/UX, web and app development, or social media, we bring strategy, creativity, and technology together to turn that idea into something meaningful. We don’t believe in one-size-fits-all solutions rather that we understand, challenge, create, and refine until every piece works together to move the brand forward."
    },
    {
        question: "What kind of brands does RarePixels work with?",
        answer: "We work with ambitious businesses, growing brands, and teams looking to build, rethink, or evolve their digital presence. Whether it's a new idea or an established brand ready for its next chapter, we focus on finding what makes it worth remembering."
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


const AboutFAQ = () => {

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

                                            <AccordionContent className="faq-content">
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

                                                <AccordionContent className="faq-content">
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

                                <Link href="#" title="Start Your Project" className="text-20 px-[20px] py-[10px] bg-[#ED0180] text-white rounded-[30px] flex items-center gap-[6] website-link">Ask Your Queries <span><Image src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/homepage/faq/settings_voice.svg" alt="faq-mic" width={10} height={10}></Image></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default AboutFAQ