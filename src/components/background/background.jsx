import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./background.css";

gsap.registerPlugin(ScrollTrigger);

export default function TestemunhasBackground({ className = "" }) {
  const wrapperRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const paths = gsap.utils.toArray("path");

      paths.forEach((path) => {
        const length = path.getTotalLength();

        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
          opacity: 1,
          willChange: "stroke-dashoffset",
        });
      });

      gsap.to(paths, {
        strokeDashoffset: 0,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top 60%",
          end: "bottom 90%",
          // markers: true,
          scrub: 2.5, 
        },
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`testemunhas-bg ${className}`}
      aria-hidden
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 810 405"
        preserveAspectRatio="none"
        className="testemunhas-svg"
      >
        <defs>
          <clipPath id="clipWave">
            <path d="M 55.4375 0 L 754.4375 0 L 754.4375 405 L 55.4375 405 Z" />
          </clipPath>
        </defs>

        <g clipPath="url(#clipWave)">
          <path
            transform="matrix(1.539647,0,0,1.539906,55.43727,0.0024)"
            fill="none"
            stroke="#8C6ACC"
            strokeWidth="45"
            d="M -57.001032 42.150475 C 20.246262 21.912831 77.140885 10.586549 149.339337 42.150475 C 227.565955 76.350013 253.076565 128.648772 328.469234 148.150778 C 390.623279 164.225727 465.08483 153.650303 483.79092 111.150744"
          />
          <path
            transform="matrix(1.539647,0,0,1.539906,55.43727,0.0024)"
            fill="none"
            stroke="#5c3d94"
            strokeWidth="45"
            d="M -43.394528 83.802782 C 33.85023 63.565139 90.744852 52.23632 162.943304 83.802782 C 241.172459 118.00232 266.680532 170.301079 342.073201 189.803085 C 404.229784 205.878035 478.688798 195.30261 497.394887 152.803051"
          />
          <path
            transform="matrix(1.539647,0,0,1.539906,55.43727,0.0024)"
            fill="none"
            stroke="#351968"
            strokeWidth="45"
            d="M -29.79056 126.802068 C 47.454197 106.566961 104.34882 95.238142 176.549809 126.802068 C 254.776426 161.001605 280.284499 213.302901 355.679706 232.802371 C 417.833751 248.87732 492.292765 238.301896 510.998854 195.802337"
          />
        </g>
      </svg>
    </div>
  );
}
