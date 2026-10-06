"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './serviceshowwework.css'

const workSteps = [
    {
        number: "01",
        title: " UI/UX Design Services",
        // title: "UI/UX Design",
        // subtitle: "Good solutions begin with good questions.",
        description: "Your digital product exists but users are not engaging with it the way you expected. Visitors drop off before converting. Journeys feel complicated. Interfaces feel unclear. UI/UX design fixes the experience that is costing you users — and revenue.",
    },
    {
        number: " 02",
        title: "Web & App Development",
        // title: "Web & App Development",
        // subtitle: "Every direction needs a reason.",
        description: "Your current platform cannot do what your business needs. You have outgrown off-the-shelf solutions. You need a custom website, web application, SaaS platform, or e-commerce build engineered specifically around how your business operates.",
    },
    {
        number: "03",
        title: " Brand Identity Design",
        // title: "Brand Identity Design",
        // subtitle: "Where thinking becomes something visible.",
        description: "Your business has evolved but your brand has not kept up. Or you are launching something new and need an identity that is completely original — a visual language, a brand strategy, and a positioning that belongs entirely to you.",
    },
    {
        number: "04",
        title: " Social Media Management",
        // title: "Social Media Management",
        // subtitle: "Built specifically - never assembled from parts.",
        description: "Your brand is on social platforms but without a real strategy behind it. Content is inconsistent. Engagement is low. You are not sure what is working or why. Social media management builds the presence your brand deserves — consistently and measurably.",
    },
    {
        number: "05",
        title: " Graphics & Print Media Design",
        // title: "Graphics & Print Media Design",
        // subtitle: "Improved until it performs exactly as designed.",
        description: "Your digital brand is strong but your physical presence does not match it. Brochures, packaging, catalogues, outdoor advertising, and trade show materials — all designed to carry your brand identity into the physical world with the same standard as your digital presence.",
    },
    // {
    //     number: " 06",
    //     title: "Deliver",
    //     // subtitle: "Launch is the beginning, not the end.",
    //     description: "We hand over every project with full documentation, training where needed, and a clear plan for what comes next. The relationship does not end at delivery - it evolves.",
    // },
];

