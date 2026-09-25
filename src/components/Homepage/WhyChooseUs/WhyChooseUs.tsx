"use client"

import Image from "next/image"
import "./why-choose-us.css"

const CDN_URL = "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev";

const WhyChooseUs = () => {
    return (
        <section className="section bg-[#01030D]">
            <div className="container">
                <div className="hm-why-choose-us-title">
                    <h2 className="text-semibold text-[white]">Why Choose Us</h2>

                    <p className="text-18 text-normal text-[#C6C6C6] w-[780px] website-subtitle-mt">We bring together strategy, design, technology, and creativity to build experiences that are easy to use, hard to ignore, and built to perform.</p>
                </div>

                <div className="container-sm why-choose-small-container relative ">
                    <div className="hm-why-choose-us-pointers flex justify-between items-center mt-[60px] relative z-[2]">
                        <div className="why-choose-pointer-left flex flex-col gap-[120px]">
                            <div className="why-pointer w-[370px]">
                                <h3 className="h6 font-semibold text-[white] mb-[20px]">Built, Not Borrowed</h3>

                                <p className="text-18 font-normal text-[#C6C6C6]">We don&apos;t believe in templates or recycled thinking. Every solution is created from the ground up to fit your business, your users, and your ambitions.</p>
                            </div>

                            <div className="why-pointer w-[370px]">
                                <h3 className="h6 font-semibold text-[white] mb-[20px]">Simplicity With Purpose</h3>

                                <p className="text-18 font-normal text-[#C6C6C6]">Great experiences feel effortless. We remove complexity, sharpen every interaction, and design with clarity at the center of every decision.</p>
                            </div>
                        </div>

                        <div className="why-choose-pointer-right flex flex-col gap-[120px]">
                            <div className="why-pointer w-[370px]">
                                <h3 className="h6 font-semibold text-[white] mb-[20px]">Ideas That Get Built</h3>

                                <p className="text-18 font-normal text-[#C6C6C6]">A vision means little without execution. From first sketch to final launch, every detail is delivered with precision, consistency, and care.</p>
                            </div>

                            <div className="why-pointer w-[370px]">
                                <h3 className="h6 font-semibold text-[white] mb-[20px]">Partners In The Process</h3>

                                <p className="text-18 font-normal text-[#C6C6C6]">We work alongside you, not around you. The best outcomes come from trust, collaboration, and relationships that grow beyond a single project.</p>
                            </div>
                            
                            <div className="why-pointer why-pointer-5 w-[370px]">
                                <h3 className="h6 font-semibold text-[white] mb-[20px]">Measured By Impact</h3>

                                <p className="text-18 font-normal text-[#C6C6C6]">Beautiful work is only the beginning. We create solutions that drive adoption, strengthen brands, and deliver meaningful business outcomes.</p>
                            </div>
                        </div>
                    </div>

                    <div className="why-choose-image-wrapper">
                        <div className="why-choose-us-hand-img">
                            <Image src={`${CDN_URL}/images/homepage/why-choose-us/why-choose-us-hand.png`} alt="why-choose-us-hand-image" width={412} height={684} className="why-choose-hand absolute bottom-[0] left-[50%] translate-x-[-50%] z-[2]" />
                        </div>

                        <div className="why-choose-us-bg-eclipse">
                            <div className=" why-choose-eclipse absolute bottom-[0] left-[50%] translate-x-[-50%]">
                                <svg className="eclipse-1 w-[354]" viewBox="0 0 354 212" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="177" cy="177" r="176" stroke="url(#paint0_linear_4268_7206)" strokeWidth="2" />
                                    <defs>
                                        <linearGradient id="paint0_linear_4268_7206" x1="177" y1="0" x2="177" y2="239.494" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#0C0C0C" />
                                            <stop offset="1" stopColor="#01030D" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>

                            <div className="why-choose-eclipse absolute bottom-[0] left-[50%] translate-x-[-50%]">
                                <svg className="eclipse-2 w-[490]" viewBox="0 0 490 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="245" cy="245" r="243.5" stroke="url(#paint0_linear_4268_7205)" strokeWidth="3" />
                                    <defs>
                                        <linearGradient id="paint0_linear_4268_7205" x1="245" y1="0" x2="245" y2="331.504" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#0C0C0C" />
                                            <stop offset="1" stopColor="#01030D" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>

                            <div className="why-choose-eclipse absolute bottom-[0] left-[50%] translate-x-[-50%]">
                                <svg className="eclipse-3 w-[625]" viewBox="0 0 625 348" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="312.5" cy="312.5" r="310.5" stroke="url(#paint0_linear_4268_7204)" strokeWidth="4" />
                                    <defs>
                                        <linearGradient id="paint0_linear_4268_7204" x1="312.5" y1="0" x2="312.5" y2="422.836" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#0C0C0C" />
                                            <stop offset="1" stopColor="#01030D" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>

                            <div className="why-choose-eclipse absolute bottom-[0] left-[50%] translate-x-[-50%]">
                                <svg className="eclipse-4 w-[760]" viewBox="0 0 760 415" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="380" cy="380" r="377.5" stroke="url(#paint0_linear_4268_7203)" strokeWidth="5" />
                                    <defs>
                                        <linearGradient id="paint0_linear_4268_7203" x1="380" y1="0" x2="380" y2="514.169" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#0C0C0C" />
                                            <stop offset="1" stopColor="#01030D" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>

                            <div className="why-choose-eclipse absolute bottom-[0] left-[50%] translate-x-[-50%]">
                                <svg className="eclipse-5 w-[896]" viewBox="0 0 896 483" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="448" cy="448" r="445" stroke="url(#paint0_linear_4268_7202)" strokeWidth="6" />
                                    <defs>
                                        <linearGradient id="paint0_linear_4268_7202" x1="448" y1="0" x2="448" y2="606.178" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#0C0C0C" />
                                            <stop offset="1" stopColor="#01030D" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>

                            <div className=" why-choose-eclipse absolute bottom-[0] left-[50%] translate-x-[-50%]">
                                <svg className="eclipse-6 w-[1026]" viewBox="0 0 1026 546" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="513" cy="513" r="509.5" stroke="url(#paint0_linear_4268_7209)" strokeWidth="7" />
                                    <defs>
                                        <linearGradient id="paint0_linear_4268_7209" x1="513" y1="0" x2="513" y2="694.128" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#0C0C0C" />
                                            <stop offset="1" stopColor="#01030D" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>

                            <div className=" why-choose-eclipse absolute bottom-[0] left-[50%] translate-x-[-50%]">
                                <svg className="eclipse-7 w-[1164]" viewBox="0 0 1164 616" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="582" cy="582" r="578" stroke="url(#paint0_linear_4268_7207)" strokeWidth="8" />
                                    <defs>
                                        <linearGradient id="paint0_linear_4268_7207" x1="582" y1="0" x2="582" y2="787.49" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#0C0C0C" />
                                            <stop offset="1" stopColor="#01030D" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>

                            <div className="eclipse-8 why-choose-eclipse absolute bottom-[0] left-[50%] translate-x-[-50%]">
                                <svg className="eclipse-8 w-[1300]" viewBox="0 0 1300 684" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="650" cy="650" r="645.5" stroke="url(#paint0_linear_4268_7208)" strokeWidth="9" />
                                    <defs>
                                        <linearGradient id="paint0_linear_4268_7208" x1="650" y1="0" x2="650" y2="879.499" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#0C0C0C" />
                                            <stop offset="1" stopColor="#01030D" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs