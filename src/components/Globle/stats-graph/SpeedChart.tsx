'use client';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function SpeedChart() {
  const [value, setValue] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const size = 360;
  const strokeWidth = 30;
  const center = size / 2;
  const radius = (size - strokeWidth - 80) / 2;
  const circumference = Math.PI * radius;

  const clampedValue = Math.min(Math.max(value, 0), 100);
  
  const strokeDashoffset = circumference - (clampedValue / 100) * circumference;

  const needleAngle = -90 + (clampedValue / 100) * 180;

  const ticks = Array.from({ length: 11 }, (_, i) => i * 10);

  useEffect(() => {
    const animationObj = { val: 0 };
    const calculatedDelay = window.innerWidth < 576 ? 0.2 : window.innerWidth > 768 ? 3 : 1;
    gsap.set(containerRef.current, { opacity: 0 });

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.to(containerRef.current, {
          opacity: 1,
          duration: 1.5,
          delay: calculatedDelay,
          ease: 'power2.out',
        });

        gsap.to(animationObj, {
          val: 98,
          duration: 1.5,
          delay: calculatedDelay,
          ease: 'power2.out',
          onUpdate: () => {
            setValue(animationObj.val);
          },
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col items-center justify-center w-full max-w-[360px] mx-auto p-4 opacity-0" >
      <div className="relative w-full aspect-[2/1.2] flex justify-center items-center">
        <svg viewBox={`0 0 ${size} ${size / 2 + 50}`} className="w-full h-auto overflow-visible">
          <path d={`M ${center - radius} ${center} A ${radius} ${radius} 0 0 1 ${center + radius} ${center}`} fill="none" stroke="#dddddd" strokeWidth={strokeWidth} strokeLinecap="butt" />

          <path
            d={`M ${center - radius} ${center} A ${radius} ${radius} 0 0 1 ${center + radius} ${center}`}
            fill="none"
            stroke="#C6D9C6"
            strokeWidth={strokeWidth}
            strokeLinecap="butt"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
          />


          {ticks.map((tick) => {
            const angle = -90 + (tick / 100) * 180;
            const angleRad = (angle * Math.PI) / 180;
            const labelRadius = radius + strokeWidth + 18;
            const x = center + labelRadius * Math.sin(angleRad);
            const y = center - labelRadius * Math.cos(angleRad);

            return (
              <text key={tick} x={x} y={y} fill="white" fontSize="12" fontWeight="500" textAnchor="middle" dominantBaseline="middle">
                {/* {tick}% */}
              </text>
            );
          })}

          <g style={{ transform: `translate(${center}px, ${center}px) rotate(${needleAngle}deg)`, transformOrigin: '0px 0px', }} >
            <polygon points={`-${strokeWidth / 4},0 0,-${radius * 0.85} ${strokeWidth / 4},0`} fill="#C6D9C6" />

            <circle r={strokeWidth / 3 + 2} fill="#C6D9C6" />
          </g>
        </svg>
      </div>
    </div>
  );
}