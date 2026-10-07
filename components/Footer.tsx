"use client";

export default function Footer() {
  return (
    <footer className="footer-wrap">
      <div className="shell footer-top">
        <div className="footer-brand-col">
          <a className="brand" href="#top" aria-label="Arnova home">
            <span className="brand-mark">
              <i />
              <i />
              <i />
            </span>
            <span className="brand-text">ARNOVA</span>
            <span className="brand-badge">TECH</span>
          </a>
          <p className="footer-motto">
            Intelligence. Engineered.<br />
            Pioneering digital architecture & AI applications.
          </p>
          <div className="footer-status-pill">
            <span className="pulse-indicator-small" />
            <span>GLOBAL CLUSTER: OPERATIONAL (100%)</span>
          </div>
        </div>

        <div className="footer-links-grid">
          <div className="footer-col">
            <span className="footer-col-title">NAVIGATION</span>
            <a href="#services">Capabilities</a>
            <a href="#work">Case Studies</a>
            <a href="#approach">Our Approach</a>
            <a href="#lab">Arnova Lab</a>
            <a href="#faq">FAQ</a>
          </div>

          <div className="footer-col">
            <span className="footer-col-title">CAPABILITIES</span>
            <a href="#services">Autonomous Agents</a>
            <a href="#services">Product Engineering</a>
            <a href="#services">Experience Design</a>
            <a href="#services">Cloud & DevOps</a>
            <a href="#services">System Architecture</a>
          </div>

          <div className="footer-col">
            <span className="footer-col-title">CONNECT</span>
            <a href="mailto:hello@arnova.tech">hello@arnova.tech</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              X / Twitter ↗
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>

      <div className="shell footer-bottom">
        <p className="footer-copy">© {new Date().getFullYear()} Arnova Technologies Inc. All rights reserved.</p>
        <div className="footer-bottom-links">
          <span>San Francisco • New York • Remote Worldwide</span>
          <a href="#top" className="back-top-link">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
