"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Entrance animation
      gsap.from(navRef.current, {
        y: -40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.1,
      });

      // Background density on scroll
      ScrollTrigger.create({
        start: "top -50",
        onUpdate: (self) => {
          if (navRef.current) {
            if (self.direction === 1 && self.scroll() > 60) {
              navRef.current.classList.add("nav-scrolled");
            } else if (self.scroll() <= 60) {
              navRef.current.classList.remove("nav-scrolled");
            }
          }
        },
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!mobileMenuRef.current) return;
    if (mobileOpen) {
      gsap.to(mobileMenuRef.current, {
        opacity: 1,
        pointerEvents: "auto",
        y: 0,
        duration: 0.35,
        ease: "power2.out",
      });
      gsap.fromTo(
        mobileMenuRef.current.querySelectorAll(".mobile-link"),
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, stagger: 0.06, duration: 0.3, ease: "power2.out" }
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        opacity: 0,
        pointerEvents: "none",
        y: -10,
        duration: 0.25,
        ease: "power2.in",
      });
    }
  }, [mobileOpen]);

  return (
    <header className="nav-wrap" ref={navRef}>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Arnova home">
          <span className="brand-mark">
            <i />
            <i />
            <i />
          </span>
          <span className="brand-text">ARNOVA</span>
          <span className="brand-badge">TECH</span>
        </a>

        <div className="nav-links">
          <a href="#services">Capabilities</a>
          <a href="#work">Case Studies</a>
          <a href="#approach">Approach</a>
          <a href="#lab">Arnova Lab</a>
          <a href="#faq">FAQ</a>
        </div>

        <div className="nav-actions">
          <a className="nav-cta button button-primary button-sm" href="#contact">
            <span>Start a project</span>
            <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-arrow">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>

          <button
            className={`mobile-toggle ${mobileOpen ? "is-open" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div className="mobile-menu" ref={mobileMenuRef}>
        <div className="mobile-menu-inner shell">
          <a
            className="mobile-link"
            href="#services"
            onClick={() => setMobileOpen(false)}
          >
            <span className="mobile-no">01</span> Capabilities
          </a>
          <a
            className="mobile-link"
            href="#work"
            onClick={() => setMobileOpen(false)}
          >
            <span className="mobile-no">02</span> Case Studies
          </a>
          <a
            className="mobile-link"
            href="#approach"
            onClick={() => setMobileOpen(false)}
          >
            <span className="mobile-no">03</span> Approach
          </a>
          <a
            className="mobile-link"
            href="#lab"
            onClick={() => setMobileOpen(false)}
          >
            <span className="mobile-no">04</span> Arnova Lab
          </a>
          <a
            className="mobile-link"
            href="#faq"
            onClick={() => setMobileOpen(false)}
          >
            <span className="mobile-no">05</span> FAQ
          </a>
          <div className="mobile-actions">
            <a
              className="button button-primary mobile-cta"
              href="#contact"
              onClick={() => setMobileOpen(false)}
            >
              Start a project
              <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-arrow">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
