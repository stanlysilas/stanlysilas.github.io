import { projects } from '../data/projects'
import ProjectCard from '../components/ui/ProjectCard'

export default function Projects() {
  return (
    <main className="pt-28 px-6">
      <section className="max-w-6xl mx-auto mb-16">
        <h1 className="text-5xl font-semibold">Projects</h1>
        <p className="mt-4 text-subtext max-w-xl">
          A collection of systems and interfaces I’ve built, focusing on performance, structure, and user experience.
        </p>
      </section>
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {projects.map(p => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </section>
    </main>
  )
}