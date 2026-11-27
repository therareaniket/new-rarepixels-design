import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import './websitebutton.css';

interface WebsiteButtonProps {
  loading?: boolean;
  text?: string;
  loadingText?: string;
  darkBg?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  colors?: string[];
}

const DEFAULT_COLORS = [
  '#B8D4FF', // soft sky blue
  '#F9D5E5', // blush pink
  '#E7FBB4', // soft lime
  '#C7A4FF', // lavender
  '#F6DFAD', // warm sand
  '#E5A9B8', // dusty rose
  '#C9FCE4', // mint
];

export default function WebsiteButton({
  loading = false,
  text = 'Start your Project',
  loadingText = 'Sending...',
  darkBg = false,
  onClick,
  type = 'submit',
  colors = DEFAULT_COLORS,
}: WebsiteButtonProps) {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const circleRef = useRef<HTMLSpanElement | null>(null);
  const colorIndexRef = useRef(0);
  const [fillColor, setFillColor] = useState(colors[0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (circleRef.current) {
        gsap.set(circleRef.current, {
          scale: 0,
          xPercent: -50,
          yPercent: -50,
        });
      }
    }, btnRef);

    return () => ctx.revert();
  }, []);

  const getCircleDiameter = (x: number, y: number, width: number, height: number) => {
    const maxDx = Math.max(x, width - x);
    const maxDy = Math.max(y, height - y);
    return Math.hypot(maxDx, maxDy) * 2.2;
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (loading || !btnRef.current || !circleRef.current) return;

    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const diameter = getCircleDiameter(x, y, rect.width, rect.height);

    const nextColor = colors[colorIndexRef.current % colors.length];
    colorIndexRef.current += 1;
    setFillColor(nextColor);

    gsap.killTweensOf(circleRef.current);
    gsap.set(circleRef.current, {
      width: diameter,
      height: diameter,
      x,
      y,
      scale: 0,
      backgroundColor: nextColor,
    });

    gsap.to(circleRef.current, {
      scale: 1,
      duration: 0.45,
      ease: 'power3.out',
      overwrite: true,
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!btnRef.current || !circleRef.current) return;

    const rect = btnRef.current.getBoundingClientRect();
    const x = Math.min(Math.max(e.clientX - rect.left, 0), rect.width);
    const y = Math.min(Math.max(e.clientY - rect.top, 0), rect.height);

    gsap.killTweensOf(circleRef.current);
    gsap.to(circleRef.current, {
      x,
      y,
      scale: 0,
      duration: 0.35,
      ease: 'power2.inOut',
      overwrite: true,
    });
  };

  return (
    <button
      ref={btnRef}
      type={type}
      disabled={loading}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      title={text}
      className={`website-link text-20 px-[20px] py-[10px] rounded-[30px] w-[max-content] cursor-pointer disabled:opacity-50 ${
        darkBg ? 'dark-backg' : ''
      }`}
    >
      <span
        ref={circleRef}
        aria-hidden="true"
        className="mm-fill-circle"
        style={{ backgroundColor: fillColor }}
      />

      <span className="website-link__label">
        {loading ? loadingText : text}
        <span className="mm-cta inline-block ml-[12px] icon-hero-cta-arrow text-[16px]" />
      </span>
    </button>
  );
}