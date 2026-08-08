import Hero from '../../components/sections/Hero/Hero'
import About from '../../components/sections/About/About'
import FeaturedProjects from '../../components/sections/FeaturedProjects/FeaturedProjects'
import Contact from '../../components/sections/Contact/Contact'
import ScrollReveal from '../../components/effects/ScrollReveal'
import GithubActivity from '../../components/sections/GithubActivity/GithubActivity'

export default function Home() {
  return (
    <main>
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