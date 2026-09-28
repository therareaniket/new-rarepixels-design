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

                            <p className='text-18 w-[818px] website-subtitle-mt'>Good work starts with good thinking. At RarePixels, we believe the best outcomes come from curiosity, clarity, collaboration, and the courage to challenge the obvious. These values shape how we think, create, communicate, and build meaningful work together.</p>
                        </div>

                        <div className="abt-our-values-gif w-[692px] h-[458px] mt-[60px]">
                            <Image className='' src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/aboutpage/abt-our-values/our-values.png" alt='abt-values' width={692} height={485}></Image>
                        </div>
                    </div>

                    <div className="abt-our-values-right ">
                        <div className="abt-our-values-pointer flex items-start gap-[20px] w-[580px]">
                            <div className='our-values-icon w-[52px] h-[52px] bg-[#c6d9c6] flex justify-center items-center rounded-[10px]'>
                                <Image src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/aboutpage/abt-our-values/creative.svg" alt='abt-values' width={24} height={24}></Image>
                            </div>

                            <div className="abt-our-values-text w-[500px]">
                                <h3 className='text-sb h4'> Creative Curiosity</h3>

                                <p className='text-18 mt-[6px]'>We question the obvious. We explore new perspectives, challenge familiar ideas, and look for thoughtful ways to make every experience more meaningful.</p>
                            </div>
                        </div>

                        <div className="abt-our-values-pointer flex items-start gap-[20px] w-[580px]">
                            <div className='our-values-icon w-[52px] h-[52px] bg-[#c6d9c6] flex justify-center items-center rounded-[10px]'>
                                <Image src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/aboutpage/abt-our-values/strategic.svg" alt='abt-values' width={24} height={24}></Image>
                            </div>

                            <div className="abt-our-values-text w-[500px]">
                                <h3 className='text-sb h4'>Strategic Thinking</h3>

                                <p className='text-18 mt-[6px]'>We work with a reason. Every IF needs direction. We connect creativity with business goals to create solutions that are purposeful, relevant, and built to create impact.</p>
                            </div>
                        </div>

                        <div className="abt-our-values-pointer flex items-start gap-[20px] w-[580px]">
                            <div className='our-values-icon w-[52px] h-[52px] bg-[#c6d9c6] flex justify-center items-center rounded-[10px]'>
                                <Image src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/aboutpage/abt-our-values/communication.svg" alt='abt-values' width={24} height={24}></Image>
                            </div>

                            <div className="abt-our-values-text w-[500px]">
                                <h3 className='text-sb h4'>Open Collaboration</h3>

                                <p className='text-18 mt-[6px]'>Better results happen together. We believe in honest conversations, shared perspectives, and working closely with clients and teams to turn good ideas into best ones.</p>
                            </div>
                        </div>

                        <div className="abt-our-values-pointer flex items-start gap-[20px] w-[580px]">
                            <div className='our-values-icon w-[52px] h-[52px] bg-[#c6d9c6] flex justify-center items-center rounded-[10px]'>
                                <Image src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/aboutpage/abt-our-values/ownership.svg" alt='abt-values' width={24} height={24}></Image>
                            </div>

                            <div className="abt-our-values-text w-[500px]">
                                <h3 className='text-sb h4'>Ownership</h3>

                                <p className='text-18 mt-[6px]'>We care like it’s ours. From the first thought to the final pixel, we take responsibility for the work, the details, and the impact it creates.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutOurValues