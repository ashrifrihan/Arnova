"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const currentScroll = window.scrollY;
      const percentage = Math.min(Math.max(currentScroll / totalHeight, 0), 1);
      setProgress(percentage);
      setVisible(currentScroll > 320);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - progress * circumference;

  return (
    <button
      className={`scroll-progress-btn ${visible ? "is-visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      title="Back to top"
    >
      <svg className="progress-ring" width="46" height="46" viewBox="0 0 46 46">
        <circle
          className="progress-ring-bg"
          stroke="rgba(255, 255, 255, 0.12)"
          strokeWidth="2.5"
          fill="transparent"
          r={radius}
          cx="23"
          cy="23"
        />
        <circle
          className="progress-ring-circle"
          stroke="#8dff5a"
          strokeWidth="2.5"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx="23"
          cy="23"
        />
      </svg>
      <svg className="arrow-up-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
