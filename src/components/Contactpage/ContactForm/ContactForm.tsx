'use client';

import Link from "next/link";

const ContactForm = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="contact-form-wrapper">
                    <div className="contact-form-left w-[562px]">
                        <h2 className="font-semibold">Every Great Project Starts With One Conversation.</h2>

                        <p className="font-normal text-18 mt-[20px] mb-[24px]">Whether you have a fully formed brief or just an idea you cannot get out of your head we want to hear it. We respond to every enquiry within 24 hours, across every time zone. No lengthy questionnaires. No automated replies. A real person from the Rare Pixels team will read your message and come back to you with an honest, considered response. </p>

                        <h3 className="h5">We respond within 24 hours guaranteed. </h3>

                        <div className="contact-cta p-[30px] bg-[#FBF9E9] mt-[54px]">
                            <h4 className="h2">Prefer to Talk First? </h4>
                            <p className="text-18 font-normal">Book a free 30-minute discovery call directly in our calendar and we will come prepared with questions, ideas, and an honest assessment of how we can help. </p>
                            <Link href="#" title="Book A Call" className="text-20 px-[20px] py-[10px] bg-[#ED0180] text-white rounded-[30px]">Book A Call <span className="mm-cta inline-block ml-[12px] icon-hero-cta-arrow text-[16px]"></span></Link>
                        </div>
                    </div>

                    <div className="contact-form-right">
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm