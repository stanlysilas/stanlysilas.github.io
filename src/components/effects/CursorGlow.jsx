import { useEffect } from 'react'

export default function CursorGlow() {
  useEffect(() => {
    const cursor = document.createElement('div')
    const dot = document.createElement('div')

    cursor.className = 'custom-cursor'
    dot.className = 'custom-cursor-dot'

    document.body.appendChild(cursor)
    document.body.appendChild(dot)

    let x = 0
    let y = 0
    let tx = 0
    let ty = 0

    const move = (e) => {
      x = e.clientX
      y = e.clientY

      dot.style.left = x + 'px'
      dot.style.top = y + 'px'

      const target = e.target.closest('a, button, .project-card')

      if (target) {
        cursor.classList.add('cursor-hover')
      } else {
        cursor.classList.remove('cursor-hover')
      }
    }

    const animate = () => {
      tx += (x - tx) * 0.15
      ty += (y - ty) * 0.15

      cursor.style.left = tx + 'px'
      cursor.style.top = ty + 'px'

      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', move)
    animate()

    return () => {
      window.removeEventListener('mousemove', move)
      document.body.removeChild(cursor)
      document.body.removeChild(dot)
    }
  }, [])

  return null
}