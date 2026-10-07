"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FAQS = [
  {
    q: "How fast can Arnova assemble a team and begin work?",
    a: "We can initiate technical discovery within 48 to 72 hours of contract execution. Because we maintain dedicated senior engineers rather than outsourcing, our time-to-first-commit is measured in days, not months.",
  },
  {
    q: "Do you collaborate with early-stage founders or enterprise organizations?",
    a: "Both. We partner with high-conviction pre-seed to Series B startups requiring rapid product velocity, as well as enterprise tech teams needing specialized AI swarms, distributed cloud architectures, or mission-critical modernization.",
  },
  {
    q: "Who owns the intellectual property and code created?",
    a: "You do, 100%. All custom models, architecture designs, code repositories, and documentation belong completely to your company from day one under our standard IP assignment terms.",
  },
  {
    q: "How does Arnova guarantee security and data confidentiality for AI workflows?",
    a: "We employ strict zero-data-retention agreements with LLM API providers, implement private on-prem or VPC model deployments where required, and ensure SOC2 / HIPAA compliance standards across all data ingestion pipelines.",
  },
  {
    q: "Can Arnova integrate into our existing engineering team?",
    a: "Absolutely. We can operate as an autonomous end-to-end squad delivering complete systems, or embed directly alongside your technical leaders, participating in your Git pull request reviews and sprint ceremonies.",
  },
];

export default function Faq() {
  const containerRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".faq-head", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".faq-item", {
        scrollTrigger: {
          trigger: ".faq-list",
          start: "top 82%",
        },
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="section shell faq-section" id="faq" ref={containerRef}>
      <div className="section-head faq-head">
        <div>
          <div className="kicker-wrap">
            <span className="kicker-num">05</span>
            <span className="kicker-line" />
            <span className="kicker">Frequently Asked</span>
          </div>
          <h2 className="section-title">
            Answers before<br />we begin.
          </h2>
        </div>
        <div>
          <p className="section-desc">
            Clarity upfront ensures frictionless execution. If you have questions not covered
            here, our technical directors are always available for a direct call.
          </p>
        </div>
      </div>

      <div className="faq-list">
        {FAQS.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div className={`faq-item ${isOpen ? "is-open" : ""}`} key={idx}>
              <button
                className="faq-question-btn"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
              >
                <span className="faq-q-number">0{idx + 1}</span>
                <span className="faq-q-text">{item.q}</span>
                <span className="faq-toggle-icon">
                  <span className="icon-bar horizontal" />
                  <span className={`icon-bar vertical ${isOpen ? "collapsed" : ""}`} />
                </span>
              </button>
              <div
                className="faq-answer-collapse"
                style={{
                  maxHeight: isOpen ? "300px" : "0px",
                  opacity: isOpen ? 1 : 0,
                  transition: "max-height 0.4s ease, opacity 0.35s ease",
                }}
              >
                <div className="faq-answer-inner">
                  <p>{item.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
