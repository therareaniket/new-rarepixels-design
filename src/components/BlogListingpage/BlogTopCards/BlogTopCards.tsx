'use client'

import './blogtopcards.css'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Link from 'next/link'
import Image from 'next/image'

const BlogTopCards = () => {
	return (
		<section className='section'>
			<div className="blog-top-card-title w-[780px] text-center">
				<h2 className='font-semibold'>Top Picks</h2>
				<p className='text-18 font-normal mt-[20px]'>A collection of thoughts, learnings, and perspectives from our work in design, technology, and building impactful digital experiences.</p>
			</div>

			<div className="blog-top-card-swiper mt-[70px]">
				<Swiper
					modules={[Autoplay]}
					slidesPerView="auto"
					centeredSlides={true}
					watchSlidesProgress={true}
					spaceBetween={32}
					speed={1000}
					loop={true}
					loopAdditionalSlides={2}
					roundLengths={true}
					grabCursor={true}
					preventInteractionOnTransition={true}
					autoplay={{
						delay: 1500,
						disableOnInteraction: false,
						pauseOnMouseEnter: false,
						waitForTransition: true,
					}}
					className="blog-top-cardswiper-wrapper"
					breakpoints={{
						0: { centeredSlides: false, spaceBetween: 12, },
						480: { spaceBetween: 20 }
					}}
				>
					<SwiperSlide className='blog-top-swiper'>
						<div className="blog-top-card-image w-[785] h-[442] rounded-[20px] bg-[#040E36]">
							<Image className='w-[100%] h-[100%] object-cover' src="/blog-detail/unknown-to-unforgettable-blog.webp" alt="blog-detail-image" width={1000} height={562}></Image>
						</div>

						<div className="blog-top-card-content">
							<h2 className='h3 font-semibold mt-[30px]'>From Unknown to Unforgettable: How Branding Makes Businesses Recognisable</h2>

							<div className='blog-listing-author-wrapper flex items-center justify-between mt-[20px]'>
								<div className="blog-author-name">
									<p className='font-normal flex items-center gap-[6px] text-18 text-[#8C8B8C]'>
										<span>By Bina Yogesh</span>
										|
										<span>Oct 12, 2026</span>
										|
										<span>7 mins read</span>
									</p>
								</div>

								<div className="blog-social-share flex align-center gap-[20px] text-[#8C8B8C]">
									<span className='icon-linkedin'></span>
									<span className='icon-instagram'></span>
									<span className='icon-threads'></span>
									<span className='icon-facebook'></span>
									<span className='icon-twitter'></span>
									<span className='icon-youtube'></span>
								</div>
							</div>

							<p className='blog-redirect text-18 font-normal mt-[30px]'>Every business starts somewhere. A new name. A new idea. A website. A product. Perhaps a logo that represents the beginning of something ambitious.
								<Link href="/Blog/from-unknown-to-unforgettable-branding" target='_blank' style={{ color: '#ED0180' }}>Read More</Link>
							</p>
						</div>
					</SwiperSlide>

					<SwiperSlide className='blog-top-swiper'>
						<div className="blog-top-card-image w-[785] h-[442] rounded-[20px] bg-[#040E36]">
							<Image className='w-[100%] h-[100%] object-cover' src="/blog-detail/ux-falls-short.webp" alt="blog-detail-image" width={1000} height={562}></Image>
						</div>

						<div className="blog-top-card-content">
							<h2 className='h3 font-semibold mt-[30px]'>Why DIY UI/UX Falls Short and Your Business Needs Experts</h2>

							<div className='blog-listing-author-wrapper flex items-center justify-between mt-[20px]'>
								<div className="blog-author-name">
									<p className='font-normal flex items-center gap-[6px] text-18 text-[#8C8B8C]'>
										<span>By Bina Yogesh</span>
										|
										<span>Oct 12, 2026</span>
										|
										<span>7 mins read</span>
									</p>
								</div>

								<div className="blog-social-share flex align-center gap-[20px] text-[#8C8B8C]">
									<span className='icon-linkedin'></span>
									<span className='icon-instagram'></span>
									<span className='icon-threads'></span>
									<span className='icon-facebook'></span>
									<span className='icon-twitter'></span>
									<span className='icon-youtube'></span>
								</div>
							</div>

							<p className='blog-redirect text-18 font-normal mt-[30px]'>At some point, almost every business tries to handle UI/UX on its own. It makes sense in the beginning. You want to move fast, save costs, and keep control. 
								<Link href="/Blog/diy-ui-ux-vs-experts-business-growth" target='_blank' style={{ color: '#ED0180' }}>Read More</Link>
							</p>
						</div>
					</SwiperSlide>

					<SwiperSlide className='blog-top-swiper'>
						<div className="blog-top-card-image w-[785] h-[442] rounded-[20px] bg-[#040E36]">
							<Image className='w-[100%] h-[100%] object-cover' src="/blog-detail/2nd-Anniversary-web.webp" alt="blog-detail-image" width={1000} height={562}></Image>
						</div>

						<div className="blog-top-card-content">
							<h2 className='h3 font-semibold mt-[30px]'>RarePixels Turns 2. The Big Game Is Still Loading.</h2>

							<div className='blog-listing-author-wrapper flex items-center justify-between mt-[20px]'>
								<div className="blog-author-name">
									<p className='font-normal flex items-center gap-[6px] text-18 text-[#8C8B8C]'>
										<span>By Bina Yogesh</span>
										|
										<span>June 25, 2026</span>
										|
										<span>7 mins read</span>
									</p>
								</div>

								<div className="blog-social-share flex align-center gap-[20px] text-[#8C8B8C]">
									<span className='icon-linkedin'></span>
									<span className='icon-instagram'></span>
									<span className='icon-threads'></span>
									<span className='icon-facebook'></span>
									<span className='icon-twitter'></span>
									<span className='icon-youtube'></span>
								</div>
							</div>

							<p className='blog-redirect text-18 font-normal mt-[30px]'>Two years of ideas turning into brands. Two years of challenges turning into opportunities. Two years of helping businesses become easier to notice, trust, and remember.
								<Link href="/Blog/rarepixels-turns-2-the-big-game-is-still-loading" target='_blank' style={{ color: '#ED0180' }}>Read More</Link>
							</p>
						</div>
					</SwiperSlide>

					<SwiperSlide className='blog-top-swiper'>
						<div className="blog-top-card-image w-[785] h-[442] rounded-[20px] bg-[#040E36]">
							<Image className='w-[100%] h-[100%] object-cover' src="/blog-detail/Why-Serious-Businesses-Invest-in-UX-Masters.webp" alt="blog-detail-image" width={1000} height={562}></Image>
						</div>

						<div className="blog-top-card-content">
							<h2 className='h3 font-semibold mt-[30px]'>Why Serious Businesses Invest in UX Masters, Not Just Creative Designers</h2>

							<div className='blog-listing-author-wrapper flex items-center justify-between mt-[20px]'>
								<div className="blog-author-name">
									<p className='font-normal flex items-center gap-[6px] text-18 text-[#8C8B8C]'>
										<span>By Bina Yogesh</span>
										|
										<span>May 29, 2026</span>
										|
										<span>7 mins read</span>
									</p>
								</div>

								<div className="blog-social-share flex align-center gap-[20px] text-[#8C8B8C]">
									<span className='icon-linkedin'></span>
									<span className='icon-instagram'></span>
									<span className='icon-threads'></span>
									<span className='icon-facebook'></span>
									<span className='icon-twitter'></span>
									<span className='icon-youtube'></span>
								</div>
							</div>

							<p className='blog-redirect text-18 font-normal mt-[30px]'>Every business wants to look good. A clean website.Modern visuals. Smooth animations. A stylish interface.
								<Link href="/Blog/why-businesses-need-ux-masters-not-just-creative-designers" target='_blank' style={{ color: '#ED0180' }}>Read More</Link>
							</p>
						</div>
					</SwiperSlide>

					<SwiperSlide className='blog-top-swiper'>
						<div className="blog-top-card-image w-[785] h-[442] rounded-[20px] bg-[#040E36]">
							<Image className='w-[100%] h-[100%] object-cover' src="/blog-detail/UX-Makes-Users-Lose-Interest.webp" alt="blog-detail-image" width={1000} height={562}></Image>
						</div>

						<div className="blog-top-card-content">
							<h2 className='h3 font-semibold mt-[30px]'>When UI/UX Loses Emotion, Users Lose Interest: The Crisis No One Talks About</h2>

							<div className='blog-listing-author-wrapper flex items-center justify-between mt-[20px]'>
								<div className="blog-author-name">
									<p className='font-normal flex items-center gap-[6px] text-18 text-[#8C8B8C]'>
										<span>By Bina Yogesh</span>
										|
										<span>May 14, 2026</span>
										|
										<span>7 mins read</span>
									</p>
								</div>

								<div className="blog-social-share flex align-center gap-[20px] text-[#8C8B8C]">
									<span className='icon-linkedin'></span>
									<span className='icon-instagram'></span>
									<span className='icon-threads'></span>
									<span className='icon-facebook'></span>
									<span className='icon-twitter'></span>
									<span className='icon-youtube'></span>
								</div>
							</div>

							<p className='blog-redirect text-18 font-normal mt-[30px]'>There’s a strange pattern happening across the digital world. More apps. More websites. More platforms. More tools. And yet… everything feels the same.
								<Link href="/Blog/emotion-in-ui-ux-and-user-loyalty" target='_blank' style={{ color: '#ED0180' }}>Read More</Link>
							</p>
						</div>
					</SwiperSlide>

					<SwiperSlide className='blog-top-swiper'>
						<div className="blog-top-card-image w-[785] h-[442] rounded-[20px] bg-[#040E36]">
							<Image className='w-[100%] h-[100%] object-cover' src="/blog-detail/UX-Strategies-That-Can-Double-Your-Client-Retention.webp" alt="blog-detail-image" width={1000} height={562}></Image>
						</div>

						<div className="blog-top-card-content">
							<h2 className='h3 font-semibold mt-[30px]'>Exclusive UI/UX Strategies That Can Double Your Client Retention</h2>

							<div className='blog-listing-author-wrapper flex items-center justify-between mt-[20px]'>
								<div className="blog-author-name">
									<p className='font-normal flex items-center gap-[6px] text-18 text-[#8C8B8C]'>
										<span>By Bina Yogesh</span>
										|
										<span>May 14, 2026</span>
										|
										<span>7 mins read</span>
									</p>
								</div>

								<div className="blog-social-share flex align-center gap-[20px] text-[#8C8B8C]">
									<span className='icon-linkedin'></span>
									<span className='icon-instagram'></span>
									<span className='icon-threads'></span>
									<span className='icon-facebook'></span>
									<span className='icon-twitter'></span>
									<span className='icon-youtube'></span>
								</div>
							</div>

							<p className='blog-redirect text-18 font-normal mt-[30px]'>Getting Customers Is Difficult. Keeping Them Is Even Harder. Most businesses spend heavily on marketing, ads, outreach, and lead generation. 
								<Link href="/Blog/ui-ux-strategies-client-retention" target='_blank' style={{ color: '#ED0180' }}>Read More</Link>
							</p>
						</div>
					</SwiperSlide>

					<SwiperSlide className='blog-top-swiper'>
						<div className="blog-top-card-image w-[785] h-[442] rounded-[20px] bg-[#040E36]">
							<Image className='w-[100%] h-[100%] object-cover' src="/blog-detail/UX-Turns-Social-Media-Traffic-into-Result.webp" alt="blog-detail-image" width={1000} height={562}></Image>
						</div>

						<div className="blog-top-card-content">
							<h2 className='h3 font-semibold mt-[30px]'>How UI/UX Design Decides Whether Your Social Media Traffic Stays or Leaves</h2>

							<div className='blog-listing-author-wrapper flex items-center justify-between mt-[20px]'>
								<div className="blog-author-name">
									<p className='font-normal flex items-center gap-[6px] text-18 text-[#8C8B8C]'>
										<span>By Bina Yogesh</span>
										|
										<span>May 14, 2026</span>
										|
										<span>7 mins read</span>
									</p>
								</div>

								<div className="blog-social-share flex align-center gap-[20px] text-[#8C8B8C]">
									<span className='icon-linkedin'></span>
									<span className='icon-instagram'></span>
									<span className='icon-threads'></span>
									<span className='icon-facebook'></span>
									<span className='icon-twitter'></span>
									<span className='icon-youtube'></span>
								</div>
							</div>

							<p className='blog-redirect text-18 font-normal mt-[30px]'>Social Media Today Is Doing Its Job Better Than Ever Posts reach thousands. Ads drive clicks. Campaigns generate buzz.
								<Link href="/Blog/ui-ux-social-media-marketing-success" target='_blank' style={{ color: '#ED0180' }}>Read More</Link>
							</p>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	)
}

export default BlogTopCards