import { Link } from 'react-router-dom'
import ThemeToggle from '../ui/ThemeToggle'

export default function Navbar() {
  return (
    <nav className="fixed w-full flex justify-between p-6 backdrop-blur">
      <Link to="/">Stanly</Link>
      <div className="flex items-center gap-6">
        <Link to="/projects">Projects</Link>
        <ThemeToggle />
      </div>
    </nav>
  )
}