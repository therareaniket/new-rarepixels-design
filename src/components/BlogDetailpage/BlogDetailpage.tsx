'use client'

import Image from 'next/image'
import './blogdetail.css'

const BlogDetailpage = () => {
    return (
        <section>
            <div className="blog-detail-hero w-[100%] h-[529px] mt-[68px] bg-[#040E36] flex items-center justify-center flex-col">
                <div className="blog-container-sm">
                    <div className="blog-detail-hero-text py-[80px] ">
                        <h1 className="text-[white]">From Unknown to Unforgettable: How Branding Makes Businesses Recognisable</h1>

                        <div className="blod-detail-type blog-detail-type-desktop flex items-center justify-between mt-[40px]">
                            <div className="blog-detail-author-wrapper flex items-center gap-[22px]">
                                <div className="blog-detail-author-img w-[90px] h-[90px] bg-[#D9D9D9] rounded-full">
                                    <Image className='w-[100%] h-[100%] object-cover' src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/articles-image-set/bina-patel-author.webp" alt="blog-detail-image" width={100} height={100}></Image>
                                </div>

                                <p className="text-18 text-[white] flex flex-col">
                                    <span className="font-normal" >Written by</span>
                                    <span className="font-semibold">Bina Yogesh</span>
                                </p>
                            </div>

                            <div className="blod-detailcategories-wrapper flex items-center gap-[90px]">
                                <div className="blog-post-date text-18 text-[white]">
                                    <p className="font-normal">Date</p>
                                    <p className="font-semibold">23rd Oct 2026</p>
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
                                    <Image className='w-[100%] h-[100%] object-cover' src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/articles-image-set/bina-patel-author.webp" alt="blog-detail-image" width={100} height={100}></Image>

                                </div>

                                <p className="text-18 text-[white] flex flex-col">
                                    <span className="font-normal" >Written by</span>
                                    <span className="font-semibold">Bina Yogesh</span>
                                </p>
                            </div>

                            <div className="blog-post-date text-18 text-[white]">
                                <p className="font-normal">Date</p>
                                <p className="font-semibold">23rd Oct 2026</p>
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
                        <Image className='w-[100%] h-[100%] object-cover' src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/articles-image-set/blog-detail-cover.png" alt="blog-detail-image" width={1000} height={562}></Image>
                    </div>

                    <div className="blog-detail-reading-layout">
                        <aside className="blog-social-icons-column">
                            <div className="blog-social-icons-wrapper">
                                <div className='w-[40px] h-[40px] rounded-[6px] bg-[#040E36] font-[20px] text-[white] flex items-center justify-center'>
                                    <span className='icon-linkedin'></span>
                                </div>
                                <div className='w-[40px] h-[40px] rounded-[6px] bg-[#040E36] font-[20px] text-[white] flex items-center justify-center'>
                                    <span className='icon-instagram'></span>
                                </div>
                                <div className='w-[40px] h-[40px] rounded-[6px] bg-[#040E36] font-[20px] text-[white] flex items-center justify-center'>
                                    <span className='icon-threads'></span>
                                </div>
                                <div className='w-[40px] h-[40px] rounded-[6px] bg-[#040E36] font-[20px] text-[white] flex items-center justify-center'>
                                    <span className='icon-facebook'></span>
                                </div>
                                <div className='w-[40px] h-[40px] rounded-[6px] bg-[#040E36] font-[20px] text-[white] flex items-center justify-center'>
                                    <span className='icon-twitter'></span>
                                </div>
                            </div>
                        </aside>

                        <article className="blog-detail-content-text pt-[80px]">
                            <p className="font-normal text-20" style={{ marginTop: '0' }}>Every business starts somewhere.</p>
                            <p className="font-normal text-20 mt-[20px]">A new name. A new idea. A website. A product. Perhaps a logo that represents the beginning of something ambitious.</p>
                            <p className="font-normal text-20 mt-[20px]">But being in the market does not automatically make a business memorable.</p>
                            <p className="font-normal text-20 mt-[20px]">Customers see hundreds of brands every day. They scroll past businesses on social media, compare products on websites, receive recommendations from friends, and make decisions in seconds. In such a crowded environment, simply being visible is not enough.</p>
                            <p className="font-normal text-20 mt-[20px]">A business needs to be recognisable, relevant, and remembered.</p>
                            <p className="font-normal text-20 mt-[20px]">That is where branding becomes much more than a logo or a colour palette.</p>
                            <p className="font-normal text-20 mt-[20px]">At RarePixels, we look at branding as the process of giving a business a clear identity, a distinct voice, and a visual presence that people can recognise and connect with.</p>
                            <p className="font-normal text-20 mt-[20px]">Because the journey from being unknown to becoming unforgettable rarely happens by accident.</p>

                            <h2 className="h3 mb-[20px] mt-[40px] font-semibold">Recognition Starts With a Clear Identity</h2>

                            <p className="font-normal text-20">Think about the brands you can recognise without seeing their name.</p>
                            <p className="font-normal text-20 mt-[20px]">You may know them from a particular colour, visual style, tone of voice, packaging, typography, or even the way their website communicates.</p>
                            <p className="font-normal text-20 mt-[20px]">That recognition comes from consistency.</p>
                            <p className="font-normal text-20 mt-[20px]">A strong brand identity gives people something familiar to hold on to. It creates a clear answer to an important question:</p>

                            <p className="font-semibold text-20 mt-[20px]">Who are we?</p>

                            <p className="font-normal text-20 mt-[20px]">Before designing a logo or selecting colours, a business needs to understand its own identity.</p>

                            <p className="font-normal text-20">What does it stand for?</p>
                            <p className="font-normal text-20">Who is it trying to reach?</p>
                            <p className="font-normal text-20">What problem does it solve?</p>
                            <p className="font-normal text-20">What makes it different?</p>
                            <p className="font-normal text-20">What should people feel when they interact with it?</p>

                            <p className="font-normal text-20 mt-[20px]">When these questions have clear answers, design becomes more meaningful. Instead of decorating a business, branding starts communicating its personality and purpose.</p>

                            <h3 className="mb-[20px] mt-[40px] font-semibold">Your Logo Is Only One Piece of the Picture</h3>

                            <p className="font-normal text-20 mt-[20px]">One of the biggest misconceptions about branding is that it begins and ends with a logo.</p>

                            <p className="font-normal text-20 mt-[20px]">A logo is important, but it is only one part of the brand identity.</p>

                            <p className="font-normal text-20 mt-[20px]">Imagine a business with a beautiful logo but an outdated website, inconsistent social media graphics, confusing messaging, and a completely different tone across every platform.</p>

                            <p className="font-normal text-20 mt-[20px]">Would customers experience that as a strong brand?</p>

                            <p className="font-normal text-20 mt-[20px]">Probably not.</p>

                            <p className="font-normal text-20 mt-[20px]">A recognisable brand is built through a connected system of elements.</p>

                            <p className="font-normal text-20 mt-[20px]">This can include:</p>

                            <ul className="list-disc mt-[20px] pl-[40px]">
                                <li className="text-20 font-normal">Logo and visual identity</li>
                                <li className="text-20 font-normal">Colour palette</li>
                                <li className="text-20 font-normal">Typography</li>
                                <li className="text-20 font-normal">Photography and imagery</li>
                                <li className="text-20 font-normal">Graphic language</li>
                                <li className="text-20 font-normal">Brand voice</li>
                                <li className="text-20 font-normal">Messaging</li>
                                <li className="text-20 font-normal">Website experience</li>
                                <li className="text-20 font-normal">Packaging</li>
                                <li className="text-20 font-normal">Social media presence</li>
                                <li className="text-20 font-normal">Marketing communication</li>
                            </ul>

                            <p className="font-normal text-20 mt-[20px]">Each element should feel like it belongs to the same story.</p>

                            <p className="font-normal text-20 mt-[20px]">That consistency is what gradually turns individual interactions into brand recognition.</p>

                            <h3 className="mb-[20px] mt-[40px] font-semibold">Branding Helps People Understand Your Business</h3>

                            <p className="font-normal text-20 mt-[20px]">A strong brand does not only make a business look better. It makes the business easier to understand.</p>

                            <p className="font-normal text-20 mt-[20px]">Consider a potential customer visiting a website for the first time.</p>

                            <p className="font-normal text-20 mt-[20px]">Within a few seconds, they should be able to understand:</p>

                            <p className="font-normal text-20">What does this business do?</p>
                            <p className="font-normal text-20">Who is it for?</p>
                            <p className="font-normal text-20">Why should I care?</p>
                            <p className="font-normal text-20">Why should I choose it?</p>

                            <p className="font-normal text-20 mt-[20px]">When branding and messaging work together, these answers become clearer.</p>

                            <p className="font-normal text-20 mt-[20px]">This is particularly important for businesses offering complex services or new products. If the customer needs to work too hard to understand the value, there is a good chance they will move on.</p>

                            <p className="font-normal text-20 mt-[20px]">Good branding creates clarity before it tries to create admiration.</p>

                            <h3 className="mb-[20px] mt-[40px] font-semibold">Consistency Builds Trust</h3>

                            <p className="font-normal text-20 mt-[20px]">People tend to trust what feels familiar.</p>

                            <p className="font-normal text-20 mt-[20px]">When a business presents itself consistently across its website, social media, presentations, packaging, advertisements, and other customer touchpoints, it creates a sense of reliability.</p>

                            <p className="font-normal text-20 mt-[20px]">That does not mean every piece of communication needs to look identical.</p>

                            <p className="font-normal text-20 mt-[20px]">It means the underlying identity should remain recognisable.</p>

                            <p className="font-normal text-20 mt-[20px]">The same personality should come through.</p>

                            <p className="font-normal text-20 mt-[20px]">The same visual language should be present.</p>

                            <p className="font-normal text-20 mt-[20px]">The same values should be reflected.</p>

                            <p className="font-normal text-20 mt-[20px]">Over time, these repeated experiences create familiarity. Familiarity can become recognition, and recognition can contribute to trust.</p>

                            <p className="font-normal text-20 mt-[20px]">This is why branding should not be treated as a one-time design exercise.</p>

                            <p className="font-normal text-20 mt-[20px]">It should become part of how a business communicates every day.</p>

                            <h3 className="mb-[20px] mt-[40px] font-semibold">A Strong Brand Can Change Perception</h3>

                            <p className="font-normal text-20 mt-[20px]">Two businesses can offer similar products or services and still be perceived very differently.</p>

                            <p className="font-normal text-20 mt-[20px]">One might appear generic and interchangeable.</p>

                            <p className="font-normal text-20 mt-[20px]">The other might feel established, confident, thoughtful, and worth considering.</p>

                            <p className="font-normal text-20 mt-[20px]">The difference is often not simply the product.</p>

                            <p className="font-normal text-20 mt-[20px]">It is the perception surrounding the product.</p>

                            <p className="font-normal text-20 mt-[20px]">Branding influences how a business enters the customer’s mind.</p>

                            <p className="font-normal text-20 mt-[20px]">A carefully considered identity can help a growing company appear more credible. It can help a premium business communicate its value. It can help a startup establish its personality. It can help an established company evolve with a changing audience.</p>

                            <p className="font-normal text-20 mt-[20px]">This is why branding can influence business conversations long before a customer speaks to the sales team.</p>

                            <h3 className="mb-[20px] mt-[40px] font-semibold">Your Digital Presence Is Part of Your Brand</h3>

                            <p className="font-normal text-20 mt-[20px]">Today, a brand rarely exists in one place.</p>

                            <p className="font-normal text-20 mt-[20px]">A customer might discover a business through Instagram, visit its website, read a LinkedIn post, watch a video, download a brochure, and eventually speak with the sales team.</p>

                            <p className="font-normal text-20 mt-[20px]">Every one of those interactions contributes to the brand experience.</p>

                            <p className="font-normal text-20 mt-[20px]">That makes digital consistency increasingly important.</p>

                            <p className="font-normal text-20 mt-[20px]">A website should not feel disconnected from the brand’s social presence.</p>

                            <p className="font-normal text-20 mt-[20px]">A presentation should not look like it belongs to a different company.</p>

                            <p className="font-normal text-20 mt-[20px]">An advertisement should not suddenly use a completely different tone.</p>

                            <p className="font-normal text-20 mt-[20px]">When every touchpoint works together, the customer gets a stronger sense of who the business is.</p>

                            <p className="font-normal text-20 mt-[20px]">And that makes recognition easier.</p>

                            <h3 className="mb-[20px] mt-[40px] font-semibold">Branding Is Also About the Experience</h3>

                            <p className="font-normal text-20 mt-[20px]">A memorable brand is not created only through visual design.</p>

                            <p className="font-normal text-20 mt-[20px]">It is created through experiences.</p>

                            <p className="font-normal text-20">How quickly does the website respond?</p>
                            <p className="font-normal text-20">How easy is it to find information?</p>
                            <p className="font-normal text-20">How does the company communicate after an enquiry?</p>
                            <p className="font-normal text-20">How does the product arrive?</p>
                            <p className="font-normal text-20">How does the customer feel when they need support?</p>

                            <p className="font-normal text-20 mt-[20px]">Every interaction either strengthens or weakens the perception of the brand.</p>

                            <p className="font-normal text-20 mt-[20px]">This is why branding and digital experience are closely connected.</p>

                            <p className="font-normal text-20 mt-[20px]">A beautiful identity may attract attention, but a thoughtful experience gives people a reason to remember it.</p>

                            <p className="font-normal text-20 mt-[20px]">At RarePixels, this is where strategy, branding, UI/UX, and digital experiences naturally come together. The objective is not simply to create something visually appealing. It is to create an experience that makes sense for the business and the people it wants to reach.</p>

                            <h3 className="mb-[20px] mt-[40px] font-semibold">Branding Is Also About the Experience</h3>

                            <p className="font-normal text-20 mt-[20px]">Branding is not only for new businesses.</p>

                            <p className="font-normal text-20 mt-[20px]">A company may need to rethink its brand when:</p>

                            <ul className="list-disc mt-[20px] pl-[40px]">
                                <li className="text-20 font-normal">The business has grown significantly</li>
                                <li className="text-20 font-normal">Its current identity feels outdated</li>
                                <li className="text-20 font-normal">It is entering a new market</li>
                                <li className="text-20 font-normal">Its audience has changed</li>
                                <li className="text-20 font-normal">ts services have expanded</li>
                                <li className="text-20 font-normal">Competitors are becoming harder to distinguish from</li>
                                <li className="text-20 font-normal">The website and communication feel inconsistent</li>
                                <li className="text-20 font-normal">Customers misunderstand what the company offers</li>
                                <li className="text-20 font-normal">The business no longer feels represented by its existing identity</li>
                            </ul>

                            <p className="font-normal text-20 mt-[20px]">Sometimes a complete rebrand is necessary.</p>

                            <p className="font-normal text-20 mt-[20px]">Sometimes the business needs a brand refresh.</p>

                            <p className="font-normal text-20 mt-[20px]">And sometimes the real problem is not the visual identity at all. It may be positioning, messaging, or the overall customer experience.</p>

                            <p className="font-normal text-20 mt-[20px]">That is why understanding the problem should come before changing the design.</p>

                            <h3 className="mb-[20px] mt-[40px] font-semibold">From Business Name to Brand Recognition</h3>

                            <p className="font-normal text-20 mt-[20px]">Becoming recognisable does not happen overnight.</p>

                            <p className="font-normal text-20 mt-[20px]">A business does not become memorable because it launches a new logo on Monday.</p>

                            <p className="font-normal text-20 mt-[20px]">Recognition is built through repeated, meaningful interactions.</p>

                            <p className="font-normal text-20 mt-[20px]">A clear identity.</p>

                            <p className="font-normal text-20 mt-[20px]">A distinct point of view.</p>

                            <p className="font-normal text-20 mt-[20px]">Consistent communication.</p>

                            <p className="font-normal text-20 mt-[20px]">A memorable experience.</p>

                            <p className="font-normal text-20 mt-[20px]">And a willingness to evolve without losing what makes the brand itself.</p>

                            <p className="font-normal text-20 mt-[20px]">The strongest brands do not simply ask people to remember their name.</p>

                            <p className="font-normal text-20 mt-[20px]">They give people something worth remembering.</p>

                            <h3 className="mb-[20px] mt-[40px] font-semibold">Building a Brand People Remember</h3>

                            <p className="font-normal text-20 mt-[20px]">There is a difference between being seen and being remembered.</p>

                            <p className="font-normal text-20 mt-[20px]">Being seen is about visibility.</p>

                            <p className="font-normal text-20 mt-[20px]">Being remembered is about meaning.</p>

                            <p className="font-normal text-20 mt-[20px]">A business can spend heavily on advertising and still struggle to build recognition if the brand itself lacks clarity and distinction. On the other hand, a well-defined brand can make every marketing effort more coherent because people begin to recognise who is speaking before they even read the name.</p>

                            <p className="font-normal text-20 mt-[20px]">That is the real value of strategic branding.</p>

                            <p className="font-normal text-20 mt-[20px]">It creates a foundation for everything that comes after it.</p>

                            <p className="font-normal text-20 mt-[20px]">At RarePixels, we believe great branding starts with understanding, not decoration. We look beyond the logo to understand the business, its audience, its ambitions, and the space it wants to occupy.</p>

                            <p className="font-normal text-20 mt-[20px]">Because the goal is not simply to make a business look different.</p>

                            <p className="font-normal text-20 mt-[20px]">It is to make it mean something different.</p>

                            <p className="font-normal text-20 mt-[20px]">And when that difference is clear, consistent, and thoughtfully expressed, an unknown business can slowly become a familiar one.</p>

                            <p className="font-normal text-20 mt-[20px]">A familiar business can become a trusted one.</p>

                            <p className="font-normal text-20 mt-[20px]">And a trusted business can become unforgettable.</p>

                            <p className="font-normal text-20 mt-[20px]">Your brand has a story. Make sure people remember it.</p>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogDetailpage