"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const MARQUEE_ITEMS = [
  "ARTIFICIAL INTELLIGENCE",
  "AUTONOMOUS AGENT SWARMS",
  "ENTERPRISE CLOUD ARCHITECTURE",
  "VECTOR RETRIEVAL & RAG",
  "DISTRIBUTED SYSTEMS",
  "HIGH-FREQUENCY APIS",
  "NEXT.JS & REACT 19",
  "SECURE DATA PIPELINES",
  "SUB-MILLISECOND INFERENCE",
];

export default function Marquee() {
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = tickerRef.current;
    if (!el) return;

    // Smooth continuous ticker loop using GSAP
    const tween = gsap.to(el, {
      xPercent: -50,
      ease: "none",
      duration: 28,
      repeat: -1,
    });

    const handleMouseEnter = () => tween.timeScale(0.4);
    const handleMouseLeave = () => tween.timeScale(1);

    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      tween.kill();
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Duplicate items twice to ensure seamless continuous loop
  const displayItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <section className="signal-strip">
      <div className="marquee-wrapper">
        <div className="marquee-track" ref={tickerRef}>
          {displayItems.map((item, idx) => (
            <div className="marquee-item" key={idx}>
              <span className="marquee-text">{item}</span>
              <span className="marquee-separator">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
