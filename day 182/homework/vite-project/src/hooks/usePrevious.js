import { useEffect, useRef } from 'react'

export const usePrevious = (value) => {
  const prevRef = useRef()

  useEffect(()=>{
    prevRef.current = value
  })

  return prevRef.current
}
