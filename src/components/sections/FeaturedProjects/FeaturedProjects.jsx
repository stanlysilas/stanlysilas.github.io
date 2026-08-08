import { projects } from "../../../data/projects";
import ProjectCard from "../../ui/ProjectCard/ProjectCard";
import { Link } from "react-router-dom";
import "./FeaturedProjects.css";

export default function FeaturedProjects() {
  return (
    <section className="projects-section">
      <div className="projects-heading">
        <div>
          <p className="projects-index">03 — SELECTED WORK</p>

          <h2 className="projects-title">
            Things I’ve
            <br />
            <em>built.</em>
          </h2>
        </div>

        <div className="projects-intro">
          <p>
            A selection of systems, applications, and experiments built around
            performance, clarity, and long-term maintainability.
          </p>

          <Link to="/projects" className="projects-all">
            View all projects
            <span>→</span>
          </Link>
        </div>
      </div>

      <div className="projects-terminal">
        <div className="projects-terminal-header">
          <div className="projects-terminal-dots">
            <span className="red" />
            <span className="yellow" />
            <span className="green" />
          </div>

          <span>stanly@stanworks:~/projects/featured</span>
        </div>

        <div className="projects-grid">
          {projects.slice(0, 3).map((project, index) => (
            <div className="project-item" key={project.slug}>
              <div className="project-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <ProjectCard project={project} embedded />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
