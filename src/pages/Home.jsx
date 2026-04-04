import Hero from '../components/sections/Hero'
import FeaturedProjects from '../components/sections/FeaturedProjects'
import ScrollReveal from '../components/effects/ScrollReveal'

export default function Home() {
  return (
    <main className="pt-24 px-6">
      <Hero />
      <ScrollReveal>
        <FeaturedProjects />
      </ScrollReveal>
    </main>
  )
}