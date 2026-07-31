import { useState, useRef, useEffect } from 'react'

export const useHover = () => {
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onEnter = () => setIsHovered(true)
    const onLeave = () => setIsHovered(false)

    el.addEventListener('mouseenter', onEnter)
    el.addEventListener('mouseleave', onLeave)

    return () => {
      el.removeEventListener('mouseenter', onEnter)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return { ref, isHovered }
}