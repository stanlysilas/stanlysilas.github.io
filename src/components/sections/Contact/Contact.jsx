import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section scroll-mt-28">
      <div className="contact-grid">
        <div className="contact-heading">
          <div className="contact-index">05 — CONTACT</div>

          <h2>
            Let’s build
            <br />
            something <em>great.</em>
          </h2>
        </div>

        <div className="contact-content">
          <p className="contact-label">~ contact.me</p>

          <p className="contact-description">
            Open to opportunities, collaborations, interesting projects, or just
            a conversation about technology and design.
          </p>

          <div className="contact-terminal">
            <div className="contact-terminal-header">
              <div className="contact-terminal-dots">
                <span />
                <span />
                <span />
              </div>

              <span>stanly@stanworks:~/contact</span>
            </div>

            <div className="contact-terminal-body">
              <p>
                <span className="terminal-green">$</span> whoami
              </p>

              <p className="terminal-value">Stanly Silas</p>

              <p>
                <span className="terminal-green">$</span> status
              </p>

              <p className="terminal-value">
                <span className="status-dot" />
                Available for interesting work
              </p>
            </div>
          </div>

          <div className="contact-links">
            <a href="mailto:vstanlysilas@gmail.com">
              <span>Email</span>
              <span>→</span>
            </a>

            <a
              href="https://github.com/stanlysilas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>GitHub</span>
              <span>→</span>
            </a>

            <a
              href="https://linkedin.com/in/stanlysilas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>LinkedIn</span>
              <span>→</span>
            </a>

            <a
              href="https://calendly.com/vstanlysilas/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Schedule a conversation</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
