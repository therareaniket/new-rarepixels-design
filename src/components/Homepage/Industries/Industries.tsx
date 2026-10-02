"use client"

import "./industries.css"
const Industries = () => {
    return (
        <section className="section industries bg-[#F7F2EC]">
            <div className="container overflow-hidden">
                <div className="indust-headings flex flex-wrap justify-between">
                    <h2 className=''>Industries We Serve</h2>

                    <p className='w-[680px] max-w-full flex flex-col justify-center text-18'>
                        <span>Every industry is different.</span>

                        <span>But the need to earn trust, create memorable experiences, and stay relevant isn't.</span>
                    </p>
                </div>

                <div className="indust-list-wrapper w-max mt-[40px] flex items-center  gap-[20px]">
                    <div className="indust-list bg-red-500 w-[1600px] h-[550px]"></div>

                    <div className="indust-list bg-green-500 w-[1600px] h-[550px]"></div>

                    <div className="indust-list bg-yellow-500 w-[1600px] h-[550px]"></div>
                </div>
            </div>
        </section>
    )
}   

export default Industries
