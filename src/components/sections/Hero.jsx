import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import AnimatedText from '../effects/AnimatedText'
import GlitchIcon from '../effects/GlitchIcon'

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6">
      <GlitchIcon />

      <div className="mt-6 flex flex-col items-center">

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-base text-subtext mb-2"
        >
          Hi, I’m
        </motion.p>

        <h1 className="font-bold text-5xl md:text-7xl leading-[1.1] tracking-tight pb-1 
        bg-gradient-to-r from-[var(--text)] via-[var(--text)] to-[var(--accent)] 
        bg-clip-text text-transparent">
          <AnimatedText text="Stanly Silas" />
        </h1>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="mt-4 text-lg md:text-xl max-w-xl leading-snug"
        >
          I design and build scalable frontend systems
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="mt-2 max-w-xl text-subtext leading-relaxed"
        >
          Focused on performance, clarity, and long-term maintainability.
        </motion.p>

      </div>

      <div className="mt-8 flex gap-4">

        <Link
          to="/projects"
          className="btn-primary px-6 py-3 rounded-full text-sm font-medium transition transform
          bg-[var(--text)] text-[var(--bg)] 
          hover:scale-105 active:scale-95"
        >
          View Work
        </Link>

        <a
          href="#contact"
          className="btn-secondary px-6 py-3 rounded-full text-sm font-medium transition 
          border border-[color:var(--text)]/10 
          hover:bg-[var(--text)]
          hover:text-[var(--bg)]
          hover:scale-105 active:scale-95"
        >
          Contact
        </a>

        <a
          href="/assets/resume.pdf"
          target="_blank"
          className="btn-secondary px-6 py-3 rounded-full text-sm font-medium transition 
          border border-[color:var(--text)]/10 
          hover:bg-[var(--text)]
          hover:text-[var(--bg)]
          hover:scale-105 active:scale-95"
        >
          Resume
        </a>

      </div>
    </section>
  )
}