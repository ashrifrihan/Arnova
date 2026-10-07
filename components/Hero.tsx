"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Entrance Timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.2 });

      tl.from(".hero-badge-wrap", {
        y: 24,
        opacity: 0,
        duration: 0.8,
      })
        .from(
          ".hero-title-line",
          {
            y: 50,
            opacity: 0,
            duration: 0.9,
            stagger: 0.15,
          },
          "-=0.5"
        )
        .from(
          ".hero-lead",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5"
        )
        .from(
          ".hero-actions .btn-anim",
          {
            y: 25,
            opacity: 0,
            duration: 0.7,
            stagger: 0.12,
          },
          "-=0.5"
        )
        .from(
          ".hero-proof",
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
          },
          "-=0.4"
        )
        .from(
          ".hero-visual-container",
          {
            scale: 0.88,
            opacity: 0,
            duration: 1.1,
            ease: "back.out(1.2)",
          },
          "-=0.8"
        )
        .from(
          ".float-card-anim",
          {
            scale: 0.8,
            y: 30,
            opacity: 0,
            stagger: 0.2,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.6"
        );

      // Continuous subtle ambient float & rotation for orbit elements
      gsap.to(".orbit-spin-a", {
        rotation: 360,
        duration: 35,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".orbit-spin-b", {
        rotation: -360,
        duration: 48,
        repeat: -1,
        ease: "none",
      });

      // Mouse Parallax 3D tilt on hero visual
      const visualEl = visualRef.current;
      if (visualEl) {
        const xTo = gsap.quickTo(visualEl, "rotationY", { duration: 0.6, ease: "power2.out" });
        const yTo = gsap.quickTo(visualEl, "rotationX", { duration: 0.6, ease: "power2.out" });

        const handleMouseMove = (e: MouseEvent) => {
          const rect = visualEl.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const deltaX = (e.clientX - centerX) / (rect.width / 2);
          const deltaY = (e.clientY - centerY) / (rect.height / 2);

          // Clamped tilt
          xTo(deltaX * 12);
          yTo(-deltaY * 12);
        };

        const handleMouseLeave = () => {
          xTo(0);
          yTo(0);
        };

        window.addEventListener("mousemove", handleMouseMove);
        visualEl.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          window.removeEventListener("mousemove", handleMouseMove);
          visualEl.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero shell" id="top" ref={sectionRef}>
      <div className="hero-copy">
        <div className="hero-badge-wrap">
          <div className="eyebrow-pill">
            <span className="pulse-dot" />
            <span className="pill-text">AVAILABLE FOR ENTERPRISE & STARTUP PARTNERSHIPS</span>
          </div>
        </div>

        <h1 className="hero-title">
          <span className="hero-title-line">Intelligence.</span>
          <span className="hero-title-line">
            Engineered to <span className="gradient-text">scale.</span>
          </span>
        </h1>

        <p className="hero-lead">
          Arnova designs and engineers custom AI systems, high-throughput cloud platforms,
          and refined digital products that convert complex capabilities into unfair market advantage.
        </p>

        <div className="hero-actions">
          <a className="button button-primary btn-anim" href="#contact">
            <span>Build with Arnova</span>
            <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-arrow">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a className="button button-ghost btn-anim" href="#services">
            <span>Explore capabilities</span>
          </a>
        </div>

        <div className="hero-proof">
          <div className="proof-stack">
            <span>AI</span>
            <span>OS</span>
            <span>+</span>
          </div>
          <div className="proof-text">
            <strong>Production-Grade AI & Engineering.</strong>
            <span>From strategic prototype to enterprise deployment.</span>
          </div>
        </div>
      </div>

      <div className="hero-visual-wrapper">
        <div className="hero-visual-container" ref={visualRef}>
          <div className="visual-grid" />
          <div className="visual-glow-ring" />

          {/* Rotating orbits */}
          <div className="orbit orbit-a orbit-spin-a" />
          <div className="orbit orbit-b orbit-spin-b" />

          {/* Center Holographic Core */}
          <div className="core" ref={coreRef}>
            <div className="core-glow" />
            <div className="core-inner">
              <span className="core-logo">
                <i />
                <i />
                <i />
              </span>
            </div>
            <div className="core-pulse-wave" />
          </div>

          {/* Live Floating Capability Badges */}
          <div className="float-card card-ai float-card-anim">
            <span className="float-icon float-icon-green">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2l1.45 5.05L18.5 8.5l-5.05 1.45L12 15l-1.45-5.05L5.5 8.5l5.05-1.45L12 2Z" />
                <path d="M18.5 14l.8 2.7L22 17.5l-2.7.8-.8 2.7-.8-2.7-2.7-.8 2.7-.8.8-2.7Z" />
              </svg>
            </span>
            <div className="float-info">
              <div className="float-header">
                <small>AUTONOMOUS AGENTS</small>
                <span className="live-tag">LIVE</span>
              </div>
              <strong>99.8% Task Precision</strong>
            </div>
          </div>

          <div className="float-card card-code float-card-anim">
            <span className="float-icon float-icon-cyan">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14" />
              </svg>
            </span>
            <div className="float-info">
              <div className="float-header">
                <small>EDGE INFRASTRUCTURE</small>
                <span className="live-metric">12ms</span>
              </div>
              <strong>Global Multi-Region</strong>
            </div>
          </div>

          <div className="float-card card-system float-card-anim">
            <span className="float-icon float-icon-purple">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m12 3 9 5-9 5-9-5 9-5Z" />
                <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
              </svg>
            </span>
            <div className="float-info">
              <div className="float-header">
                <small>SECURITY ARCHITECTURE</small>
                <span className="live-status">SOC2</span>
              </div>
              <strong>Zero-Trust Encrypted</strong>
            </div>
          </div>

          {/* Signal beacons */}
          <div className="signal signal-a">
            <span />
          </div>
          <div className="signal signal-b">
            <span />
          </div>
          <div className="signal signal-c">
            <span />
          </div>

          <div className="mini-label label-a">NODE // 01 · INGESTION</div>
          <div className="mini-label label-b">NODE // 02 · REASONING</div>
          <div className="mini-label label-c">NODE // 03 · SYNTHESIS</div>
        </div>
      </div>
    </section>
  );
}
