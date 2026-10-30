

'use client'

import Image from 'next/image'
import './blogdetail.css'
import Link from 'next/link'
import RelatedBlogPopup from './RelatedBlofPopup/RelatedBlogPopup';

const blogUrl = "https://rarepixelsdesign.in/blog/rarepixels-1st-anniversary-celebration";
const blogTitle = "RarePixels Turns One - A Year of Pixels, People & Pure Magic";

const Rare1stAnniversary = () => {
    return (
        <section id='blog-detail-section'>
            <div className="blog-detail-hero w-[100%] h-[529px] mt-[68px] bg-[#040E36] flex items-center justify-center flex-col">
                <div className="blog-container-sm">
                    <div className="blog-detail-hero-text py-[80px] ">
                        <h1 className="text-[white]">RarePixels Turns One - A Year of Pixels, People & Pure Magic</h1>

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
                                    <p className="font-semibold">3rd Jul 2025</p>
                                </div>

                                <div className="blog-post-cate text-18 text-[white]">
                                    <p className="font-normal">Category</p>
                                    <p className="font-semibold">Life at RarePixels</p>
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
                                <p className="font-semibold">3rd Jul 2025</p>
                            </div>

                            <div className="blog-post-cate text-18 text-[white]">
                                <p className="font-normal">Category</p>
                                <p className="font-semibold">Life at RarePixels</p>
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
                        <Image className='w-[100%] h-[100%] object-cover' src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/articles-image-set/rarePixels-turns-one-a-year-of-pixels-people-pure-magic-final.webp" alt="blog-detail-image" width={1000} height={562}></Image>
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
                            <p className="font-normal text-20" style={{ marginTop: '0' }}>They say a picture is worth a thousand words—but at RarePixels, every picture tells a story. As RarePixels celebrates its first anniversary, we took a step back to relive the moments that made this journey unforgettable. From creative chaos to calming chai breaks, intense deadlines to light-hearted dinners, our year has been a vibrant collage of learning, laughter, and love for design.</p>

                            <p className="font-normal text-20 mt-[20px]">So when it came time to celebrate, we didn’t just focus on the anniversary day itself. We wanted to capture the entire journey in a way that reflected the heartbeat of our brand: our people. The result? A wholesome video that strings together snapshots from our year—an honest, emotional, and joyful ride.</p>

                            <h2 className="h3 mb-[20px] mt-[40px] font-semibold">Chapter One: The Day It All Began</h2>

                            <p className="font-normal text-20">Every great story begins with a dream. Ours started with a simple idea: to build a creative house where design speaks louder than words. RarePixels was born not in a fancy boardroom, but through passionate conversations, sketchpads, and late-night brainstorming.</p>

                            <p className="font-normal text-20 mt-[20px]">Bina Patel and Yogesh Patel, our visionary founders, believed in creating a team where ideas could thrive without boundaries. With a handful of designers, strategists, and dreamers, the RarePixels journey kicked off with big dreams and even bigger determination.</p>

                            <p className="font-normal text-20 mt-[20px]">The first few weeks were full of challenges: setting up systems, finding our rhythm, and navigating uncharted waters. But with every project delivered and every client smile, our confidence grew.</p>

                            <h2 className="h3 mb-[20px] mt-[40px] font-semibold">Chapter Two: Building Bonds, Not Just Brands</h2>

                            <p className="font-normal text-20">While our design work continued to evolve, what grew even stronger was our team spirit. From our first office lunch to spontaneous coffee conversations, we were not just creating campaigns—we were crafting a culture.</p>

                            <p className="font-normal text-20 mt-[20px]">There were birthday surprises, desk-decorating wars, chai breaks that turned into creative brainstorms, and internal memes that deserve their own museum. We laughed at our mistakes, celebrated our tiny victories, and, most importantly, stood by each other through it all.</p>

                            <p className="font-normal text-20 mt-[20px]">That sense of belonging became the foundation of everything we did.</p>

                            <h2 className="h3 mb-[20px] mt-[40px] font-semibold">Chapter Three: Pixels and People</h2>

                            <p className="font-normal text-20">Every design we delivered carried more than just creativity—it carried a piece of us. Our projects weren’t tasks; they were stories we helped our clients tell. From branding startups to revamping legacy businesses, our work reflected the diversity of our thoughts and the unity of our execution.</p>

                            <p className="font-normal text-20 mt-[20px]">But the real magic happened in between: the high-fives after a successful pitch, the nervousness before a client meeting, and the shared playlists during long design marathons. These moments didn’t make it to the invoices—but they made it to our memories.</p>

                            <h2 className="h3 mb-[20px] mt-[40px] font-semibold">Chapter Four: The Video That Says It All</h2>

                            <p className="font-normal text-20">As our anniversary approached, we knew we didn’t want just a cake and a countdown. We wanted to reflect, celebrate, and preserve our journey.</p>

                            <p className="font-normal text-20 mt-[20px]">The idea was simple: create a video that strings together moments from across the year. Not just work, but everything in between.</p>

                            <ul className="list-disc mt-[20px] pl-[40px]">
                                <li className="text-20 font-normal">Behind-the-scenes moments from our brainstorming sessions.</li>
                                <li className="text-20 font-normal">Fun team games on Fridays.</li>
                                <li className="text-20 font-normal">Client feedback reactions.</li>
                                <li className="text-20 font-normal">Diwali and Holi celebrations.</li>
                                <li className="text-20 font-normal">Office décor and team-bonding activities.</li>
                                <li className="text-20 font-normal">Candid laughs, sleepy eyes, and surprise cake smashes.</li>
                            </ul>

                            <p className="font-normal text-20 mt-[20px]">Every frame reflected a part of our shared journey. No script, no filters—just the RarePixels we lived every day.</p>

                            <h2 className="h3 mb-[20px] mt-[40px] font-semibold">Chapter Five: A Night to Remember—Anniversary at Saffron</h2>

                            <p className="font-normal text-20">To culminate the year-long celebration, the RarePixels family gathered for a special evening at <strong className="font-semibold">Saffron, Ahmedabad.</strong> The venue, with its elegant décor and cozy atmosphere, set the perfect tone for our celebration.</p>

                            <p className="font-normal text-20 mt-[20px]">As the team settled in, a wave of excitement swept through the room when our founders, <strong className="font-semibold">Bina Patel</strong> and <strong className="font-semibold">Yogesh Patel</strong>, arrived. Welcomed with bouquets of pink roses, the moment was filled with warmth, gratitude, and joy. It was the team’s way of saying thank you—for the trust, the belief, and the constant encouragement.</p>

                            <p className="font-normal text-20 mt-[20px]">The evening unfolded with laughter, shared memories, and a delicious dinner. Conversations flowed as easily as the food, and every table buzzed with stories from the year gone by.</p>

                            <h2 className="h3 mb-[20px] mt-[40px] font-semibold">Chapter Six: Reflections from the Founders</h2>

                            <p className="font-normal text-20">During the evening, both Bina and Yogesh took a moment to share their thoughts. They spoke not just as leaders, but as proud members of a family that grew together.</p>

                            <p className="font-normal text-20 mt-[20px]"><Link href="https://www.linkedin.com/in/binapatel78/" target="_blank" rel="noopener noreferrer" className="text-[#ed0180] font-semibold">Bina Patel</Link>, <strong className="font-semibold">Founder</strong>, shared, “This year wasn’t easy, but it was worth every minute. Seeing this team evolve, push limits, and bring ideas to life has been my biggest reward.”</p>

                            <p className="font-normal text-20 mt-[20px]"><strong className="font-semibold">Yogesh Patel</strong>, <strong className="font-semibold">Co-founder</strong>, added, “We didn’t just build a design company. We built a community. And every one of you is a part of that legacy.”</p>

                            <p className="font-normal text-20 mt-[20px]">Their words struck a chord with the entire team. It was a moment of connection that reminded us all why we started this journey in the first place.</p>

                            <h2 className="h3 mb-[20px] mt-[40px] font-semibold">Chapter Seven: More Than Just Work</h2>

                            <p className="font-normal text-20">Throughout the year, RarePixels prioritized not just professional growth, but personal well-being. From flexible hours to mental health check-ins, from team picnics to weekend workshops—we learned to balance hustle with happiness.</p>

                            <p className="font-semibold text-20 mt-[20px]">Design is our craft, but people are our purpose.</p>

                            <p className="font-normal text-20 mt-[20px]">Our culture of empathy, open communication, and honest feedback made RarePixels a safe space for expression and exploration. No idea was too small, and no voice went unheard.</p>

                            <h2 className="h3 mb-[20px] mt-[40px] font-semibold">Chapter Eight: Looking Ahead</h2>

                            <p className="font-normal text-20">As we step into Year Two, we carry forward everything this first year taught us:</p>

                            <ul className="list-disc mt-[20px] pl-[40px]">
                                <li className="text-20 font-normal"><strong className="font-semibold">Stay curious:</strong> Never stop learning, and never stop questioning.</li>
                                <li className="text-20 font-normal"><strong className="font-semibold">Stay grounded:</strong> Celebrate wins, but remember where you came from.</li>
                                <li className="text-20 font-normal"><strong className="font-semibold">Stay together:</strong> Because creativity thrives through collaboration.</li>
                            </ul>

                            <p className="font-normal text-20 mt-[20px]">We plan to expand our horizons, explore new markets, onboard fresh talent, and continue pushing boundaries. But at our core, we’ll always be the same passionate team that started this journey with a sketch and a dream.</p>

                            <h2 className="h3 mb-[20px] mt-[40px] font-semibold">Final Words: A Journey Etched in Pixels and Hearts</h2>

                            <p className="font-normal text-20">The RarePixels anniversary video is not just a celebration of our first year. It’s a reminder of how far we’ve come, how much we’ve grown, and how deeply we’re connected.</p>

                            <p className="font-normal text-20 mt-[20px]">To our clients, thank you for trusting us.</p>

                            <p className="font-normal text-20 mt-[20px]">To our teammates, thank you for showing up every day with fire in your hearts.</p>

                            <p className="font-normal text-20 mt-[20px]">To our founders, thank you for dreaming this into reality.</p>

                            <p className="font-normal text-20 mt-[20px]">Here’s to the next chapter. The next adventure. The next frame.</p>

                            <p className="font-semibold text-20 mt-[20px]">Because RarePixels is not just a company.</p>

                            <p className="font-semibold text-20 mt-[20px]">It’s a feeling.</p>
                        </article>
                    </div>
                </div>
            </div>

            <RelatedBlogPopup
                currentBlogHref="/Blog/rarepixels-1st-anniversary-celebration"
                currentCategory="Life at Rarepixels"
            />
        </section>
    )
}

export default Rare1stAnniversary