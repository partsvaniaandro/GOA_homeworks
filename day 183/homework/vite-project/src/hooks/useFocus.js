import { useState, useRef, useEffect, useCallback } from 'react'

export const useFocus = () => {
  const ref = useRef(null)
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onFocus = () => setIsFocused(true)
    const onBlur  = () => setIsFocused(false)

    el.addEventListener('focus', onFocus)
    el.addEventListener('blur',  onBlur)

    return () => {
      el.removeEventListener('focus', onFocus)
      el.removeEventListener('blur',  onBlur)
    }
  }, [])

  const focus  = useCallback(() => ref.current?.focus(),  [])
  const blur   = useCallback(() => ref.current?.blur(),   [])
  const toggle = useCallback(() =>
    isFocused ? ref.current?.blur() : ref.current?.focus()
  , [isFocused])

  return { ref, isFocused, focus, blur, toggle }
}