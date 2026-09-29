'use client';

import Link from "next/link";

import './contactform.css'
import Image from "next/image";

const ContactForm = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="contact-form-wrapper flex items-start justify-between">
                    <div className="contact-form-left w-[562px]">
                        <h2 className="font-semibold">Every Big Project Starts With A “What If?” </h2>

                        <p className="font-normal text-18 mt-[20px] mb-[24px]">Have a project in mind, a problem to solve, or just an idea that won’t leave your head? Tell us about it. You don’t need a perfect brief or all the answers. Just start the conversation. An expert from the RarePixels team will read your message, understand what you’re looking for, and get back to you with a thoughtful response. No endless forms. No robotic replies. Just a conversation that goes somewhere.</p>

                        <h3 className="h5">Your idea won’t sit in an inbox forever. Response guaranteed in 24 hours.</h3>

                        <div className="contact-cta p-[30px] bg-[#FBF9E9] mt-[54px] rounded-[20px] relative">
                            <div className="contact-cta-left w-[350px] ">
                                <h4 className="h2">Got 30 Minutes?</h4>
                                <p className="text-18 font-normal mt-[20px] mb-[40px] w-[268px]">No long forms. No guessing games. No waiting around. Book a free 30-minute discovery call and tell us what&apos;s on your mind. We&apos;ll come prepared with questions, ideas, and a clear perspective on where RarePixels can make a difference.</p>
                                <Link href="https://outlook.office.com/book/RarePixelsDesign@rarepixelsdesign.com/" target="_blank" title="Book A Call" className="text-20 px-[20px] py-[10px] bg-[#ED0180] text-white rounded-[30px] block w-[max-content]">Book A Call <span className="mm-cta inline-block ml-[12px] icon-hero-cta-arrow text-[16px]"></span></Link>
                            </div>

                            <div className="contact-cta-phone w-[208px] h-[219px] absolute bottom-[20px] right-[20px]">
                                <Image src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/contactpage/contact-form/contact-cta-image.svg" alt="contact-call" width={208} height={219}></Image>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-right w-[872px] flex flex-col">
                        <div className="hm-inquiry-form-wrapper flex flex-col">
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

                            <div className="hm-inquiry-detail mt-[20px] mb-[50px] flex flex-wrap hm-inquiry-desktop">
                                <h3 className="font-normal"> My name is <input className='text-16 border-b border-[#c6c6c6] pl-[10px] ' type="text" name="" id="" placeholder='enter name*' /></h3>
                                <h3 className="font-normal"> and I want to discuss a potential project. You can email me at <input className='text-16 border-b border-[#c6c6c6] pl-[10px] ' type="email" name="" id="" placeholder='enter email*' /> </h3>
                                <h3 className="font-normal"> or reach me on <input className='text-16 border-b border-[#c6c6c6] pl-[10px]' type="email" name="" id="" placeholder='your phone*' />
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

                            <label htmlFor="file-upload" className="custom-button py-[12px] px-[20px] rounded-[50px] border border-[#8C8C8C] h5 font-normal w-[max-content] mb-[60px] flex items-center gap-[20px] cnct-upload">
                                Attach Your Document <div className="w-[32px] h-[32px] cnct-upload-icon"><Image src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/contactpage/contact-form/upload-doc.svg" alt="upload" width={32} height={32} ></Image></div> 
                            </label>
                            <input type="file" id="file-upload" className="sr-only" />
                                {/* <span id="file-name">No file chosen</span> */}

                            <button title="Submit" className="text-20 px-[20px] py-[10px] bg-[#ED0180] text-white rounded-[30px] w-[max-content]">Submit <span className="mm-cta inline-block ml-[12px] icon-hero-cta-arrow text-[16px]"></span></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm