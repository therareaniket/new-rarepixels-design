'use client'

import Image from 'next/image'
import './servicesspeaiclaizes.css'

const ServicesSpecialized = () => {
    return (
        <section className='section' style={{ paddingTop: 0 }}>
            <div className="container">
                <div className="services-special-wrapper flex items-center justify-between">
                    <div className="services-special-left flex justify-between">
                        <h2 className='font-semibold flex flex-col services-spec-h2-tablet'>
                            One Vision. <br /> One Team.<br /> Everything Connected.
                        </h2>

                        <p className='text-18 flex flex-col gap-[18px] w-[45%]'>
                            <span className='font-regular'>Different agencies often mean different ideas, disconnected communication, and a brand experience that doesn&apos;t quite come together.</span>
                            <span className='font-semibold'>At RarePixels, strategy, branding, design, development, and social media work as parts of one bigger picture. Every team works towards the same vision, every detail follows the same direction, and every deliverable feels like it belongs. No disconnected pieces. Just one consistent experience built around your business.</span>
                        </p>
                    </div>

                    {/* <div className="services-special-right w-[694] h-[462]">
                        <Image src="/serv-spec/serv-spec-image.png" alt='services-apecialised-shape' width={694} height={462}></Image>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default ServicesSpecialized