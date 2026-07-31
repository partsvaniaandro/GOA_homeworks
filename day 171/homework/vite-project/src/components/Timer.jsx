import React, { useEffect, useRef, useState } from 'react'

const Timer = () => {
    const [started, setStarted] = useState(false)

    const intervalIdRef = useRef(null)
    const countRef = useRef(0)
    const displayRef = useRef(null)

    useEffect(() => {
        if(!started) return

        const startTimer = () => {
            intervalIdRef.current = setInterval(() => {

                countRef.current = countRef.current + 1

                displayRef.current.textContent = countRef.current
            }, 1000);
        }
        
        startTimer()

        return () => {
            clearInterval(intervalIdRef.current)
        }
    }, [started])

    const resetTimer = () => {
        clearInterval(intervalIdRef.current)
        countRef.current = 0
        displayRef.current.textContent = countRef.current
        setStarted(false)
    }
  return (
    <div>
        <p ref={displayRef}>0</p>
        <button onClick={() => setStarted(prev => !prev)}>{started ? 'pause' : 'start' }</button>
        <button onClick={resetTimer}>reset</button>
    </div>
  )
}

export default Timer