import { projects } from '../../data/projects'
import ProjectCard from '../ui/ProjectCard'
import { Link } from 'react-router-dom'

export default function FeaturedProjects() {
  return (
    <section className="py-28 max-w-6xl mx-auto border-white/5 scroll-mt-28">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h2 className="text-5xl font-semibold">
          Featured Projects
        </h2>
        <p className="mt-4 text-subtext">
          Selected work focused on building scalable systems, clean interfaces, and performance-driven experiences.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.slice(0, 3).map(p => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
      <div className="mt-16 flex justify-center">
        <Link
          to="/projects"
          className="btn-secondary px-6 py-3 rounded-full text-sm font-medium transition 
          border border-[color:var(--text)]/10 
          hover:bg-[var(--text)]
          hover:text-[var(--bg)]
          hover:scale-105 active:scale-95"
        >
          View All Projects
        </Link>
      </div>
    </section>
  )
}