"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const STEPS = [
  {
    num: "01",
    phase: "Discovery & Framing",
    title: "Deconstruct the Ambition",
    desc: "We dive deep into your architecture, competitive moat, and core constraints. We filter out vanity features and pinpoint the exact technical catalyst for exponential leverage.",
    deliverables: "Technical Spec • Architecture Blueprint • Feasibility Matrix",
  },
  {
    num: "02",
    phase: "Systems Design & Prototyping",
    title: "Prototype Before Complexity",
    desc: "We shape interactive prototypes, schema definitions, and AI prompt benchmarks. We validate with real inputs before writing heavy production infrastructure.",
    deliverables: "Figma Motion Prototypes • Schema Design • Model Evaluation Benchmarks",
  },
  {
    num: "03",
    phase: "High-Velocity Engineering",
    title: "Continuous Production Sprints",
    desc: "Rigorous daily progress. Typed TypeScript and Go architectures, end-to-end integration tests, and cloud deployments you can test in staging on day one.",
    deliverables: "Clean Typed Codebase • CI/CD Automation • Zero Tech Debt",
  },
  {
    num: "04",
    phase: "Scale, Measure & Evolve",
    title: "Turn Usage Into Advantage",
    desc: "We deploy to global production, configure real-time telemetry alerts, analyze user interactions, and iterate rapidly to cement market leadership.",
    deliverables: "Live Global Production • Observability Telemetry • Long-Term Roadmap",
  },
];

export default function Process() {
  const containerRef = useRef<HTMLElement>(null);
  const lineFillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Reveal the left column text
      gsap.from(".approach-copy-inner", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      // Animated process line scrubber
      if (lineFillRef.current) {
        gsap.fromTo(
          lineFillRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".process-timeline-wrap",
              start: "top 70%",
              end: "bottom 80%",
              scrub: 0.5,
            },
          }
        );
      }

      // Step cards stagger & highlight on scroll
      const stepItems = gsap.utils.toArray<HTMLElement>(".process-step-item");
      stepItems.forEach((item) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
          x: 30,
          opacity: 0,
          duration: 0.7,
          ease: "power2.out",
        });

        ScrollTrigger.create({
          trigger: item,
          start: "top 60%",
          end: "bottom 40%",
          onEnter: () => item.classList.add("is-active-step"),
          onLeaveBack: () => item.classList.remove("is-active-step"),
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section approach-section" id="approach" ref={containerRef}>
      <div className="shell approach-grid">
        <div className="approach-copy">
          <div className="approach-copy-inner">
            <div className="kicker-wrap">
              <span className="kicker-num">03</span>
              <span className="kicker-line" />
              <span className="kicker">Execution Framework</span>
            </div>
            <h2 className="section-title">
              Small team.<br />
              Clear thinking.<br />
              <span className="gradient-highlight">Relentless delivery.</span>
            </h2>
            <p className="approach-desc">
              We eliminate traditional agency bloat and replace endless status meetings with
              working code. You partner directly with principal engineers and designers who obsess
              over every detail.
            </p>
            <div className="approach-stats-tag">
              <span className="tag-val">2–4 wks</span>
              <span className="tag-lbl">Average timeline from kick-off to first production release</span>
            </div>
            <div className="approach-cta-wrap">
              <a className="button button-ghost" href="#contact">
                <span>Start a conversation</span>
                <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-arrow">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="process-timeline-wrap">
          <div className="process-rail">
            <div className="process-rail-fill" ref={lineFillRef} />
          </div>

          <div className="process-steps">
            {STEPS.map((step) => (
              <article className="process-step-item" key={step.num}>
                <div className="step-num-node">
                  <span className="node-num">{step.num}</span>
                  <div className="node-glow" />
                </div>
                <div className="step-content">
                  <span className="step-phase-pill">{step.phase}</span>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.desc}</p>
                  <div className="step-deliverable">
                    <span className="deliv-lbl">KEY DELIVERABLES:</span>
                    <span className="deliv-val">{step.deliverables}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
