import { motion } from 'framer-motion'
import AnimatedText from '../effects/AnimatedText'

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6">

      <h1 className="text-4xl md:text-6xl font-semibold">
        <AnimatedText text="Stanly Silas" />
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="mt-6 max-w-xl text-subtext"
      >
        Frontend Engineer crafting high-performance, system-driven apps
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="mt-8 flex gap-4"
      >
        <a href="/projects" className="px-6 py-3 bg-white text-black rounded-full text-sm font-medium hover:opacity-90 transition">
          View Work
        </a>
        <a href="#contact" className="px-6 py-3 border border-white/10 rounded-full text-sm font-medium hover:bg-white/5 transition">
          Contact
        </a>
      </motion.div>

    </section>
  )
}