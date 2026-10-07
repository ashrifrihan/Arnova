"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const SERVICES_OPTIONS = [
  "AI & Autonomous Systems",
  "Product Engineering",
  "Experience / UI Design",
  "Cloud & DevOps",
  "Architecture Audit",
];

const BUDGET_OPTIONS = ["$20k - $40k", "$40k - $80k", "$80k - $150k", "$150k+"];

export default function Contact() {
  const containerRef = useRef<HTMLElement>(null);
  const [selectedService, setSelectedService] = useState("AI & Autonomous Systems");
  const [selectedBudget, setSelectedBudget] = useState("$40k - $80k");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".contact-inner-content", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 78%",
        },
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      // Pulse the contact glowing orb
      gsap.to(".contact-orb-pulse", {
        scale: 1.15,
        opacity: 0.14,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello@arnova.tech");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="contact-section" id="contact" ref={containerRef}>
      <div className="contact-orb-pulse" />

      <div className="shell contact-inner contact-inner-content">
        <div className="contact-header">
          <div className="eyebrow-pill center-pill">
            <span className="pulse-dot" />
            <span className="pill-text">ACCEPTING SELECT PROJECTS</span>
          </div>
          <h2 className="contact-big-title">
            Let’s make it <span className="gradient-text">real.</span>
          </h2>
          <p className="contact-subtitle">
            Whether you’re planning a ground-up platform launch or integrating autonomous intelligence,
            we’re ready to architect the path forward.
          </p>
        </div>

        <div className="contact-card-box">
          {!submitted ? (
            <form className="contact-form" onSubmit={handleSubmit}>
              {/* Service Selectors */}
              <div className="form-group">
                <label className="form-label">WHAT CAN WE BUILD TOGETHER?</label>
                <div className="pill-select-group">
                  {SERVICES_OPTIONS.map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      className={`pill-option-btn ${selectedService === opt ? "is-selected" : ""}`}
                      onClick={() => setSelectedService(opt)}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Selectors */}
              <div className="form-group">
                <label className="form-label">APPROXIMATE BUDGET TIER</label>
                <div className="pill-select-group">
                  {BUDGET_OPTIONS.map((b) => (
                    <button
                      type="button"
                      key={b}
                      className={`pill-option-btn ${selectedBudget === b ? "is-selected" : ""}`}
                      onClick={() => setSelectedBudget(b)}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Inputs */}
              <div className="form-row-dual">
                <div className="form-field">
                  <label htmlFor="contact-name">YOUR NAME</label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="e.g. Elena Rostova"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="contact-email">WORK EMAIL</label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="elena@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="contact-message">TELL US ABOUT THE GOAL OR CHALLENGE</label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="What are you building, fixing, or rethinking?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <div className="form-actions-row">
                <button type="submit" className="button button-primary submit-btn">
                  <span>Send Project Inquiry</span>
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="icon-arrow">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </button>

                <div className="direct-email-box">
                  <span className="direct-hint">Or email directly:</span>
                  <button
                    type="button"
                    className="email-clipboard-btn"
                    onClick={handleCopyEmail}
                    title="Click to copy email address"
                  >
                    <span>hello@arnova.tech</span>
                    <span className="copy-badge">{copied ? "Copied! ✓" : "Copy"}</span>
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <div className="contact-success-state">
              <div className="success-icon-badge">✓</div>
              <h3>Transmission Received</h3>
              <p>
                Thank you, <strong>{name || "friend"}</strong>. Our engineering leads will review your
                inquiry for <em>{selectedService}</em> and reply to <strong>{email}</strong> within
                24 hours with next steps.
              </p>
              <button
                type="button"
                className="button button-ghost"
                onClick={() => setSubmitted(false)}
              >
                Send another message
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
