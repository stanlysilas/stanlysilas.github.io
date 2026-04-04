import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group relative rounded-2xl overflow-hidden bg-surface border border-white/5 hover:border-white/10 transition transform hover:-translate-y-1"
    >
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
      <img
        src={project.image}
        loading="lazy"
        className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
      />
      <div className="p-5">
        <h3 className="text-lg font-medium">{project.title}</h3>
        <p className="text-sm text-subtext mt-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs px-2 py-1 rounded-full bg-white/5 text-subtext">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}