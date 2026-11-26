"use client";

import { useCallback, useEffect, useState, type CSSProperties, } from "react";
import "./scrolltotop.css";

type ScrollButtonStyle = CSSProperties & {
    "--fill-height": string;
};

const ScrollToTopButton = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    const updateScrollProgress = useCallback(() => {
        const firstSection = document.getElementById("first-section");

        const firstSectionTop = firstSection
            ? firstSection.getBoundingClientRect().top + window.scrollY
            : 0;

        const maximumScroll =
            document.documentElement.scrollHeight - window.innerHeight;

        const scrollDistance = Math.max(
            maximumScroll - firstSectionTop,
            1
        );

        const currentScroll = Math.max(
            window.scrollY - firstSectionTop,
            0
        );

        const progress = Math.min(
            Math.max(currentScroll / scrollDistance, 0),
            1
        );

        setScrollProgress(progress);
    }, []);

    useEffect(() => {
        let animationFrameId: number | null = null;

        const handleScroll = () => {
            if (animationFrameId !== null) return;

            animationFrameId = window.requestAnimationFrame(() => {
                updateScrollProgress();
                animationFrameId = null;
            });
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);

            if (animationFrameId !== null) {
                window.cancelAnimationFrame(animationFrameId);
            }
        };
    }, [updateScrollProgress]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const buttonStyle: ScrollButtonStyle = {
        "--fill-height": `${scrollProgress * 100}%`,
    };

    return (
        <button type="button" onClick={scrollToTop} className="scroll-top-btn" style={buttonStyle} aria-label="Scroll to top" >
            <span className="scroll-top-btn__layer" aria-hidden="true">
                <span className="scroll-top-btn__icon icon-hero-cta-arrow" />
            </span>

            <span className="scroll-top-btn__fill" aria-hidden="true">
                <span className="scroll-top-btn__layer">
                    <span className="scroll-top-btn__icon scroll-top-btn__icon--filled icon-hero-cta-arrow" />
                </span>
            </span>
        </button>
    );
};

export default ScrollToTopButton;