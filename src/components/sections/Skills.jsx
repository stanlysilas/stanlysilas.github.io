export default function Skills() {
  return (
    <section className="py-28 border-t border-white/5 relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[radial-gradient(circle,rgba(108,123,255,0.06),transparent_70%)] blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Skills
          </h2>

          <p className="mt-4 text-subtext">
            Focused on building scalable frontend systems with strong performance and user experience.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-10">

          {/* Frontend */}
          <div>
            <h3 className="text-sm font-medium text-white/80">Frontend</h3>

            <div className="mt-4 space-y-2 text-sm text-subtext">
              <p>Flutter (primary)</p>
              <p>React (learning & building)</p>
              <p>Tailwind CSS</p>
              <p>Framer Motion</p>
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-sm font-medium text-white/80">Backend</h3>

            <div className="mt-4 space-y-2 text-sm text-subtext">
              <p>Firebase (Auth, Firestore)</p>
              <p>Realtime systems</p>
              <p>Basic API integration</p>
              <p>App architecture</p>
            </div>
          </div>

          {/* Design */}
          <div>
            <h3 className="text-sm font-medium text-white/80">Design</h3>

            <div className="mt-4 space-y-2 text-sm text-subtext">
              <p>Figma</p>
              <p>UX thinking</p>
              <p>System design mindset</p>
              <p>Minimal UI design</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}