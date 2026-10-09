"use client"

import "./header.css"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';


const CDN_URL = "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev";

const Header = () => {
    const [megaMenuOpen, setMegaMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const toggleMegaMenu = () => { setMegaMenuOpen((prev) => !prev); };
    const closeMegaMenu = () => { setTimeout(() => { setMegaMenuOpen(false); }, 100); };

    // HEADER SCROLL HIDE & SHOW
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const heroHeight = 60;

            if (currentScrollY > heroHeight) {
                if (currentScrollY > lastScrollY) { setIsVisible(false); }
                else { setIsVisible(true); }
            } else { setIsVisible(true); }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    // MEGAMENU OPEN & CLOSE
    useEffect(() => {
        if (megaMenuOpen) { document.body.style.overflow = "hidden"; }
        else { document.body.style.overflow = "unset"; }
        return () => { document.body.style.overflow = "unset"; };
    }, [megaMenuOpen]);

    // ACTIVE LINK PATH CHANGE
    const pathname = usePathname();
    const isActive = (href: string) => pathname === href;
    const linkStyle = (href: string) => ({
        color: isActive(href) ? '#ED0180' : undefined,
    });
    const linkStyleIcon = (href: string) => ({
        background: isActive(href) ? '#ED0180' : undefined,
        color: isActive(href) ? 'white' : undefined,
    });

    return (
        <header className={`fixed top-0 z-[98] w-max py-[20px] transition-transform duration-500 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
            <div className="container overflow-hidden">
                <div className="nav-cont-wrapper w-full flex items-center justify-between">
                    <Link href="/" className="navbar-logo" >
                        <Image src={`${CDN_URL}/images/global/header/rare-pixels-logo.svg`} alt="header-logo" width={174} height={28} priority />
                    </Link>

                    <button onClick={toggleMegaMenu} className="cursor-pointer bento-menu" type="button">
                        <Image src={`${CDN_URL}/images/global/header/header-bento-menu.svg`} alt="header-logo" width={24} height={24} priority />
                    </button>
                </div>
            </div>

            {megaMenuOpen && (
                <nav aria-label="Mega Menu" className="mega-menu fixed top-0 left-0 bg-white w-[100%] h-[100vh] py-[20px] z-[99]">
                    <div className="container overflow-hidden h-[100%] relative z-[2]">
                        <div className="mega-menu-close flex justify-between items-center w-[100%]">
                            <Link href="/" className="navbar-logo" >
                                <Image src={`${CDN_URL}/images/global/header/rare-pixels-logo.svg`} alt="header-logo" width={174} height={28} priority />
                            </Link>

                            <button onClick={toggleMegaMenu} className="close-btn cursor-pointer rounded-full bg-[#ED0180] text-white p-[10px] font-semibold" type="button">
                                <svg className="menu-cross" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.2 15.6L0 13.4L5.6 7.8L0 2.2L2.2 0L7.8 5.6L13.4 0L15.6 2.2L10 7.8L15.6 13.4L13.4 15.6L7.8 10L2.2 15.6Z" fill="white" />
                                </svg>
                            </button>
                        </div>

                        <div className="mega-menu-content mt-[40px]">
                            <div className="mm-pages-link">
                                <ul className="w-[100%] flex justify-between items-center flex-wrap gap-y-[30px]">
                                    <li>
                                        <Link href="/" onClick={closeMegaMenu} className="w-[330px] flex gap-[10px]">
                                            <span className="block link-icon flex justify-center items-center w-[52px] h-[52px] rounded-[20px] bg-[#ECF2EC]" style={linkStyleIcon('/')}><span className="mm-icon icon-other_houses"></span></span>

                                            <div className="link-info">
                                                <p className="link-title text-18 font-medium mb-[4px]" style={linkStyle('/')}>Home</p>
                                                <p className="link-subtitle text-[#585858]">Explore ideas built for impact</p>
                                            </div>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/About" onClick={closeMegaMenu} className="w-[330px] flex gap-[10px]">
                                            <span className="block link-icon flex justify-center items-center w-[52px] h-[52px] rounded-[20px] bg-[#ECF2EC]" style={linkStyleIcon('/About')}><span className="mm-icon icon-info"></span></span>

                                            <div className="link-info">
                                                <p className="link-title text-18 font-medium mb-[4px]" style={linkStyle('/About')}>About</p>
                                                <p className="link-subtitle text-[#585858]">The thinking behind RarePixels</p>
                                            </div>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/Services" onClick={closeMegaMenu} className="w-[330px] flex gap-[10px]">
                                            <span className="block link-icon flex justify-center items-center w-[52px] h-[52px] rounded-[20px] bg-[#ECF2EC]" style={linkStyleIcon('/Services')}><span className="mm-icon icon-conversion_path"></span></span>

                                            <div className="link-info">
                                                <p className="link-title text-18 font-medium mb-[4px]" style={linkStyle('/Services')}>Services</p>
                                                <p className="link-subtitle text-[#585858]">How we turn vision into reality</p>
                                            </div>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="#" className="w-[330px] flex gap-[10px]">
                                            <span className="block link-icon flex justify-center items-center w-[52px] h-[52px] rounded-[20px] bg-[#ECF2EC]"><span className="mm-icon icon-business_center"></span></span>

                                            <div className="link-info">
                                                <p className="link-title text-18 font-medium mb-[4px]">Industries</p>
                                                <p className="link-subtitle text-[#585858]">Experience the evolving industries</p>
                                            </div>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="#" className="w-[330px] flex gap-[10px]">
                                            <span className="block link-icon flex justify-center items-center w-[52px] h-[52px] rounded-[20px] bg-[#ECF2EC]"><span className="mm-icon icon-note_stack"></span></span>

                                            <div className="link-info">
                                                <p className="link-title text-18 font-medium mb-[4px]">Projects</p>
                                                <p className="link-subtitle text-[#585858]">Ideas into digital experiences</p>
                                            </div>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="#" className="w-[330px] flex gap-[10px]">
                                            <span className="block link-icon flex justify-center items-center w-[52px] h-[52px] rounded-[20px] bg-[#ECF2EC]"><span className="mm-icon icon-crowdsource"></span></span>

                                            <div className="link-info">
                                                <p className="link-title text-18 font-medium mb-[4px]">Life at RPD</p>
                                                <p className="link-subtitle text-[#585858]">People, Culture & Creative thinking</p>
                                            </div>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="#" className="w-[330px] flex gap-[10px]">
                                            <span className="block link-icon flex justify-center items-center w-[52px] h-[52px] rounded-[20px] bg-[#ECF2EC]"><span className="mm-icon icon-newsmode"></span></span>

                                            <div className="link-info">
                                                <p className="link-title text-18 font-medium mb-[4px]">Articles</p>
                                                <p className="link-subtitle text-[#585858]">Perspectives on design & digital</p>
                                            </div>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/Contact" onClick={closeMegaMenu} className="w-[330px] flex gap-[10px]">
                                            <span className="block link-icon flex justify-center items-center w-[52px] h-[52px] rounded-[20px] bg-[#ECF2EC]" style={linkStyleIcon('/Contact')}><span className="mm-icon icon-support_agent"></span></span>

                                            <div className="link-info">
                                                <p className="link-title text-18 font-medium mb-[4px]" style={linkStyle('/Contact')}>Contact</p>
                                                <p className="link-subtitle text-[#585858]">Let&apos;s create something meaningful</p>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="mm-services-link my-[30px] py-[30px] border-y-[1px] border-[#D9D9D9] flex justify-between">
                                <div className="sub-service-list w-[330px] flex gap-[10px]">
                                    <span className="block link-icon flex justify-center items-center w-[52px] h-[52px] rounded-[20px] bg-[#ECF2EC]"><span className="mm-icon icon-draw"></span></span>

                                    <div className="link-info">
                                        <p className="mm-service-title text-18 h-[52px] font-medium flex items-center">UI/UX Design</p>

                                        <ul>
                                            <li className="mb-[6px]"><Link href="#">Experience Strategy & Research</Link></li>
                                            <li className="mb-[6px]"><Link href="#">Website Design</Link></li>
                                            <li className="mb-[6px]"><Link href="#">Interface Design</Link></li>
                                            <li className="mb-[6px]"><Link href="#">Interaction & Motion Design</Link></li>
                                            <li className="mb-[6px]"><Link href="#">Dashboard & Data Experience</Link></li>
                                            <li className="mb-[6px]"><Link href="#">Prototype & Validation</Link></li>
                                            <li className="mb-[6px]"><Link href="#">Design Systems</Link></li>
                                            <li className="mb-[6px]"><Link href="#">Product & App Design</Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="sub-service-list w-[330px] flex gap-[10px]">
                                    <span className="block link-icon flex justify-center items-center w-[52px] h-[52px] rounded-[20px] bg-[#ECF2EC]"><span className="mm-icon icon-code_xml"></span></span>

                                    <div className="link-info">
                                        <p className="mm-service-title text-18 h-[52px] font-medium flex items-center font-medium">Web & App Development</p>

                                        <ul>
                                            <li className="mb-[6px]"><Link href="#">Web & Platform Engineering</Link></li>
                                            <li className="mb-[6px]"><Link href="#">SaaS & Product Development</Link></li>
                                            <li className="mb-[6px]"><Link href="#">E-commerce & Marketplace Builds</Link></li>
                                            <li className="mb-[6px]"><Link href="#">Mobile Application Development</Link></li>
                                            <li className="mb-[6px]"><Link href="#">API & Systems Integration</Link></li>
                                            <li className="mb-[6px]"><Link href="#">Progressive & Headless Web</Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="sub-service-list w-[330px] flex gap-[10px]">
                                    <span className="block link-icon flex justify-center items-center w-[52px] h-[52px] rounded-[20px] bg-[#ECF2EC]"><span className="mm-icon icon-diamond_shine"></span></span>

                                    <div className="link-info">
                                        <p className="mm-service-title text-18 h-[52px] font-medium flex items-center font-medium">Brand Identity Design</p>

                                        <ul>
                                            <li className="mb-[6px]"><Link href="#">Brand Strategy & Positioning</Link></li>
                                            <li className="mb-[6px]"><Link href="#">Visual Identity Design</Link></li>
                                            <li className="mb-[6px]"><Link href="#">Brand Architecture & Guidelines</Link></li>
                                            <li className="mb-[6px]"><Link href="#">Packaging & Product Design</Link></li>
                                            <li className="mb-[6px]"><Link href="#">Rebranding & Brand Evolution</Link></li>
                                            <li className="mb-[6px]"><Link href="#">Presentation & Collateral Design</Link></li>
                                            <li className="mb-[6px]"><Link href="#">Graphics & Print Media Design</Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="sub-service-list w-[330px] flex gap-[10px]">
                                    <span className="block link-icon flex justify-center items-center w-[52px] h-[52px] rounded-[20px] bg-[#ECF2EC]"><span className="mm-icon icon-automation"></span></span>

                                    <div className="link-info">
                                        <p className="mm-service-title text-18 h-[52px] font-medium flex items-center font-medium">Social Media Management</p>

                                        <ul>
                                            <li className="mb-[6px]"><Link href="#">Social Media Strategy</Link></li>
                                            <li className="mb-[6px]"><Link href="#">Content Creation & Design</Link></li>
                                            <li className="mb-[6px]"><Link href="#">Social & Performance Marketing</Link></li>
                                            <li className="mb-[6px]"><Link href="#">Video & Reels Production</Link></li>
                                            <li className="mb-[6px]"><Link href="#">Community Management</Link></li>
                                            <li className="mb-[6px]"><Link href="#">Analytics, Audit & Reporting</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="mm-connect-us flex justify-between">
                                <div className="mm-slogan-cta">
                                    <p className="h3 mb-[30px]">Elevate Your Brand</p>
                                    <Link href="#" title="Start Your Project" className="inline-block text-20 px-[20px] py-[10px] bg-[#ED0180] text-white rounded-[30px] website-link">Start Your Project <span className="mm-cta inline-block ml-[12px] icon-hero-cta-arrow text-[16px]"></span></Link>
                                </div>

                                <div className="mm-contact-socials flex gap-[80px]">
                                    <div className="mm-contact w-[310px]">
                                        <p className="font-medium mb-[10px]">Contact</p>

                                        <ul>
                                            <li><a className="text-18 flex items-center gap-[6px]" href="tel:+91 8200925920"><span className="mm-contact-icon icon-call text-[#585858]"></span> +91 8200925920</a></li>
                                            <li><a className="text-18 flex items-center gap-[6px]" href="tel:+1(347) 352-0172"><span className="mm-contact-icon icon-call text-[#585858]"></span> +1(347) 352-0172</a></li>
                                            <li><a className="text-18 flex items-center gap-[6px]" href="mailto:connect@rarepixelsdesign.com"><span className="mm-contact-icon icon-mail text-[#585858]"></span> connect@rarepixelsdesign.com</a></li>
                                        </ul>
                                    </div>

                                    <div className="mm-socials w-[310px]">
                                        <p className="font-medium mb-[10px]">Follow</p>

                                        <ul className="flex gap-[20px]">
                                            <li><a className="text-18" href="#"><span className="mm-social-icon text-[#849084] icon-linkedin"></span></a></li>
                                            <li><a className="text-18" href="#"><span className="mm-social-icon text-[#849084] icon-instagram"></span></a></li>
                                            <li><a className="text-18" href="#"><span className="mm-social-icon text-[#849084] icon-threads"></span></a></li>
                                            <li><a className="text-18" href="#"><span className="mm-social-icon text-[#849084] icon-facebook"></span></a></li>
                                            <li><a className="text-18" href="#"><span className="mm-social-icon text-[#849084] icon-twitter"></span></a></li>
                                            <li><a className="text-18" href="#"><span className="mm-social-icon text-[#849084] icon-youtube"></span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Image src={`${CDN_URL}/images/global/header/megamenu-bg-pixel-top.svg`} alt="pixels-grp" width={105} height={70} className="mm-pixels-t absolute top-0 left-[450px] z-[1]"></Image>
                    <Image src={`${CDN_URL}/images/global/header/megamenu-bg-pixel-top-right.svg`} alt="pixels-grp" width={105} height={70} className="mm-pixels-tr absolute top-[30px] right-0 z-[1]"></Image>
                    <Image src={`${CDN_URL}/images/global/header/megamenu-bg-pixel-bottom-left.svg`} alt="pixels-grp" width={105} height={70} className="mm-pixels-bl absolute bottom-[200px] left-0 z-[1]"></Image>
                    <Image src={`${CDN_URL}/images/global/header/megamenu-bg-pixel-bottom-right.svg`} alt="pixels-grp" width={105} height={70} className="mm-pixels-br absolute bottom-[90px] right-0 z-[1]"></Image>
                </nav>
            )}
        </header>
    )
}

export default Header