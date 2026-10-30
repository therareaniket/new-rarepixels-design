"use client";
import { useEffect, useRef, type VideoHTMLAttributes } from "react";

type Props = Omit<VideoHTMLAttributes<HTMLVideoElement>, "src" | "preload"> & {
  src: string;
  load: boolean;               // parent decides when the file may download
  playWhenVisible?: boolean;   // play only while actually on screen
};

export default function LazyVideo({ src, load, playWhenVisible = false, ...rest }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !load || !playWhenVisible) return;
    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? el.play().catch(() => {}) : el.pause()),
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [load, playWhenVisible]);

  return (
    <video
      ref={ref}
      src={load ? src : undefined}
      preload={load ? "auto" : "none"}
      muted
      playsInline
      {...rest}
    />
  );
}