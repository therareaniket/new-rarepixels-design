import "./projects.css"

const CDN_URL = "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev";

const Projects = () => {
  	return (
    	<section className="section projects">
			<div className="container overflow-hidden">
				<div className="project-titles text-center">
                    <h2 className="mb-[20px]">Our Projects</h2>

                    <p className="text-18">A curated selection of work that reflects how we design, build, and deliver impactful digital experiences.</p>
                </div>

				<div className="projects-list w-max mt-[50px] flex gap-[40px] overflow-hidden">
					<div className="project-list w-[1000px] h-[550px] rounded-[30px] overflow-hidden">
						<video src={`${CDN_URL}/images/homepage/projects/autobot-project.mp4`} autoPlay loop playsInline muted></video>
					</div>

					<div className="project-list w-[1000px] h-[550px] rounded-[30px] overflow-hidden">
						<video src={`${CDN_URL}/images/homepage/projects/lalita-project.mp4`} loop playsInline muted></video>
					</div>

					<div className="project-list w-[1000px] h-[550px] border-1 rounded-[30px]"></div>
				</div>

				<div className="projects-controller w-max p-[6px] bg-[#EDEDED] flex items-center rounded-full">
					<button className="hover:cursor-pointer hover:bg-white px-[14px] py-[6px] transform scale-x-[-1] rounded-full leading-1" type="button" aria-label="previous-button"><span className="icon-hero-cta-arrow"></span></button>
					<button className="hover:cursor-pointer hover:bg-white px-[14px] py-[6px] rounded-full leading-1" type="button" aria-label="next-button"><span className="icon-hero-cta-arrow"></span></button>
				</div>
			</div>
		</section>
  	)
}

export default Projects