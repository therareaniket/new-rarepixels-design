'use client'

import './blogtopcards.css'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Link from 'next/link'

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
					// autoplay={{
					// 	delay: 4000,
					// 	disableOnInteraction: false,
					// 	pauseOnMouseEnter: false,
					// 	waitForTransition: true,
					// }}
					className="blog-top-cardswiper-wrapper"
					breakpoints={{
						0: { centeredSlides: false, spaceBetween: 12, },
						480: { spaceBetween: 20 }
					}}
				>
					<SwiperSlide className='blog-top-swiper'>
						<div className="blog-top-card-image w-[785] h-[442] rounded-[20px] bg-[#040E36]"></div>

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
								<Link href="/Blogdetail" target='_blank' style={{ color: '#ED0180' }}>Read More</Link>
							</p>
						</div>
					</SwiperSlide>

					<SwiperSlide className='blog-top-swiper'>
						<div className="blog-top-card-image w-[785] h-[442] rounded-[20px] bg-[#040E36]"></div>

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
								<Link href="/Blogdetail" target='_blank' style={{ color: '#ED0180' }}>Read More</Link>
							</p>
						</div>
					</SwiperSlide>

					<SwiperSlide className='blog-top-swiper'>
						<div className="blog-top-card-image w-[785] h-[442] rounded-[20px] bg-[#040E36]"></div>

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
								<Link href="/Blogdetail" target='_blank' style={{ color: '#ED0180' }}>Read More</Link>
							</p>
						</div>
					</SwiperSlide>

					<SwiperSlide className='blog-top-swiper'>
						<div className="blog-top-card-image w-[785] h-[442] rounded-[20px] bg-[#040E36]"></div>

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
								<Link href="/Blogdetail" target='_blank' style={{ color: '#ED0180' }}>Read More</Link>
							</p>
						</div>
					</SwiperSlide>

					<SwiperSlide className='blog-top-swiper'>
						<div className="blog-top-card-image w-[785] h-[442] rounded-[20px] bg-[#040E36]"></div>

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
								<Link href="/Blogdetail" target='_blank' style={{ color: '#ED0180' }}>Read More</Link>
							</p>
						</div>
					</SwiperSlide>

					<SwiperSlide className='blog-top-swiper'>
						<div className="blog-top-card-image w-[785] h-[442] rounded-[20px] bg-[#040E36]"></div>

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
								<Link href="/Blogdetail" target='_blank' style={{ color: '#ED0180' }}>Read More</Link>
							</p>
						</div>
					</SwiperSlide>

					<SwiperSlide className='blog-top-swiper'>
						<div className="blog-top-card-image w-[785] h-[442] rounded-[20px] bg-[#040E36]"></div>

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
								<Link href="/Blogdetail" target='_blank' style={{ color: '#ED0180' }}>Read More</Link>
							</p>
						</div>
					</SwiperSlide>

					<SwiperSlide className='blog-top-swiper'>
						<div className="blog-top-card-image w-[785] h-[442] rounded-[20px] bg-[#040E36]"></div>

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
								<Link href="/Blogdetail" target='_blank' style={{ color: '#ED0180' }}>Read More</Link>
							</p>
						</div>
					</SwiperSlide>

					<SwiperSlide className='blog-top-swiper'>
						<div className="blog-top-card-image w-[785] h-[442] rounded-[20px] bg-[#040E36]"></div>

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
								<Link href="/Blogdetail" target='_blank' style={{ color: '#ED0180' }}>Read More</Link>
							</p>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	)
}

export default BlogTopCards