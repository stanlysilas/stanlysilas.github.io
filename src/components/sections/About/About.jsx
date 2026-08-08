import "./About.css";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-grid">
        <div className="about-profile">
          <div className="about-index">02 — ABOUT</div>

          <div className="about-terminal">
            <div className="about-terminal-header">
              <div className="about-terminal-dots">
                <span className="red" />
                <span className="yellow" />
                <span className="green" />
              </div>

              <span>stanly@stanworks:~/about</span>
            </div>

            <div className="about-image">
              <img
                src="/assets/profile.png"
                alt="Stanworks profile"
                draggable={false}
              />
            </div>

            <div className="about-terminal-footer">
              <span>stanworks.profile</span>
              <span>SYSTEM</span>
            </div>
          </div>

          <div className="about-meta">
            <span>STANLY SILAS</span>
            <span>SOFTWARE ENGINEER</span>
          </div>
        </div>

        <div className="about-content">
          <p className="about-label">~ about.me</p>

          <h2>
            Building systems with
            <br />
            <em>clarity and intent.</em>
          </h2>

          <p className="about-primary">
            I’m a software engineer focused on building thoughtful, performant
            applications, interfaces, and the systems behind them. I care about
            clean architecture, maintainability, and turning complex ideas into
            simple experiences.
          </p>

          <p className="about-secondary">
            My current stack spans React, JavaScript, Tailwind CSS, Framer
            Motion, Flutter, Firebase, Linux, and system-level development. I
            enjoy working across the stack, from interface design and
            application architecture to infrastructure, open-source development,
            and experimentation.
          </p>

          <div className="about-status">
            <div>
              <span className="status-dot" />
              Currently building
            </div>

            <span>BloomOS</span>
          </div>

          <div className="about-stack">
            <div>
              <span>01</span>
              React
            </div>

            <div>
              <span>02</span>
              Flutter
            </div>

            <div>
              <span>03</span>
              JavaScript
            </div>

            <div>
              <span>04</span>
              Firebase
            </div>

            <div>
              <span>05</span>
              Android & Linux
            </div>

            <div>
              <span>06</span>
              System Design
            </div>
          </div>

          <div className="about-actions">
            <a
              href="/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="about-primary-button"
            >
              View résumé
              <span>→</span>
            </a>

            <a
              href="https://github.com/stanlysilas"
              target="_blank"
              rel="noopener noreferrer"
              className="about-secondary-button"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
