import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from '../ui/ThemeToggle'

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <nav className="navbar fixed top-0 w-full h-20 backdrop-blur bg-black/30 border-b border-white/5 z-50">
      <div className="max-w-6xl mx-auto h-full flex items-center justify-between px-6">
        <Link to="/" className="font-bold">Stanly</Link>
        <div className="flex items-center gap-6">
          <Link to="/projects" className={`link-underline transition ${pathname === '/projects'
            ? 'text-primary'
            : 'text-subtext hover:text-primary'
            }`}>Projects</Link>
          <a href="/#contact" className="link-underline text-subtext transition">Contact</a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}