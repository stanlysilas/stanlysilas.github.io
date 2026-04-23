import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import FeaturedProjects from '../components/sections/FeaturedProjects'
import Contact from '../components/sections/Contact'
import ScrollReveal from '../components/effects/ScrollReveal'
import GithubActivity from '../components/sections/GithubActivity'

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
        <GithubActivity />
      </ScrollReveal>
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
    </main>
  )
}