import { projects } from "../../data/projects";
import ProjectCard from "../../components/ui/ProjectCard/ProjectCard";
import "./Projects.css";

export default function Projects() {
  return (
    <main className="projects-page">
      <section className="projects-page-header">
        <div className="projects-index">PROJECTS / 00</div>

        <h1>
          Things I’ve
          <br />
          <em>built.</em>
        </h1>

        <p>
          A collection of systems and interfaces I’ve built, focusing on
          performance, structure, and user experience.
        </p>
      </section>

      <section className="projects-page-grid">
        {projects.map((project, index) => (
          <div className="projects-page-item" key={project.slug}>
            <span className="projects-page-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <ProjectCard project={project} />
          </div>
        ))}
      </section>
    </main>
  );
}
