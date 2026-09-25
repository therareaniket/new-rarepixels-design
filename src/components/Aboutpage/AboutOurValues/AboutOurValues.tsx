"use client";

import Image from 'next/image';
import './aboutourvalues.css'

const AboutOurValues = () => {
    return (
        <section className='section'>
            <div className="container">
                <div className="abt-our-values-wrapper flex items-end justify-between">
                    <div className="abt-our-values-left">
                        <div className="abt-our-values-title">
                            <h2 className='font-semibold h1'>Our Values</h2>

                            <p className='text-18 w-[818px] website-subtitle-mt'>A journey shaped by creativity, collaboration, and continuous growth, reflecting the milestones, experiences, and values that have defined RarePixels from day one. A journey shaped by creativity, collaboration, and continuous growth, reflecting the milestones, experiences, and values that have defined RarePixels from day one.</p>
                        </div>

                        <div className="abt-our-values-gif w-[692px] h-[458px] border border-[#c6c6c6] rounded-[20px] mt-[60px]"></div>
                    </div>

                    <div className="abt-our-values-right ">
                        <div className="abt-our-values-pointer flex items-start gap-[20px] w-[580px]">
                            <div className='our-values-icon w-[52px] h-[52px] bg-[#ED0180] rounded-[10px]'>
                                {/* <Image src="/images/aboutpage/abt-our-values/strategic-1.svg" alt='abt-values' width={24} height={24}></Image> */}
                            </div>

                            <div className="abt-our-values-text w-[500px]">
                                <h3 className='text-sb'>Creative Excellence</h3>

                                <p className='text-18 mt-[6px]'>Delivering thoughtful, refined work that balances creativity, functionality, and impact.</p>
                            </div>
                        </div>

                        <div className="abt-our-values-pointer flex items-start gap-[20px] w-[580px]">
                            <div className='our-values-icon w-[52px] h-[52px] bg-[#ED0180] rounded-[10px]'>
                                {/* <Image src="/images/aboutpage/abt-our-values/strategic-1.svg" alt='abt-values' width={24} height={24}></Image> */}
                            </div>

                            <div className="abt-our-values-text w-[500px]">
                                <h3 className='text-sb'>Strategic Thinking</h3>

                                <p className='text-18 mt-[6px]'>Approaching every challenge with clarity, insight, and a long term perspective.</p>
                            </div>
                        </div>

                        <div className="abt-our-values-pointer flex items-start gap-[20px] w-[580px]">
                            <div className='our-values-icon w-[52px] h-[52px] bg-[#ED0180] rounded-[10px]'>
                                {/* <Image src="/images/aboutpage/abt-our-values/strategic-1.svg" alt='abt-values' width={24} height={24}></Image> */}
                            </div>

                            <div className="abt-our-values-text w-[500px]">
                                <h3 className='text-sb'>Open Communication</h3>

                                <p className='text-18 mt-[6px]'>Building trust through transparency, collaboration, and meaningful conversations.</p>
                            </div>
                        </div>

                        <div className="abt-our-values-pointer flex items-start gap-[20px] w-[580px]">
                            <div className='our-values-icon w-[52px] h-[52px] bg-[#ED0180] rounded-[10px]'>
                                {/* <Image src="/images/aboutpage/abt-our-values/strategic-1.svg" alt='abt-values' width={24} height={24}></Image> */}
                            </div>

                            <div className="abt-our-values-text w-[500px]">
                                <h3 className='text-sb'>Shared Ownership</h3>

                                <p className='text-18 mt-[6px]'>Taking collective responsibility for every decision, detail, and outcome.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutOurValues