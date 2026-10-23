'use client'

import Image from 'next/image'
import './servicesspeaiclaizes.css'

const ServicesSpecialized = () => {
    return (
        <section className='section'>
            <div className="container">
                <div className="services-special-wrapper flex items-center justify-between">
                    <div className="services-special-left w-[687px]">
                        <h2 className='font-semibold flex flex-col services-spec-h2-desktop'>
                            <span>Specialised Services.</span>
                            <span>Four Core Disciplines. </span>
                            <span>One Standard of Work.</span>
                        </h2>

                        <h2 className='font-semibold flex flex-col services-spec-h2-tablet hidden'>
                            Specialised Services. Four Core Disciplines. One Standard of Work.
                        </h2>

                        <p className='text-18 flex flex-col gap-[18px] mt-[60px]'>
                            <span className='font-regular'>At Rare Pixels, every service we offer is built around one idea — that businesses deserve solutions made for them, not adapted from someone else. Whether you need a UI/UX designer, a custom platform engineer, a brand strategist, or a social media team — we approach every brief the same way. </span>
                            <span className='font-semibold'>The work is always original. The thinking is always strategic. The execution is always precise. </span>
                        </p>
                    </div>

                    <div className="services-special-right w-[694] h-[462]">
                        <Image src="/serv-spec/serv-spec-image.png" alt='services-apecialised-shape' width={694} height={462}></Image>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesSpecialized