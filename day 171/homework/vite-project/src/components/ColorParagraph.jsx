import { useState, useEffect, useRef } from 'react'

const ColorParagraph = () => {
    const [count, setCount] = useState(0)
    const prevRef = useRef(0)
    useEffect(() => {
        prevRef.current = count
    }, [count])
  return (
    <div className='flex flex-col justify-center items-center'>
        <p className={`text-[38px] font-medium opacity-[70%] ${count % 2 === 0 ? 'text-green-700' : 'text-blue-700'}`}>current: {count}</p>
        <p className={`text-[38px] font-medium opacity-[70%] ${prevRef.current % 2 === 0 ? 'text-green-700' : 'text-blue-700'}`}>previous: {prevRef.current}</p>
        <button onClick={() => setCount(prev => prev + 1)} className='text-[38px] p-[10px] border-[2px] rounded-[10px] opacity-[70%]'>Increase</button>
    </div>
  )
}

export default ColorParagraph