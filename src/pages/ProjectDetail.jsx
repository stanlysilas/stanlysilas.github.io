import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { projects } from '../data/projects'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

export default function ProjectDetail () {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

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

  if (!project) return null

  const [index, setIndex] = useState(0)

  const next = () => {
    setIndex(prev => (prev + 1) % project.images.length)
  }

  const prev = () => {
    setIndex(prev => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <div className='relative z-10 max-w-4xl mx-auto px-6 py-24'>
      <div>
        <h1 className='text-4xl font-semibold'>{project.title}</h1>
        <p className='mt-4 text-subtext'>{project.description}</p>
        <div className='mt-4 flex items-center gap-3 flex-wrap'>
          <span
            className={`inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full ${
              statusStyles[project.status?.toLowerCase()] ||
              'bg-white/10 text-subtext border border-white/10'
            }`}
          >
            <span className='w-1.5 h-1.5 rounded-full bg-current' />
            {project.status}
          </span>

          {project.link && (
            <a
              href={project.link}
              target='_blank'
              className='link-underline text-xs text-subtext hover:text-primary transition'
            >
              Explore ↗
            </a>
          )}
        </div>
        {project.image ? (
          <img
            src={project.image}
            className='project-image mt-8 rounded-xl w-full border border-white/5 shadow-sm'
          />
        ) : (
          <div className='mt-12 w-full h-56 bg-[var(--surface)] flex items-center justify-center text-subtext text-sm rounded-xl'>
            Preview coming soon
          </div>
        )}
      </div>
      <section className='mt-16'>
        <h2 className='text-xl font-medium'>Problem</h2>
        <p className='mt-3 text-subtext leading-relaxed max-w-2xl'>
          {project.problem}
        </p>
      </section>
      <section className='mt-12'>
        <h2 className='text-xl font-medium'>Approach</h2>
        <p className='mt-3 text-subtext leading-relaxed max-w-2xl'>
          {project.approach}
        </p>
      </section>
      <section className='mt-12'>
        <h2 className='text-xl font-medium'>Key Features</h2>
        <ul className='mt-4 space-y-2 text-subtext'>
          {project.features.map(f => (
            <li key={f}>• {f}</li>
          ))}
        </ul>
      </section>
      <section className='mt-12'>
        <h2 className='text-xl font-medium'>Tech Stack</h2>
        <p className='mt-3 text-subtext'>{project.stack.join(', ')}</p>
      </section>
      <section className='mt-12'>
        <h2 className='text-xl font-medium'>Outcome</h2>
        <ul className='mt-4 space-y-2 text-subtext'>
          {project.metrics?.map(m => (
            <li key={m}>• {m}</li>
          ))}
        </ul>
      </section>
      {project.images?.length > 0 && (
        <section className='mt-12'>
          <h2 className='text-xl font-medium'>Screens</h2>
          <div className='mt-6 relative overflow-hidden aspect-[16/9]'>
            <AnimatePresence mode='wait'>
              <motion.img
                key={index}
                src={project.images[index]}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className='project-image absolute inset-0 w-full h-full object-fill rounded-xl border border-white/5 shadow-sm'
              />
            </AnimatePresence>
            {project.images.length > 1 && (
              <button
                onClick={prev}
                className='absolute left-3 top-1/2 -translate-y-1/2 
          w-10 h-10 rounded-full 
          bg-[color:var(--surface)] border border-[color:var(--text)]/10 
          flex items-center justify-center 
          hover:scale-110 active:scale-95 transition'
              >
                <ChevronLeft />
              </button>
            )}
            {project.images.length > 1 && (
              <button
                onClick={next}
                className='absolute right-3 top-1/2 -translate-y-1/2 
          w-10 h-10 rounded-full 
          bg-[color:var(--surface)] border border-[color:var(--text)]/10 
          flex items-center justify-center 
          hover:scale-110 active:scale-95 transition'
              >
                <ChevronRight />
              </button>
            )}
          </div>
          {project.images.length > 1 && (
            <div className='flex justify-center gap-2 mt-4'>
              {project.images.map((_, i) => (
                <div
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full transition 
      ${
        i === index
          ? 'bg-[var(--text)] scale-110'
          : 'border border-[color:var(--text)]/40 bg-transparent hover:border-[color:var(--text)]/70'
      }`}
                />
              ))}
            </div>
          )}
        </section>
      )}
      <div className='flex gap-4 mt-16'>
        {project.live && (
          <a
            href={project.live}
            target='_blank'
            className='btn-primary px-6 py-3 rounded-full text-sm font-medium transition transform
            bg-[var(--text)] text-[var(--bg)] 
            hover:scale-105 active:scale-95'
          >
            Live Demo
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target='_blank'
            className='btn-secondary px-6 py-3 rounded-full text-sm font-medium transition 
            border border-[color:var(--text)]/10 
            hover:bg-[var(--text)]
            hover:text-[var(--bg)]
            hover:scale-105 active:scale-95'
          >
            View Code
          </a>
        )}
      </div>
    </div>
  )
}
