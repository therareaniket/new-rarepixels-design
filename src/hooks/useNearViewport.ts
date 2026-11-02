"use client";
import { useEffect, useRef, useState } from "react";

export function useNearViewport<T extends Element>(rootMargin = "600px 0px") {
	const ref = useRef<T>(null);
	const [near, setNear] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el || near) return;
		const io = new IntersectionObserver(([entry]) => {
		if (entry.isIntersecting) { setNear(true); io.disconnect(); }
		}, { rootMargin });
		io.observe(el);
		return () => io.disconnect();
	}, [near, rootMargin]);

  	return [ref, near] as const;
}