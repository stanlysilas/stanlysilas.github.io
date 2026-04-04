import { useEffect, useState } from 'react'
import { Code, Layers, Boxes, Workflow, Terminal, Sparkles, Flame, Cpu, Brain } from 'lucide-react'

const icons = [
  <Code size={28} />,
  <Layers size={28} />,
  <Boxes size={28} />,
  <Workflow size={28} />,
  <Terminal size={28} />,
  <Sparkles size={28} />,
  <Flame size={28} />,
  <Cpu size={28} />,
  <Brain size={28} />,
]

export default function GlitchIcon() {
  const [index, setIndex] = useState(0)
  const [glitch, setGlitch] = useState(false)

  const getNextIndex = (current) => {
    let next = current
    while (next === current) {
      next = Math.floor(Math.random() * icons.length)
    }
    return next
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true)
      const finalIndex = getNextIndex(index)
      let flickers = 0
      const flickerInterval = setInterval(() => {
        setIndex(prev => getNextIndex(prev))
        flickers++
        if (flickers > 6) {
          clearInterval(flickerInterval)
          setIndex(finalIndex)
          setGlitch(false)
        }
      }, 40)
    }, 1800)
    return () => clearInterval(interval)
  }, [index])

  return (
    <div className="mb-4 flex justify-center relative">
      <div className="absolute w-16 h-16 bg-[#8E9BFF]/20 blur-2xl scale-110 rounded-xl rotate-6" />
      <div
        className={`relative z-10 transition ${glitch ? 'translate-x-[2px]' : ''
          }`}
      >
        {icons[index]}
        {glitch && (
          <div className="absolute left-0 top-0 text-accent opacity-60 translate-x-[-2px]">
            {icons[index]}
          </div>
        )}
      </div>
    </div>
  )
}