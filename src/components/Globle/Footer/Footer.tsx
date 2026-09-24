'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from 'next/navigation';
import "./footer.css"

export default function Footer() {

    const [activeCountry, setActiveCountry] = useState("india");
    const pathname = usePathname();
    const isActive = (href: string) => pathname === href;
    const linkStyle = (href: string) => ({
        color: isActive(href) ? '#ED0180' : undefined,
    });

    return (
        <>
            <footer className="section footer" style={{ backgroundColor: "#040E36", color: "white" }}>
                <div className="container">
                    <div className="footer-quote-wrapper">
                        <div className="footer-quote-right">
                            <span className="text-md h6">Unveiling Brilliance</span>

                            <h2 className="text-sb footer-quote-title">Elevate Your Brand!</h2>

                            <p className="text-18 mt-[10px] text-[#C6C6C6]">Whether you&apos;re launching a new brand, designing a digital product, or scaling an existing business, we&apos;d love to hear your vision. Tell us about your project, and we&apos;ll help transform ideas into impactful digital experiences.</p>

                            <Link href="#" title="Start Your Project" className="inline-block text-20 px-[20px] py-[10px] bg-[#ED0180] text-white rounded-[30px]">Start Your Project <span className="mm-cta inline-block ml-[12px] icon-hero-cta-arrow text-[16px]"></span></Link>
                        </div>

                        <div className="footer-social-wrapper footer-social-icon-desktop">
                            <div className="footer-social-row-1 footer-social-row">
                                <div className="social-icon">
                                    <Link href="https://www.linkedin.com/company/rarepixelsdesign/" title="linkedin" target="_blank" rel="noopener noreferrer">
                                        <span className="icon-linkedin"></span>
                                        <p className="text-upper-case text-18 text-rg">LinkedIn</p>
                                    </Link>
                                </div>

                                <div className="social-icon">
                                    <Link href="https://www.instagram.com/rarepixelsdesign/" title="instagram" target="_blank" rel="noopener noreferrer">
                                        <span className="icon-instagram"></span>
                                        <p className="text-upper-case text-18 text-rg">Instagram</p>
                                    </Link>
                                </div>

                                <div className="social-icon">
                                    <Link href="https://www.threads.com/@rarepixelsdesign" title="threads" target="_blank" rel="noopener noreferrer">
                                        <span className="icon-threads"></span>
                                        <p className="text-upper-case text-18 text-rg">Threads</p>
                                    </Link>
                                </div>
                            </div>

                            <div className="footer-social-row-2 footer-social-row">
                                <div className="social-icon">
                                    <Link href="https://www.facebook.com/RarePixelsDesign" title="facebook" target="_blank" rel="noopener noreferrer">
                                        <span className="icon-facebook"></span>
                                        <p className="text-upper-case text-18 text-rg">Facebook</p>
                                    </Link>
                                </div>

                                <div className="social-icon">
                                    <Link href="https://x.com/Rare_Pixels" title="X" target="_blank" rel="noopener noreferrer">
                                        <span className="icon-twitter"></span>
                                        <p className="text-upper-case text-18 text-rg">Twitter</p>
                                    </Link>
                                </div>

                                <div className="social-icon">
                                    <Link href="https://www.youtube.com/@RarePixelsDesign" title="youtube" target="_blank" rel="noopener noreferrer">
                                        <span className="icon-youtube"></span>
                                        <p className="text-upper-case text-18 text-rg">Youtube</p>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="footer-social-icon-tablet">
                            <div className="footer-social-row-1 footer-social-row">
                                <div className="social-icon">
                                    <Link href="https://www.linkedin.com/company/rarepixelsdesign/" title="linkedin" target="_blank" rel="noopener noreferrer">
                                        <span className="icon-linkedin"></span>
                                        <p className="text-upper-case text-18 text-rg">LinkedIn</p>
                                    </Link>
                                </div>

                                <div className="social-icon">
                                    <Link href="https://x.com/Rare_Pixels" title="X" target="_blank" rel="noopener noreferrer">
                                        <span className="icon-twitter"></span>
                                        <p className="text-upper-case text-18 text-rg">Twitter</p>
                                    </Link>
                                </div>
                            </div>

                            <div className="footer-social-row-2 footer-social-row">
                                <div className="social-icon">
                                    <Link href="https://www.facebook.com/RarePixelsDesign" title="facebook" target="_blank" rel="noopener noreferrer">
                                        <span className="icon-facebook"></span>
                                        <p className="text-upper-case text-18 text-rg">Facebook</p>
                                    </Link>
                                </div>

                                <div className="social-icon">
                                    <Link href="https://www.threads.com/@rarepixelsdesign" title="threads" target="_blank" rel="noopener noreferrer">
                                        <span className="icon-threads"></span>
                                        <p className="text-upper-case text-18 text-rg">Threads</p>
                                    </Link>
                                </div>
                            </div>

                            <div className="footer-social-row-2 footer-social-row">
                                <div className="social-icon">
                                    <Link href="https://www.instagram.com/rarepixelsdesign/" title="instagram" target="_blank" rel="noopener noreferrer">
                                        <span className="icon-instagram"></span>
                                        <p className="text-upper-case text-18 text-rg">Instagram</p>
                                    </Link>
                                </div>

                                <div className="social-icon">
                                    <Link href="https://www.youtube.com/@RarePixelsDesign" title="youtube" target="_blank" rel="noopener noreferrer">
                                        <span className="icon-youtube"></span>
                                        <p className="text-upper-case text-18 text-rg">Youtube</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-detail-wrapper">
                        <div className="footer-links-wrapper">
                            <div className="footer-title">
                                <p className="text-18 font-medium quick-link-services-title">Quick Links & Services</p>
                                <p className="text-18 font-medium quick-link-only-title">Quick Links</p>
                            </div>

                            <div className="footer-links">
                                <div className="footer-link-col">
                                    <ul>
                                        <li className="text-18 text-rg text-[#C6C6C6] not-for-mobile"><Link href="/" title="home" style={linkStyle('/')}>Home</Link> </li>
                                        <li className="text-18 text-rg text-[#C6C6C6] not-for-mobile"><Link href="/About" title="about" style={linkStyle('/About')}>About</Link> </li>
                                        <li className="text-18 text-rg text-[#C6C6C6] not-for-mobile"><Link href="#" title="industries">Industries</Link> </li>
                                        <li className="text-18 text-rg text-[#C6C6C6] not-for-mobile"><Link href="#" title="projects">Projects</Link> </li>
                                    </ul>
                                </div>

                                <div className="footer-link-col">
                                    <ul>
                                        <li className="text-18 text-rg text-[#C6C6C6] only-for-mobile-three-column"><Link href="/" title="home" style={linkStyle('/')}>Home</Link> </li>
                                        <li className="text-18 text-rg text-[#C6C6C6] only-for-mobile-three-column"><Link href="/About" title="about" style={linkStyle('/About')}>About</Link> </li>
                                        <li className="text-18 text-rg text-[#C6C6C6] only-for-mobile-three-column"><Link href="#" title="industries">Industries</Link> </li>
                                        <li className="text-18 text-rg text-[#C6C6C6] only-for-mobile-three-column"><Link href="#" title="projects">Projects</Link> </li>

                                        <li className="text-18 text-rg text-[#C6C6C6]"><Link href="/Services" title="services">Services</Link> </li>
                                        <li className="text-18 text-rg text-[#C6C6C6]"><Link href="#" title="life at rpd">Life at RPD</Link> </li>
                                        <li className="text-18 text-rg text-[#C6C6C6]"><Link href="#" title="articles">Articles</Link> </li>
                                        <li className="text-18 text-rg text-[#C6C6C6]"><Link href="/Contact" title="contact" style={linkStyle('/Contact')}>Contact</Link> </li>
                                    </ul>
                                </div>

                                <div className="footer-link-col">
                                    <div className="footer-title">
                                        <p className="text-18 font-medium services-only-title">Services</p>
                                    </div>

                                    <ul>
                                        <li className="text-18 text-rg text-[#C6C6C6]"><Link href="#" title="ui/ux">UI/UX Design</Link> </li>
                                        <li className="text-18 text-rg text-[#C6C6C6]"><Link href="#" title="web dev">Web & App Development</Link> </li>
                                        <li className="text-18 text-rg text-[#C6C6C6]"><Link href="#" title="brand identity">Brand Identity Design</Link> </li>
                                        <li className="text-18 text-rg text-[#C6C6C6]"><Link href="#" title="social media">Social Media Management</Link> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="footer-vr-line"></div>

                        <div className="footer-company-detail">
                            <div className="footer-title">
                                <p className="text-18 font-medium">Location & Contact</p>
                            </div>

                            <div className="footer-contact">
                                <div className="footer-address-wrapper">
                                    <div className="footer-add-country">
                                        <div className={`footer-india ${activeCountry === "india" ? "active" : ""}`} onClick={() => setActiveCountry("india")}>
                                            <p className="text-18 font-semibold text-[#C6C6C6]">IND</p>
                                        </div>

                                        <div className={`footer-usa ${activeCountry === "usa" ? "active" : ""}`} onClick={() => setActiveCountry("usa")}>
                                            <p className="text-18 font-semibold text-[#C6C6C6]">USA</p>
                                        </div>
                                    </div>

                                    <div className="footer-address">
                                        {activeCountry === "india" && (
                                            <div className="footer-address-india">
                                                <p className="text-18 text-rg text-[#C6C6C6]">
                                                    1109-10, The Prime,<br />
                                                    Near Vakil Saheb Bridge, <br />
                                                    Ambli T Junction, Ahmedabad, <br />
                                                    Gujarat 380058.
                                                </p>
                                            </div>
                                        )}

                                        {activeCountry === "usa" && (
                                            <div className="footer-address-usa">
                                                <p className="text-18 text-rg text-[#C6C6C6]">
                                                    2500 knights road <br />
                                                    Apt # 29 - 02 <br />
                                                    Bensalem PA 19020.
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="footer-company-contact">
                                    <div className="footer-cnct">
                                        <span className="text-bd text-18 text-[#C6C6C6]">E.</span>

                                        <div className="footer-mail">
                                            <ul>
                                                <li className="text-rg text-18 text-[#C6C6C6]"><Link href="mailto:connect@rarepixelsdesign.com">connect@rarepixelsdesign.com</Link></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="footer-cnct">
                                        <span className="text-bd text-18 text-[#C6C6C6]">P.</span>

                                        <div className="footer-mail">
                                            <ul>
                                                <li className="text-rg text-18 text-[#C6C6C6]">{activeCountry === "india" ? <Link href="tel:+91 8200925920">+91 8200925920</Link> : <Link href="tel:+1(347) 352-0172">+1 (347) 352-0172</Link>}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rare-pixels-company-logo">
                        <Image className="footer-site-logo" src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/global/rarepixels-footer-logo.svg" alt="website-logo" width={1600} height={260}></Image>
                    </div>

                    <div className="footer-copyright">
                        <div className="footer-copyright-left footer-copyright-color">
                            <p className="text-16 text-rg">© 2026 RarePixels Design all rights reserved.</p>
                        </div>

                        <div className="footer-copyright-right footer-copyright-color">
                            <ul>
                                <li className="text-rg text-16"> <Link href="#" title="Terms of Use">Terms of Use</Link> </li>
                                <li className="text-rg text-16"> <Link href="#" title="Privacy Policy">Privacy Policy</Link> </li>
                                <li className="text-rg text-16"> <Link href="#" title="Site Map">Site Map</Link> </li>
                            </ul>
                        </div>
                    </div>

                    <Image className="footer-pixel-1" src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/global/footer-pixel-1.svg" alt="footer-pixel-1" width={386} height={262}></Image>
                    <Image className="footer-pixel-2" src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/global/footer-pixel-2.svg" alt="footer-pixel-2" width={166} height={124}></Image>
                    <Image className="footer-pixel-3" src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/global/footer-pixel-3.svg" alt="footer-pixel-3" width={369} height={262}></Image>
                </div>
            </footer>
        </>
    );
}