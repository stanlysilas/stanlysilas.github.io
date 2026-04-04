import { motion } from 'framer-motion'

export default function AnimatedText({ text }) {
  const words = text.split(' ')

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}