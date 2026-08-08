import { LinkedInIcon, GitHubIcon } from "../ui/Icons";
import { Mail } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-terminal">
        <div className="footer-terminal-header">
          <div className="footer-dots">
            <span className="red" />
            <span className="yellow" />
            <span className="green" />
          </div>

          <span>stanly@stanworks:~/</span>
        </div>

        <div className="footer-content">
          <div className="footer-copyright">© 2026 Stanly Silas</div>

          <div className="footer-built">
            Built with React, Tailwind, and Framer Motion
          </div>

          <div className="footer-socials">
            <a
              href="https://github.com/stanlysilas"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>

            <a
              href="https://linkedin.com/in/stanlysilas"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>

            <a href="mailto:vstanlysilas@gmail.com" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">Designed & built by Stanly</div>
    </footer>
  );
}
