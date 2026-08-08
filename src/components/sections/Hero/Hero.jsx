import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-intro"
        >
          <div className="hero-index">01</div>

          <p className="hero-greeting">
            Hi, I’m <span>Stanly Silas</span> 👋
          </p>

          <h1 className="hero-title">
            I make things
            <br />
            because I’m
            <br />
            <em>curious</em> about
            <br />
            how they work.
          </h1>

          <p className="hero-description">
            Software engineer building thoughtful interfaces, scalable systems,
            and software that solves real problems.
          </p>

          <div className="hero-actions">
            <Link to="/projects" className="hero-primary">
              Explore my work
              <span>→</span>
            </Link>

            <a
              href="/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-secondary"
            >
              View résumé
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="hero-workspace"
        >
          <div className="workspace-window">
            <div className="workspace-header">
              <div className="workspace-dots">
                <span className="red" />
                <span className="yellow" />
                <span className="green" />
              </div>

              <span>stanly@stanworks:~/workspace</span>
            </div>

            <div className="workspace-content">
              <div className="workspace-copy">
                <p className="workspace-label">~ workspace.init</p>

                <p>
                  Software engineer focused on interfaces, architecture, and
                  maintainable software.
                </p>

                <p>
                  Working across React, Flutter, Linux, and the systems that
                  connect them.
                </p>

                <p className="workspace-status">→ cat /status</p>

                <div className="workspace-tags">
                  <span>Building</span>
                  <span>Learning</span>
                  <span>Exploring</span>
                </div>
              </div>

              <div className="workspace-image">
                <img
                  src="/hero-image.png"
                  alt="Stanworks workspace"
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
