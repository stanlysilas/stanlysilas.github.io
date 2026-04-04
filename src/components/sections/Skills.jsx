export default function Skills() {
  return (
    <section className="py-20 max-w-4xl mx-auto">
      <h2 className="text-2xl mb-6">Skills</h2>
      <div className="grid md:grid-cols-3 gap-6 text-subtext">
        <div>
          <h3 className="text-text">Frontend</h3>
          <p>Flutter, React</p>
        </div>
        <div>
          <h3 className="text-text">Backend</h3>
          <p>Firebase, System Design</p>
        </div>
        <div>
          <h3 className="text-text">Design</h3>
          <p>Figma, UX Thinking</p>
        </div>
      </div>
    </section>
  )
}