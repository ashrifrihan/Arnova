"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const EXPERIMENTS = [
  {
    id: "exp-1",
    tag: "EXP_01 // AGENT REASONING",
    title: "Self-Refining Multi-Agent Consensus",
    desc: "Autonomous supervisor agents that cross-validate intermediate reasoning paths using tree-search heuristics.",
    metric: "99.8%",
    metricLabel: "Verification Consistency",
    activeNodes: "12 Parallel Workers",
  },
  {
    id: "exp-2",
    tag: "EXP_02 // EDGE INFERENCE",
    title: "Sub-Millisecond Quantized Models",
    desc: "Running low-bit INT4 transformer models natively on Cloudflare Workers and WASM edge nodes with zero cold-starts.",
    metric: "4.2ms",
    metricLabel: "Cold-Start Latency",
    activeNodes: "28 Global Points of Presence",
  },
  {
    id: "exp-3",
    tag: "EXP_03 // NEURAL RENDERING",
    title: "WebGPU Spatial Data Visualizer",
    desc: "Streaming multi-million vector embeddings directly into browser GPU compute buffers for interactive cluster exploration.",
    metric: "120 FPS",
    metricLabel: "Hardware Render Rate",
    activeNodes: "10M Point Projections",
  },
];

export default function Lab() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeExp, setActiveExp] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Lab Section Entrance
      gsap.from(".lab-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 78%",
        },
        scale: 0.95,
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      // Lab Rings Continuous Rotation
      gsap.to(".ring-spin-fast", {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
      });
      gsap.to(".ring-spin-slow", {
        rotation: -360,
        duration: 36,
        repeat: -1,
        ease: "none",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const cur = EXPERIMENTS[activeExp];

  return (
    <section className="section shell lab-section" id="lab" ref={containerRef}>
      <div className="lab-card">
        <div className="lab-copy">
          <div className="kicker-wrap">
            <span className="kicker-num">04</span>
            <span className="kicker-line" />
            <span className="kicker">Arnova Research Lab</span>
          </div>
          <h2 className="section-title">
            Where emerging tech<br />becomes practical leverage.
          </h2>
          <p className="lab-lead">
            We spend 20% of our engineering bandwidth prototyping breakthroughs before they become
            industry standards. Clients gain early access to our proprietary experiments and frameworks.
          </p>

          <div className="lab-experiment-selectors">
            <div className="exp-selector-label">SELECT EXPERIMENT:</div>
            <div className="exp-tabs">
              {EXPERIMENTS.map((exp, idx) => (
                <button
                  key={exp.id}
                  className={`exp-tab-btn ${activeExp === idx ? "is-active" : ""}`}
                  onClick={() => setActiveExp(idx)}
                >
                  <span className="exp-tab-no">0{idx + 1}</span>
                  <span className="exp-tab-title">{exp.tag.split("//")[1]}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="active-exp-details">
            <div className="active-exp-tag">{cur.tag}</div>
            <h3 className="active-exp-title">{cur.title}</h3>
            <p className="active-exp-desc">{cur.desc}</p>
            <div className="active-exp-metrics">
              <div className="exp-metric-pill">
                <span className="exp-val">{cur.metric}</span>
                <span className="exp-lbl">{cur.metricLabel}</span>
              </div>
              <div className="exp-metric-pill">
                <span className="exp-val-text">{cur.activeNodes}</span>
                <span className="exp-lbl">Target Environment</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lab-visual">
          <div className="scanline" />
          <div className="lab-grid-overlay" />

          {/* Concentric orbital rings */}
          <div className="lab-ring ring-1" />
          <div className="lab-ring ring-2 ring-spin-fast" />
          <div className="lab-ring ring-3 ring-spin-slow" />
          <div className="lab-ring ring-4" />

          {/* Central Lab Core */}
          <div className="lab-center">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="lab-core-icon">
              <circle cx="12" cy="12" r="2.5" />
              <path d="M4.6 6.8c2.1-3 6.8-3.1 10.6-.3s5.2 7.3 3.1 10.2c-2.1 3-6.8 3.1-10.6.3S2.5 9.8 4.6 6.8Z" />
              <path d="M19.4 6.8c-2.1-3-6.8-3.1-10.6-.3S3.6 13.8 5.7 16.7c2.1 3 6.8 3.1 10.6.3s5.2-7.2 3.1-10.2Z" />
            </svg>
            <div className="lab-center-glow" />
          </div>

          {/* Telemetry note tags */}
          <span className="lab-note note-1">
            <span className="note-dot green-dot" /> STREAM: ACTIVE
          </span>
          <span className="lab-note note-2">
            <span className="note-dot cyan-dot" /> SYNC: 99.98%
          </span>
          <span className="lab-note note-3">
            <span className="note-dot purple-dot" /> ENCRYPTION: AES-256-GCM
          </span>

          <div className="lab-telemetry-hud">
            <span>RUNNING BENCHMARKS // SHARD_US_EAST_01</span>
          </div>
        </div>
      </div>
    </section>
  );
}
