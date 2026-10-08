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
                                <h4 className="h2 flex items-end gap-[5px]">Got 30 Minutes?
                                    <div className="skip-the-form w-[100%] h-[100%]">
                                        <span className="skip-the-form-wrapper">
                                            <Image className="mb-[10px] skip-the-form-image" src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/contactpage/contact-form/skip-the-form.svg" alt="" width={163} height={30}></Image>
                                        </span>
                                    </div>
                                </h4>
                                <p className="text-18 font-normal mt-[20px] mb-[40px] w-[268px]">No long forms. No guessing games. No waiting around. Book a free 30-minute discovery call and tell us what&apos;s on your mind. We&apos;ll come prepared with questions, ideas, and a clear perspective on where RarePixels can make a difference.</p>
                                <Link href="https://outlook.office.com/book/RarePixelsDesign@rarepixelsdesign.com/" target="_blank" title="Book A Call" className="text-20 px-[20px] py-[10px] bg-[#ED0180] text-white rounded-[30px] block cnct-cta-for-desktop website-link w-[max-content]">Book A Call <span className="mm-cta inline-block ml-[12px] icon-hero-cta-arrow text-[16px]"></span></Link>
                            </div>

                            <div className="contact-cta-phone w-[208px] h-[219px] absolute bottom-[20px] right-[20px]">
                                <Image className="w-[100%] h-[100%] object-contain" src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/contactpage/contact-form/contact-cta-image.svg" alt="contact-call" width={208} height={219}></Image>
                            </div>
                            <Link href="https://outlook.office.com/book/RarePixelsDesign@rarepixelsdesign.com/" target="_blank" title="Book A Call" className="text-20 px-[20px] py-[10px] bg-[#ED0180] text-white rounded-[30px] website-link block w-[max-content] cnct-cta-for-tablet">Book A Call <span className="mm-cta inline-block ml-[12px] icon-hero-cta-arrow text-[16px]"></span></Link>
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

                            <div className="cnct-inquiry-detail mt-[20px] mb-[40px] flex flex-wrap">
                                <h3 className="font-normal"> My name is <input className='text-16 border-b border-[#c6c6c6] pl-[10px] ' type="text" name="" id="" placeholder='enter name*' /></h3>
                                <h3 className="font-normal"> and I want to discuss a potential project. You can email me at <input className='text-16 border-b border-[#c6c6c6] pl-[10px] ' type="email" name="" id="" placeholder='enter email*' /> </h3>
                                <h3 className="font-normal"> or reach me on <input className='text-16 border-b border-[#c6c6c6] pl-[10px]' type="email" name="" id="" placeholder='your phone*' />
                                </h3>

                                <div className="hm-inquiry-text-area flex flex-col mt-[10px]">
                                    <h3 className='font-normal'>Here are some details about my project:</h3>
                                    <textarea className='mt-[20px] pl-[10px] w-[720px] h-[90px] border-b border-[#c6c6c6]' name="" id="" placeholder='my project is about......'></textarea>
                                </div>
                            </div>

                            <label
                                htmlFor="file-upload"
                                role="button"
                                className="custom-button py-[12px] px-[20px] rounded-[50px] border border-[#8C8C8C] text-18 font-normal w-[max-content] mb-[40px] flex items-center gap-[10px] cnct-upload cursor-pointer"
                                onClick={(e) => {
                                    e.preventDefault();
                                    const fileInput = document.getElementById('file-upload') as HTMLInputElement | null;
                                    fileInput?.click();
                                }}
                            >
                                Attach Your Document
                                <div className="w-[20px] h-[20px] cnct-upload-icon">
                                    <Image className="w-[100%] h-[100%]" src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/contactpage/contact-form/upload-doc.svg" alt="upload" width={32} height={32} />
                                </div>
                            </label>
                            <input type="file" id="file-upload" className="sr-only" />

                            <button title="Submit" className="text-20 px-[20px] py-[10px] bg-[#ED0180] text-white rounded-[30px] w-[max-content] website-link">Submit <span className="mm-cta inline-block ml-[12px] icon-hero-cta-arrow text-[16px]"></span></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm