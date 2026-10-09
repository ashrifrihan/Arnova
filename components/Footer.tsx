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
            <a href="mailto:rihan@arnova.tech">rihan@arnova.tech</a>
            <a href="https://github.com/ashrifrihan" target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
            <a href="https://ashrifrihan.me" target="_blank" rel="noopener noreferrer">
              Founder Profile ↗
            </a>
          </div>
        </div>
      </div>

      <div className="shell footer-bottom">
        <p className="footer-copy">© {new Date().getFullYear()} Arnova Technologies. Founded by Ashrif Rihan. All rights reserved.</p>
        <div className="footer-bottom-links">
          <span>Colombo, Sri Lanka • Remote Worldwide</span>
          <a href="#top" className="back-top-link">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
