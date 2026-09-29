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

                        <p className="h3 font-semibold mt-[40px]">Ideas Create Possibilities. Design Shapes Experiences. Execution Makes Them Real.</p>

                        <Image className="abt-quote-image absolute top-[0] left-[0]" src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/aboutpage/about-mis-vis/mis-vis-bg-quote.svg" alt='' width={307} height={327}></Image>
                    </div>

                    <div className="abt-mis-vis-copyright-img w-[265px] h-[225px] mr-[72px]">
                        <Image src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/aboutpage/about-mis-vis/vision-mission-original.png" alt='' width={265} height={225}></Image>
                    </div>
                </div>

                <div className="abt-mis-vis-content-wrapper flex items-center justify-between mt-[60px] w-[1415px] m-[auto]">
                    <div className="abt-mis-gif w-[520px] h-[580px]">
                        <video className='abt-mis-video' src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/aboutpage/about-mis-vis/vision-mission-door.mp4" loop autoPlay muted playsInline width={528} height={580}></video>
                    </div>

                    <div className="mis-vis-text w-[650px]">
                        <h3 className="h2 font-semibold text-[#ED0180]">Our Vision & Mission</h3>

                        <p className='text-18 mt-[30px] mb-[30px]'><span className='font-semibold'>Our Vision</span>We aim to bring expertise, research, data, technology, and strategic thinking together to understand challenges deeply and identify what actually works. Our focus is on creating practical, result-driven solutions that help businesses grow, adapt, and deliver greater value to every business we work with.</p>
                        
                        <p className='text-18'><span className='font-semibold'>Our Mission</span>To challenge the expected, simplify the complex, and create experiences that move brands forward. We combine strategic thinking with creative craft to solve problems that matter. We don&apos;t create for the sake of creating. We question, explore, refine, and execute with intent, turning concepts into marvels that people connect with and businesses can build on.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMisVis 