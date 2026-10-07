"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Project {
  id: string;
  client: string;
  title: string;
  year: string;
  category: string;
  summary: string;
  results: string[];
  stack: string[];
  color: string;
  gradient: string;
  metric: string;
  metricLabel: string;
}

const PROJECTS: Project[] = [
  {
    id: "krypton",
    client: "Krypton Systems",
    title: "Autonomous Agent Swarm & Reasoning Platform",
    year: "2026",
    category: "AI & Distributed Systems",
    summary:
      "Engineered an autonomous multi-agent orchestration fabric that decomposes enterprise compliance pipelines into verifiable reasoning steps with human-in-the-loop oversight.",
    results: [
      "4.8x faster operational throughput",
      "99.4% structured validation accuracy",
      "Processed 14M+ regulatory transactions",
    ],
    stack: ["Autonomous Agents", "Vector Embeddings", "FastAPI", "React 19", "PostgreSQL"],
    color: "#8dff5a",
    gradient: "linear-gradient(135deg, rgba(141,255,90,0.15) 0%, rgba(6,7,9,0.9) 100%)",
    metric: "4.8x",
    metricLabel: "Throughput Acceleration",
  },
  {
    id: "apex",
    client: "Apex Cloud",
    title: "Global Multi-Tenant Edge Infrastructure",
    year: "2025",
    category: "Cloud Architecture & High Throughput",
    summary:
      "Designed an ultra-low-latency edge computing layer with automatic regional routing, distributed in-memory state coordination, and automated fault recovery.",
    results: [
      "Sub-15ms median edge latency worldwide",
      "120,000 requests/sec peak sustained load",
      "99.999% uptime achieved across 28 regions",
    ],
    stack: ["Rust", "Go", "Docker", "Kubernetes", "Next.js", "Redis Clustered"],
    color: "#54d7ff",
    gradient: "linear-gradient(135deg, rgba(84,215,255,0.15) 0%, rgba(6,7,9,0.9) 100%)",
    metric: "<15ms",
    metricLabel: "Median Global Latency",
  },
  {
    id: "omnidata",
    client: "OmniData Systems",
    title: "Enterprise Knowledge Retrieval & Vector Search Engine",
    year: "2025",
    category: "Data Infrastructure & Vector Search",
    summary:
      "Developed an enterprise retrieval engine connecting fragmented corporate documentation with sub-50ms hybrid semantic search and strict role-based access control.",
    results: [
      "74% reduction in internal knowledge retrieval time",
      "Real-time vector indexing across 10M+ documents",
      "SOC2 Type II hardened zero-trust permissions model",
    ],
    stack: ["Vector Search", "Python", "Next.js", "TypeScript", "Hybrid RAG"],
    color: "#bf77ff",
    gradient: "linear-gradient(135deg, rgba(191,119,255,0.15) 0%, rgba(6,7,9,0.9) 100%)",
    metric: "74%",
    metricLabel: "Search Speedup",
  },
  {
    id: "synthetix",
    client: "Synthetix Cloud",
    title: "Developer API Platform & Real-Time Telemetry Engine",
    year: "2025",
    category: "Developer Tools & Cloud Observability",
    summary:
      "Built a high-performance developer console with real-time log streaming, usage quota management, and millisecond edge telemetry coordination.",
    results: [
      "140M+ monthly API requests processed with sub-10ms latency",
      "Zero UI frame drops under high-throughput event spikes",
      "Integrated automated billing and token usage auditing",
    ],
    stack: ["Next.js 16", "WebSockets", "Go", "GSAP Motion", "ClickHouse"],
    color: "#ffc247",
    gradient: "linear-gradient(135deg, rgba(255,194,71,0.15) 0%, rgba(6,7,9,0.9) 100%)",
    metric: "140M+",
    metricLabel: "Monthly Events Streamed",
  },
];

export default function Projects() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Staggered reveal for project cards
      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        y: 60,
        opacity: 0,
        stagger: 0.18,
        duration: 0.9,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section shell" id="work" ref={containerRef}>
      <div className="section-head">
        <div>
          <div className="kicker-wrap">
            <span className="kicker-num">02</span>
            <span className="kicker-line" />
            <span className="kicker">Selected Work</span>
          </div>
          <h2 className="section-title">
            Engineering that speaks<br />in outcomes.
          </h2>
        </div>
        <div>
          <p className="section-desc">
            We partner with visionary founders and engineering leaders to take ambitious visions
            from whiteboard to enterprise deployment.
          </p>
        </div>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((proj) => (
          <div
            className="project-card"
            key={proj.id}
            onClick={() => setActiveProject(proj)}
            style={{ "--card-accent": proj.color } as React.CSSProperties}
          >
            <div className="project-preview-box" style={{ background: proj.gradient }}>
              <div className="preview-decor-grid" />
              <div className="preview-metric-badge">
                <span className="badge-val">{proj.metric}</span>
                <span className="badge-lbl">{proj.metricLabel}</span>
              </div>
              <div className="preview-watermark">{proj.id.toUpperCase()}</div>
            </div>

            <div className="project-body">
              <div className="project-meta-row">
                <span className="project-client">{proj.client}</span>
                <span className="project-year">{proj.year}</span>
              </div>
              <h3 className="project-title">{proj.title}</h3>
              <p className="project-summary">{proj.summary}</p>

              <div className="project-stack-pills">
                {proj.stack.slice(0, 3).map((tech, i) => (
                  <span key={i} className="stack-pill">
                    {tech}
                  </span>
                ))}
                {proj.stack.length > 3 && (
                  <span className="stack-pill-more">+{proj.stack.length - 3}</span>
                )}
              </div>

              <div className="project-hover-cta">
                <span>View case details</span>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Case Study Modal */}
      {activeProject && (
        <div
          className="service-modal-backdrop"
          onClick={() => setActiveProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="service-modal-card case-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close-btn"
              onClick={() => setActiveProject(null)}
              aria-label="Close dialog"
            >
              ✕
            </button>

            <div className="modal-header">
              <span className="modal-cat" style={{ color: activeProject.color }}>
                {activeProject.category}
              </span>
              <h2>{activeProject.title}</h2>
              <p className="modal-client-tag">Client: {activeProject.client} • {activeProject.year}</p>
            </div>

            <div className="modal-body">
              <div className="metric-callout-box">
                <div className="metric-main-val" style={{ color: activeProject.color }}>
                  {activeProject.metric}
                </div>
                <div className="metric-main-lbl">{activeProject.metricLabel}</div>
              </div>

              <div className="modal-section-title">The Challenge & Architecture</div>
              <p className="modal-lead">{activeProject.summary}</p>

              <div className="modal-section-title">Verified Results & Impact</div>
              <ul className="modal-list">
                {activeProject.results.map((res, idx) => (
                  <li key={idx}>{res}</li>
                ))}
              </ul>

              <div className="modal-section-title">Production Stack</div>
              <div className="modal-tags">
                {activeProject.stack.map((item, idx) => (
                  <span key={idx} className="modal-tag-pill">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="modal-footer">
              <a
                className="button button-primary"
                href="#contact"
                onClick={() => setActiveProject(null)}
              >
                Discuss a similar project
                <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-arrow">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
