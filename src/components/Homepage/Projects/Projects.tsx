'use client'

import { useState, useRef, useEffect, useLayoutEffect, forwardRef } from "react";
import gsap from "gsap";
import "./projects.css";

const CDN_URL = "https://pub-ab3a45b6cf574e698e4911642d8b38de.r2.dev";
type ProjectItem = { id: string; title: string; videoSrc: string; thumbNail: string; foreGroundColor: "black" | "white"; };

const PROJECT_DATA: ProjectItem[] = [
    { id: "proj-1", title: "DJK", videoSrc: `${CDN_URL}/images/homepage/projects/djk-project.mp4`, thumbNail: `${CDN_URL}/images/homepage/projects/djk-project-tmbn.png`, foreGroundColor: "black" },
    { id: "proj-2", title: "A.U.T.O.B.O.T", videoSrc: `${CDN_URL}/images/homepage/projects/autobot-project.mp4`, thumbNail: `${CDN_URL}/images/homepage/projects/autobot-project-tmbn.png`, foreGroundColor: "white" },
    { id: "proj-3", title: "Cameriz", videoSrc: `${CDN_URL}/images/homepage/projects/cameriz-project.mp4`, thumbNail: `${CDN_URL}/images/homepage/projects/cameriz-project-tmbn.png`, foreGroundColor: "black" },
    { id: "proj-4", title: "DashCore", videoSrc: `${CDN_URL}/images/homepage/projects/ra-project.mp4`, thumbNail: `${CDN_URL}/images/homepage/projects/ra-project-tmbn.png`, foreGroundColor: "white" },
    { id: "proj-5", title: "Steamovap", videoSrc: `${CDN_URL}/images/homepage/projects/steamovap-project.mp4`, thumbNail: `${CDN_URL}/images/homepage/projects/steamovap-project-tmbn.png`, foreGroundColor: "black" },
    { id: "proj-6", title: "Mugoray", videoSrc: `${CDN_URL}/images/homepage/projects/mugoray-project.mp4`, thumbNail: `${CDN_URL}/images/homepage/projects/mugoray-project-tmbn.png`, foreGroundColor: "white" },
    { id: "proj-7", title: "Lalita", videoSrc: `${CDN_URL}/images/homepage/projects/lalita-project.mp4`, thumbNail: `${CDN_URL}/images/homepage/projects/lalita-project-tmbn.png`, foreGroundColor: "white" },
];

export default function Projects() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState<1 | -1>(1);

    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const prevIndexRef = useRef<number>(0);

    const handleNext = () => { setDirection(1); setActiveIndex((prev) => Math.min(prev + 1, PROJECT_DATA.length - 1));};
    const handlePrev = () => { setDirection(-1); setActiveIndex((prev) => Math.max(prev - 1, 0)); };

    const handleSetActive = (index: number) => { if (index === activeIndex) return; setDirection(index > activeIndex ? 1 : -1); setActiveIndex(index); };

    // GSAP Sliding & Tilting Animation ported from ProjectSectionDesktop.tsx
    useEffect(() => {
        if (cardRefs.current.length === 0) return;

        const previousIndex = prevIndexRef.current;
        const isMovingForward = activeIndex >= previousIndex;

        const firstCard = cardRefs.current[0];
        if (!firstCard) return;

        const style = window.getComputedStyle(firstCard.parentElement!);
        const gap = parseFloat(style.gap) || 0;
        const cardWidth = firstCard.offsetWidth;
        const stepSize = cardWidth + gap;

        const targetX = -activeIndex * stepSize;
        const baseDelay = 0.08;

        cardRefs.current.forEach((card, i) => {
            if (!card) return;

            let delay = baseDelay;

            if (isMovingForward) { if (i > previousIndex) { delay = baseDelay + 0.15 + (i - (previousIndex + 1)) * 0.08; }} 
			else { if (i < previousIndex) { delay = baseDelay + 0.15 + (previousIndex - 1 - i) * 0.08; } }

            const tiltAngle = isMovingForward ? -5 : 5;

            gsap.killTweensOf(card);

            gsap.timeline({ delay }).to(card, { x: targetX, rotation: tiltAngle, duration: 1, ease: "power4.inOut"})
                .to(card, { rotation: 0, duration: 1.5, ease: "power4.out"}, "-=0.25");
    });

        prevIndexRef.current = activeIndex;
    
	}, [activeIndex]);

  	return (
    	<section className="section projects">
			<div className="container overflow-hidden">
				<div className="project-titles text-center">
                    <h2 className="mb-[20px]">Our Projects</h2>
                    <p className="text-18">A curated selection of work that reflects how we design, build, and deliver impactful digital experiences.</p>
                </div>

				<div className="projects-lists-wrapper overflow-hidden">
					<div className="projects-list flex mt-[50px] gap-[40px] w-max">
						{PROJECT_DATA.map((project, index) => (
							<ProjectCard key={project.id} ref={(el) => { cardRefs.current[index] = el; }} project={project} index={index} isActive={index === activeIndex} onSetActive={handleSetActive}/>
						))}
					</div>
				</div>

				<div className="active-project-title-controller w-[1000px] mt-[30px] flex items-center justify-between">
					<div className="active-project-name">
						<span className="h4 font-medium text-black">
							{PROJECT_DATA[activeIndex].title}
						</span>
					</div>

					<div className="projects-controller w-max p-[2px] bg-[#EDEDED] flex items-center rounded-full " style={{ display: "flex" }}>
						<button className="hover:cursor-pointer hover:bg-white px-[14px] py-[6px] transform scale-x-[-1] rounded-full leading-1 transition-all" 
							type="button" 
							aria-label="previous-button"
							onClick={handlePrev}
							disabled={activeIndex === 0}
							style={{ cursor: activeIndex === 0 ? "not-allowed" : "pointer", opacity: activeIndex === 0 ? 0.5 : 1 }}>
							<svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.775 20L0 18.225L8.225 10L0 1.775L1.775 0L11.775 10L1.775 20Z" fill="#1C1B1F"/>
                            </svg>

						</button>

						<button className="hover:cursor-pointer hover:bg-white px-[14px] py-[6px] rounded-full leading-1 transition-all" 
							type="button" 
							aria-label="next-button"
							onClick={handleNext}
							disabled={activeIndex === PROJECT_DATA.length - 1}
							style={{ cursor: activeIndex === PROJECT_DATA.length - 1 ? "not-allowed" : "pointer", opacity: activeIndex === PROJECT_DATA.length - 1 ? 0.5 : 1 }}>
							<svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.775 20L0 18.225L8.225 10L0 1.775L1.775 0L11.775 10L1.775 20Z" fill="#1C1B1F"/>
                                </svg>
						</button>
					</div>
				</div>
			</div>
		</section>
  	);
}

interface ProjectCardProps { project: ProjectItem; index: number; isActive: boolean; onSetActive: (index: number) => void; }
const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(({ project, index, isActive, onSetActive }, ref) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);

    const cursorXTo = useRef<ReturnType<typeof gsap.quickTo> | null>(null);
    const cursorYTo = useRef<ReturnType<typeof gsap.quickTo> | null>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    useEffect(() => {
        if (!videoRef.current) return;

        if (isActive) { const playPromise = videoRef.current.play();
        if (playPromise !== undefined) { playPromise.then(() => setIsVideoPlaying(true)).catch(() => setIsVideoPlaying(false)); }
        } else { videoRef.current.pause(); videoRef.current.currentTime = 0; setIsVideoPlaying(false); }
    }, [isActive]);

    useLayoutEffect(() => {
        const cursor = cursorRef.current;
        if (!isHovering || !cursor) return;

        cursorXTo.current = gsap.quickTo(cursor, "left", { duration: 0.6, ease: "power3.out" });
        cursorYTo.current = gsap.quickTo(cursor, "top", { duration: 0.6, ease: "power3.out" });

        gsap.fromTo( cursor, { opacity: 0, scale: 0.75 }, { opacity: 1, scale: 1, duration: 0.25, ease: "power3.out", overwrite: "auto" });

        return () => { gsap.killTweensOf(cursor); cursorXTo.current = null; cursorYTo.current = null; };
    }, [isHovering]);


    const handleClick = () => { if (!isActive) { onSetActive(index); }};

    return (
        <div ref={ref} onClick={handleClick} className={`project-list w-[1000px] h-[550px] rounded-[30px] relative overflow-hidden flex-shrink-0 cursor-pointer ${isActive ? "active" : ""}`}>
			<video  ref={videoRef}  className="project-video w-full h-full object-cover"  src={project.videoSrc}  poster={project.thumbNail}  loop  muted  playsInline />

            {!isVideoPlaying && (
                <img src={project.thumbNail}  alt={project.title}  className="absolute top-0 left-0 w-full h-full object-cover z-[1] pointer-events-none" />
            )}
        </div>
    );
});

ProjectCard.displayName = "ProjectCard";