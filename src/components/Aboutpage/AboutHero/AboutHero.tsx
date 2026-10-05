"use client";

import './abouthero.css'

const AboutHero = () => {
	return (
		<section id='first-section'>
			<div className="abt-hero-video w-[100%] h-[100vh]">
				<video className='w-[100%] h-[100%] object-cover' src="https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev/images/aboutpage/about-hero/rare-second-anniversary.mp4" playsInline autoPlay muted loop width={1920} height={800}></video>
			</div>

			<div className="abt-video-text">
				<h1 className="font-black">ABOUT US</h1>
			</div>

			<div className="section">
				<div className="container-sm">
					<div className="abt-hero-title flex items-start justify-between">
						<h2 className='font-semibold w-[626px] h1'>The People, Purpose, and Principles Behind RarePixels.</h2>

						<p className='text-18 font-normal w-[687px] flex flex-col gap-[18px]'>
							<span>RarePixels brings curious minds, creative thinkers, and problem-solvers into the same room. We question what exists, explore what could be, and turn thoughts into experiences that have a reason to exist.</span>

							<span>Because great work isn&apos;t about making things look good and calling it done. It&apos;s about understanding the problem, finding the right direction, and creating something that works for the people and the business behind it. We believe the best results come through different perspectives, honest conversations, and a shared ambition to make every project better than where it started.</span>
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutHero