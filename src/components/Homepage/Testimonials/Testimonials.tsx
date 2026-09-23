"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./testimonials.css";
import Image from "next/image";

const CDN_URL = "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev";

const testimonialsData = [
	{
		id: 1,
		quote: "Working with RarePixels over the last six months has been a consistently smooth and impressive experience. They have designed multiple digital products for us, and each one reflects deep understanding, creativity, and attention to detail. My recent visit to RarePixels left me genuinely impressed with the team, their culture, and the clarity behind their work. RarePixels has been handling all our UI/UX requirements with exceptional professionalism. Based on my experience so far, I look forward to exploring more of their services in the future.",
		bgClass: "bg-[#F5F8F5]",
		initials: "SP",
		name: "Surya Mani Prasad",
		role: "COO",
	},
	{
		id: 2,
		quote: "Rarepixels enhanced our online presence with their outstanding website design and development services. From concept to launch, their team delivered a fully responsive, SEO-optimized site that boosted our traffic. Their creativity, technical expertise, and seamless collaboration made the process effortless.",
		bgClass: "bg-[#FBF9E9]",
		initials: "ES",
		name: "Edvin Simon",
		role: "Senior Manager",
	},
	{
		id: 3,
		quote: "The RarePixels team is indeed working in the line of their brand. I came across many teams during my professional journey but the Team RarePixels are indeed rarest RARE! I have seen them growing as a team and it's really commendable the freedom and spirit with which they enjoy working and that reflects through their creativity, makes their work very special and unique by matching the present trend & technologies.",
		bgClass: "bg-[#FCD4E9]",
		initials: "AD",
		name: "Ami Desai",
		role: "Founder",
	},
	{
		id: 4,
		quote: "Working with RarePixels team is awesome. They are a highly professional team experts in design, development and digital marketing. They analysed and integrated our needs and translated them into proposals and results that exceeded our expectations. I highly recommend this team.",
		bgClass: "bg-[#D5D8E2]",
		initials: "BY",
		name: "Bernard Saint Yves",
		role: "Director",
	},
	{
		id: 5,
		quote: "RarePixels has delivered their services with outstanding professionalism throughout. Their work is consistently creative, fresh, and always on time. They maintain clear and transparent communication. Every detail is handled with care and explained upfront. Truly a dependable and highly recommended team.",
		bgClass: "bg-[#FBF8F5]",
		initials: "CP",
		name: "Chintan Patel",
		role: "Managing Director",
	},
];

const Testimonials = () => {
	return (
		<section className='section hm-testimonial-section py-[60px]'>
			<div className="container">
				<div className="hm-testimonial-title w-[850px] max-w-full">
					<h2 className="font-semibold text-3xl">Proof Over Promises</h2>
					<p className="text-18 font-normal mt-[20px]">
						Anybody can talk about creativity. Our clients tell the story better. Behind every successful outcome is a partnership built on trust, collaboration, and shared ambition.
					</p>
				</div>

				<div className="hm-testimonial-wrapper flex justify-between gap-[40px] mt-[40px]">
					<div className="testimonial-client-video w-[690px] h-[508px] bg-[#fbf8f5] rounded-[20px]"></div>

					<div className="testimonial-swiper flex-1 min-w-0">
						<Swiper
							modules={[Autoplay]}
							slidesPerView={2}
							spaceBetween={20}
							speed={1000}
							loop={true}
							autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: false }}
							breakpoints={{
								0: { slidesPerView: 1.1 },
								401: { slidesPerView: 1.2 },
								576: { slidesPerView: 1.5 },
								1200: { slidesPerView: 1.5 },
								1440: { slidesPerView: 2 },
							}}
						>
							{testimonialsData.map((item) => (
								<SwiperSlide key={item.id} className="testimonial-swiper-slide">
									<div>
										<div className={`testimonial-client-review p-[20px] ${item.bgClass} rounded-[20px]`}>
											<p className="text-18 font-normal">{item.quote}</p>

											<div className="client-review-stars mt-[14px] flex gap-[2px]">
												{[...Array(5)].map((_, index) => (
													<Image key={index} src={`${CDN_URL}/images/homepage/testimonialvideos/testimonial-star.svg`} alt="Rating star" width={24} height={24} />
												))}
											</div>
										</div>

										<div className="testimonial-client-name flex gap-[20px] items-center mt-[14px]">
											<div className={`testi-client-initial py-[14px] px-[15px] ${item.bgClass} w-[max-content] rounded-[20px]`}>
												<span className="text-lg font-medium">{item.initials}</span>
											</div>

											<div className="testimonial-client">
												<p className="text-18 font-semibold mb-[6px]">{item.name}</p>
												<p className="text-18 font-normal">{item.role}</p>
											</div>
										</div>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;