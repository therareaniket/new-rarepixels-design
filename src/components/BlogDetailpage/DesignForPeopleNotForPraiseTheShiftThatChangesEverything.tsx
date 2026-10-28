'use client'

import Image from 'next/image'
import './blogdetail.css'

const blogUrl = "https://rarepixelsdesign.in/Blog/design-for-people-not-praise";
const blogTitle = "Design for People, Not for Praise: The Shift That Changes Everything";

const DesignForPeopleNotForPraiseTheShiftThatChangesEverything = () => {
    return (
        <section>
            <div className="blog-detail-hero w-[100%] h-[529px] mt-[68px] bg-[#040E36] flex items-center justify-center flex-col">
                <div className="blog-container-sm">
                    <div className="blog-detail-hero-text py-[80px] ">
                        <h1 className="text-[white]">Design for People, Not for Praise: The Shift That Changes Everything</h1>

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
                                    <p className="font-semibold">10th Nov 2025</p>
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
                                <p className="font-semibold">10th Nov 2025</p>
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
                        <Image className='w-[100%] h-[100%] object-cover' src="/blog-detail/Design-for-People-Not-for-Praise-webp.webp" alt="blog-detail-image" width={1000} height={562}></Image>
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
                            <h2 className="h3 mb-[20px] mt-0 font-semibold">The Hard Truth About Design Briefs</h2>

                            <p className="font-normal text-20">Every designer has heard these lines:<br />“Make it more modern.”<br />“Can we add a bit more pop here?”<br />“Just match it with the competitor’s colour palette.”</p>

                            <p className="font-normal text-20 mt-[20px]">And so, the design journey begins—shaped not by purpose or empathy, but by preferences. Somewhere between presentation decks and feedback loops, design quietly shifts from being a solution to being a decoration.</p>

                            <p className="font-normal text-20 mt-[20px]">At RarePixels, we’ve seen this happen too often: design getting caught in the tug-of-war between what looks good and what works well. And when that happens, we forget the most important truth of all:</p>

                            <p className="font-semibold text-20 mt-[20px]">Design created to satisfy a client’s opinion often fails to serve a user’s need.</p>

                            <h2 className="h3 mb-[20px] mt-[40px] font-semibold">Design Isn’t Decoration. It’s Direction.</h2>

                            <p className="font-normal text-20">Design isn’t just about making something beautiful—it’s about making something <em>meaningful</em>.<br />Every colour, shape, and motion communicates something, even in silence.</p>

                            <p className="font-normal text-20 mt-[20px]">But when decisions are made based on personal taste or hierarchy, design loses its voice. It becomes a series of aesthetic choices rather than human solutions.</p>

                            <p className="font-normal text-20 mt-[20px]">At RarePixels, we believe that design should <strong className="font-semibold">guide</strong>, not just decorate. It should simplify a complex process, make an interaction intuitive, and turn confusion into clarity.</p>

                            <p className="font-normal text-20 mt-[20px]">Because in the end, users don’t care whether your layout uses a trending gradient. They care whether they can <em>get things done</em> easily, happily, and without thinking twice.</p>

                            <h2 className="h3 mb-[20px] mt-[40px] font-semibold">The Approval Trap</h2>

                            <p className="font-normal text-20">Here’s the uncomfortable part:<br />Many designers unintentionally design for client approval, not user success.</p>

                            <p className="font-normal text-20 mt-[20px]">A client says, “Make the logo bigger,” and we comply. Another says, “Use brighter colours—it feels cheerful,” and we adjust. Soon, the design stops reflecting user behaviour and starts mirroring opinion.</p>

                            <p className="font-normal text-20 mt-[20px]">This constant chase for validation creates what we call the <strong className="font-semibold">approval trap</strong>—a place where good design decisions get diluted for the sake of consensus.</p>

                            <p className="font-normal text-20 mt-[20px]">But real design doesn’t beg for applause. It earns trust from the people who experience it every day.</p>

                            <h2 className="h3 mb-[20px] mt-[40px] font-semibold">Designing for People Breaks That Ceiling</h2>

                            <p className="font-normal text-20">When you design for clients, you work within their world.<br />When you design for people, you build for the world outside.</p>

                            <p className="font-normal text-20 mt-[20px]">A client might love symmetry; a user might need simplicity.<br />A client might want animation; a user might just want speed.</p>

                            <p className="font-normal text-20 mt-[20px]">When we shift our perspective from satisfying the boardroom to understanding the real user journey, design starts to breathe again.<br />It becomes inclusive, purposeful, and real.</p>

                            <p className="font-normal text-20 mt-[20px]">At RarePixels, we call this the <strong className="font-semibold">people-first pivot.</strong><br />It’s not about rebellion—it’s about relevance.</p>

                            <h2 className="h3 mb-[20px] mt-[40px] font-semibold">Empathy: The Real Client You Should Design For</h2>

                            <p className="font-normal text-20">Empathy is the quiet force behind every great design decision. It’s not found in tools or templates. It’s built through observation, listening, and patience.</p>

                            <p className="font-normal text-20 mt-[20px]">Designing with empathy means asking deeper questions:</p>

                            <ul className="list-disc mt-[20px] pl-[40px]">
                                <li className="text-20 font-normal">What frustrates users the most?</li>
                                <li className="text-20 font-normal">What gives them delight?</li>
                                <li className="text-20 font-normal">What will make their experience effortless and joyful?</li>
                            </ul>

                            <p className="font-normal text-20 mt-[20px]">When we design with empathy, we don’t just make interfaces—we make <em>connections</em>. We stop building screens and start shaping experiences.</p>

                            <p className="font-normal text-20 mt-[20px]">Empathy turns design from a deliverable into a dialogue.</p>

                            <h2 className="h3 mb-[20px] mt-[40px] font-semibold">A Small Example, A Big Lesson</h2>

                            <p className="font-normal text-20">A few months ago, while designing a dashboard for a healthcare platform, one of our UX researchers noticed something subtle. Patients struggled to locate their reports because the “Download” button looked too similar to the other icons.</p>

                            <p className="font-normal text-20 mt-[20px]">The client initially wanted a uniform icon set—everything consistent, sleek, and minimal. But our usability tests showed that clarity mattered more than consistency.</p>

                            <p className="font-normal text-20 mt-[20px]">When we redesigned that button with a contrasting colour and clearer copy, downloads increased by 40%.</p>

                            <p className="font-normal text-20 mt-[20px]">That’s the power of people-first design. It’s not about who’s right in the meeting—it’s about what feels right to the person using it.</p>

                            <h2 className="h3 mb-[20px] mt-[40px] font-semibold">The Courage to Say “No”</h2>

                            <p className="font-normal text-20">Design maturity isn’t about agreeing with every request. It’s about having the courage to say <em>no</em> when it matters.</p>

                            <p className="font-normal text-20 mt-[20px]">Saying no doesn’t mean defiance; it means direction. When we push back, we’re not rejecting ideas—we’re protecting the user’s experience.</p>

                            <p className="font-normal text-20 mt-[20px]">At RarePixels, every “no” comes with a “why.”<br />Why does this change add or reduce friction?<br />Why does it improve the emotional journey?<br />Why does it make sense for the human on the other side of the screen?</p>

                            <p className="font-normal text-20 mt-[20px]">That’s how trust is built—not through flattery, but through clarity.</p>

                            <h2 className="h3 mb-[20px] mt-[40px] font-semibold">Design That Feels Human</h2>

                            <p className="font-normal text-20">People don’t live perfect lives, so why should they experience perfect interfaces?</p>

                            <p className="font-normal text-20 mt-[20px]">They tap with one hand, rush through checkout screens, scroll between meetings, and sometimes misclick. A people-first designer embraces this chaos.</p>

                            <p className="font-normal text-20 mt-[20px]">Human-centred design celebrates imperfection—forgiving error states, friendly messages, and intuitive flows that guide rather than punish.</p>

                            <p className="font-normal text-20 mt-[20px]">It’s not just about usability; it’s about understanding life as it happens.</p>

                            <p className="font-semibold text-20 mt-[20px]">A truly human design doesn’t demand effort. It feels effortless.</p>

                            <h2 className="h3 mb-[20px] mt-[40px] font-semibold">Listening Over Liking</h2>

                            <p className="font-normal text-20">It’s tempting to rely on instinct or taste. But people-first design isn’t about what you like—it’s about what your users need.</p>

                            <p className="font-normal text-20 mt-[20px]">You don’t need to design something you’d personally use. You need to design something your user <em>can’t live without.</em></p>

                            <p className="font-normal text-20 mt-[20px]">Listening over liking means:</p>

                            <ul className="list-disc mt-[20px] pl-[40px]">
                                <li className="text-20 font-normal">Observing how users interact in real contexts.</li>
                                <li className="text-20 font-normal">Testing early ideas before they become expensive mistakes.</li>
                                <li className="text-20 font-normal">Learning continuously and iterating without ego.</li>
                            </ul>

                            <p className="font-normal text-20 mt-[20px]">When you replace “I think” with “Users showed,” design becomes data-informed and empathy-driven—the perfect blend.</p>

                            <h2 className="h3 mb-[20px] mt-[40px] font-semibold">The Role of Psychology in Design</h2>

                            <p className="font-normal text-20">Good design looks good. Great design feels good because it understands human psychology.</p>

                            <p className="font-normal text-20 mt-[20px]">Colours calm or excite us. Shapes create trust or tension. Spacing helps us focus or distracts us.</p>

                            <p className="font-normal text-20 mt-[20px]">When you understand how people think, react, and decide, your designs stop being guesswork and start becoming intuitive.</p>

                            <p className="font-normal text-20 mt-[20px]">At RarePixels, we often say: <strong className="font-semibold">“Design is psychology disguised as aesthetics.”</strong> Because every pixel you place influences how someone feels, even when they don’t realize it.</p>

                            <h2 className="h3 mb-[20px] mt-[40px] font-semibold">People-First Design in Action</h2>

                            <p className="font-normal text-20">When design starts serving people, it transforms outcomes:</p>

                            <ol className="list-decimal mt-[20px] pl-[40px]">
                                <li className="text-20 font-normal"><strong className="font-semibold">Higher Conversions:</strong> Users complete actions faster because they trust what they see.</li>
                                <li className="text-20 font-normal mt-[20px]"><strong className="font-semibold">Stronger Brand Recall:</strong> People remember how your experience made them feel, not just how it looked.</li>
                                <li className="text-20 font-normal mt-[20px]"><strong className="font-semibold">Lower Drop-offs:</strong> Simplified journeys reduce friction and frustration.</li>
                                <li className="text-20 font-normal mt-[20px]"><strong className="font-semibold">Better Client Satisfaction:</strong> Success becomes measurable, not subjective.</li>
                            </ol>

                            <p className="font-normal text-20 mt-[20px]">People-first design isn’t just the right thing to do—it’s the <em>smartest</em> thing to do.</p>

                            <h2 className="h3 mb-[20px] mt-[40px] font-semibold">Educating Clients, Empowering Relationships</h2>

                            <p className="font-normal text-20">People-first design doesn’t mean clients are left out. It means inviting them into the <em>real conversation</em>.</p>

                            <p className="font-normal text-20 mt-[20px]">When clients see user-testing videos, persona journeys, or heatmaps, they stop guessing and start understanding. That’s when trust deepens.</p>

                            <p className="font-normal text-20 mt-[20px]">RarePixels doesn’t just deliver—we <em>educate</em>. Because when clients understand how users think, they make better design choices too.</p>

                            <p className="font-normal text-20 mt-[20px]">This partnership mindset turns feedback loops into forward motion.</p>

                            <h2 className="h3 mb-[20px] mt-[40px] font-semibold">From Projects to Relationships</h2>

                            <p className="font-normal text-20">A project ends when the invoice is cleared. But a relationship lasts when the experience succeeds.</p>

                            <p className="font-normal text-20 mt-[20px]">Designing for people naturally extends your connection beyond deadlines. Users stay longer, speak positively, and become your brand’s voice.</p>

                            <p className="font-normal text-20 mt-[20px]">And when clients witness that kind of loyalty, they understand that empathy isn’t just an emotion. It’s an advantage.</p>

                            <h2 className="h3 mb-[20px] mt-[40px] font-semibold">The Ripple Effect of Designing for People</h2>

                            <p className="font-normal text-20">When you design for people, everyone wins:</p>

                            <ul className="list-disc mt-[20px] pl-[40px]">
                                <li className="text-20 font-normal"><strong className="font-semibold">Clients</strong> see better results.</li>
                                <li className="text-20 font-normal"><strong className="font-semibold">Teams</strong> feel more purposeful.</li>
                                <li className="text-20 font-normal"><strong className="font-semibold">Users</strong> feel understood.</li>
                            </ul>

                            <p className="font-normal text-20 mt-[20px]">And that creates a ripple—your design doesn’t just solve one problem; it starts influencing mindsets.</p>

                            <p className="font-normal text-20 mt-[20px]">Businesses begin thinking like users.<br />Developers begin coding with empathy.<br />Marketers begin telling stories with purpose.</p>

                            <p className="font-normal text-20 mt-[20px]">That’s how design stops being a service and becomes a culture.</p>

                            <h2 className="h3 mb-[20px] mt-[40px] font-semibold">Designing Beyond Deliverables</h2>

                            <p className="font-normal text-20">Every design project has two outcomes—one visible and one invisible. The visible outcome is what you present: the screens, the prototypes, and the colours. The invisible outcome is what people <em>feel</em> when they use it.</p>

                            <p className="font-normal text-20 mt-[20px]">That invisible outcome is where RarePixels thrives. It’s where connection replaces confusion, and interaction becomes emotion.</p>

                            <p className="font-normal text-20 mt-[20px]">Because good design may get noticed, but great design gets remembered.</p>

                            <h2 className="h3 mb-[20px] mt-[40px] font-semibold">The Shift Is Simple, but Profound</h2>

                            <p className="font-normal text-20">Moving from client-first to people-first design isn’t a radical leap—it’s a mindset realignment. It means shifting the final question from “Does the client like it?” to “Will the user love it?”</p>

                            <p className="font-normal text-20 mt-[20px]">It’s a shift from pleasing to understanding.<br />From showing to solving.<br />From designing for feedback to designing for feeling.</p>

                            <p className="font-normal text-20 mt-[20px]">When you design for people, the applause becomes quieter but more meaningful because it comes from the ones who matter most.</p>

                            <h2 className="h3 mb-[20px] mt-[40px] font-semibold">Closing Thoughts</h2>

                            <p className="font-normal text-20">The world doesn’t need more perfect visuals. It needs meaningful experiences.</p>

                            <p className="font-normal text-20 mt-[20px]">As designers, our role isn’t to impress—it’s to make an impact. To make every scroll simpler, every click smoother, and every emotion more human.</p>

                            <p className="font-normal text-20 mt-[20px]">At RarePixels, we don’t chase trends; we chase truth. We listen, we learn, and we design for the people who interact with our work every day.</p>

                            <p className="font-normal text-20 mt-[20px]">Because someday, someone out there will use what we design—not knowing who made it, but feeling that someone truly <em>understood</em> them.</p>

                            <p className="font-normal text-20 mt-[20px]">And that, right there, is where real design lives.</p>

                            <p className="font-semibold text-20 mt-[20px]">Stop designing for clients. Start designing for people.</p>

                            <p className="font-normal text-20 mt-[20px]"><em>Because empathy isn’t just good design—it’s good business.</em></p>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DesignForPeopleNotForPraiseTheShiftThatChangesEverything