"use client";

import './industries.css'

const Industries = () => {
  return (
    <section className='section bg-[#F7F2EC]'>
        <div className="container">
            <div className="hm-industries-title text-center">
                <h2 className='font-[600]'>Industries We Serve</h2>

                <p className='text-18 font-[400] flex flex-col mt-[20px]'>
                    <span>Every industry is different.</span>
                    <span> But the need to earn trust, create memorable experiences, and stay relevant isn&apos;t.</span>
                </p>
            </div>

            <div className="industries-card-wrapper mt-[60px]">
                <div className="industries-cards">
                    <div className="industries-card-left bg-[red] w-[1000px] h-[600px] rounded-br-[100px]"></div>

                    <div className="industries-card-right w-[540px] h-[540px]">
                        <h3 className='font-[600]'>Technology & SaaS</h3>

                        <p className='text-18 font-[400] flex flex'>
                            <span>Complex products fail when users don&apos;t understand them.</span>
                            <span>We transform powerful SaaS platforms into intuitive experiences that drive adoption, retention, and growth.</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Industries