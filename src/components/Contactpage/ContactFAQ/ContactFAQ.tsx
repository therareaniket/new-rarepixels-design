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

                                <Link href="#" title="Start Your Project" className="text-20 px-[20px] py-[10px] bg-[#ED0180] text-white rounded-[30px] flex items-center gap-[6]">Ask Your Queries <span><Image src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/homepage/faq/settings_voice.svg" alt="faq-mic" width={10} height={10}></Image></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default ContactFAQ