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
                src="/assets/profile.jpg"
                alt="Portrait of Stanly Silas"
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
          <p className="about-label">~ whoami</p>

          <h2>
            Building software
            <br />
            <em>with clarity and intent.</em>
          </h2>

          <p className="about-primary">
            I’m a software engineer interested in how software works beyond the
            interface. My work spans Linux systems, hardware integration,
            application development, and platform engineering. I enjoy
            understanding complex systems, solving problems across different
            layers of the software stack, and building tools that are reliable,
            maintainable, and useful.
          </p>

          <p className="about-secondary">
            I work across Rust, Python, TypeScript, and Linux, with experience
            in systems programming, desktop applications, web development, and
            open-source software. I value practical engineering, thoughtful
            architecture, and learning by building.
          </p>

          <div className="about-status">
            <div className="about-status-heading">
              <span className="status-dot" />
              <span>Currently building</span>
            </div>

            <div className="about-projects">
              <div className="about-project">
                <span className="about-project-name">Chronicle</span>
                <span className="about-project-description">
                  A platform for discovering projects and following their
                  development.
                </span>
              </div>

              <div className="about-project">
                <span className="about-project-name">AcerCtl</span>
                <span className="about-project-description">
                  Linux hardware control and monitoring for Acer laptops.
                </span>
              </div>
            </div>
          </div>

          <div className="about-stack">
            <div>
              <span>01</span>
              Linux & Systems
            </div>

            <div>
              <span>02</span>
              Rust & Python
            </div>

            <div>
              <span>03</span>
              Hardware Integration
            </div>

            <div>
              <span>04</span>
              TypeScript & React
            </div>

            <div>
              <span>05</span>
              Next.js & Supabase
            </div>

            <div>
              <span>06</span>
              Platform Engineering
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
