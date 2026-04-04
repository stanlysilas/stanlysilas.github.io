import { useParams } from 'react-router-dom'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  if (!project) return null

  return (
    <div className="max-w-4xl mx-auto py-20">
      <h1 className="text-4xl font-semibold">{project.title}</h1>
      <img src={project.image} className="mt-6 rounded-xl" />
      <div className="mt-10 space-y-6">
        <div>
          <h2>Problem</h2>
          <p>{project.problem}</p>
        </div>
        <div>
          <h2>Approach</h2>
          <p>{project.approach}</p>
        </div>
        <div>
          <h2>Features</h2>
          <ul>{project.features.map(f => <li key={f}>{f}</li>)}</ul>
        </div>
      </div>
    </div>
  )
}