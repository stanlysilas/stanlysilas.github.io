import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  const statusStyles = {
    live: 'bg-green-500/10 text-green-400 border border-green-500/20',
    beta: 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20',
    'in progress': 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
    concept: 'bg-purple-500/10 text-purple-400 border border-purple-500/20',
    experimenting: 'bg-pink-500/10 text-pink-400 border border-pink-500/20',
    paused: 'bg-orange-500/10 text-orange-400 border border-orange-500/20',
    archived: 'bg-gray-500/10 text-gray-400 border border-gray-500/20',
    redacted: 'bg-red-500/10 text-red-400 border border-red-500/20'
  }

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="project-card group relative rounded-2xl overflow-hidden bg-[#111117]/90 backdrop-blur-sm border border-white/5 dark:border-white/5 shadow-sm hover:shadow-lg transition transform hover:scale-[1.02] hover:-translate-y-1"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
        <div className="absolute -inset-10 bg-[radial-gradient(circle,rgba(108,123,255,0.15),transparent_70%)] blur-2xl" />
      </div>
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
      {project.image ? (
        <img
          src={project.image}
          className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
        />
      ) : (
        <div className="w-full h-56 bg-white/5 flex items-center justify-center text-subtext text-sm">
          Preview coming soon
        </div>
      )}
      <div className="p-5">
        <h3 className="text-lg font-medium">{project.title}</h3>
        <p className="text-sm text-subtext mt-2">
          {project.description}
        </p>
        <div className="mt-4 text-xs text-subtext space-y-1">
          {project.metrics?.map(m => (
            <p key={m}>• {m}</p>
          ))}
        </div>
        <div className="flex items-center justify-between mt-5">
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-full bg-white/5 text-subtext"
              >
                {tag}
              </span>
            ))}
          </div>
          {project.status && (
            <span
              className={`inline-flex items-center gap-1.5 text-[10px] px-2.5 py-1 rounded-full ${statusStyles[project.status.toLowerCase()] || 'bg-white/10 text-subtext border border-white/10'
                }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              {project.status}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}