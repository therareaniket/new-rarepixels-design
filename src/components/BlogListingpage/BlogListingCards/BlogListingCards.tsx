'use client';

import './bloglistingcard.css'

// import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger, } from "@/components/ui/tabs"

const BlogListingCards = () => {
	return (
		<section className='section' style={{ paddingTop: 0 }} >
			<div className="container-sm">
				<div className="bloglisting-title-wrapper w-[780px]">
					<h2 className='font-semibold'>Top Picks</h2>
					<p className='text-18 font-normal mt-[30px]'>A collection of thoughts, learnings, and perspectives from our work in design, technology, and building impactful digital experiences.</p>
				</div>

				<Tabs defaultValue="overview" className="mt-[50px]">
					<TabsList className="bloglisting-tab-wrapper">
						<TabsTrigger className="text-18 font-normal py-[6px] px-[20px] border border-[#D9D9D9] rounded-[20px] cursor-pointer" value="All">All</TabsTrigger>
						<TabsTrigger className="text-18 font-normal py-[6px] px-[20px] border border-[#D9D9D9] rounded-[20px] cursor-pointer" value="UI/UX Design">UI/UX Design</TabsTrigger>
						<TabsTrigger className="text-18 font-normal py-[6px] px-[20px] border border-[#D9D9D9] rounded-[20px] cursor-pointer" value="Web Development">Web Development</TabsTrigger>
						<TabsTrigger className="text-18 font-normal py-[6px] px-[20px] border border-[#D9D9D9] rounded-[20px] cursor-pointer" value="Brand Identity">Brand Identity</TabsTrigger>
						<TabsTrigger className="text-18 font-normal py-[6px] px-[20px] border border-[#D9D9D9] rounded-[20px] cursor-pointer" value="Social Media">Social Media</TabsTrigger>
						<TabsTrigger className="text-18 font-normal py-[6px] px-[20px] border border-[#D9D9D9] rounded-[20px] cursor-pointer" value="Print & Graphics">Print & Graphics</TabsTrigger>
						<TabsTrigger className="text-18 font-normal py-[6px] px-[20px] border border-[#D9D9D9] rounded-[20px] cursor-pointer" value="Business Tips">Business Tips</TabsTrigger>
					</TabsList>
					{/* <TabsContent value="overview">
						<Card>
							<CardHeader>
								<CardTitle>Overview</CardTitle>
								<CardDescription>
									View your key metrics and recent project activity. Track progress
									across all your active projects.
								</CardDescription>
							</CardHeader>
							<CardContent className="text-sm text-muted-foreground">
								You have 12 active projects and 3 pending tasks.
							</CardContent>
						</Card>
					</TabsContent>
					<TabsContent value="analytics">
						<Card>
							<CardHeader>
								<CardTitle>Analytics</CardTitle>
								<CardDescription>
									Track performance and user engagement metrics. Monitor trends and
									identify growth opportunities.
								</CardDescription>
							</CardHeader>
							<CardContent className="text-sm text-muted-foreground">
								Page views are up 25% compared to last month.
							</CardContent>
						</Card>
					</TabsContent>
					<TabsContent value="reports">
						<Card>
							<CardHeader>
								<CardTitle>Reports</CardTitle>
								<CardDescription>
									Generate and download your detailed reports. Export data in
									multiple formats for analysis.
								</CardDescription>
							</CardHeader>
							<CardContent className="text-sm text-muted-foreground">
								You have 5 reports ready and available to export.
							</CardContent>
						</Card>
					</TabsContent>
					<TabsContent value="settings">
						<Card>
							<CardHeader>
								<CardTitle>Settings</CardTitle>
								<CardDescription>
									Manage your account preferences and options. Customize your
									experience to fit your needs.
								</CardDescription>
							</CardHeader>
							<CardContent className="text-sm text-muted-foreground">
								Configure notifications, security, and themes.
							</CardContent>
						</Card>
					</TabsContent> */}
				</Tabs>
			</div>
		</section>
	)
}

export default BlogListingCards