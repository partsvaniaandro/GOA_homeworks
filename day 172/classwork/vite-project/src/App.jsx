import { useEffect, useRef, useState } from 'react'


function App() {
  const [currentText, setCurrentText] = useState('')
  const [debouncedText, setDebouncedText] = useState('')
  const timeoutRef = useRef(null)

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setDebouncedText(currentText)
    }, 2000);

    return(() => {
      clearTimeout(timeoutRef.current)
    })
  })
  return (
    <div>
      <input onChange={(e) => setCurrentText(e.target.value)} className='border-[2px] rounded-[10px] p-[5px]'/>
      <p>{debouncedText}</p>
    </div>
  )
}

export default App