const ServicesHowWeWork = () => {
    // gsap.registerPlugin();

    const sectionRef = useRef<HTMLElement | null>(null);
    const cardsWrapperRef = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const section = sectionRef.current;
        const cardsWrapper = cardsWrapperRef.current;

        if (!section || !cardsWrapper) return;

        const context = gsap.context(() => {
            const cards = gsap.utils.toArray<HTMLElement>(".services-how-we-work");

            const firstCard = cards[0];
            const animatedCards = cards.slice(1);

            const getMovementDistance = () => {
                const cssValue = getComputedStyle(cardsWrapper).getPropertyValue("--card-movement-distance");
                return parseFloat(cssValue) || 270;
            };

            const getCollapsedPaddingTop = () => {
                const cssValue = getComputedStyle(cardsWrapper).getPropertyValue("--collapsed-card-padding-top");
                return parseFloat(cssValue) || 20;
            };

            const getCollapsedTitleSize = () => {
                return getComputedStyle(cardsWrapper)
                    .getPropertyValue("--collapsed-title-size")
                    .trim();
            };

            const getCollapsedTitleLineHeight = () => {
                return getComputedStyle(cardsWrapper)
                    .getPropertyValue("--collapsed-title-line-height")
                    .trim();
            };


            gsap.set(firstCard, { y: 0, opacity: 1, force3D: true, });

            gsap.set(animatedCards, { y: (index) => { return (index + 1) * getMovementDistance(); }, opacity: 0.2, force3D: true, });

            const animatedTabHeaders = animatedCards
                .map((card) => card.querySelector<HTMLElement>(".services-step-number"))
                .filter((header): header is HTMLElement => header !== null
                );

            gsap.set(animatedTabHeaders, { y: 100, opacity: 0.1, zIndex: -1, force3D: true, });

            const timeline = gsap.timeline({
                defaults: { duration: 1, ease: "none", },

                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 2,
                    invalidateOnRefresh: true,
                },
            });

            animatedCards.forEach((currentCard, index) => {
                const movingCards = animatedCards.slice(index);

                const previousCard = cards[index];
                const previousCardContent = previousCard.querySelector<HTMLElement>(".services-how-work-card");
                const currentTabHeader = currentCard.querySelector<HTMLElement>(".services-step-number");
                const previousCardTitle = previousCard.querySelector<HTMLElement>(".services-how-work-card h3");

                const stageLabel = `card-${index + 2}`;

                timeline.addLabel(stageLabel);

                timeline.to(
                    movingCards,
                    {
                        y: () => `-=${getMovementDistance()}`,
                        duration: 1,
                        ease: "none",
                        force3D: true,
                    },
                    stageLabel
                );

                if (previousCardContent) {
                    timeline.to(
                        previousCardContent,
                        {
                            paddingTop: () => getCollapsedPaddingTop(),
                            duration: 0.8,
                            ease: "power2.inOut",
                        },
                        stageLabel
                    );
                }

                if (previousCardTitle) {
                    timeline.to(
                        previousCardTitle,
                        {
                            "--card-title-size": () => getCollapsedTitleSize(),
                            "--card-title-line-height": () =>
                                getCollapsedTitleLineHeight(),
                            duration: 0.8,
                            ease: "power2.inOut",
                        },
                        stageLabel
                    );
                }


                timeline.to(
                    currentCard,
                    {
                        opacity: 1,
                        duration: 0.8,
                        ease: "power1.out",
                    },
                    stageLabel
                );

                if (currentTabHeader) {
                    timeline.to(
                        currentTabHeader,
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.75,
                            ease: "power2.out",
                            force3D: true,
                        },
                        `${stageLabel}+=0.25`
                    );

                    timeline.set(
                        currentTabHeader,
                        {
                            zIndex: 2,
                        },
                        `${stageLabel}+=0.95`
                    );
                }
            });

            const refreshScrollTrigger = () => { ScrollTrigger.refresh(); };

            window.addEventListener("load", refreshScrollTrigger);

            return () => {
                window.removeEventListener("load", refreshScrollTrigger);
            };
        }, section);

        return () => {
            context.revert();
        };
    }, []);

    return (
        <section ref={sectionRef} className=' service-section'>
            <div className="service-inner  section">
                <div className="container">

                    <div className="srvs-how-we-work-wrapper flex justify-between items-start">
                        <div className="services-how-we-work-title">
                            <h2>Not Sure Which Service You Need? </h2>

                            {/* <p className='text-18 flex flex-col gap-[18] website-subtitle-mt w-[687px]'>
                                <span className='font-bold'>No Guesswork. No Shortcuts. No Off-The-Shelf.</span>
                            </p> */}
                        </div>

                        <div className="services-how-er-work-subtitle w-[687px]">
                            <span className='font-normal text-18'>Most businesses know what problem they are trying to solve. They are less sure which service solves it. Here is how to find the right starting point.</span>
                        </div>
                    </div>

                    <div ref={cardsWrapperRef} className="services-how-work-card-wrapper relative flex flex-col gap-[30px] mt-[30px]">
                        {workSteps.map((step, index) => (
                            <div key={step.number} className={`services-how-we-work-${index + 1} services-how-we-work flex flex-col items-end`}>
                                <div className='services-step-number text-18 font-semibold w-[200px]  py-[20px] text-center'>{step.number}</div>
                                <div className="services-how-work-card w-[100%] h-[max-content] p-[60px]">
                                    <h3 className='font-semibold h1'>{step.title}</h3>

                                    {/* <h4 className='h5 mt-[20px] mb-[14px]'>{step.subtitle}</h4> */}

                                    <p className='text-18px mt-[20px] font-normal w-[871px]'>{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesHowWeWork   