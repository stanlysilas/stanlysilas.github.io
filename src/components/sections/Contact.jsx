export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 pb-40 text-center max-w-6xl mx-auto scroll-mt-28"
    >
      <h2 className="text-5xl font-semibold">Let’s build something great</h2>
      <p className="mt-4 text-subtext">
        Open to opportunities, collaborations, or just a quick chat.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a
          href="mailto:vstanlysilas@gmail.com"
          className="btn-secondary px-6 py-3 rounded-full text-sm font-medium transition 
          border border-[color:var(--text)]/10 
          hover:bg-[var(--text)]
          hover:text-[var(--bg)]
          hover:scale-105 active:scale-95"
        >
          Email
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
        <a
          href="https://linkedin.com/in/stanlysilas"
          target="_blank"
          className="btn-secondary px-6 py-3 rounded-full text-sm font-medium transition 
          border border-[color:var(--text)]/10 
          hover:bg-[var(--text)]
          hover:text-[var(--bg)]
          hover:scale-105 active:scale-95"
        >
          LinkedIn
        </a>
        <a
          href="https://calendly.com/vstanlysilas/30min"
          target="_blank"
          className="btn-secondary px-6 py-3 rounded-full text-sm font-medium transition 
          border border-[color:var(--text)]/10 
          hover:bg-[var(--text)]
          hover:text-[var(--bg)]
          hover:scale-105 active:scale-95"
        >
          Let’s Talk
        </a>
      </div>
    </section>
  )
}