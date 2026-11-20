"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

interface SlideUpTextProps {
	text: string;
	subtitle?: string;
	triggerKey: string | number;
	className?: string;
	subtitleClassName?: string;
}

const SlideUpText = ({
	text,
	subtitle,
	triggerKey,
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

	const [displayText, setDisplayText] = useState(text);
	const [displaySubtitle, setDisplaySubtitle] = useState(subtitle);
	const [inWaveTick, setInWaveTick] = useState(0);

	useEffect(() => {
		if (isFirstRenderRef.current) {
			isFirstRenderRef.current = false;
			setDisplayText(text);
			setDisplaySubtitle(subtitle);
			return;
		}

		outTlRef.current?.kill();
		inTlRef.current?.kill();

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

		// Outgoing wave: faster lift & fade out
		if (chars.length > 0) {
			tl.to(
				chars,
				{  y: -80, opacity: 0, duration: 0.45, stagger: { amount: 0.35, from: "start" }, ease: "power3.out", force3D: true, },
				0
			);
		} else if (titleEl) {
			tl.to(
				titleEl,
				{ y: -80, opacity: 0, duration: 0.45, ease: "power3.out", force3D: true, },
				0
			);
		}

		if (words.length > 0) {
			tl.to(
				words,
				{ y: -24, opacity: 0, duration: 0.42, stagger: { amount: 0.1, from: "start" }, ease: "power2.in", force3D: true, },
				0.02
			);
		} else if (subtitleEl) {
			tl.to(
				subtitleEl,
				{ y: -16, opacity: 0, duration: 0.45, ease: "power2.in", force3D: true, },
				0.02
			);
		}

		// Revert SplitText DOM wrappers before React updates text so no ghost nodes remain
		tl.add(() => {
			titleSplitRef.current?.revert();
			titleSplitRef.current = null;
			subtitleSplitRef.current?.revert();
			subtitleSplitRef.current = null;

			// Hide wrappers before React paints new text to prevent 1-frame flash
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

		// Immediately position incoming elements at starting offset & opacity 0 before browser paints
		if (titleEl) gsap.set(titleEl, { opacity: 1 });
		if (subtitleEl) gsap.set(subtitleEl, { opacity: 1 });
		if (nextChars.length > 0) {
			gsap.set(nextChars, { y: 80, opacity: 0, force3D: true });
		}
		if (nextWords.length > 0) {
			gsap.set(nextWords, { y: 28, opacity: 0, force3D: true });
		}

		const inTl = gsap.timeline();
		inTlRef.current = inTl;

		// Incoming wave: faster slide up from bottom
		if (nextChars.length > 0) {
			inTl.to(
				nextChars,
				{ y: 0, opacity: 1, duration: 0.45, stagger: { amount: 0.32, from: "start" }, ease: "power3.out", force3D: true, clearProps: "transform", },
				0
			);
		} else if (titleEl) {
			inTl.fromTo(
				titleEl,
				{ y: 80, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.45, ease: "power3.out", force3D: true, clearProps: "transform", },
				0
			);
		}

		// Incoming wave: new subtitle words slide up from bottom
		if (nextWords.length > 0) {
			inTl.to(
				nextWords,
				{ y: 0, opacity: 1, duration: 0.45, stagger: { amount: 0.12, from: "start" }, ease: "power3.out", force3D: true, clearProps: "transform", },
				0.02
			);
		} else if (subtitleEl) {
			inTl.fromTo(
				subtitleEl,
				{ y: 24, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.45, ease: "power3.out", force3D: true, clearProps: "transform", },
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
				<div className=" mt-[32px]">
					<div ref={subtitleWrapRef}>
						<p className={`${subtitleClassName} word-split`}>{displaySubtitle}</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default SlideUpText;