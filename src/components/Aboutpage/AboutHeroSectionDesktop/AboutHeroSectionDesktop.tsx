"use client";

import "./aboutHeroSectionDesktop.css"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function AboutHeroSectionDesktop() {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const targetHeight = "15vh";
    const musicPause = window.innerWidth > 1024 ? "bottom 550px" : "bottom -100px";

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: ".about-hero-inner",
            start: "top bottom",
            end: musicPause,
            onLeave: () => {
                videoRef.current?.pause();
                setIsPlaying(false);
            },
            // onEnterBack: () => {
            //     if (isPlaying) {
            //         videoRef.current?.play().catch(() => {});
            //     }
            // }, 
        });

        ScrollTrigger.create({
            trigger: ".about-hero-inner",
            start: "top bottom",
            end: musicPause,
            onLeave: () => {
                videoRef.current?.pause();
            },
            onLeaveBack: () => {
                videoRef.current?.pause();
            },
        });

        gsap.fromTo(".abt-hero-video",
            { height: "100vh" },
            { 
                height: targetHeight,
                duration: 1,
                scrollTrigger: {
                    trigger: ".about-hero-section-desktop",
                    start: "top top",
                    end: "top -1600px",
                    scrub: true,
                }
            }
        );

        gsap.fromTo(".abt-hero-video",
            { opacity: 1 },
            { 
                opacity: 0, 
                duration: 1,
                scrollTrigger: {
                    trigger: ".about-hero-section-desktop",
                    start: "top -300px",
                    end: () => (window.innerWidth < 480 ? "top -1050px" : window.innerWidth > 1199 ? "top -600px" : "top -900px"),
                    scrub: true,
                }
            }
        );

        gsap.fromTo(".about-hero-txt",
            { "--bg-opacity": 1 },
            { 
                "--bg-opacity": 0,
                duration: 1,
                scrollTrigger: {
                    trigger: ".about-hero-section-desktop",
                    start: "top -300px",
                    end: () => (window.innerWidth < 480 ? "top -1050px" : window.innerWidth > 1199 ? "top -600px" : "top -900px"),
                    scrub: true,
                }
            }
        );
    }, [isPlaying]);

    const handleTogglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                videoRef.current.muted = false; // Enable audio
                videoRef.current.play().then(() => {
                    setIsPlaying(true);
                }).catch((err) => {
                    console.log("Playback failed:", err);
                });
            }
        }
    };

    return (
        <section id="first-section" className="about-hero-section-desktop">
            <div className="about-hero-inner">
                <div className="abt-hero-video" style={{ position: "relative" }}>
                    <video ref={videoRef} src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/aboutpage/about-hero/rare-second-anniversary.mp4" playsInline loop onClick={handleTogglePlay} style={{ cursor: "pointer" }}></video>

                    {/* Center Play Button Overlay */}
                    {!isPlaying && (
                        <button onClick={handleTogglePlay} className="video-center-play-btn" >
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z"/>
                            </svg>
                        </button>
                    )}
                </div>

                <div className="about-text-vid-clip">
                    <span className="h2 about-hero-txt">ABOUT US</span>
                </div>

                <div className="container">
                    <div className="about-section section">
                        <div className="container-sm">
                            <div className="about-hero-section-title">
                                <h1 className="text-sb">The People, Purpose, and Principles Behind RarePixels.</h1>

                                <p className="text-18 text-rg">
                                    <span>RarePixels is more than a creative agency. It&apos;s a collective of thinkers, creators, and problem-solvers united by a passion for meaningful work. Through collaboration, innovation, and a commitment to excellence, we help transform ideas into experiences that leave a lasting impression.</span>
                                    <span>We believe that great work is built on strong partnerships, shared vision, and a genuine understanding of the people behind every brand. By bringing together diverse perspectives and expertise, we create solutions that are not only visually compelling but also purposeful, strategic, and designed to deliver long-term value.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}