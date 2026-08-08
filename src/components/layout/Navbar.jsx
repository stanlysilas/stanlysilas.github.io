import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "../ui/ThemeToggle/ThemeToggle";
import "./Navbar.css";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand">
          <span className="navbar-brand-icon">›_</span>
          <span>stanworks</span>
          <span className="navbar-cursor" />
        </Link>

        <div className="navbar-links">
          <Link
            to="/projects"
            className={`navbar-link ${
              pathname.startsWith("/projects") ? "active" : ""
            }`}
          >
            Projects
          </Link>

          <a href="/#contact" className="navbar-link">
            Contact
          </a>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
