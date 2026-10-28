'use client'

import Image from 'next/image'
import './blogdetail.css'

const blogUrl = "https://rarepixelsdesign.in/blog/rarepixels-1st-anniversary-celebration";
const blogTitle = "RarePixels Turns One - A Year of Pixels, People & Pure Magic";

const RarePixelsTurns2TheBigGameIsStillLoading = () => {
    return (
        <section>
            <div className="blog-detail-hero w-[100%] h-[529px] mt-[68px] bg-[#040E36] flex items-center justify-center flex-col">
                <div className="blog-container-sm">
                    <div className="blog-detail-hero-text py-[80px] ">
                        <h1 className="text-[white]">RarePixels Turns 2. The Big Game Is Still Loading.</h1>

                        <div className="blod-detail-type blog-detail-type-desktop flex items-center justify-between mt-[40px]">
                            <div className="blog-detail-author-wrapper flex items-center gap-[22px]">
                                <div className="blog-detail-author-img w-[90px] h-[90px] bg-[#D9D9D9] rounded-full">
                                    <Image className='w-[100%] h-[100%] object-cover' src="/blog-detail/bina-patel-author.webp" alt="blog-detail-image" width={100} height={100}></Image>
                                </div>

                                <p className="text-18 text-[white] flex flex-col">
                                    <span className="font-normal" >Written by</span>
                                    <span className="font-semibold">Bina Yogesh</span>
                                </p>
                            </div>

                            <div className="blod-detailcategories-wrapper flex items-center gap-[90px]">
                                <div className="blog-post-date text-18 text-[white]">
                                    <p className="font-normal">Date</p>
                                    <p className="font-semibold">25th Jun 2026</p>
                                </div>

                                <div className="blog-post-cate text-18 text-[white]">
                                    <p className="font-normal">Category</p>
                                    <p className="font-semibold">UX/UI Design</p>
                                </div>

                                <div className="blog-post-read text-18 text-[white]">
                                    <p className="font-normal">Reading Time</p>
                                    <p className="font-semibold">8 Min</p>
                                </div>
                            </div>
                        </div>

                        <div className="blod-detail-type blog-detail-type-tablet hidden flex items-center justify-between mt-[40px]">
                            <div className="blog-detail-author-wrapper flex items-center gap-[22px]">
                                <div className="blog-detail-author-img w-[90px] h-[90px] bg-[#D9D9D9] rounded-full">
                                    <Image className='w-[100%] h-[100%] object-cover' src="/blog-detail/bina-patel-author.webp" alt="blog-detail-image" width={100} height={100}></Image>
                                </div>

                                <p className="text-18 text-[white] flex flex-col">
                                    <span className="font-normal" >Written by</span>
                                    <span className="font-semibold">Bina Yogesh</span>
                                </p>
                            </div>

                            <div className="blog-post-date text-18 text-[white]">
                                <p className="font-normal">Date</p>
                                <p className="font-semibold">25th Jun 2026</p>
                            </div>

                            <div className="blog-post-cate text-18 text-[white]">
                                <p className="font-normal">Category</p>
                                <p className="font-semibold">UX/UI Design</p>
                            </div>

                            <div className="blog-post-read text-18 text-[white]">
                                <p className="font-normal">Reading Time</p>
                                <p className="font-semibold">8 Min</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section bg-[#FBF8F5] relative">
                <div className="blog-detail-content-wrapper blog-container-sm">
                    <div className="blog-detail-cover-image w-[100%] h-[562] bg-[black]">
                        <Image className='w-[100%] h-[100%] object-cover' src="/blog-detail/2nd-Anniversary-web.webp" alt="blog-detail-image" width={1000} height={562}></Image>
                    </div>

                    <div className="blog-detail-reading-layout">
                        <aside className="blog-social-icons-column">
                            <div className="blog-social-icons-wrapper">
                                <a
                                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                                        blogUrl
                                    )}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Share on LinkedIn"
                                    className="w-[40px] h-[40px] rounded-[6px] bg-[#040E36] font-[20px] text-white flex items-center justify-center"
                                >
                                    <span className="icon-linkedin"></span>
                                </a>

                                <button
                                    onClick={() => {
                                        navigator.clipboard.writeText(blogUrl)
                                        alert('Link copied!')
                                    }}
                                    className="w-[40px] h-[40px] rounded-[6px] bg-[#040E36] font-[20px] text-white flex items-center justify-center"

                                >
                                    <span className="icon-instagram"></span>
                                </button>

                                <button
                                    onClick={() => {
                                        navigator.clipboard.writeText(blogUrl)
                                        alert('Link copied!')
                                    }}
                                    className="w-[40px] h-[40px] rounded-[6px] bg-[#040E36] font-[20px] text-white flex items-center justify-center"
                                >
                                    <span className="icon-threads"></span>
                                </button>

                                <a
                                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                                        blogUrl
                                    )}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-[40px] h-[40px] rounded-[6px] bg-[#040E36] font-[20px] text-white flex items-center justify-center"
                                >
                                    <span className="icon-facebook"></span>
                                </a>

                                <a
                                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                                        blogUrl
                                    )}&text=${encodeURIComponent(blogTitle)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Share on X"
                                    className="w-[40px] h-[40px] rounded-[6px] bg-[#040E36] font-[20px] text-white flex items-center justify-center"
                                >
                                    <span className="icon-twitter"></span>
                                </a>

                            </div>
                        </aside>

                        <article className="blog-detail-content-text pt-[80px]">
                            <p className="font-normal text-20">On June 18 2026, RarePixels completed two incredible years.</p>

                            <p className="font-normal text-20 mt-[20px]">Two years of ideas turning into brands. Two years of challenges turning into opportunities. Two years of helping businesses become easier to notice, trust, and remember.</p>

                            <p className="font-normal text-20 mt-[20px]">What started as a vision has now grown into a thriving creative and digital powerhouse built on strategy, design, technology, and the people who make it all happen.</p>

                            <p className="font-normal text-20 mt-[20px]">To celebrate this milestone, the entire RarePixels family came together for an evening filled with laughter, conversations, memories, and of course, a dinner that was nothing short of a lip-smacking treat. It was more than a celebration. It was a moment to pause, reflect, and appreciate how far we have come together.</p>

                            <p className="font-normal text-20 mt-[20px]">But more importantly, it was an opportunity to thank every person who has been a part of this journey.</p>

                            <p className="font-normal text-20 mt-[20px]">Our clients.<br />Our team.<br />Our partners.<br />And everyone who believed in RarePixels from day one.</p>

                            <h2 className="h3 mb-[20px] mt-[40px] font-semibold">A Journey Built on Consistency</h2>

                            <p className="font-normal text-20">Every successful brand has a story behind it.</p>

                            <p className="font-normal text-20 mt-[20px]">Ours isn&apos;t just about projects completed or milestones achieved. It&apos;s about showing up every single day with the same passion we started with.</p>

                            <p className="font-normal text-20 mt-[20px]">The last two years have taught us that growth doesn&apos;t happen overnight.</p>

                            <p className="font-semibold text-20 mt-[20px]">It happens through consistency.</p>

                            <p className="font-normal text-20 mt-[20px]">Through late-night brainstorming sessions.<br />Through solving problems that don&apos;t have obvious answers.<br />Through refining ideas until they become experiences people love.<br />Through believing that good enough is never enough.</p>

                            <p className="font-normal text-20 mt-[20px]">At RarePixels, we have always believed that creativity is more than aesthetics. It is about creating meaningful outcomes for businesses.</p>

                            <p className="font-normal text-20 mt-[20px]">That belief has guided every project, every conversation, and every decision we have made.</p>

                            <p className="font-normal text-20 mt-[20px]">And while the industry continues to evolve, one thing has remained unchanged.</p>

                            <p className="font-semibold text-20 mt-[20px]">Our commitment to delivering work that matters.</p>

                            <h2 className="h3 mb-[20px] mt-[40px] font-semibold">The People Behind the Pixels</h2>

                            <p className="font-normal text-20">A company is only as strong as the people behind it.</p>

                            <p className="font-normal text-20 mt-[20px]">Over the last two years, RarePixels has been fortunate to build a team that brings together experience, fresh perspectives, creativity, and technical expertise.</p>

                            <p className="font-normal text-20 mt-[20px]">One of our greatest strengths is the balance we have created.</p>

                            <p className="font-normal text-20 mt-[20px]">On one side, we have seasoned professionals who bring years of industry knowledge and strategic thinking.</p>

                            <p className="font-normal text-20 mt-[20px]">On the other, we have passionate young minds who bring fresh ideas, energy, and an eagerness to challenge conventional thinking.</p>

                            <p className="font-normal text-20 mt-[20px]">Together, they create something special.</p>

                            <p className="font-normal text-20 mt-[20px]">A culture where experience meets curiosity.<br />Where mentorship meets innovation.<br />Where learning never stops.</p>

                            <p className="font-normal text-20 mt-[20px]">This balance allows us to approach every project with both confidence and creativity, ensuring that our clients receive solutions that are not only innovative but also practical and scalable.</p>

                            <h2 className="h3 mb-[20px] mt-[40px] font-semibold">The Vision That Started It All</h2>

                            <p className="font-normal text-20">Every journey begins with a simple idea.</p>

                            <p className="font-normal text-20 mt-[20px]">For RarePixels, that idea came from a belief that businesses deserved better experiences.</p>

                            <p className="font-normal text-20 mt-[20px]">Reflecting on the journey, Founder Bina shared:</p>

                            <p className="font-normal text-20 mt-[20px]"><em>“I started RarePixels because I knew design could do so much more than what most people were settling for. I had a vision for a place where strategy, creativity, and experience all speak the same language. Building a team that gets that, that pushes every brief further without being asked — that&apos;s been the most rewarding part of this journey. Two years of RarePixels has only made the vision bigger.”</em></p>

                            <p className="font-normal text-20 mt-[20px]">That vision continues to shape everything we do today.</p>

                            <p className="font-normal text-20 mt-[20px]">RarePixels was never created to simply design websites or create visual identities.</p>

                            <p className="font-normal text-20 mt-[20px]">It was created to bridge the gap between creativity and business impact.</p>

                            <p className="font-normal text-20 mt-[20px]">To create work that feels thoughtful.<br />Work that performs.<br />Work that people remember.<br />And most importantly, work that helps businesses move forward.</p>

                            <h2 className="h3 mb-[20px] mt-[40px] font-semibold">Every Great Idea Needs a Strong Foundation</h2>

                            <p className="font-normal text-20">While creativity often gets the spotlight, every successful project depends on something deeper.</p>

                            <p className="font-normal text-20 mt-[20px]">Structure.<br />Systems.<br />Execution.<br />The ability to turn ideas into reality.</p>

                            <p className="font-normal text-20 mt-[20px]">Co-Founder Yogesh reflected on this perspective beautifully:</p>

                            <p className="font-semibold text-20 mt-[20px]"><em>“I think about growth the way a builder thinks about a foundation. You don&apos;t see it, but everything stands on it. RarePixels has always been to make sure what we dream up actually gets built, shipped, and scaled. There were days that tested everything we had. But watching an idea go from a conversation to a live product to something people actually use. Two years ago we only had a belief. Today that belief has a body of work behind it. And that changes everything.”</em></p>

                            <p className="font-normal text-20 mt-[20px]">Those words capture an important truth.</p>

                            <p className="font-normal text-20 mt-[20px]">Ideas matter.</p>

                            <p className="font-semibold text-20 mt-[20px]">But execution matters more.</p>

                            <p className="font-normal text-20 mt-[20px]">Over the last two years, RarePixels has transformed countless conversations into real brands, real products, and real business outcomes.</p>

                            <p className="font-normal text-20 mt-[20px]">Every logo created.<br />Every user experience designed.<br />Every website launched.<br />Every campaign executed.</p>

                            <p className="font-normal text-20 mt-[20px]">They all represent a promise fulfilled.</p>

                            <p className="font-semibold text-20 mt-[20px]">A promise to take an idea and give it life.</p>

                            <h2 className="h3 mb-[20px] mt-[40px] font-semibold">Celebrating More Than a Milestone</h2>

                            <p className="font-normal text-20">Anniversaries often become a time to look back.</p>

                            <p className="font-normal text-20 mt-[20px]">And while we&apos;re proud of what we&apos;ve accomplished, this celebration wasn&apos;t only about reflecting on the past.</p>

                            <p className="font-semibold text-20 mt-[20px]">It was about celebrating the people who made it possible.</p>

                            <p className="font-normal text-20 mt-[20px]">The team members who constantly raise the bar.<br />The clients who trusted us with their brands.<br />The partners who supported us along the way.<br />The friendships formed through countless projects and shared experiences.</p>

                            <p className="font-normal text-20 mt-[20px]">The dinner celebration was filled with stories from the early days.</p>

                            <p className="font-normal text-20 mt-[20px]">Stories about first projects.<br />First wins.<br />Unexpected challenges.<br />And the moments that reminded us why we started in the first place.</p>

                            <p className="font-normal text-20 mt-[20px]">Because behind every milestone is a collection of moments that rarely make it into case studies or portfolios.</p>

                            <p className="font-normal text-20 mt-[20px]">Moments of learning.<br />Moments of growth.<br />Moments that define culture.</p>

                            <p className="font-semibold text-20 mt-[20px]">Those moments are what make RarePixels special.</p>

                            <h2 className="h3 mb-[20px] mt-[40px] font-semibold">To Our Clients, Thank You</h2>

                            <p className="font-normal text-20">No journey is possible without trust.</p>

                            <p className="font-normal text-20 mt-[20px]">Over the last two years, we have had the privilege of working with incredible businesses across industries.</p>

                            <p className="font-normal text-20 mt-[20px]">Some joined us in the early days.<br />Some became part of our story recently.</p>

                            <p className="font-normal text-20 mt-[20px]">But every client contributed to our growth in some way.</p>

                            <p className="font-normal text-20 mt-[20px]">Your trust challenged us to think bigger.<br />Your feedback helped us improve.<br />Your ambition inspired us to create better work.</p>

                            <p className="font-normal text-20 mt-[20px]">Thank you for choosing RarePixels.<br />Thank you for believing in our vision.<br />And thank you for allowing us to be a part of your growth journey.</p>

                            <p className="font-semibold text-20 mt-[20px]">We never take that responsibility lightly.</p>

                            <h2 className="h3 mb-[20px] mt-[40px] font-semibold">Looking Ahead</h2>

                            <p className="font-normal text-20">Two years is a meaningful milestone.</p>

                            <p className="font-normal text-20 mt-[20px]">But for us, it feels less like a finish line and more like a starting point.</p>

                            <p className="font-normal text-20 mt-[20px]">The vision is bigger.<br />The goals are higher.<br />The possibilities are endless.</p>

                            <p className="font-normal text-20 mt-[20px]">We have learned a lot over the last two years, but our curiosity remains unchanged.</p>

                            <p className="font-normal text-20 mt-[20px]">We are still excited by new ideas.<br />Still obsessed with better experiences.<br />Still committed to pushing our work further.<br />Still driven by the belief that creativity, when combined with strategy and execution, can create extraordinary outcomes.</p>

                            <h2 className="h3 mb-[20px] mt-[40px] font-semibold">The Next Chapter Starts Now</h2>

                            <p className="font-normal text-20">As we celebrate this milestone, we do so with gratitude.</p>

                            <p className="font-normal text-20 mt-[20px]">Gratitude for our team.<br />Gratitude for our clients.<br />Gratitude for every challenge that helped us grow.<br />And gratitude for everyone who has supported RarePixels from day one until today.</p>

                            <p className="font-normal text-20 mt-[20px]">The journey so far has been incredible.</p>

                            <p className="font-semibold text-20 mt-[20px]">But we believe the best chapters are still unwritten.</p>

                            <p className="font-normal text-20 mt-[20px]">As we often say internally:</p>

                            <ul className="list-disc mt-[20px] pl-[40px]">
                                <li className="text-20 font-normal">New Milestones Loading…</li>
                                <li className="text-20 font-normal">Bigger Ideas Loading…</li>
                                <li className="text-20 font-normal">Creativity Loading…</li>
                                <li className="text-20 font-normal">Our Best Work Loading...</li>
                            </ul>

                            <p className="font-normal text-20 mt-[20px]">RarePixels may have turned two, but this is only the beginning.</p>

                            <p className="font-semibold text-20 mt-[20px]">The big game is still loading.</p>

                            <p className="font-normal text-20 mt-[20px]">And as we step into the next chapter, we hope you&apos;ll continue to support us with the same enthusiasm, trust, and belief that brought us here.</p>

                            <p className="font-normal text-20 mt-[20px]">Here&apos;s to the next milestone.<br />Here&apos;s to the next big idea.<br />Here&apos;s to everything that&apos;s still loading.</p>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RarePixelsTurns2TheBigGameIsStillLoading