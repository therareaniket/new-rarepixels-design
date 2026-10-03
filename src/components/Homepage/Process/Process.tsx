"use client"

import "./process.css"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"

const Process = () => {

    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        gsap.set(".process-vector", { opacity: 0, scale: 0.5, })

        // gsap.fromTo(".process:nth-child(1)", { xPercent: -150}, {})
    }, [])

    return (
        <section className="process-main bg-[#FBF9E9] overflow-hidden">
            <div className="section hm-process-sticky">
                <div className="container">
                    <div className="process-headings flex items-center justify-between">
                        <h2>Work Process We Follow</h2>

                        <p className="text-18 w-[800px]">Every great outcome starts with understanding. We move from insight to execution through a process designed to reduce guesswork, improve collaboration, and build solutions that perform.</p>
                    </div>

                    <div className="magic-container">
                        <div className="process-lists mt-[40px] flex justify-between items-center">
                            <div className="process-vector w-[350px] h-[350px] bg-red-500"></div>

                            <div className="process-list flex flex-col gap-[26px]">
                                <div className="process active w-[590px] flex justify-between overflow-hidden">
                                    <div className="process-icon flex items-center justify-center w-[48px] h-[48px] rounded-[16px] bg-[#E8DB7D]">
                                        <span className="icon-discover-process"></span>
                                    </div>

                                    <div className="process-details">
                                        <h3 className="uppercase mb-[10px]">Discover</h3>

                                        <p className="text-18 mb-[10px]">Every meaningful solution begins with understanding.</p>
                                        
                                        <p className="text-18">We take time to understand your business, your users, and the challenges standing in the way of growth. The better the questions, the better the outcome.</p>
                                    </div>
                                </div>

                                <div className="process w-[590px] flex justify-between overflow-hidden">
                                    <div className="process-icon flex items-center justify-center w-[48px] h-[48px] rounded-[16px] bg-[#E8DB7D]">
                                        <span className="icon-strategy-process"></span>
                                    </div>

                                    <div className="process-details">
                                        <h3 className="uppercase mb-[10px]">Strategise</h3>

                                        <p className="text-18 mb-[10px]">Every meaningful solution begins with understanding.</p>
                                        
                                        <p className="text-18">We take time to understand your business, your users, and the challenges standing in the way of growth. The better the questions, the better the outcome.</p>
                                    </div>
                                </div>

                                <div className="process w-[590px] flex justify-between overflow-hidden">
                                    <div className="process-icon flex items-center justify-center w-[48px] h-[48px] rounded-[16px] bg-[#E8DB7D]">
                                        <span className="icon-create-process"></span>
                                    </div>

                                    <div className="process-details">
                                        <h3 className="uppercase mb-[10px]">Create</h3>

                                        <p className="text-18 mb-[10px]">Every meaningful solution begins with understanding.</p>
                                        
                                        <p className="text-18">We take time to understand your business, your users, and the challenges standing in the way of growth. The better the questions, the better the outcome.</p>
                                    </div>
                                </div>

                                <div className="process w-[590px] flex justify-between overflow-hidden">
                                    <div className="process-icon flex items-center justify-center w-[48px] h-[48px] rounded-[16px] bg-[#E8DB7D]">
                                        <span className="icon-engineer-process"></span>
                                    </div>

                                    <div className="process-details">
                                        <h3 className="uppercase mb-[10px]">Engineer</h3>

                                        <p className="text-18 mb-[10px]">Every meaningful solution begins with understanding.</p>
                                        
                                        <p className="text-18">We take time to understand your business, your users, and the challenges standing in the way of growth. The better the questions, the better the outcome.</p>
                                    </div>
                                </div>

                                <div className="process w-[590px] flex justify-between overflow-hidden">
                                    <div className="process-icon flex items-center justify-center w-[48px] h-[48px] rounded-[16px] bg-[#E8DB7D]">
                                        <span className="icon-refine-process"></span>
                                    </div>

                                    <div className="process-details">
                                        <h3 className="uppercase mb-[10px]">Refine</h3>

                                        <p className="text-18 mb-[10px]">Every meaningful solution begins with understanding.</p>
                                        
                                        <p className="text-18">We take time to understand your business, your users, and the challenges standing in the way of growth. The better the questions, the better the outcome.</p>
                                    </div>
                                </div>

                                <div className="process w-[590px] flex justify-between overflow-hidden">
                                    <div className="process-icon flex items-center justify-center w-[48px] h-[48px] rounded-[16px] bg-[#E8DB7D]">
                                        <span className="icon-deliver-svg"></span>
                                    </div>

                                    <div className="process-details">
                                        <h3 className="uppercase mb-[10px]">Deliver</h3>

                                        <p className="text-18 mb-[10px]">Every meaningful solution begins with understanding.</p>
                                        
                                        <p className="text-18">We take time to understand your business, your users, and the challenges standing in the way of growth. The better the questions, the better the outcome.</p>
                                    </div>
                                </div>
                            </div>        
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Process