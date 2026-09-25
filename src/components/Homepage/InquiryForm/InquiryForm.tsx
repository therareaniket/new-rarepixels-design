"use client";
import Link from 'next/link';
import './inquiryform.css'

const InquiryForm = () => {
    return (
        <section className="section bg-[#FBF9E9]">
            <div className="container-sm">
                <div className="hm-inquiry-form-title">
                    <h2 className="font-semibold ">Project Inquiry Form</h2>
                    <p className="text-18 font-normal website-subtitle-mt w-[776px]">Whether you&apos;re launching a new brand, designing a digital product, or scaling an existing business, we&apos;d love to hear your vision. Tell us about your project, and we&apos;ll help transform ideas into impactful digital experiences.</p>
                </div>

                <div className="hm-inquiry-form-wrapper mt-[60px]">
                    <h3 className="font-normal" >Hello! I’m interested in (select one or more)</h3>
                    <div className="cnct-form-checkbox" role="group" aria-label="Project type">
                        {['UI/UX Design', 'Web & App Development', 'Brand Identity Design', 'AI Driven Solutions', 'Social Media Management'].map((option) => {
                            const optionId = `project-${option.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

                            return (
                                <span className="cnct-form-checkbox-option inquiry-form-check-option" key={option}>
                                    <input type="checkbox" id={optionId} name="projectType" value={option} />
                                    <label htmlFor={optionId} className="font-normal text-18">{option}</label>
                                </span>
                            );
                        })}
                    </div>

                    <div className="hm-inquiry-detail mt-[70px] mb-[50px] flex flex-wrap hm-inquiry-desktop">
                        <h3 className="font-normal"> My name is <input className='text-16 border-b border-[#c6c6c6] pl-[10px] ' type="text" name="" id="" placeholder='enter name*' />
                            and I want to discuss a potential project. You can email me at <input className='text-16 border-b border-[#c6c6c6] pl-[10px] ' type="email" name="" id="" placeholder='enter email*' /> or reach me on
                            <input className='text-16 border-b border-[#c6c6c6] pl-[10px]' type="email" name="" id="" placeholder='your phone*' />
                        </h3>

                        <div className="hm-inquiry-text-area flex flex-col mt-[10px]">
                            <h3 className='font-normal'>Here are some details about my project:</h3>
                            <textarea className='mt-[20px] pl-[10px] w-[720px] h-[90px] border-b border-[#c6c6c6]' name="" id="" placeholder='my project is about......'></textarea>
                        </div>
                    </div>

                    <div className="hm-inquiry-detail mt-[70px] mb-[50px] hm-inquiry-tablet">
                        <div className="hm-inquiry-field mb-[20px]">
                            <h3 className="font-normal"> My name is 
                            <input className='text-16 border-b border-[#c6c6c6] pl-[10px] ' type="text" name="" id="" placeholder='enter name*' /></h3>
                        </div>

                        <div className="hm-inquiry-field mb-[20px]">
                            <h3 className="font-normal">and I want to discuss a potential project. You can email me at
                            <input className='text-16 border-b border-[#c6c6c6] pl-[10px] ' type="email" name="" id="" placeholder='enter email*' /></h3>
                        </div>

                        <div className="hm-inquiry-field mb-[20px]">
                            <h3 className="font-normal">or reach me on
                            <input className='text-16 border-b border-[#c6c6c6] pl-[10px]' type="email" name="" id="" placeholder='your phone*' /></h3>
                        </div>

                        <div className="hm-inquiry-text-area flex flex-col mt-[10px]">
                            <h3 className='font-normal'>Here are some details about my project:</h3>
                            <textarea className='mt-[20px] pl-[10px] w-[720px] h-[90px] border-b border-[#c6c6c6]' name="" id="" placeholder='my project is about......'></textarea>
                        </div>
                    </div>

                    <Link href="#" title="Start Your Project" className="text-20 px-[20px] py-[10px] bg-[#ED0180] text-white rounded-[30px]">Start Your Project <span className="mm-cta inline-block ml-[12px] icon-hero-cta-arrow text-[16px]"></span></Link>
                </div>
            </div>
        </section>
    )
}

export default InquiryForm   