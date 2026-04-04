import { useEffect } from 'react'

export default function CursorGlow() {
  useEffect(() => {
    const glow = document.createElement('div')

    glow.style.position = 'fixed'
    glow.style.pointerEvents = 'none'
    glow.style.width = '200px'
    glow.style.height = '200px'
    glow.style.borderRadius = '50%'
    glow.style.background = 'radial-gradient(circle, rgba(108,123,255,0.12), transparent 70%)'
    glow.style.filter = 'blur(40px)'
    glow.style.zIndex = '0'

    document.body.appendChild(glow)

    window.addEventListener('mousemove', e => {
      glow.style.left = e.clientX - 100 + 'px'
      glow.style.top = e.clientY - 100 + 'px'
    })
  }, [])

  return null
}