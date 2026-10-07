"use client";

import "./industries.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CDN_URL = "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/homepage/industries";

const INDUSTRIES_DATA = [
  {
    title: "Technology & SaaS",
    video: `${CDN_URL}/technology-and-saas.mp4`,
    p1: "Complex products fail when users don't understand them.",
    p2: "We transform powerful SaaS platforms into intuitive experiences that drive adoption, retention, and growth.",
  },
  {
    title: "Finance & FinTech",
    video: `${CDN_URL}/finance.mp4`,
    p1: "Trust is the product before the product.",
    p2: "We create secure, credible, and intuitive financial experiences that help users transact with confidence.",
  },
  {
    title: "Healthcare & MedTech",
    video: `${CDN_URL}/healthcare.mp4`,
    p1: "Every second matters when people seek care.",
    p2: "We design healthcare experiences that make information accessible, decisions easier, and journeys less stressful.",
  },
  {
    title: "E-commerce & Retail",
    video: `${CDN_URL}/e-commerce.mp4`,
    p1: "Customers don't buy products. They buy experiences.",
    p2: "We build shopping journeys that reduce hesitation, increase conversions, and encourage repeat purchases.",
  },
  {
    title: "Real Estate & PropTech",
    video: `${CDN_URL}/real-estate.mp4`,
    p1: "People invest in confidence before they invest in property.",
    p2: "We help real estate brands create digital experiences that build trust long before a site visit.",
  },
  {
    title: "Education & EdTech",
    video: `${CDN_URL}/education-industry.mp4`,
    p1: "The best learning experiences never feel complicated.",
    p2: "We create intuitive platforms that keep students focused on learning, not figuring out how things work.",
  },
  {
    title: "Emerging & AI Tech",
    video: `${CDN_URL}/ai-industry.mp4`,
    p1: "Innovation means little if people can't understand it.",
    p2: "We humanize emerging technologies through experiences that make complex products easier to adopt and trust.",
  },
  {
    title: "Food & Lifestyle",
    video: `${CDN_URL}/food-industry.mp4`,
    p1: "People remember how brands make them feel.",
    p2: "We help food and lifestyle brands create memorable identities that drive loyalty beyond the first purchase.",
  },
];

const Industries = () => {
  const root = useRef<HTMLElement>(null);
  const [loadSecondaryMedia, setLoadSecondaryMedia] = useState(false);

  // Defer loading remaining videos until main thread is idle or user scrolls
  useEffect(() => {
    if ("requestIdleCallback" in window) {
      const handle = window.requestIdleCallback(() => setLoadSecondaryMedia(true), { timeout: 3000 });
      return () => window.cancelIdleCallback(handle);
    } else {
      const timer = setTimeout(() => setLoadSecondaryMedia(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".indust-list:not(:nth-child(1))", { xPercent: 102 });

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          onEnter: () => setLoadSecondaryMedia(true), // Load immediately if user scrolls quickly to this section
          snap: {
            snapTo: "labelsDirectional",
            duration: 0.8,
            delay: 0,
          },
        },
      });

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
        .addLabel("eighth");
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="industries bg-[#F7F2EC]">
      <div className="section indust-sticky-wrapper">
        <div className="container overflow-hidden">
          <div className="indust-headings flex flex-wrap justify-between">
            <h2>Industries We Serve</h2>
            <p className="w-[680px] max-w-full flex flex-col justify-center text-18">
              <span>Every industry is different.</span>
              <span>But the need to earn trust, create memorable experiences, and stay relevant isn't.</span>
            </p>
          </div>

          <div className="indust-list-wrapper w-max mt-[40px]">
            <div className="indust-lists w-[1600px] h-[550px] relative">
              {INDUSTRIES_DATA.map((item, index) => {
                const isFirst = index === 0;
                const shouldLoadSrc = isFirst || loadSecondaryMedia;

                return (
                  <div key={item.title} className="indust-list absolute top-0 left-0 bg-[#F7F2EC] w-full h-full flex justify-between">
                    <div className="indust-video-wrapper w-[1000px] h-full relative">
                      <video
                        src={shouldLoadSrc ? item.video : undefined}
                        loop
                        autoPlay={shouldLoadSrc}
                        muted
                        playsInline
                        preload={isFirst ? "auto" : "none"}
                        width={1000}
                        height={550}
                      />

                      <svg className="indust-top-left-svg absolute top-0 left-0" width="170" height="150" viewBox="0 0 170 150" fill="none">
                        <rect width="50" height="50" fill="#F7F2EC" />
                        <rect x="50" y="50" width="50" height="50" fill="#F7F2EC" />
                        <rect x="100" y="100" width="40" height="40" fill="#F7F2EC" />
                        <rect x="140" y="70" width="30" height="30" fill="#F7F2EC" />
                        <rect y="100" width="50" height="50" fill="#F7F2EC" />
                      </svg>

                      <svg className="indust-top-right-svg absolute top-0 right-[-1px]" width="130" height="100" viewBox="0 0 130 100" fill="none">
                        <rect x="80" y="50" width="50" height="50" fill="#F7F2EC" />
                        <rect x="30" width="50" height="50" fill="#F7F2EC" />
                        <rect y="50" width="30" height="30" fill="#F7F2EC" />
                      </svg>

                      <svg className="indust-bottom-left-svg absolute bottom-0 left-0" width="50" height="50" viewBox="0 0 50 50" fill="none">
                        <rect width="50" height="50" fill="#F7F2EC" />
                      </svg>
                    </div>

                    <div className="indust-details-wrapper w-[540px] h-full py-[30px] flex flex-col justify-between">
                      <h3 className="text-80">{item.title}</h3>
                      <p className="flex flex-col gap-[10px] text-18">
                        <span>{item.p1}</span>
                        <span>{item.p2}</span>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;