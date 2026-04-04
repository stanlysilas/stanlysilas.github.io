import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

export default function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="text-sm px-3 py-1 border border-white/10 rounded-full"
    >
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  )
}