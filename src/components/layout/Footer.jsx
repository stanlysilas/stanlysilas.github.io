import { LinkedInIcon, GitHubIcon } from '../ui/Icons'
import { Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-28 border-t border-white/5 backdrop-blur bg-[color:var(--surface)]">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
        <div className="text-subtext text-center md:text-left">
          © 2026 Stanly Silas
        </div>
        <div className="text-subtext text-center">
          Built with React, Tailwind, and Framer Motion
        </div>
        <div className="flex items-center gap-4 text-subtext">
          <a
            href="https://github.com/stanlysilas"
            target="_blank"
            className="p-2 rounded-full hover:bg-[color:var(--text)]/5 hover:text-primary transition"
          >
            <GitHubIcon className="w-[18px] h-[18px]" />
          </a>
          <a
            href="https://linkedin.com/in/stanlysilas"
            target="_blank"
            className="p-2 rounded-full hover:bg-[color:var(--text)]/5 hover:text-primary transition"
          >
            <LinkedInIcon className="w-[18px] h-[18px]" />
          </a>
          <a
            href="mailto:vstanlysilas@gmail.com"
            className="p-2 rounded-full hover:bg-[color:var(--text)]/5 hover:text-primary transition"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
      <div className="text-center text-xs text-subtext pb-6">
        Designed & built by Stanly
      </div>
    </footer>
  )
}