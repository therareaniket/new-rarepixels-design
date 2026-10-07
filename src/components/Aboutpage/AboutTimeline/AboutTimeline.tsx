import "./aboutTimeline.css"

import React from 'react'

const AboutTimeline = () => {
    return (
        <section className="timeline bg-[#040E36] text-white">
            <div className=" section timeline-sticky-block overflow-hidden">
                <div className="container">
                    <div className="timeline-headings flex items-end justify-between">
                        <div className="heading-left-part w-[690px]">
                            <h2 className="mb-[30px]">Our story is more than a timeline of milestones.</h2>

                            <p className="h5">It's a journey of learning, growing, and continuously evolving to create work that truly matters.</p>
                        </div>

                        <div className="heading-right-part w-[480px]">
                            <p className="text-18">A journey shaped by creativity, collaboration, and continuous growth, reflecting the milestones, experiences, and values that have defined RarePixels from day one.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutTimeline