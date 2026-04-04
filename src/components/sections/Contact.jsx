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

      <div className="mt-8 flex justify-center gap-6 text-sm">

        <a
          href="mailto:vstanlysilas@gmail.com"
          className="btn-secondary px-5 py-2 text-sm border border-white/10 rounded-full hover:bg-white/5 transition hover:scale-95 active:scale-90"
        >
          Email
        </a>

        <a
          href="https://github.com/stanlysilas"
          target="_blank"
          className="btn-secondary px-5 py-2 text-sm border border-white/10 rounded-full hover:bg-white/5 transition hover:scale-95 active:scale-90"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/stanlysilas"
          target="_blank"
          className="btn-secondary px-5 py-2 text-sm border border-white/10 rounded-full hover:bg-white/5 transition hover:scale-95 active:scale-90"
        >
          LinkedIn
        </a>

        <a
          href="https://calendly.com/vstanlysilas/30min"
          target="_blank"
          className="btn-secondary px-5 py-2 text-sm border border-white/10 rounded-full hover:bg-white/5 transition hover:scale-95 active:scale-90"
        >
          Let's Talk
        </a>

      </div>
    </section>
  )
}