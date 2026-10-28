'use client';

import './bloglistingcard.css'
import { Tabs, TabsContent, TabsList, TabsTrigger, } from "@/components/ui/tabs"

const BlogListingCards = () => {

	return (
		<section className='section' style={{ paddingTop: 0 }} >
			<div className="container-sm">
				<div className="bloglisting-title-wrapper w-[780px]">
					<h2 className='font-semibold'>Top Picks</h2>
					<p className='text-18 font-normal mt-[30px]'>A collection of thoughts, learnings, and perspectives from our work in design, technology, and building impactful digital experiences.</p>
				</div>

				<Tabs defaultValue="overview" className="bloglisting-layout">
					<TabsList className="bloglisting-tab-wrapper">
						<TabsTrigger className="blog-listing-tab text-18 font-normal py-[6px] px-[20px] border border-[#D9D9D9] rounded-[20px] cursor-pointer" value="All">All</TabsTrigger>
						<TabsTrigger className="blog-listing-tab text-18 font-normal py-[6px] px-[20px] border border-[#D9D9D9] rounded-[20px] cursor-pointer" value="Branding">Branding</TabsTrigger>
						<TabsTrigger className="blog-listing-tab text-18 font-normal py-[6px] px-[20px] border border-[#D9D9D9] rounded-[20px] cursor-pointer" value="Comic">Comic</TabsTrigger>
						<TabsTrigger className="blog-listing-tab text-18 font-normal py-[6px] px-[20px] border border-[#D9D9D9] rounded-[20px] cursor-pointer" value="Life at Rarepixels">Life at Rarepixels</TabsTrigger>
						<TabsTrigger className="blog-listing-tab text-18 font-normal py-[6px] px-[20px] border border-[#D9D9D9] rounded-[20px] cursor-pointer" value="Technical">Technical</TabsTrigger>
						<TabsTrigger className="blog-listing-tab text-18 font-normal py-[6px] px-[20px] border border-[#D9D9D9] rounded-[20px] cursor-pointer" value="UI/UX">UI/UX</TabsTrigger>
						{/* <TabsTrigger className="text-18 font-normal py-[6px] px-[20px] border border-[#D9D9D9] rounded-[20px] cursor-pointer" value="Business Tips">Business Tips</TabsTrigger> */}
					</TabsList>

					<div className="bloglisting-content-wrapper">
						<TabsContent value="All">
							<div className="blog-listing-card-wrapper flex gap-[40px]">
								<div className="blog-listing-card">
									<div className="blog-listing-image w-[100%] h-[350px] rounded-[20px] bg-[red]"></div>
									<h3 className='font-semibold mt-[20px]'>RarePixels Turns 2. The Big Game Is Still Loading.</h3>
								</div>
								<div className="blog-listing-card">
									<div className="blog-listing-image w-[100%] h-[350px] rounded-[20px] bg-[red]"></div>
									<h3 className='font-semibold mt-[20px]'>RarePixels Turns 2. The Big Game Is Still Loading.</h3>
								</div>
								<div className="blog-listing-card">
									<div className="blog-listing-image w-[100%] h-[350px] rounded-[20px] bg-[red]"></div>
									<h3 className='font-semibold mt-[20px]'>RarePixels Turns 2. The Big Game Is Still Loading.</h3>
								</div>
								<div className="blog-listing-card">
									<div className="blog-listing-image w-[100%] h-[350px] rounded-[20px] bg-[red]"></div>
									<h3 className='font-semibold mt-[20px]'>RarePixels Turns 2. The Big Game Is Still Loading.</h3>
								</div>
								<div className="blog-listing-card">
									<div className="blog-listing-image w-[100%] h-[350px] rounded-[20px] bg-[red]"></div>
									<h3 className='font-semibold mt-[20px]'>RarePixels Turns 2. The Big Game Is Still Loading.</h3>
								</div>
							</div>
						</TabsContent>

						<TabsContent value="Branding">
							<div className="blog-listing-card-wrapper flex gap-[40px]">
								<div className="blog-listing-card"></div>
								<div className="blog-listing-card"></div>
							</div>
						</TabsContent>

						<TabsContent value="Comic">
							<div className="blog-listing-card-wrapper flex gap-[40px]">
								<div className="blog-listing-card"></div>
								<div className="blog-listing-card"></div>
							</div>
						</TabsContent>

						<TabsContent value="Life at Rarepixels">
							<div className="blog-listing-card-wrapper flex gap-[40px]">
								<div className="blog-listing-card"></div>
								<div className="blog-listing-card"></div>
							</div>
						</TabsContent>

						<TabsContent value="Technical">
							<div className="blog-listing-card-wrapper flex gap-[40px]">
								<div className="blog-listing-card"></div>
								<div className="blog-listing-card"></div>
							</div>
						</TabsContent>

						<TabsContent value="UI/UX">
							<div className="blog-listing-card-wrapper flex gap-[40px]">
								<div className="blog-listing-card"></div>
								<div className="blog-listing-card"></div>
							</div>
						</TabsContent>
					</div>
				</Tabs>
			</div>
		</section>
	)
}

export default BlogListingCards