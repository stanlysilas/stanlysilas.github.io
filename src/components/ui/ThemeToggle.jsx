import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext)

  const isDark = theme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative w-14 h-8 rounded-full border 
      border-[color:var(--subtext)]/20 
      bg-[color:var(--surface)] 
      flex items-center px-1 transition"
    >
      <div
        className={`absolute w-6 h-6 rounded-full flex items-center justify-center
        transition-all duration-300 ease-in-out
        ${isDark 
          ? 'translate-x-0 bg-[var(--text)] text-[var(--bg)]' 
          : 'translate-x-6 bg-[var(--text)] text-[var(--bg)]'
        }`}
      >
        {isDark ? (
          <Moon size={14} />
        ) : (
          <Sun size={14} />
        )}
      </div>
    </button>
  )
}