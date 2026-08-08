import { Link } from "react-router-dom";
import { useState } from "react";
import "./ProjectCard.css";

export default function ProjectCard({ project, embedded = false }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <Link
      to={`/projects/${project.slug}`}
      onMouseMove={handleMove}
      className={`project-card ${embedded ? "project-card-embedded" : ""}`}
    >
      <div
        className="project-card-glow"
        style={{
          left: pos.x - 100,
          top: pos.y - 100,
        }}
      />

      <div className="project-card-window">
        {!embedded && (
          <div className="project-card-header">
            <div className="project-card-dots">
              <span className="red" />
              <span className="yellow" />
              <span className="green" />
            </div>

            {project.status && (
              <span className="project-card-status">{project.status}</span>
            )}
          </div>
        )}

        <div className="project-card-image">
          {project.image ? (
            <img src={project.image} alt={project.title} />
          ) : (
            <span>Preview coming soon</span>
          )}
        </div>
      </div>

      <div className="project-card-content">
        <div className="project-card-title-row">
          <h3>{project.title}</h3>
          <span className="project-card-arrow">↗</span>
        </div>

        <p className="project-card-description">{project.description}</p>

        {project.metrics?.length > 0 && (
          <ul className="project-card-metrics">
            {project.metrics.map((metric) => (
              <li key={metric}>{metric}</li>
            ))}
          </ul>
        )}

        <div className="project-card-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}
