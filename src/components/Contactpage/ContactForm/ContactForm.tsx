'use client';

import Link from "next/link";

import './contactform.css'
import Image from "next/image";
import { useState } from "react";

const ContactForm = () => {

    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [attachedFile, setAttachedFile] = useState<File | null>(null);

    const [loading, setLoading] = useState(false);
    const [validationError, setValidationError] = useState('');
    const [statusText, setStatusText] = useState('');

    const handleCheckboxChange = (option: string) => {
        setSelectedServices((prev) =>
            prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
        );
        if (validationError) setValidationError('');
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setAttachedFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatusText('');
        setValidationError('');

        if (selectedServices.length === 0) {
            setValidationError('Please select at least one interest option above.');
            return;
        }
        if (!name.trim()) {
            setValidationError('Please enter your name.');
            return;
        }
        if (!email.trim()) {
            setValidationError('Please enter your email address.');
            return;
        }
        if (!phone.trim()) {
            setValidationError('Please enter your phone number.');
            return;
        }

        setLoading(true);

        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('phone', phone);
            formData.append('message', message);

            selectedServices.forEach((service) => formData.append('services', service));

            if (attachedFile) {
                formData.append('file', attachedFile);
            }

            const res = await fetch('/api/contact', {
                method: 'POST',
                body: formData,
            });

            if (res.ok) {
                setStatusText('Thank you! Your inquiry has been submitted successfully.');
                setSelectedServices([]);
                setName('');
                setEmail('');
                setPhone('');
                setMessage('');
                setAttachedFile(null);
            } else {
                setStatusText('Something went wrong. Please try again.');
            }
        } catch (err) {
            setStatusText('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="section">
            <div className="container">
                <div className="contact-form-wrapper flex items-start justify-between">
                    <div className="contact-form-left w-[562px]">
                        <h2 className="font-semibold">Every Big Project Starts With A “What If?” </h2>

                        <p className="font-normal text-18 mt-[20px] mb-[24px]">Have a project in mind, a problem to solve, or just an idea that won’t leave your head? Tell us about it. You don’t need a perfect brief or all the answers. Just start the conversation. An expert from the RarePixels team will read your message, understand what you’re looking for, and get back to you with a thoughtful response. No endless forms. No robotic replies. Just a conversation that goes somewhere.</p>

                        <h3 className="h5">Your idea won’t sit in an inbox forever. Response guaranteed in 24 hours.</h3>

                        <div className="contact-cta p-[30px] bg-[#FBF9E9] mt-[54px] rounded-[20px] relative">
                            <div className="contact-cta-left w-[370px] ">
                                <div className="cnct-title-form">
                                    <h4 className="h2 flex items-end gap-[5px]">Got 30 Minutes?</h4>
                                    <div className="skip-the-form w-[100%] h-[100%] mt-[10px]">
                                        <span className="skip-the-form-wrapper">
                                            <Image className="mb-[10px] skip-the-form-image" src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/contactpage/contact-form/skip-the-form.svg" alt="" width={163} height={30}></Image>
                                        </span>
                                    </div>
                                </div>
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
                        <form onSubmit={handleSubmit} className="hm-inquiry-form-wrapper flex flex-col" noValidate>
                            <h3 className="font-normal" >Hello! I’m interested in (select one or more)</h3>
                            <div className="cnct-form-checkbox" role="group" aria-label="Project type">
                                {['UI/UX Design', 'Web & App Development', 'Brand Identity Design', 'AI Driven Solutions', 'Social Media Management'].map((option) => {
                                    const optionId = `project-${option.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

                                    return (
                                        <span className="cnct-form-checkbox-option inquiry-form-check-option" key={option}>
                                            <input type="checkbox" id={optionId} name="projectType" value={option} checked={selectedServices.includes(option)} onChange={() => handleCheckboxChange(option)} />
                                            <label htmlFor={optionId} className="font-normal text-18">{option}</label>
                                        </span>
                                    );
                                })}
                            </div>

                            <div className="cnct-inquiry-detail mt-[20px] mb-[40px] flex flex-wrap">
                                <h3 className="font-normal"> {' '} My name is {' '}<input className='text-16 border-b border-[#c6c6c6] pl-[10px]' type="text" placeholder='enter name*' name="name" id="name" value={name} onChange={(e) => { setName(e.target.value); if (validationError) setValidationError(''); }} /></h3>
                                <h3 className="font-normal"> {' '} and I want to discuss a potential project. You can email me at {' '} <input className='text-16 border-b border-[#c6c6c6] pl-[10px] ' type="email" name="email" id="email" value={email} placeholder='enter email*' onChange={(e) => { setEmail(e.target.value); if (validationError) setValidationError(''); }} /> {' '} </h3>
                                <h3 className="font-normal"> {' '} or reach me on {' '} <input className='text-16 border-b border-[#c6c6c6] pl-[10px]' type="tel" name="phone" id="phone" value={phone} placeholder='your phone*' onChange={(e) => { setPhone(e.target.value); if (validationError) setValidationError(''); }} />
                                </h3>

                                <div className="hm-inquiry-text-area flex flex-col mt-[10px]">
                                    <h3 className='font-normal'>Here are some details about my project:</h3>
                                    <textarea className='mt-[20px] pl-[10px] w-[720px] h-[90px] border-b border-[#c6c6c6]' name="message" id="message" value={message} placeholder='my project is about......' onChange={(e) => setMessage(e.target.value)}></textarea>
                                </div>
                            </div>

                            <div className="flex items-center gap-[15px] mb-[40px]">
                                <label
                                    htmlFor="file-upload"
                                    role="button"
                                    className="custom-button py-[12px] px-[20px] rounded-[50px] border border-[#8C8C8C] text-18 font-normal w-[max-content] flex items-center gap-[10px] cnct-upload cursor-pointer"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const fileInput = document.getElementById('file-upload') as HTMLInputElement | null;
                                        fileInput?.click();
                                    }}
                                >
                                    <span className="truncate max-w-[250px]">
                                        {attachedFile ? attachedFile.name : 'Attach Your Document'}
                                    </span>
                                    <div className="w-[20px] h-[20px] cnct-upload-icon flex-shrink-0">
                                        <Image
                                            className="w-[100%] h-[100%]"
                                            src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/contactpage/contact-form/upload-doc.svg"
                                            alt="upload"
                                            width={32}
                                            height={32}
                                        />
                                    </div>
                                </label>
                            </div>
                            <input type="file" id="file-upload" className="sr-only" onChange={handleFileChange} />

                            {validationError && (<p className="mb-[20px] text-16 font-medium text-red-600"> ⚠️ {validationError} </p>)}

                            <button
                                type="submit"
                                disabled={loading}
                                title="Submit"
                                className="text-20 px-[20px] py-[10px] bg-[#ED0180] text-white rounded-[30px] w-[max-content] website-link cursor-pointer disabled:opacity-50"
                            >
                                {loading ? 'Sending...' : 'Submit'}{' '}
                                <span className="mm-cta inline-block ml-[12px] icon-hero-cta-arrow text-[16px]"></span>
                            </button>

                            {statusText && (
                                <p className="mt-[20px] font-medium text-16 text-green-600">
                                    {statusText}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm