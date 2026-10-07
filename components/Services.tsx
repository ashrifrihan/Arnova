"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ServiceData {
  number: string;
  title: string;
  category: string;
  lead: string;
  description: string;
  highlights: string[];
  tags: string[];
  icon: "ai" | "code" | "design" | "cloud";
}

const SERVICES: ServiceData[] = [
  {
    number: "01",
    category: "ARTIFICIAL INTELLIGENCE",
    title: "AI & Autonomous Systems",
    lead: "Practical agent swarms, vector pipelines, and bespoke intelligence tailored to your operational core.",
    description:
      "We design and build production-grade AI applications, from fine-tuned multi-agent workflows and reasoning systems to low-latency RAG architectures that operate reliably in enterprise workloads.",
    highlights: ["Autonomous Multi-Agent Swarms", "Domain Model Fine-Tuning & RAG", "Evaluation & Guardrail Suites"],
    tags: ["LLMs", "Vector DBs", "LangChain/Llama", "PyTorch", "OpenAI / Claude"],
    icon: "ai",
  },
  {
    number: "02",
    category: "ENGINEERING",
    title: "Product Engineering",
    lead: "High-performance web apps, fault-tolerant backends, and cloud microservices built to scale effortlessly.",
    description:
      "From zero to scalable production in weeks. We engineer robust, typed codebases using modern Next.js, Node.js, Go, and cloud-native patterns with high automated test coverage and zero technical debt.",
    highlights: ["Event-Driven Microservices", "Global Real-Time State Sync", "Sub-20ms Edge Response"],
    tags: ["Next.js 16", "React 19", "TypeScript", "Node.js / Go", "GraphQL / tRPC"],
    icon: "code",
  },
  {
    number: "03",
    category: "EXPERIENCE",
    title: "Experience & Interface Design",
    lead: "Interfaces that feel alive, intuitive, and razor-sharp—engineered for high conversion and delight.",
    description:
      "We fuse Swiss graphic typography with rich micro-interactions, dynamic GSAP animations, and cohesive design tokens to create software that users fall in love with.",
    highlights: ["Interactive Motion Systems", "Atomic Design Tokens", "Ultra-High Contrast UX"],
    tags: ["Design Systems", "Figma", "Micro-Interactions", "Motion Specs", "A11y Compliant"],
    icon: "design",
  },
  {
    number: "04",
    category: "INFRASTRUCTURE",
    title: "Cloud & Distributed Systems",
    lead: "Resilient infrastructure, automated CI/CD pipelines, and zero-trust security postures.",
    description:
      "Architected for 99.99% uptime. Multi-region deployments, automated container scaling, observability dashboards, and strict compliance ready for institutional audit.",
    highlights: ["Terraform & Cloud Infrastructure", "Docker & Kubernetes Clusters", "SOC2 / HIPAA Hardened"],
    tags: ["AWS / GCP", "Terraform", "Kubernetes", "Docker", "Datadog"],
    icon: "cloud",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedService, setSelectedService] = useState<ServiceData | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate Section Header
      gsap.from(".services-head", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      // Animate Service Cards Stagger
      gsap.from(".service-card-item", {
        scrollTrigger: {
          trigger: ".service-grid-new",
          start: "top 78%",
        },
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.85,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Spotlight mouse effect on cards
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section className="section shell" id="services" ref={sectionRef}>
      <div className="section-head services-head">
        <div>
          <div className="kicker-wrap">
            <span className="kicker-num">01</span>
            <span className="kicker-line" />
            <span className="kicker">Core Capabilities</span>
          </div>
          <h2 className="section-title">
            From possibility<br />to production.
          </h2>
        </div>
        <div className="section-desc-wrap">
          <p className="section-desc">
            We merge product velocity with deep engineering discipline. Every architecture is crafted
            to deliver measurable speed, operational autonomy, and long-term resilience.
          </p>
          <div className="service-status-pill">
            <span className="pulse-indicator" />
            <span>Full-cycle product teams available</span>
          </div>
        </div>
      </div>

      <div className="service-grid-new">
        {SERVICES.map((srv, idx) => (
          <article
            className={`service-card-item ${idx === 0 ? "featured-card" : ""}`}
            key={srv.number}
            onMouseMove={handleMouseMove}
          >
            <div className="spotlight-overlay" />
            
            <div className="service-top-bar">
              <div className="service-icon-box">
                {srv.icon === "ai" && (
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2l1.45 5.05L18.5 8.5l-5.05 1.45L12 15l-1.45-5.05L5.5 8.5l5.05-1.45L12 2Z" />
                    <path d="M18.5 14l.8 2.7L22 17.5l-2.7.8-.8 2.7-.8-2.7-2.7-.8 2.7-.8.8-2.7Z" />
                  </svg>
                )}
                {srv.icon === "code" && (
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14" />
                  </svg>
                )}
                {srv.icon === "design" && (
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
                    <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
                  </svg>
                )}
                {srv.icon === "cloud" && (
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                  </svg>
                )}
              </div>
              <div className="service-header-meta">
                <span className="service-cat-pill">{srv.category}</span>
                <span className="service-index">{srv.number}</span>
              </div>
            </div>

            <div className="service-main-content">
              <h3 className="service-heading">{srv.title}</h3>
              <p className="service-lead-text">{srv.lead}</p>
              
              <ul className="service-highlights">
                {srv.highlights.map((h, i) => (
                  <li key={i}>
                    <svg viewBox="0 0 24 24" className="check-icon" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="service-bottom-bar">
              <div className="service-tags-list">
                {srv.tags.slice(0, 3).map((tag, tIdx) => (
                  <span key={tIdx} className="tech-badge">
                    {tag}
                  </span>
                ))}
                {srv.tags.length > 3 && (
                  <span className="tech-badge-more">+{srv.tags.length - 3}</span>
                )}
              </div>

              <button
                className="service-expand-btn"
                onClick={() => setSelectedService(srv)}
                aria-label={`View details for ${srv.title}`}
              >
                <span>Learn more</span>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Modal for detailed capability inspection */}
      {selectedService && (
        <div
          className="service-modal-backdrop"
          onClick={() => setSelectedService(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="service-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close-btn"
              onClick={() => setSelectedService(null)}
              aria-label="Close dialog"
            >
              ✕
            </button>
            <div className="modal-header">
              <span className="modal-num">{selectedService.number}</span>
              <span className="modal-cat">{selectedService.category}</span>
              <h2>{selectedService.title}</h2>
            </div>
            <div className="modal-body">
              <p className="modal-lead">{selectedService.lead}</p>
              <p className="modal-detail">{selectedService.description}</p>
              
              <div className="modal-section-title">Key Capabilities</div>
              <ul className="modal-list">
                {selectedService.highlights.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <div className="modal-section-title">Technologies & Stacks</div>
              <div className="modal-tags">
                {selectedService.tags.map((tag, idx) => (
                  <span key={idx} className="modal-tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="modal-footer">
              <a
                className="button button-primary"
                href="#contact"
                onClick={() => setSelectedService(null)}
              >
                Inquire about this capability
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
