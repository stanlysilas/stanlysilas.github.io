import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "./Hero.css";

export default function Hero() {
  const extensions = [
    ".rpm",
    ".deb",
    ".ko",
    ".so",
    ".bin",
    ".elf",
    ".wasm",
    ".tar.zst",
    ".iso",
    ".rs",
    ".py",
    ".tf",
    ".nix",
    ".yaml",
    ".toml",
    ".exe",
    ".dmg",
  ];

  const [extension, setExtension] = useState(".rpm");
  const history = useRef([".rpm"]);

  useEffect(() => {
    let current = ".rpm";
    let target = "";
    let deleting = false;
    let pause = 12;

    const interval = setInterval(() => {
      if (pause > 0) {
        pause--;
        return;
      }

      if (deleting) {
        current = current.slice(0, -1);
        setExtension(current);

        if (!current) {
          deleting = false;
          const available = extensions.filter(
            (item) => !history.current.slice(-2).includes(item),
          );

          target = available[Math.floor(Math.random() * available.length)];
          history.current.push(target);
          history.current = history.current.slice(-2);
        }

        return;
      }

      current = target.slice(0, current.length + 1);
      setExtension(current);

      if (current === target) {
        deleting = true;
        pause = 12;
      }
    }, 110);

    return () => clearInterval(interval);
  }, []);
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
            Software Engineer
            <br />
            building
            <br />
            <em>
              systems<span className="hero-extension">{extension}</span>
              <span className="hero-extension-cursor navbar-cursor" />
            </em>{" "}
            <br />
            that work from the ground up.
          </h1>

          <p className="hero-description">
            I work across Linux, Android, infrastructure, and application
            software, with a focus on reliable systems and maintainable
            engineering.
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
                  Exploring software beyond the interface, from Linux systems
                  and hardware integration to application development.
                </p>

                <p>Currently developing Chronicle and AcerCtl.</p>

                <p className="workspace-status">→ ls ~/projects/active</p>

                <div className="workspace-tags">
                  <span>Chronicle</span>
                  <span>AcerCtl</span>
                  <span>Linux & Systems</span>
                </div>
              </div>

              <div className="workspace-image">
                <img
                  src="/hero-image.jpg"
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
