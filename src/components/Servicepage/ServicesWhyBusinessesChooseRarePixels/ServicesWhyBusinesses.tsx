'use client';

import { useEffect } from 'react';
import './serviceswhybusinesses.css';

const ServicesWhyBusinesses = () => {

    useEffect(() => {
        const cards = document.querySelectorAll( '.services-business-card-tablet' );

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0,
                rootMargin: '-20% 0px -60% 0px',
            }
        );

        cards.forEach((card) => observer.observe(card));

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section className="section overflow-hidden">
            <div className="container">
                <div className="srvsd-business-title text-center">
                    <h2 className="font-semibold">Why Businesses Choose RarePixels</h2>

                    <p className="text-18 font-normal website-subtitle-mt">Across every service we offer, three things never change. </p>
                </div>

                <div className="services-why-businesses-choose-rarepixels services-why-businesses-choose-rarepixels-desktop mt-[60px] flex items-end">
                    <div className="services-why-busi-card services-why-busi-card-1 cursor-pointer flex gap-[40px] items-end">
                        <div className="services-why-busi-element-art w-[378px] h-[370px] relative">
                            <svg className="w-[100%] h-[100%] object-contain" width="378" height="367" viewBox="0 0 378 367" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M377.998 199.15C377.998 291.869 302.798 366.641 210.507 366.641C118.216 366.641 36.1797 288.45 36.1797 195.732C36.1797 103.014 127.616 24.3955 220.334 24.3955C313.053 24.3955 377.998 106.432 377.998 199.15Z" fill="#E1E8EB" />
                                <path d="M96.4169 180.363C101.254 156.156 85.5518 132.612 61.3454 127.775C37.1391 122.938 13.5949 138.64 8.75799 162.847C3.92109 187.053 19.6231 210.597 43.8295 215.434C68.0358 220.271 91.58 204.569 96.4169 180.363Z" stroke="#343A40" strokeWidth="5" strokeMiterlimit="10" strokeLinecap="round" />
                                <path d="M281.592 23.3769C281.592 23.3769 200.136 91.0001 198.087 110.724C196.038 130.447 272.37 108.418 316.428 51.297C369.707 -17.8631 313.354 -6.33636 281.592 23.3769Z" fill="#E8DB7D" />
                                <path d="M333.44 76.5456C333.44 76.5456 291.175 114.712 290.407 125.47C289.894 136.228 334.208 125.47 352.907 90.89C375.192 49.3939 350.089 59.896 333.44 76.5456Z" fill="#E8DB7D" />
                            </svg>

                            <div className="services-why-busi-text services-why-busi-text-1 absolute bottom-[50px] left-[55%] translate-x-[-50%]">
                                <h3 className="h4 font-semibold w-[176px] text-center">Everything Is Original</h3>
                            </div>
                        </div>

                        <div className="services-why-busi-description pb-[60px]">
                            <p>No templates. No recycled frameworks. Every deliverable - whether it is a brand identity, a platform, or a content strategy is conceived specifically for your business.</p>
                        </div>
                    </div>

                    <div className="services-why-busi-card services-why-busi-card-2 cursor-pointer flex gap-[40px] items-end">
                        <div className="services-why-busi-element-art w-[378px] h-[370px] relative">
                            <svg className="w-[100%] h-[100%] object-contain" width="381" height="370" viewBox="0 0 381 370" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M62.3634 52.9185C62.3634 52.9185 60.8597 316.059 84.1664 324.705C107.849 332.975 347.307 341.621 357.457 324.705C367.606 307.789 355.953 54.798 342.42 46.152C328.887 37.8819 69.1299 36.0023 62.3634 52.9185Z" fill="#E1E8EB" />
                                <path d="M0.0129005 5.99423C0.0129005 5.99423 -0.778705 125.792 10.04 129.486C20.8587 133.18 129.838 137.138 134.323 129.486C138.809 121.834 133.532 6.78584 127.463 2.82777C121.394 -1.1303 3.17936 -1.65804 0.0129005 5.99423Z" fill="#061651" />
                                <path d="M297.523 291.507C297.523 291.507 296.982 362.332 303.47 364.494C309.958 366.657 374.294 369.09 376.997 364.494C379.701 359.899 376.457 291.777 372.943 289.615C369.428 287.452 299.415 286.912 297.523 291.507Z" stroke="#343A40" strokeWidth="5" strokeMiterlimit="10" strokeLinecap="round" />
                            </svg>

                            <div className="services-why-busi-text services-why-busi-text-2 absolute top-[50%] left-[55%] translate-x-[-50%] translate-y-[-50%]">
                                <h3 className="h4 font-semibold w-[195px] text-center">Strategy Comes First</h3>
                            </div>
                        </div>

                        <div className="services-why-busi-description pb-[60px]">
                            <p>No templates. No recycled frameworks. Every deliverable - whether it is a brand identity, a platform, or a content strategy is conceived specifically for your business.</p>
                        </div>
                    </div>

                    <div className="services-why-busi-card services-why-busi-card-3 cursor-pointer flex flex-row-reverse gap-[40px] items-end">
                        <div className="services-why-busi-element-art w-[378px] h-[370px] relative">
                            <svg className="w-[100%] h-[100%] object-contain" width="381" height="407" viewBox="0 0 381 407" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M279.517 40.6788C279.517 40.6788 -24.0605 205.263 1.53174 241.445C27.124 278.069 377.915 438.682 377.915 387.497C377.915 336.313 330.26 22.1465 279.075 40.2376L279.517 40.6788Z" fill="#E1E8EB" />
                                <path d="M51.8312 366.317C44.33 363.229 174.498 225.119 198.325 214.088C222.152 203.498 270.248 408.677 262.306 406.029C254.363 403.382 88.8959 382.202 51.8312 365.876V366.317Z" fill="#ED0180" />
                                <path d="M173.93 29.4044C177.026 25.1823 215.307 9.98252 232.758 2.9456C236.699 1.25674 241.203 4.63447 240.64 8.85662L236.699 59.2409C236.418 63.4631 240.64 66.8408 244.58 65.152L307.068 41.7894C311.009 40.382 315.513 43.4782 314.95 47.9819L310.446 94.707C309.883 99.7736 315.513 102.87 319.735 100.055L378.001 80.3517" stroke="#343A40" strokeWidth="5" strokeMiterlimit="10" strokeLinecap="round" />
                            </svg>

                            <div className="services-why-busi-text services-why-busi-text-3 absolute top-[110px] right-[50px]">
                                <h3 className="h4 font-semibold w-[195px] text-center">Results Are Measurable</h3>
                            </div>
                        </div>

                        <div className="services-why-busi-description pb-[60px] text-right">
                            <p>No templates. No recycled frameworks. Every deliverable - whether it is a brand identity, a platform, or a content strategy is conceived specifically for your business.</p>
                        </div>
                    </div>
                </div>

                <div className="services-why-businesses-choose-rarepixels-tablet">
                    <div className="services-business-card-tablet">
                        <div className="services-why-busi-element-art w-[378px] h-[370px] relative">
                            <svg className="w-[100%] h-[100%] object-contain" width="378" height="367" viewBox="0 0 378 367" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M377.998 199.15C377.998 291.869 302.798 366.641 210.507 366.641C118.216 366.641 36.1797 288.45 36.1797 195.732C36.1797 103.014 127.616 24.3955 220.334 24.3955C313.053 24.3955 377.998 106.432 377.998 199.15Z" fill="#E1E8EB" />
                                <path d="M96.4169 180.363C101.254 156.156 85.5518 132.612 61.3454 127.775C37.1391 122.938 13.5949 138.64 8.75799 162.847C3.92109 187.053 19.6231 210.597 43.8295 215.434C68.0358 220.271 91.58 204.569 96.4169 180.363Z" stroke="#343A40" strokeWidth="5" strokeMiterlimit="10" strokeLinecap="round" />
                                <path d="M281.592 23.3769C281.592 23.3769 200.136 91.0001 198.087 110.724C196.038 130.447 272.37 108.418 316.428 51.297C369.707 -17.8631 313.354 -6.33636 281.592 23.3769Z" fill="#E8DB7D" />
                                <path d="M333.44 76.5456C333.44 76.5456 291.175 114.712 290.407 125.47C289.894 136.228 334.208 125.47 352.907 90.89C375.192 49.3939 350.089 59.896 333.44 76.5456Z" fill="#E8DB7D" />
                            </svg>

                            <div className="services-why-busi-text services-why-busi-text-1 absolute bottom-[50px] left-[55%] translate-x-[-50%]">
                                <h3 className="h4 font-semibold w-[176px] text-center">Everything Is Original</h3>
                            </div>
                        </div>

                        <div className="sservices-business-tablet-text">
                            <p>No templates. No recycled frameworks. Every deliverable - whether it is a brand identity, a platform, or a content strategy is conceived specifically for your business.</p>
                        </div>
                    </div>

                    <div className="services-business-card-tablet">
                        <div className="services-why-busi-element-art w-[378px] h-[370px] relative">
                            <svg className="w-[100%] h-[100%] object-contain" width="381" height="370" viewBox="0 0 381 370" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M62.3634 52.9185C62.3634 52.9185 60.8597 316.059 84.1664 324.705C107.849 332.975 347.307 341.621 357.457 324.705C367.606 307.789 355.953 54.798 342.42 46.152C328.887 37.8819 69.1299 36.0023 62.3634 52.9185Z" fill="#E1E8EB" />
                                <path d="M0.0129005 5.99423C0.0129005 5.99423 -0.778705 125.792 10.04 129.486C20.8587 133.18 129.838 137.138 134.323 129.486C138.809 121.834 133.532 6.78584 127.463 2.82777C121.394 -1.1303 3.17936 -1.65804 0.0129005 5.99423Z" fill="#061651" />
                                <path d="M297.523 291.507C297.523 291.507 296.982 362.332 303.47 364.494C309.958 366.657 374.294 369.09 376.997 364.494C379.701 359.899 376.457 291.777 372.943 289.615C369.428 287.452 299.415 286.912 297.523 291.507Z" stroke="#343A40" strokeWidth="5" strokeMiterlimit="10" strokeLinecap="round" />
                            </svg>

                            <div className="services-why-busi-text services-why-busi-text-2 absolute top-[50%] left-[55%] translate-x-[-50%] translate-y-[-50%]">
                                <h3 className="h4 font-semibold w-[195px] text-center">Strategy Comes First</h3>
                            </div>
                        </div>

                        <div className="sservices-business-tablet-text">
                            <p>No templates. No recycled frameworks. Every deliverable - whether it is a brand identity, a platform, or a content strategy is conceived specifically for your business.</p>
                        </div>
                    </div>

                    <div className="services-business-card-tablet">
                        <div className="services-why-busi-element-art w-[378px] h-[370px] relative">
                            <svg className="w-[100%] h-[100%] object-contain" width="381" height="407" viewBox="0 0 381 407" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M279.517 40.6788C279.517 40.6788 -24.0605 205.263 1.53174 241.445C27.124 278.069 377.915 438.682 377.915 387.497C377.915 336.313 330.26 22.1465 279.075 40.2376L279.517 40.6788Z" fill="#E1E8EB" />
                                <path d="M51.8312 366.317C44.33 363.229 174.498 225.119 198.325 214.088C222.152 203.498 270.248 408.677 262.306 406.029C254.363 403.382 88.8959 382.202 51.8312 365.876V366.317Z" fill="#ED0180" />
                                <path d="M173.93 29.4044C177.026 25.1823 215.307 9.98252 232.758 2.9456C236.699 1.25674 241.203 4.63447 240.64 8.85662L236.699 59.2409C236.418 63.4631 240.64 66.8408 244.58 65.152L307.068 41.7894C311.009 40.382 315.513 43.4782 314.95 47.9819L310.446 94.707C309.883 99.7736 315.513 102.87 319.735 100.055L378.001 80.3517" stroke="#343A40" strokeWidth="5" strokeMiterlimit="10" strokeLinecap="round" />
                            </svg>

                            <div className="services-why-busi-text services-why-busi-text-3 absolute top-[110px] right-[50px]">
                                <h3 className="h4 font-semibold w-[195px] text-center">Results Are Measurable</h3>
                            </div>
                        </div>

                        <div className="sservices-business-tablet-text">
                            <p>No templates. No recycled frameworks. Every deliverable - whether it is a brand identity, a platform, or a content strategy is conceived specifically for your business.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesWhyBusinesses