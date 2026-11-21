"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

interface SlideUpTextProps {
	text: string;
	subtitle?: string;
	triggerKey: string | number;
	direction?: number; // 1 = scrolling down, -1 = scrolling up
	className?: string;
	subtitleClassName?: string;
}

const SlideUpText = ({
	text,
	subtitle,
	triggerKey,
	direction = 1,
	className = "",
	subtitleClassName = "",
}: SlideUpTextProps) => {
	const titleWrapRef = useRef<HTMLDivElement>(null);
	const subtitleWrapRef = useRef<HTMLDivElement>(null);
	const titleSplitRef = useRef<SplitText | null>(null);
	const subtitleSplitRef = useRef<SplitText | null>(null);
	const outTlRef = useRef<gsap.core.Timeline | null>(null);
	const inTlRef = useRef<gsap.core.Timeline | null>(null);
	const isFirstRenderRef = useRef(true);
	const latestDirectionRef = useRef<number>(direction);

	const [displayText, setDisplayText] = useState(text);
	const [displaySubtitle, setDisplaySubtitle] = useState(subtitle);
	const [inWaveTick, setInWaveTick] = useState(0);

	useEffect(() => {
		latestDirectionRef.current = direction;
	}, [direction]);

	useEffect(() => {
		if (isFirstRenderRef.current) {
			isFirstRenderRef.current = false;
			setDisplayText(text);
			setDisplaySubtitle(subtitle);
			return;
		}

		outTlRef.current?.kill();
		inTlRef.current?.kill();

		const isUp = latestDirectionRef.current === -1;
		const titleOutY = isUp ? 80 : -80;
		const subOutY = isUp ? 80 : -80;
		const staggerFrom: "start" | "end" = isUp ? "end" : "start";

		const titleEl = titleWrapRef.current;
		const subtitleEl = subtitleWrapRef.current;
		const titleTarget = titleEl?.querySelector<HTMLElement>(".char-split");
		const subtitleTarget = subtitleEl?.querySelector<HTMLElement>(".word-split");

		if (titleTarget && !titleSplitRef.current) {
			titleSplitRef.current = SplitText.create(titleTarget, { type: "chars" });
		}
		if (subtitleTarget && !subtitleSplitRef.current) {
			subtitleSplitRef.current = SplitText.create(subtitleTarget, {
				type: "words",
			});
		}

		const chars = titleSplitRef.current?.chars ?? [];
		const words = subtitleSplitRef.current?.words ?? [];

		const tl = gsap.timeline();
		outTlRef.current = tl;

		if (chars.length > 0) {
			tl.to(
				chars,
				{ y: titleOutY, opacity: 0, duration: 0.45, stagger: { amount: 0.35, from: staggerFrom }, ease: "power3.out", force3D: true, },
				0
			);
		} else if (titleEl) {
			tl.to(
				titleEl,
				{ y: titleOutY, opacity: 0, duration: 0.45, ease: "power3.out", force3D: true },
				0
			);
		}

		if (words.length > 0) {
			tl.to(
				words,
				{ y: subOutY, opacity: 0, duration: 0.42, stagger: { amount: 0.1, from: staggerFrom }, ease: "power2.in", force3D: true, },
				0.02
			);
		} else if (subtitleEl) {
			tl.to(
				subtitleEl,
				{ y: subOutY, opacity: 0, duration: 0.45, ease: "power2.in", force3D: true },
				0.02
			);
		}

		tl.add(() => {
			titleSplitRef.current?.revert();
			titleSplitRef.current = null;
			subtitleSplitRef.current?.revert();
			subtitleSplitRef.current = null;

			if (titleEl) gsap.set(titleEl, { opacity: 0 });
			if (subtitleEl) gsap.set(subtitleEl, { opacity: 0 });

			setDisplayText(text);
			setDisplaySubtitle(subtitle);
			setInWaveTick((prev) => prev + 1);
		});

		return () => {
			tl.kill();
		};
	}, [triggerKey, text, subtitle]);

	useLayoutEffect(() => {
		if (inWaveTick === 0) return;

		inTlRef.current?.kill();

		const isUp = latestDirectionRef.current === -1;
		const titleInStartY = isUp ? -80 : 80;
		const subInStartY = isUp ? -28 : 28;
		const staggerFrom: "start" | "end" = isUp ? "end" : "start";

		const titleEl = titleWrapRef.current;
		const subtitleEl = subtitleWrapRef.current;
		const titleTarget = titleEl?.querySelector<HTMLElement>(".char-split");
		const subtitleTarget = subtitleEl?.querySelector<HTMLElement>(".word-split");

		titleSplitRef.current?.revert();
		titleSplitRef.current = null;
		subtitleSplitRef.current?.revert();
		subtitleSplitRef.current = null;

		if (titleTarget) {
			titleSplitRef.current = SplitText.create(titleTarget, { type: "chars" });
		}
		if (subtitleTarget) {
			subtitleSplitRef.current = SplitText.create(subtitleTarget, {
				type: "words",
			});
		}

		const nextChars = titleSplitRef.current?.chars ?? [];
		const nextWords = subtitleSplitRef.current?.words ?? [];

		if (titleEl) gsap.set(titleEl, { opacity: 1 });
		if (subtitleEl) gsap.set(subtitleEl, { opacity: 1 });
		if (nextChars.length > 0) {
			gsap.set(nextChars, { y: titleInStartY, opacity: 0, force3D: true });
		}
		if (nextWords.length > 0) {
			gsap.set(nextWords, { y: subInStartY, opacity: 0, force3D: true });
		}

		const inTl = gsap.timeline();
		inTlRef.current = inTl;

		if (nextChars.length > 0) {
			inTl.to(
				nextChars,
				{ y: 0, opacity: 1, duration: 0.45, stagger: { amount: 0.32, from: staggerFrom }, ease: "power3.out", force3D: true, clearProps: "transform", },
				0
			);
		} else if (titleEl) {
			inTl.fromTo(
				titleEl,
				{ y: titleInStartY, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.45, ease: "power3.out", force3D: true, clearProps: "transform" },
				0
			);
		}

		if (nextWords.length > 0) {
			inTl.to(
				nextWords,
				{ y: 0, opacity: 1, duration: 0.45, stagger: { amount: 0.12, from: staggerFrom }, ease: "power3.out", force3D: true, clearProps: "transform", },
				0.02
			);
		} else if (subtitleEl) {
			inTl.fromTo(
				subtitleEl,
				{ y: subInStartY, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.45, ease: "power3.out", force3D: true, clearProps: "transform" },
				0.02
			);
		}

		return () => {
			inTl.kill();
		};
	}, [inWaveTick, displayText, displaySubtitle]);

	useEffect(() => {
		return () => {
			outTlRef.current?.kill();
			inTlRef.current?.kill();
			titleSplitRef.current?.revert();
			titleSplitRef.current = null;
			subtitleSplitRef.current?.revert();
			subtitleSplitRef.current = null;
		};
	}, []);

	return (
		<div>
			<div className="">
				<div ref={titleWrapRef}>
					<h2 className={`${className} char-split`}>{displayText}</h2>
				</div>
			</div>

			{typeof displaySubtitle === "string" && (
				<div className="mt-[32px]">
					<div ref={subtitleWrapRef}>
						<p className={`${subtitleClassName} word-split`}>{displaySubtitle}</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default SlideUpText;