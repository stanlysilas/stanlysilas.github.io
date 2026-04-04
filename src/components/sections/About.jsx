export default function About() {
  return (
    <section className="py-20 max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
      <div className="w-full h-64 bg-surface rounded-xl" />
      <div>
        <h2 className="text-2xl mb-4">About</h2>
        <p className="text-subtext">
          Frontend engineer focused on building scalable, system-driven applications with strong UX thinking.
        </p>
      </div>
    </section>
  )
}