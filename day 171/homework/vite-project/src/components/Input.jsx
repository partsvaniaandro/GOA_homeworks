import { useEffect, useRef, useState } from 'react'

const Input = () => {
    const [currentValue, setCurrentValue] = useState('')
    const prevRef = useRef(null)
    useEffect(() => {
        prevRef.current = currentValue
    }, [currentValue])
  return (
    <div className='flex flex-col justify-center items-center'>
        <input onChange={(e) => setCurrentValue(e.target.value)} className='text-[38px] p-[10px] border-[2px] rounded-[10px] opacity-[70%]'/>
        <p className='text-[38px] font-medium opacity-[70%]'>current text: {currentValue}</p>
        <p className='text-[38px] font-medium opacity-[70%]'>previous text: {prevRef.current}</p>
    </div>
  )
}

export default Input