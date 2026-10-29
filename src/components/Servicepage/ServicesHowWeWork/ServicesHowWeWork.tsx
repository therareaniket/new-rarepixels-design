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
        description: "Visitors drop off. Users get stuck. Good ideas get lost in confusing experiences. We make digital products easier to understand, navigate, and use, turning every interaction into a step towards the outcome your business wants.",
    },
    {
        number: " 02",
        title: "Web & App Development",
        // title: "Web & App Development",
        // subtitle: "Every direction needs a reason.",
        description: "When ready-made solutions fall short, we build what your business actually needs. From custom websites and web applications to mobile apps and SaaS platforms, we turn complex requirements into reliable digital products built to perform and grow with you.",
    },
    {
        number: "03",
        title: " Brand Identity Design",
        // title: "Brand Identity Design",
        // subtitle: "Where thinking becomes something visible.",
        description: "If your brand feels forgettable, inconsistent, or disconnected from who you are today, it's time for a rethink. We build distinctive identities around your purpose, personality, and positioning, giving people a reason to recognise you, remember you, and choose you.",
    },
    {
        number: "04",
        title: " Social Media Management",
        // title: "Social Media Management",
        // subtitle: "Built specifically - never assembled from parts.",
        description: "A busy feed means little if the right people aren't paying attention. We bring strategy, creativity, and consistency to your social presence, creating content that starts conversations, builds recognition, and turns everyday scrolling into meaningful brand connections.",
    },
    {
        number: "05",
        title: " Graphics & Print Media Design",
        // title: "Graphics & Print Media Design",
        // subtitle: "Improved until it performs exactly as designed.",
        description: "From brochures and packaging to catalogues and outdoor creatives, every physical touchpoint shapes how people see your business. We create print and graphic assets that carry your brand identity beyond digital, making every detail feel considered, consistent, and unmistakably yours.",
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

    const sectionHowRef = useRef<HTMLElement | null>(null);
    const cardsWrapperRef = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const section = sectionHowRef.current;
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

            return () => { window.removeEventListener("load", refreshScrollTrigger); };
        }, section);

        return () => {
            context.revert();
        };
    }, []);

    return (
        <section ref={sectionHowRef} className=' service-section'>
            <div className="service-inner  section">
                <div className="container">

                    <div className="srvs-how-we-work-wrapper flex justify-between items-start">
                        <div className="services-how-we-work-title">
                            <h2>Not Sure Where to Start? </h2>

                            {/* <p className='text-18 flex flex-col gap-[18] website-subtitle-mt w-[687px]'>
                                <span className='font-bold'>No Guesswork. No Shortcuts. No Off-The-Shelf.</span>
                            </p> */}
                        </div>

                        <div className="services-how-er-work-subtitle w-[687px]">
                            <span className='font-normal text-18'>You know what you want to improve. We help you figure out what it takes to get there. Whether it&apos;s your brand, digital experience, or growth strategy, we&apos;ll help you find the right starting point and build a way forward.</span>
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