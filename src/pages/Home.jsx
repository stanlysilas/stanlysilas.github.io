import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import FeaturedProjects from '../components/sections/FeaturedProjects'
import Contact from '../components/sections/Contact'
import ScrollReveal from '../components/effects/ScrollReveal'

export default function Home() {
  return (
    <main className="pt-28 px-6 space-y-32">
      <Hero />
      <ScrollReveal>
        <About />
      </ScrollReveal>
      <ScrollReveal>
        <FeaturedProjects />
      </ScrollReveal>
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
    </main>
  )
}