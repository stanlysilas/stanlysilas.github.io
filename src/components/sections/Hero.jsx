import { motion } from 'framer-motion'
import AnimatedText from '../effects/AnimatedText'
import GlitchIcon from '../effects/GlitchIcon'

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6 gap-6">
      <GlitchIcon />
      <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
        <AnimatedText text="Stanly Silas" />
      </h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="mt-4 max-w-xl text-subtext"
      >
        I build scalable, system-driven frontend applications with a focus on performance and clarity.
      </motion.p>
      <div className="mt-8 flex gap-4">
        <a
          href="/projects"
          className="btn-primary px-6 py-3 rounded-full text-sm font-medium transition
    bg-white text-black
    dark:bg-white dark:text-black
    hover:opacity-90 hover:scale-95 active:scale-90"
        >
          View Work
        </a>
        <a
          href="#contact"
          className="btn-secondary px-6 py-3 rounded-full text-sm font-medium transition
    border border-white/10 dark:border-white/10 light:border-black/10
    hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-black/5 hover:scale-95 active:scale-90"
        >
          Contact
        </a>
      </div>
    </section>
  )
}