"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface StatItem {
  target: number;
  suffix: string;
  prefix?: string;
  decimals?: number;
  label: string;
  detail: string;
}

const STATS: StatItem[] = [
  {
    target: 99.98,
    suffix: "%",
    decimals: 2,
    label: "Production Uptime",
    detail: "High-availability multi-region cluster SLA",
  },
  {
    target: 48,
    prefix: "",
    suffix: "+",
    decimals: 0,
    label: "Platforms Deployed",
    detail: "From seed-stage MVPs to Series-C enterprise",
  },
  {
    target: 140,
    prefix: "$",
    suffix: "M+",
    decimals: 0,
    label: "Client Value Generated",
    detail: "Capital raised and enterprise value accelerated",
  },
  {
    target: 14,
    prefix: "< ",
    suffix: "ms",
    decimals: 0,
    label: "Global Edge Latency",
    detail: "Distributed vector cache and instant response",
  },
];

export default function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Reveal the entire stats grid
      gsap.from(".stat-box", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          once: true,
        },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.9,
        ease: "power3.out",
      });

      // Animate each number up when in view
      STATS.forEach((stat, index) => {
        const el = numberRefs.current[index];
        if (!el) return;

        const obj = { val: 0 };

        gsap.to(obj, {
          val: stat.target,
          duration: 2.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
          onUpdate: () => {
            if (el) {
              const formatted = stat.decimals
                ? obj.val.toFixed(stat.decimals)
                : Math.floor(obj.val).toString();
              el.innerText = `${stat.prefix || ""}${formatted}${stat.suffix}`;
            }
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="stats-section shell" ref={containerRef}>
      <div className="stats-grid">
        {STATS.map((stat, i) => (
          <div className="stat-box" key={i}>
            <div className="stat-number-wrap">
              <span
                className="stat-number"
                ref={(el) => {
                  numberRefs.current[i] = el;
                }}
              >
                {stat.prefix || ""}0{stat.suffix}
              </span>
            </div>
            <h3 className="stat-label">{stat.label}</h3>
            <p className="stat-detail">{stat.detail}</p>
            <div className="stat-corner-accent" />
          </div>
        ))}
      </div>
    </section>
  );
}
