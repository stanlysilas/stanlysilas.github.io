export default function About() {
  return (
    <section className="py-28 pb-40 text-center max-w-6xl mx-auto scroll-mt-28 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[radial-gradient(circle,rgba(108,123,255,0.08),transparent_70%)] blur-xl pointer-events-none" />
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <div className="profile-image w-48 h-48 mx-auto rounded-3xl overflow-hidden bg-[#111117] shadow-sm">
          <img
            src="/assets/profile.jpg"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="mt-8 text-5xl font-semibold tracking-tight">
          About
        </h2>
        <p className="mt-4 text-primary">
          I’m a frontend engineer with 2+ years of experience building high-performance, system-driven applications.
          I focus on clarity, performance, and scalable system design.
        </p>
        <p className="mt-4 text-subtext">
          I primarily work with Flutter and Firebase, and I’m expanding into React to deepen my frontend expertise.
        </p>
        <div className="mt-8 w-12 h-px bg-black/20 dark:bg-white/20 mx-auto" />
        <div className="mt-6 space-y-1 text-sm text-subtext">
          <p>• 2+ years experience</p>
          <p>• Flutter, React, Firebase</p>
          <p>• System design & UX thinking</p>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="/assets/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-6 py-3 rounded-full text-sm font-medium transition transform
            bg-[var(--text)] text-[var(--bg)] 
            hover:scale-105 active:scale-95"
          >
            View Resume
          </a>
          <a
            href="https://github.com/stanlysilas"
            target="_blank"
            className="btn-secondary px-6 py-3 rounded-full text-sm font-medium transition 
            border border-[color:var(--text)]/10 
            hover:bg-[var(--text)]
            hover:text-[var(--bg)]
            hover:scale-105 active:scale-95"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}