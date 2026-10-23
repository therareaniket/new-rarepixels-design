'use client'

import Image from 'next/image'
import './servicesspeaiclaizes.css'

const ServicesSpecialized = () => {
    return (
        <section className='section' style={{ paddingTop: 0 }}>
            <div className="container">
                <div className="services-special-wrapper flex items-center justify-between">
                    <div className="services-special-left">
                        <h2 className='font-semibold flex flex-col services-spec-h2-tablet'>
                            The work is always original. The thinking is always strategic. The execution is always precise.
                        </h2>

                        <p className='text-18 flex flex-col gap-[18px] mt-[60px]'>
                            <span className='font-regular'>Most businesses work with multiple agencies, one for design, another for development, a third for social. The result is inconsistent output, broken communication, and work that never quite fits together. </span>
                            <span className='font-semibold'>At RarePixels, all services sit under one creative team. That means your brand identity, your website, your social content, and your print materials are all built from the same brief, the same strategy, and the same standard of craft.</span>
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