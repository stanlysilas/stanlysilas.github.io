import { projects } from '../../data/projects'
import ProjectCard from '../ui/ProjectCard'

export default function FeaturedProjects() {
  return (
    <section className="max-w-6xl mx-auto py-24">
      <h2 className="text-2xl mb-10">Featured Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.slice(0, 3).map(p => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  )
}