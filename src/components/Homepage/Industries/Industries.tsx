"use client";

import Image from "next/image";
import "./industries.css";

const CDN_URL = "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev";

type Industry = {
    id: number;
    title: string;
    firstParagraph: string;
    secondParagraph: string;
    thirdParagraph: string;
    video: string;
};

const industriesData: Industry[] = [
    {
        id: 1,
        title: "Technology & SaaS",
        firstParagraph: "Complex products fail when users don't understand them.",
        secondParagraph: "The best software makes sense at a glance and feels natural from the start.",
        thirdParagraph: "We design intuitive SaaS platforms that improve adoption, reduce friction, and keep users coming back.",
        video: "/images/homepage/industries/technology-and-saas.mp4",
    },
    {
        id: 2,
        title: "Finance & Fintech",
        firstParagraph: "Trust isn't optional when every click involves confidence.",
        secondParagraph: "Financial decisions begin with credibility, long before transactions happen.",
        thirdParagraph: "We create secure, intuitive digital experiences that inspire confidence and simplify complex financial journeys.",
        video: "",
    },
    {
        id: 3,
        title: "Healthcare & MedTech",
        firstParagraph: "When people need clarity most, every interaction matters.",
        secondParagraph: "Healthcare experiences should reduce uncertainty, not create it.",
        thirdParagraph: "We design patient-first platforms that make information accessible, interactions seamless, and care easier to navigate.",
        video: "",
    },
    {
        id: 4,
        title: "E-commerce & Retail",
        firstParagraph: "The shortest path from browsing to buying wins.",
        secondParagraph: "Every unnecessary click is a missed opportunity.",
        thirdParagraph: "We build shopping experiences that remove friction, increase confidence, and turn visitors into loyal customers.",
        video: "",
    },
    {
        id: 5,
        title: "Real Estate & PropTech",
        firstParagraph: "Properties attract attention. Experiences create decisions.",
        secondParagraph: "People invest in confidence before they invest in property.",
        thirdParagraph: "We craft digital experiences that showcase value, build trust, and encourage meaningful enquiries.",
        video: "",
    },
    {
        id: 6,
        title: "Education & EdTech",
        firstParagraph: "Learning works best when technology stays out of the way.",
        secondParagraph: "Great learning platforms feel effortless for every learner.",
        thirdParagraph: "We design engaging educational experiences that improve accessibility, participation, and long-term engagement.",
        video: "",
    },
    {
        id: 7,
        title: "AI & Emerging Tech",
        firstParagraph: "The future moves fast. Great experiences help people keep up.",
        secondParagraph: "Innovation succeeds when people know how to use it.",
        thirdParagraph: "We simplify advanced technologies through intuitive interfaces that make innovation feel approachable.",
        video: "",
    },
    {
        id: 8,
        title: "Food & Lifestyle",
        firstParagraph: "Great brands satisfy long before the first purchase.",
        secondParagraph: "People remember experiences before they remember products.",
        thirdParagraph: "We create brands and digital experiences that spark curiosity, build loyalty, and keep customers coming back.",
        video: "",
    },
];

const Industries = () => {
    return (
        <section className="section industries-section bg-[#F7F2EC]">
            <div className="container industries-container">
                <div className="hm-industries-title text-center">
                    <h2 className="font-semibold"> Industries We Serve </h2>

                    <p className="text-18 font-normal mt-[14px]">
                        <span>Every industry is different.</span>
                        <span> But the need to earn trust, create memorable experiences, and stay relevant isn&apos;t. </span>
                    </p>
                </div>

                <div className="industries-card-wrapper flex gap-[50px] mt-[40px]">
                    {industriesData.map((industry) => (
                        <div className="industries-cards flex justify-between gap-[60px] items-stretch" key={industry.id} >
                            <div className="relative industries-video-wrapper">
                                <div className="industries-card-left rounded-br-[100px]"> <video className="industries-video" src={`${CDN_URL}${industry.video}`} autoPlay loop playsInline muted width={1000} height={600}></video> </div>

                                <Image className="industries-pixel-1" src={`${CDN_URL}/images/homepage/industries/industries-pixel-desktop-1.svg`} alt="industriespixels" width={170} height={150}></Image>
                                <Image className="industries-pixel-2" src={`${CDN_URL}/images/homepage/industries/industries-pixel-desktop-2.svg`} alt="industriespixels" width={132} height={100}></Image>
                                <Image className="industries-pixel-3" src={`${CDN_URL}/images/homepage/industries/industries-pixel-desktop-3.svg`} alt="industriespixels" width={50} height={50}></Image>
                            </div>

                            <div className="industries-card-right flex flex-col justify-between w-[540px]">
                                <h3 className="font-semibold"> {industry.title} </h3>

                                <p className="text-18 font-normal flex flex-col gap-[18px]">
                                    <span className="font-semibold"> {industry.firstParagraph} </span>
                                    <span> {industry.secondParagraph} </span>
                                    <span> {industry.thirdParagraph} </span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Industries;