import { projects } from '../data/projects'
import ProjectCard from '../components/ui/ProjectCard'

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto py-20 grid md:grid-cols-3 gap-6">
      {projects.map(p => <ProjectCard key={p.slug} project={p} />)}
    </div>
  )
}