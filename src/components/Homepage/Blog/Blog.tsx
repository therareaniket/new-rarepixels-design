"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import "./blog.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const siteUrl = "https://rarepixelsdesign.in";

const shareBlog = {
    title: "RarePixels Turns 2. The Big Game Is Still Loading.",
    url: `${siteUrl}/Blog/rarepixels-turns-2-the-big-game-is-still-loading`,
};

const encodedUrl = encodeURIComponent(shareBlog.url);
const encodedTitle = encodeURIComponent(shareBlog.title);

const shareBlog2 = {
    title: "Why Serious Businesses Invest in UX Masters, Not Just Creative Designers",
    url: `${siteUrl}/Blog/why-businesses-need-ux-masters-not-just-creative-designers`,
};

const encodedUrl2 = encodeURIComponent(shareBlog2.url);
const encodedTitle2 = encodeURIComponent(shareBlog2.title);

const handleCopyLink = async (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    e.stopPropagation();
    try {
        await navigator.clipboard.writeText(url);
        alert("Link copied!");
    } catch (error) {
        console.error("Unable to copy blog link:", error);
    }
};

const ShareButtons = ({
    encodedBlogUrl,
    encodedBlogTitle,
    rawUrl,
}: {
    encodedBlogUrl: string;
    encodedBlogTitle: string;
    rawUrl: string;
}) => (
    <div className="hm-blog-social-share flex align-center gap-[20px] text-[#8C8B8C]" onClick={(e) => e.stopPropagation()} >
        <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedBlogUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on LinkedIn"
        >
            <span className="icon-linkedin"></span>
        </a>

        <button
            type="button"
            onClick={(e) => handleCopyLink(e, rawUrl)}
            aria-label="Copy link to share on Instagram"
        >
            <span className="icon-instagram"></span>
        </button>

        <button
            type="button"
            onClick={(e) => handleCopyLink(e, rawUrl)}
            aria-label="Copy link to share on Threads"
        >
            <span className="icon-threads"></span>
        </button>

        <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodedBlogUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on Facebook"
        >
            <span className="icon-facebook"></span>
        </a>

        <a
            href={`https://twitter.com/intent/tweet?url=${encodedBlogUrl}&text=${encodedBlogTitle}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on Twitter"
        >
            <span className="icon-twitter"></span>
        </a>

        <a
            href={`https://api.whatsapp.com/send?text=${encodedBlogTitle}%20${encodedBlogUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on WhatsApp"
        >
            <span className="icon-youtube"></span>
        </a>
    </div>
);

const Blog = () => {
    const router = useRouter();

    const navigateTo = (href: string) => () => {
        router.push(href);
    };

    return (
        <section className="section blog-section">
            <div className="container">
                <div className="hm-blog-title text-center">
                    <h2 className="font-semibold">Our Blog</h2>

                    <p className="font-normal text-18 w-[780px] website-subtitle-mt m-[auto]">
                        A collection of thoughts, learnings, and perspectives from our work in design, technology, and building impactful digital experiences.
                    </p>
                </div>

                <div className="hm-blog-wrapper flex align-start gap-[30px] mt-[60px]">
                    <article
                        title="rare-pixels-turns-2"
                        onClick={navigateTo("/Blog/rarepixels-turns-2-the-big-game-is-still-loading")}
                        className="hm-blog-left w-[785px] blog-card-desktop cursor-pointer"
                    >
                        <Link
                            href="/Blog/rarepixels-turns-2-the-big-game-is-still-loading"
                            className="block hm-blog-image-l w-[100%] h-[442px] rounded-[20px] bg-[black] overflow-hidden"
                        >
                            <Image
                                className="w-[100%] h-[100%] object-cover"
                                src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/articles-image-set/2nd-Anniversary-web.webp"
                                alt="blog-detail-image"
                                draggable={false}
                                width={1000}
                                height={562}
                            />
                        </Link>

                        <h3 className="font-semibold mt-[30px] mb-[20px]">
                            <Link href="/Blog/rarepixels-turns-2-the-big-game-is-still-loading">
                                RarePixels Turns 2. The Big Game Is Still Loading.
                            </Link>
                        </h3>

                        <div className="hm-blog-author-wrapper flex items-center justify-between">
                            <div className="hm-blog-author-name">
                                <p className="font-normal flex items-center gap-[6px] text-18 text-[#8C8B8C]">
                                    <span>By Bina Yogesh</span>
                                    |
                                    <span>June 25, 2026</span>
                                    |
                                    <span>7 mins read</span>
                                </p>
                            </div>

                            <ShareButtons
                                encodedBlogUrl={encodedUrl}
                                encodedBlogTitle={encodedTitle}
                                rawUrl={shareBlog.url}
                            />
                        </div>

                        <p className="blog-redirect text-18 font-normal mt-[30px]">
                            Two years of ideas turning into brands. Two years of challenges turning into opportunities. Two years of helping businesses become easier to notice, trust, and remember.
                            <Link
                                href="/Blog/rarepixels-turns-2-the-big-game-is-still-loading"
                                className="text-[#ed0180] ml-1"
                            >
                                Read More <span className="sr-only">about our two-year milestone article</span>
                            </Link>
                        </p>
                    </article>

                    <div className="hm-blog-right w-[785px]">
                        <article
                            title="why-businesses-need-ux-masters-not-just-creative-designers"
                            onClick={navigateTo("/Blog/why-businesses-need-ux-masters-not-just-creative-designers")}
                            className="hm-small-blog-card w-[100%] h-[434px] flex items-start justify-between blog-card-desktop cursor-pointer"
                        >
                            <Link
                                href="/Blog/why-businesses-need-ux-masters-not-just-creative-designers"
                                className="block hm-small-blog-image w-[350px] h-[100%] rounded-[20px] bg-[black] overflow-hidden shrink-0"
                            >
                                <Image
                                    className="w-[100%] h-[100%] object-cover"
                                    src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/articles-image-set/Why-Serious-Businesses-Invest-in-UX-Masters.webp"
                                    alt="blog-detail-image"
                                    draggable={false}
                                    width={1000}
                                    height={562}
                                />
                            </Link>

                            <div className="hm-blog-text w-[405px]">
                                <h3 className="font-semibold">
                                    <Link href="/Blog/why-businesses-need-ux-masters-not-just-creative-designers">
                                        Why Serious Businesses Invest in UX Masters, Not Just Creative Designers
                                    </Link>
                                </h3>

                                <div className="hm-blog-author-wrapper hm-blog-author-wrapper-2 flex flex-col gap-[14] mt-[20px]">
                                    <div className="hm-blog-author-name">
                                        <p className="font-normal flex flex-wrap items-center gap-[6px] text-18 text-[#8C8B8C]">
                                            <span>By Bina Yogesh</span>
                                            |
                                            <span>June 25, 2026</span>
                                            |
                                            <span>7 mins read</span>
                                        </p>
                                    </div>

                                    <ShareButtons
                                        encodedBlogUrl={encodedUrl2}
                                        encodedBlogTitle={encodedTitle2}
                                        rawUrl={shareBlog2.url}
                                    />
                                </div>

                                <p className="text-18 font-normal mt-[30px] blog-redirect">
                                    A visually attractive interface may convince users to explore your platform once. But whether they stay, engage, and return depends entirely on experience.
                                    <Link
                                        href="/Blog/why-businesses-need-ux-masters-not-just-creative-designers"
                                        className="text-[#ed0180] ml-1"
                                    >
                                        Read More <span className="sr-only">about our two-year milestone article</span>
                                    </Link>
                                </p>
                            </div>
                        </article>

                        <div className="hm-blog-tablet-swiper hidden">
                            <Swiper
                                modules={[Autoplay]}
                                slidesPerView={2}
                                spaceBetween={20}
                                speed={1000}
                                autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: false }}
                                breakpoints={{
                                    0: { slidesPerView: 1.1 },
                                    576: { slidesPerView: 1.4 },
                                    992: { slidesPerView: 1.8 },
                                }}
                            >
                                <SwiperSlide>
                                    <div
                                        title="rarepixels-turns-2"
                                        onClick={navigateTo("/Blog/rarepixels-turns-2-the-big-game-is-still-loading")}
                                        className="blog-swiper-slide cursor-pointer"
                                    >
                                        <Link href="/Blog/rarepixels-turns-2-the-big-game-is-still-loading" className="block hm-small-blog-image w-[350px] h-[100%] rounded-[20px] bg-[black] overflow-hidden" >
                                            <Image
                                                className="w-[100%] h-[100%] object-cover"
                                                src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/articles-image-set/2nd-Anniversary-web.webp"
                                                alt="blog-detail-image"
                                                draggable={false}
                                                width={1000}
                                                height={562}
                                            />
                                        </Link>

                                        <div className="hm-blog-text w-[405px]">
                                            <h3 className="font-semibold">
                                                <Link href="/Blog/rarepixels-turns-2-the-big-game-is-still-loading">
                                                    RarePixels Turns 2. The Big Game Is Still Loading.
                                                </Link>
                                            </h3>

                                            <div className="hm-blog-author-wrapper hm-blog-author-wrapper-2 flex flex-col gap-[14] mt-[20px]">
                                                <div className="hm-blog-author-name">
                                                    <p className="font-normal flex flex-wrap items-center gap-[6px] text-18 text-[#8C8B8C]">
                                                        <span>By Bina Yogesh</span>
                                                        |
                                                        <span>June 25, 2026</span>
                                                        |
                                                        <span>7 mins read</span>
                                                    </p>
                                                </div>

                                                <ShareButtons encodedBlogUrl={encodedUrl} encodedBlogTitle={encodedTitle} rawUrl={shareBlog.url} />
                                            </div>

                                            <p className="text-18 font-normal mt-[30px] blog-redirect">
                                                Two years of ideas turning into brands. Two years of challenges turning into opportunities. Two years of helping businesses become easier to notice, trust, and remember.
                                                <Link href="/Blog/rarepixels-turns-2-the-big-game-is-still-loading" className="text-[#ed0180] ml-1" >
                                                    Read More <span className="sr-only">about our two-year milestone article</span>
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div
                                        title="why-businesses-need-ux-masters-not-just-creative-designers"
                                        onClick={navigateTo("/Blog/why-businesses-need-ux-masters-not-just-creative-designers")}
                                        className="blog-swiper-slide cursor-pointer"
                                    >
                                        <Link href="/Blog/why-businesses-need-ux-masters-not-just-creative-designers" className="block hm-small-blog-image w-[350px] h-[100%] rounded-[20px] bg-[black] overflow-hidden" >
                                            <Image
                                                className="w-[100%] h-[100%] object-cover"
                                                src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/articles-image-set/Why-Serious-Businesses-Invest-in-UX-Masters.webp"
                                                alt="blog-detail-image"
                                                draggable={false}
                                                width={1000}
                                                height={562}
                                            />
                                        </Link>

                                        <div className="hm-blog-text w-[405px]">
                                            <h3 className="font-semibold">
                                                <Link href="/Blog/why-businesses-need-ux-masters-not-just-creative-designers">
                                                    Why Serious Businesses Invest in UX Masters, Not Just Creative Designers
                                                </Link>
                                            </h3>

                                            <div className="hm-blog-author-wrapper hm-blog-author-wrapper-2 flex flex-col gap-[14] mt-[20px]">
                                                <div className="hm-blog-author-name">
                                                    <p className="font-normal flex flex-wrap items-center gap-[6px] text-18 text-[#8C8B8C]">
                                                        <span>By Bina Yogesh</span>
                                                        |
                                                        <span>June 25, 2026</span>
                                                        |
                                                        <span>7 mins read</span>
                                                    </p>
                                                </div>
                                                <ShareButtons encodedBlogUrl={encodedUrl2} encodedBlogTitle={encodedTitle2} rawUrl={shareBlog2.url} />
                                            </div>

                                            <p className="text-18 font-normal mt-[30px] blog-redirect">
                                                A visually attractive interface may convince users to explore your platform once. But whether they stay, engage, and return depends entirely on experience.
                                                <Link href="/Blog/why-businesses-need-ux-masters-not-just-creative-designers" className="text-[#ed0180] ml-1" >
                                                    Read More <span className="sr-only">about user experience vs visually attractive interfaces</span>
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>

                        <div className="hm-blog-hr"></div>

                        <div className="hm-blog-cta w-[100%] h-[222px] bg-[#040E36] rounded-[20px] mt-[30px] p-[30px] flex items-end justify-between">
                            <div className="hm-blog-cta-left w-[432px]">
                                <h3 className="font-semibold text-[white]">Ideas to Insights</h3>

                                <p className="text-18 font-normal text-[#C6C6C6] mt-[20px]">
                                    Thoughtful perspectives on design, development, branding, and digital strategy. Practical ideas shaped by real projects, real challenges, and real business outcomes.
                                </p>
                            </div>

                            {/* <Link href="/Insight" title="View All Categories" className="text-20 px-[20px] py-[10px] bg-[#ED0180] text-white rounded-[30px] website-link dark-backg" >
                                View All Categories{" "}
                                <span className="mm-cta inline-block ml-[12px] icon-hero-cta-arrow text-[16px]"></span>
                            </Link> */}

                            <Link href="/Insight" title="View All Categories" className="cyber-cta-btn group relative inline-flex h-[40px] items-center text-white transition-colors duration-200" >
                                <span className="relative z-10 flex items-center pl-[20px] pr-[35px] text-14 tracking-[1px] website-link-text">
                                    View All Categories{" "}
                                </span>

                                <span className="cyber-pink-pixels" aria-hidden="true">
                                    <span className="cyber-pink-box cyber-pink-lg" />
                                    <span className="cyber-pink-box cyber-pink-sm" />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;