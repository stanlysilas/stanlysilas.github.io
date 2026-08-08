import { useParams } from "react-router-dom";
import { useState } from "react";
import { projects } from "../../data/projects";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import "./ProjectDetail.css";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [index, setIndex] = useState(0);

  const statusStyles = {
    live: "live",
    beta: "beta",
    "in progress": "progress",
    concept: "concept",
    experimenting: "experimenting",
    paused: "paused",
    archived: "archived",
    redacted: "redacted",
  };

  if (!project) return null;

  const projectIndex = projects.indexOf(project);
  const hasImages = project.images?.length > 0;

  const next = () => {
    if (!hasImages) return;

    setIndex((prev) => (prev + 1) % project.images.length);
  };

  const prev = () => {
    if (!hasImages) return;

    setIndex(
      (prev) => (prev - 1 + project.images.length) % project.images.length,
    );
  };

  return (
    <main className="project-detail">
      <div className="project-detail-container">
        <section className="project-window">
          <div className="project-window-header">
            <div className="project-window-dots">
              <span className="red" />
              <span className="yellow" />
              <span className="green" />
            </div>

            <span>stanly@stanworks:~/projects/{project.slug}</span>
          </div>

          <div className="project-window-body">
            <section className="project-hero">
              <div className="project-index">
                PROJECT / {String(projectIndex + 1).padStart(2, "0")}
              </div>

              <h1>{project.title}</h1>

              <p className="project-description">{project.description}</p>

              <div className="project-meta">
                {project.status && (
                  <span
                    className={`project-status ${
                      statusStyles[project.status.toLowerCase()] || ""
                    }`}
                  >
                    {project.status}
                  </span>
                )}

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-explore"
                  >
                    Explore
                    <span>↗</span>
                  </a>
                )}
              </div>

              {project.image ? (
                <div className="project-cover">
                  <img
                    src={project.image}
                    alt={project.title}
                    draggable={false}
                  />
                </div>
              ) : (
                <div className="project-preview">Preview coming soon</div>
              )}
            </section>
          </div>
        </section>

        <div className="project-sections">
          <section className="project-section">
            <div className="project-section-label">01</div>

            <div>
              <h2>Problem</h2>
              <p>{project.problem}</p>
            </div>
          </section>

          <section className="project-section">
            <div className="project-section-label">02</div>

            <div>
              <h2>Approach</h2>
              <p>{project.approach}</p>
            </div>
          </section>

          <section className="project-section">
            <div className="project-section-label">03</div>

            <div>
              <h2>Key Features</h2>

              <ul>
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="project-section">
            <div className="project-section-label">04</div>

            <div>
              <h2>Tech Stack</h2>
              <p>{project.stack.join(", ")}</p>
            </div>
          </section>

          <section className="project-section">
            <div className="project-section-label">05</div>

            <div>
              <h2>Outcome</h2>

              <ul>
                {project.metrics?.map((metric) => (
                  <li key={metric}>{metric}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {hasImages && (
          <section className="project-screens">
            <div className="project-section-heading">
              <div className="project-index">06 — SCREENS</div>

              <h2>
                Inside the <em>project.</em>
              </h2>
            </div>

            <div className="project-gallery">
              <div className="project-gallery-header">
                <div className="project-window-dots">
                  <span className="red" />
                  <span className="yellow" />
                  <span className="green" />
                </div>

                <span>stanly@stanworks:~/projects/{project.slug}/screens</span>
              </div>

              <div className="project-gallery-content">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={index}
                    src={project.images[index]}
                    alt={`${project.title} screen ${index + 1}`}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{
                      duration: 0.35,
                      ease: "easeInOut",
                    }}
                    draggable={false}
                  />
                </AnimatePresence>

                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prev}
                      className="gallery-control gallery-control-left"
                      aria-label="Previous screen"
                    >
                      <ChevronLeft />
                    </button>

                    <button
                      onClick={next}
                      className="gallery-control gallery-control-right"
                      aria-label="Next screen"
                    >
                      <ChevronRight />
                    </button>
                  </>
                )}
              </div>
            </div>

            {project.images.length > 1 && (
              <div className="gallery-indicators">
                {project.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`gallery-indicator ${
                      i === index ? "active" : ""
                    }`}
                    aria-label={`Show screen ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </section>
        )}

        <div className="project-actions">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="project-primary-button"
            >
              Live Demo
              <span>↗</span>
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-secondary-button"
            >
              View Code
              <span>↗</span>
            </a>
          )}
        </div>
      </div>
    </main>
  );
}
