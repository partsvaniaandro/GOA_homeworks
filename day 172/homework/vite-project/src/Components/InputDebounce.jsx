import React, { useEffect, useRef, useState } from 'react'

const InputDebounce = () => {
    const timeoutRef = useRef(null)
    const [query, setQuery] = useState('')
    const [debouncedQuery, setDebouncedQuery] = useState('')
    useEffect(()=>{
        timeoutRef.current = setTimeout(() => {
            setDebouncedQuery(query)
        }, 500);


        return () => {
            clearTimeout(timeoutRef.current)
        }
    }, [query])
  return (
    <div className='flex flex-col justify-center items-center gap-[20px]'>
        <input onChange={(e) => setQuery(e.target.value)} className='border-[1px]'/>
        <p className='border-[1px] p-[3px]'>{debouncedQuery}</p>
    </div>
  )
}

export default InputDebounce