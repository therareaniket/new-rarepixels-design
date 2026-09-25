"use client"

import Image from 'next/image'
import './aboutmisvis.css'

const AboutMisVis = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="abt-mis-vis-title-wrapper flex items-end justify-between">
                    <div className="abt-mis-title w-[952px] relative pt-[85px] pl-[44px]">
                        <h2 className="text-80 font-semibold">RarePixels The Brand</h2>

                        <p className="h3 font-semibold mt-[40px]">Vision Gives Direction, Purpose Creates Momentum, And Execution Turns Ideas Into Impact.</p>

                        <Image className="abt-quote-image absolute top-[0] left-[0]" src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/aboutpage/about-mis-vis/mis-vis-bg-quote.svg" alt='' width={307} height={327}></Image>
                    </div>

                    <div className="abt-mis-vis-copyright-img w-[265px] h-[225px] mr-[72px]">
                        <Image src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/aboutpage/about-mis-vis/vision-mission-original.png" alt='' width={265} height={225}></Image>
                    </div>
                </div>

                <div className="abt-mis-vis-content-wrapper flex items-center justify-between mt-[60px] w-[1200px] m-[auto]">
                    <div className="abt-mis-gif w-[520px] h-[580px]">
                        <video className='abt-mis-video' src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/aboutpage/about-mis-vis/door-animation.mp4" loop autoPlay muted playsInline width={528} height={580}></video>
                    </div>

                    <div className="mis-vis-text w-[507px]">
                        <h3 className="h2 font-semibold text-[#ED0180]">Our Vision & Mission</h3>

                        <p className='text-18 mt-[30px] mb-[30px]'><span className='font-semibold'>Our Vision</span> to become a trusted creative partner that helps brands navigate the future with confidence. We aspire to create meaningful digital experiences that inspire growth, strengthen connections, and empower businesses to thrive in an ever evolving digital world. Through purposeful innovation, evolving expertise, and a commitment to meaningful outcomes, we strive to help brands move forward with clarity and confidence.</p>
                        
                        <p className='text-18'><span className='font-semibold'>Our Mission</span>to combine creativity, strategy, and technology to create experiences that deliver real value. We work closely with brands to build strong identities, meaningful connections, and impactful solutions that help them grow with confidence in an evolving digital landscape. Through thoughtful execution, collaborative thinking, and a commitment to excellence, we strive to create work that goes beyond expectations.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMisVis 