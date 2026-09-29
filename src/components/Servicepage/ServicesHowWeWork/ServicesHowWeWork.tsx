"use client";

import './serviceshowwework.css'

const ServicesHowWeWork = () => {
    return (
        <section className='section'>
            <div className="container">
                <div className="services-how-we-work-title">
                    <h2>How We Work</h2>

                    <p className='text-18 flex flex-col gap-[18] website-subtitle-mt w-[687px]'>
                        <span className='font-bold'>No Guesswork. No Shortcuts. No Off-The-Shelf.</span>
                        <span className='font-normal'>Every project - regardless of service, size, or industry - follows the same six-step process. Because consistency in process is what produces consistency in results.</span>
                    </p>
                </div>

                <div className="services-how-work-card-wrapper flex flex-col gap-[30px] mt-[60px]">
                    <div className="services-work-card-1 flex flex-col items-end">
                        <div className='services-step-number services-step-number-1 text-18 font-semibold w-[200px]  py-[20px] bg-[#FBF9E9] text-center float-right'>01</div>
                        <div className="services-how-work-card w-[100%] h-[max-content] bg-[#FBF9E9] p-[60px]">
                            <h3 className='font-semibold h1'>Discover</h3>

                            <h4 className='h5 mt-[20px] mb-[14px]'>Good solutions begin with good questions.</h4>

                            <p className='text-18px font-normal w-[871px]'>We research your business, your audience, and your competitors before a single pixel is placed or a line of code is written. Every project starts with understanding - not assumptions. </p>
                        </div>
                    </div>

                    <div className="services-work-card-2 flex flex-col items-end">
                        <div className='services-step-number services-step-number-2 text-18 font-semibold w-[200px]  py-[20px] bg-[#FCD4E9] text-center float-right'>02</div>
                        <div className="services-how-work-card w-[100%] h-[max-content] bg-[#FCD4E9] p-[60px]">
                            <h3 className='font-semibold h1'>Strategies</h3>

                            <h4 className='h5 mt-[20px] mb-[14px]'>Every direction needs a reason.</h4>

                            <p className='text-18px font-normal w-[871px]'>We define goals, audience, positioning, and success metrics before any creative or technical work begins. Strategy is not a phase we skip to get to the work - it is the work.</p>
                        </div>
                    </div>

                    <div className="services-work-card-3 flex flex-col items-end">
                        <div className='services-step-number services-step-number-3 text-18 font-semibold w-[200px]  py-[20px] bg-[#F5F8F5] text-center float-right'>03</div>
                        <div className="services-how-work-card w-[100%] h-[max-content] bg-[#F5F8F5] p-[60px]">
                            <h3 className='font-semibold h1'>Create</h3>

                            <h4 className='h5 mt-[20px] mb-[14px]'>Where thinking becomes something visible.</h4>

                            <p className='text-18px font-normal w-[871px]'>Design, brand concepts, content frameworks, and interaction models - all conceived specifically for this project. Nothing carried over from previous work.</p>
                        </div>
                    </div>

                    <div className="services-work-card-4 flex flex-col items-end">
                        <div className='services-step-number services-step-number-4 text-18 font-semibold w-[200px]  py-[20px] bg-[#D5D8E2] text-center float-right'>04</div>
                        <div className="services-how-work-card w-[100%] h-[max-content] bg-[#D5D8E2] p-[60px]">
                            <h3 className='font-semibold h1'>Engineer</h3>

                            <h4 className='h5 mt-[20px] mb-[14px]'>Built specifically - never assembled from parts.</h4>

                            <p className='text-18px font-normal w-[871px]'>Every platform, application, and digital product is engineered from the ground up. Clean, performant, scalable code that passes every quality standard before it reaches a single user.</p>
                        </div>
                    </div>

                    <div className="services-work-card-5 flex flex-col items-end">
                        <div className='services-step-number services-step-number-5 text-18 font-semibold w-[200px]  py-[20px] bg-[#FBF9E9] text-center float-right'>05</div>
                        <div className="services-how-work-card w-[100%] h-[max-content] bg-[#FBF9E9] p-[60px]">
                            <h3 className='font-semibold h1'>Refine</h3>

                            <h4 className='h5 mt-[20px] mb-[14px]'>Improved until it performs exactly as designed.</h4>

                            <p className='text-18px font-normal w-[871px]'>We test, gather feedback, and iterate until every element performs the way it was designed to. Great work is not assumed - it is earned through refinement.</p>
                        </div>
                    </div>

                    <div className="services-work-card-6 flex flex-col items-end">
                        <div className='services-step-number services-step-number-6 text-18 font-semibold w-[200px]  py-[20px] bg-[#FCD4E9] text-center float-right'>06</div>
                        <div className="services-how-work-card w-[100%] h-[max-content] bg-[#FCD4E9] p-[60px]">
                            <h3 className='font-semibold h1'>Deliver</h3>

                            <h4 className='h5 mt-[20px] mb-[14px]'>Launch is the beginning, not the end.</h4>

                            <p className='text-18px font-normal w-[871px]'>We hand over every project with full documentation, training where needed, and a clear plan for what comes next. The relationship does not end at delivery - it evolves.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesHowWeWork   