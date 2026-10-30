'use client'

import Image from 'next/image'
import './blogdetail.css'
import Link from 'next/link'
import RelatedBlogPopup from './RelatedBlofPopup/RelatedBlogPopup'

const WhySeriousBusinessesInvestinUxMastersNotJustCreativeDesigners = () => {
    return (
        <section id='blog-detail-section'>
            <div className="blog-detail-hero w-[100%] h-[529px] mt-[68px] bg-[#040E36] flex items-center justify-center flex-col">
                <div className="blog-container-sm">
                    <div className="blog-detail-hero-text py-[80px] ">
                        <h1 className="text-[white]">Why Serious Businesses Invest in UX Masters, Not Just Creative Designers</h1>

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
                                    <p className="font-semibold">29th May 2026</p>
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
                                <p className="font-semibold">29th May 2026</p>
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
                        <Image className='w-[100%] h-[100%] object-cover' src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/articles-image-set/Why-Serious-Businesses-Invest-in-UX-Masters.webp" alt="blog-detail-image" width={1000} height={562}></Image>
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
                            <p className="font-normal text-20">Every business wants to look good.</p>

                            <p className="font-normal text-20 mt-[20px]">A clean website.<br />Modern visuals.<br />Smooth animations.<br />A stylish interface.</p>

                            <p className="font-normal text-20 mt-[20px]">And honestly, there is nothing wrong with that. Creativity matters. Good visuals help brands stand out. They shape first impressions and influence perception.</p>

                            <p className="font-normal text-20 mt-[20px]">But somewhere along the way, many businesses start believing that creativity alone is enough to build strong digital experiences.</p>

                            <p className="font-normal text-20 mt-[20px]">That’s where the problem begins.</p>

                            <p className="font-normal text-20 mt-[20px]">Because while creativity may grab attention, it does not always create usability, trust, or long-term business growth.</p>

                            <p className="font-semibold text-20 mt-[20px]">And serious businesses understand that difference.</p>

                            <p className="font-normal text-20 mt-[20px]">That is why growing brands are no longer looking only for creative designers. They are investing in UX masters who understand users, behavior, systems, business goals, and how digital experiences actually perform in the real world.</p>

                            <p className="font-semibold text-20 mt-[20px]">The difference between the two is bigger than most businesses realize.</p>

                            <h2 className="h3 mb-[20px] mt-[40px] font-semibold">The Industry Confusion Around UI/UX</h2>

                            <p className="font-normal text-20">Over the last few years, UI/UX has become one of the most commonly used terms in digital business.</p>

                            <p className="font-normal text-20 mt-[20px]">Every platform talks about design.<br />Every agency talks about creativity.<br />Every product claims to deliver experience.</p>

                            <p className="font-normal text-20 mt-[20px]">But in reality, many businesses are still confusing visual creativity with real UX expertise.</p>

                            <p className="font-normal text-20 mt-[20px]">A creative designer can make screens look attractive.</p>

                            <p className="font-semibold text-20 mt-[20px]">A UX master makes those screens work effortlessly.</p>

                            <p className="font-normal text-20 mt-[20px]">That difference affects everything:</p>

                            <ul className="list-disc mt-[20px] pl-[40px]">
                                <li className="text-20 font-normal">Retention</li>
                                <li className="text-20 font-normal">Conversion</li>
                                <li className="text-20 font-normal">Trust</li>
                                <li className="text-20 font-normal">Scalability</li>
                                <li className="text-20 font-normal">User satisfaction</li>
                                <li className="text-20 font-normal">Long-term growth</li>
                            </ul>

                            <p className="font-normal text-20 mt-[20px]">And this is exactly why businesses that take digital growth seriously approach UX differently.</p>

                            <h2 className="h3 mb-[20px] mt-[40px] font-semibold">Creativity Attracts Attention. UX Holds Attention.</h2>

                            <p className="font-normal text-20">This is one of the most important distinctions businesses need to understand.</p>

                            <p className="font-semibold text-20 mt-[20px]">Creative design creates interest. UX creates continuity.</p>

                            <p className="font-normal text-20 mt-[20px]">A visually attractive interface may convince users to explore your platform once. But whether they stay, engage, and return depends entirely on experience.</p>

                            <p className="font-normal text-20 mt-[20px]">Users don’t stay because a button looks beautiful.</p>

                            <p className="font-normal text-20 mt-[20px]">They stay because interactions feel simple and intuitive.</p>

                            <p className="font-normal text-20 mt-[20px]">They stay because:</p>

                            <ul className="list-disc mt-[20px] pl-[40px]">
                                <li className="text-20 font-normal">Navigation feels effortless</li>
                                <li className="text-20 font-normal">Information feels clear</li>
                                <li className="text-20 font-normal">Actions feel obvious</li>
                                <li className="text-20 font-normal">Journeys feel smooth</li>
                            </ul>

                            <p className="font-normal text-20 mt-[20px]">That level of thinking does not come from visual creativity alone. It comes from structured UX expertise.</p>

                            <h2 className="h3 mb-[20px] mt-[40px] font-semibold">Why Businesses Outgrow Purely Creative Design</h2>

                            <p className="font-normal text-20">In the early stages, many businesses prioritize aesthetics because visual improvement creates quick excitement internally.</p>

                            <p className="font-normal text-20 mt-[20px]">A redesigned homepage feels like progress.<br />A modern interface feels innovative.</p>

                            <p className="font-normal text-20 mt-[20px]">But as businesses grow, expectations change.</p>

                            <p className="font-normal text-20 mt-[20px]">Users become more demanding.<br />Journeys become more complex.<br />Products scale.<br />Customer behavior evolves.</p>

                            <p className="font-normal text-20 mt-[20px]">At this stage, purely creative thinking starts showing limitations.</p>

                            <p className="font-normal text-20 mt-[20px]">Because scaling a business requires systems, logic, consistency, and user understanding.</p>

                            <p className="font-semibold text-20 mt-[20px]">And this is where UX masters become essential.</p>

                            <h2 className="h3 mb-[20px] mt-[40px] font-semibold">UX Masters Solve Problems Creatively</h2>

                            <p className="font-normal text-20">One common misconception is that UX experts are less creative.</p>

                            <p className="font-normal text-20 mt-[20px]">In reality, the best UX professionals are deeply creative. The difference is that their creativity is guided by purpose.</p>

                            <p className="font-normal text-20 mt-[20px]">They don’t design to impress internally.<br />They design to improve outcomes externally.</p>

                            <p className="font-normal text-20 mt-[20px]">Every decision has intent:</p>

                            <ul className="list-disc mt-[20px] pl-[40px]">
                                <li className="text-20 font-normal">Why is this action placed here?</li>
                                <li className="text-20 font-normal">Why is this journey simplified?</li>
                                <li className="text-20 font-normal">Why is this flow reduced?</li>
                                <li className="text-20 font-normal">Why does this interaction feel easier?</li>
                            </ul>

                            <p className="font-normal text-20 mt-[20px]">UX masters think beyond visuals. They think about behavior.</p>

                            <p className="font-semibold text-20 mt-[20px]">And behavior is what drives business performance.</p>

                            <h2 className="h3 mb-[20px] mt-[40px] font-semibold">Businesses Don’t Lose Users Randomly</h2>

                            <p className="font-normal text-20">When businesses struggle digitally, they often blame:</p>

                            <ul className="list-disc mt-[20px] pl-[40px]">
                                <li className="text-20 font-normal">Marketing</li>
                                <li className="text-20 font-normal">Pricing</li>
                                <li className="text-20 font-normal">Competition</li>
                                <li className="text-20 font-normal">Reach</li>
                            </ul>

                            <p className="font-normal text-20 mt-[20px]">But many times, users leave because the experience quietly pushes them away.</p>

                            <p className="font-normal text-20 mt-[20px]">Too many steps.<br />Confusing navigation.<br />Unclear actions.<br />Overwhelming layouts.</p>

                            <p className="font-normal text-20 mt-[20px]">The product may look visually impressive while still creating frustration underneath.</p>

                            <p className="font-normal text-20 mt-[20px]">This is one of the biggest reasons businesses invest in UX specialists rather than relying only on creativity.</p>

                            <p className="font-semibold text-20 mt-[20px]">Because UX experts identify friction before it becomes a business problem.</p>

                            <h2 className="h3 mb-[20px] mt-[40px] font-semibold">Good UX Feels Invisible</h2>

                            <p className="font-normal text-20">One interesting thing about great UX is that users rarely notice it consciously.</p>

                            <p className="font-normal text-20 mt-[20px]">They simply feel comfortable using the product.</p>

                            <p className="font-normal text-20 mt-[20px]">Things work naturally.<br />Actions make sense.<br />The experience flows smoothly.</p>

                            <p className="font-semibold text-20 mt-[20px]">That invisibility is intentional. Good UX removes unnecessary thinking.</p>

                            <p className="font-normal text-20 mt-[20px]">Creative-only design sometimes does the opposite. It prioritizes uniqueness so heavily that usability starts suffering.</p>

                            <p className="font-normal text-20 mt-[20px]">Users don’t want to learn how your interface works. They want to use it effortlessly.</p>

                            <p className="font-normal text-20 mt-[20px]">Serious businesses understand this very clearly.</p>

                            <h2 className="h3 mb-[20px] mt-[40px] font-semibold">UX Is Now a Business Function</h2>

                            <p className="font-normal text-20">Years ago, design was often treated as a support activity.</p>

                            <p className="font-normal text-20 mt-[20px]">Today, UX directly impacts business metrics.</p>

                            <p className="font-normal text-20 mt-[20px]">It affects:</p>

                            <ul className="list-disc mt-[20px] pl-[40px]">
                                <li className="text-20 font-normal">Customer retention</li>
                                <li className="text-20 font-normal">User engagement</li>
                                <li className="text-20 font-normal">Lead generation</li>
                                <li className="text-20 font-normal">Conversion rates</li>
                                <li className="text-20 font-normal">Brand trust</li>
                                <li className="text-20 font-normal">Product adoption</li>
                            </ul>

                            <p className="font-normal text-20 mt-[20px]">This is why businesses that are scaling seriously no longer see UX as decoration.</p>

                            <p className="font-semibold text-20 mt-[20px]">They see it as infrastructure.</p>

                            <p className="font-normal text-20 mt-[20px]">A weak experience slows growth even if marketing is strong.</p>

                            <p className="font-normal text-20 mt-[20px]">A strong experience improves performance across the entire business ecosystem.</p>

                            <h2 className="h3 mb-[20px] mt-[40px] font-semibold">Why DIY and Surface-Level Design Stop Working</h2>

                            <p className="font-normal text-20">Modern tools have made design accessible. Templates are everywhere. Drag-and-drop platforms make it easy to create something visually decent.</p>

                            <p className="font-normal text-20 mt-[20px]">This creates an illusion.</p>

                            <p className="font-normal text-20 mt-[20px]">Businesses start believing UI/UX can be handled casually.</p>

                            <p className="font-normal text-20 mt-[20px]">And initially, that may work.</p>

                            <p className="font-normal text-20 mt-[20px]">But growth exposes weaknesses quickly.</p>

                            <p className="font-normal text-20 mt-[20px]">What looks good internally may confuse users externally.</p>

                            <p className="font-normal text-20 mt-[20px]">As traffic increases, friction increases too.</p>

                            <p className="font-normal text-20 mt-[20px]">This is where businesses realize that professional UX thinking is not optional anymore.</p>

                            <p className="font-semibold text-20 mt-[20px]">Because templates cannot understand users. Only experts can.</p>

                            <h2 className="h3 mb-[20px] mt-[40px] font-semibold">The Difference Between Creative Designers and UX Masters</h2>

                            <p className="font-normal text-20">Let’s simplify this clearly.</p>

                            <p className="font-normal text-20 mt-[20px]">A creative designer asks:<br /><em>“How can this look better?”</em></p>

                            <p className="font-normal text-20 mt-[20px]">A UX master asks:<br /><em>“How can this work better?”</em></p>

                            <p className="font-semibold text-20 mt-[20px]">The second question changes everything.</p>

                            <p className="font-normal text-20 mt-[20px]">UX masters:</p>

                            <ul className="list-disc mt-[20px] pl-[40px]">
                                <li className="text-20 font-normal">Study user behavior</li>
                                <li className="text-20 font-normal">Understand business goals</li>
                                <li className="text-20 font-normal">Structure journeys intentionally</li>
                                <li className="text-20 font-normal">Simplify interactions</li>
                                <li className="text-20 font-normal">Reduce friction</li>
                                <li className="text-20 font-normal">Build scalable systems</li>
                            </ul>

                            <p className="font-normal text-20 mt-[20px]">They think about both users and outcomes simultaneously.</p>

                            <p className="font-normal text-20 mt-[20px]">That balance is what serious businesses need.</p>

                            <h2 className="h3 mb-[20px] mt-[40px] font-semibold">User Expectations Have Changed Completely</h2>

                            <p className="font-normal text-20">Digital users today are extremely experience-aware.</p>

                            <p className="font-normal text-20 mt-[20px]">They compare your platform not just with direct competitors, but with every smooth digital interaction they encounter daily.</p>

                            <p className="font-normal text-20 mt-[20px]">If users experience simplicity elsewhere, they expect simplicity from you too.</p>

                            <p className="font-normal text-20 mt-[20px]">Patience online is shrinking rapidly.</p>

                            <p className="font-normal text-20 mt-[20px]">People leave quickly when:</p>

                            <ul className="list-disc mt-[20px] pl-[40px]">
                                <li className="text-20 font-normal">Journeys feel confusing</li>
                                <li className="text-20 font-normal">Actions feel difficult</li>
                                <li className="text-20 font-normal">Interfaces feel outdated</li>
                                <li className="text-20 font-normal">Systems feel slow</li>
                            </ul>

                            <p className="font-normal text-20 mt-[20px]">This is why businesses can no longer rely on aesthetics alone.</p>

                            <p className="font-semibold text-20 mt-[20px]">Users expect experiences that feel intelligent.</p>

                            <h2 className="h3 mb-[20px] mt-[40px] font-semibold">UX Masters Build Consistency</h2>

                            <p className="font-normal text-20">One of the biggest signs of mature UX is consistency.</p>

                            <p className="font-normal text-20 mt-[20px]">Every interaction feels connected.<br />Every screen follows logic.<br />Every flow feels familiar.</p>

                            <p className="font-normal text-20 mt-[20px]">This consistency creates trust.</p>

                            <p className="font-normal text-20 mt-[20px]">Without UX expertise, businesses often end up with disconnected experiences:</p>

                            <ul className="list-disc mt-[20px] pl-[40px]">
                                <li className="text-20 font-normal">Different visual styles</li>
                                <li className="text-20 font-normal">Inconsistent navigation</li>
                                <li className="text-20 font-normal">Unclear interaction patterns</li>
                                <li className="text-20 font-normal">Fragmented journeys</li>
                            </ul>

                            <p className="font-normal text-20 mt-[20px]">Over time, this weakens user confidence.</p>

                            <p className="font-semibold text-20 mt-[20px]">UX masters prevent that by building structured systems instead of isolated screens.</p>

                            <h2 className="h3 mb-[20px] mt-[40px] font-semibold">Why Serious Businesses Invest Earlier</h2>

                            <p className="font-normal text-20">Many growing businesses make the mistake of delaying UX investment.</p>

                            <p className="font-normal text-20 mt-[20px]"><em>“We’ll improve it later.”</em><br /><em>“Let’s focus on growth first.”</em></p>

                            <p className="font-normal text-20 mt-[20px]">But growth without strong experience creates unstable foundations.</p>

                            <p className="font-normal text-20 mt-[20px]">When user journeys are weak, scaling traffic only amplifies friction.</p>

                            <p className="font-semibold text-20 mt-[20px]">Businesses that understand this invest in UX expertise early because they know fixing foundational experience problems later becomes more expensive and more damaging.</p>

                            <h2 className="h3 mb-[20px] mt-[40px] font-semibold">UX Expertise Creates Long-Term Business Value</h2>

                            <p className="font-normal text-20">One of the biggest reasons serious businesses prioritize UX masters is sustainability.</p>

                            <p className="font-normal text-20 mt-[20px]">Creative trends change quickly.<br />What looks modern today may feel outdated tomorrow.</p>

                            <p className="font-normal text-20 mt-[20px]">But strong UX principles remain valuable for years because they are rooted in human behavior, not trends.</p>

                            <p className="font-normal text-20 mt-[20px]">Good UX:</p>

                            <ul className="list-disc mt-[20px] pl-[40px]">
                                <li className="text-20 font-normal">Improves usability</li>
                                <li className="text-20 font-normal">Reduces confusion</li>
                                <li className="text-20 font-normal">Strengthens trust</li>
                                <li className="text-20 font-normal">Simplifies interaction</li>
                                <li className="text-20 font-normal">Supports scalability</li>
                            </ul>

                            <p className="font-semibold text-20 mt-[20px]">That creates long-term business value beyond visual aesthetics.</p>

                            <h2 className="h3 mb-[20px] mt-[40px] font-semibold">Businesses Are Competing on Experience Now</h2>

                            <p className="font-normal text-20">Most industries today are crowded with similar products and services.</p>

                            <p className="font-normal text-20 mt-[20px]">Features overlap.<br />Pricing competes constantly.<br />Marketing feels repetitive.</p>

                            <p className="font-normal text-20 mt-[20px]">Experience becomes the differentiator.</p>

                            <p className="font-normal text-20 mt-[20px]">Users naturally gravitate toward products that feel easier, smoother, and more intuitive.</p>

                            <p className="font-semibold text-20 mt-[20px]">This is where UX expertise creates measurable business advantage. Not through loud visuals, but through better interactions.</p>

                            <h2 className="h3 mb-[20px] mt-[40px] font-semibold">Great UX Protects Business Reputation</h2>

                            <p className="font-normal text-20">Poor experiences damage trust quietly.</p>

                            <p className="font-normal text-20 mt-[20px]">Users may never send complaints, but they remember frustration.</p>

                            <p className="font-normal text-20 mt-[20px]">And once frustration becomes associated with a brand, recovery becomes difficult.</p>

                            <p className="font-normal text-20 mt-[20px]">Strong UX protects businesses from this.</p>

                            <p className="font-normal text-20 mt-[20px]">It creates confidence through clarity.</p>

                            <p className="font-normal text-20 mt-[20px]">That confidence affects how users:</p>

                            <ul className="list-disc mt-[20px] pl-[40px]">
                                <li className="text-20 font-normal">Perceive your professionalism</li>
                                <li className="text-20 font-normal">Recommend your brand</li>
                                <li className="text-20 font-normal">Continue using your product</li>
                                <li className="text-20 font-normal">Trust your systems</li>
                            </ul>

                            <p className="font-semibold text-20 mt-[20px]">This is one reason serious businesses invest heavily in UX thinking long before problems become visible publicly.</p>

                            <h2 className="h3 mb-[20px] mt-[40px] font-semibold">The Businesses Growing Fastest Understand This Already</h2>

                            <p className="font-normal text-20">If you observe modern high-growth brands carefully, one thing becomes obvious.</p>

                            <p className="font-normal text-20 mt-[20px]">They are obsessed with experience.</p>

                            <p className="font-normal text-20 mt-[20px]">Not just visuals.<br />Not just campaigns.<br />Experience.</p>

                            <p className="font-normal text-20 mt-[20px]">Every interaction feels intentional.<br />Every flow feels simplified.<br />Every system feels connected.</p>

                            <p className="font-semibold text-20 mt-[20px]">That level of precision is rarely accidental. It is built by UX specialists who understand how digital behavior influences business growth.</p>

                            <h2 className="h3 mb-[20px] mt-[40px] font-semibold">Conclusion: Where RarePixels Fits In</h2>

                            <p className="font-normal text-20">Creativity will always matter in digital experiences. Strong visuals attract attention and shape perception. But businesses that want sustainable growth need more than creative screens.</p>

                            <p className="font-normal text-20 mt-[20px]">They need systems that work.<br />Journeys that feel effortless.<br />Experiences that users trust naturally.</p>

                            <p className="font-normal text-20 mt-[20px]">That level of execution comes from UX expertise.</p>

                            <p className="font-normal text-20 mt-[20px]">At RarePixels, being a next gen <Link href="https://rarepixelsdesign.in/" target="_blank" rel="noopener noreferrer" className="text-[#ed0180] font-semibold">ux agency in india</Link>, the focus goes far beyond aesthetics. The approach combines strategic UX thinking, user behavior understanding, scalable systems, and refined UI execution to create digital experiences that are not only visually strong, but business-driven at every level.</p>

                            <p className="font-normal text-20 mt-[20px]">Because serious businesses no longer invest in design only to look better.</p>

                            <p className="font-semibold text-20 mt-[20px]">They invest in UX mastery to grow better.</p>
                        </article>
                    </div>
                </div>
            </div>

            <RelatedBlogPopup
                currentBlogHref="/Blog/why-businesses-need-ux-masters-not-just-creative-designers"
                currentCategory="UI/UX"
            />
        </section>
    )
}

export default WhySeriousBusinessesInvestinUxMastersNotJustCreativeDesigners