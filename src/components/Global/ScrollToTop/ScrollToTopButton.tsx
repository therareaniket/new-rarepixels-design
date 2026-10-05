'use client'

// import Image from "next/image";
import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const firstSection = document.getElementById("first-section");
            if (firstSection) {
                const firstSectionHeight = firstSection.offsetHeight;

                setShowButton(window.scrollY > firstSectionHeight);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (!showButton) return null;

    return (
        <button onClick={scrollToTop} className={`fixed bottom-6 right-6 z-50 bg-[#ED0180] text-white p-[10px] cursor-pointer flex items-center justify-center shadow-lg rounded-[10px] transition-transform transition-opacity duration-500 ease-out ${showButton ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none"}}`}>
            <span className="block icon-hero-cta-arrow font-[14px] rotate-270"></span>
        </button>
    )
}

export default ScrollToTopButton