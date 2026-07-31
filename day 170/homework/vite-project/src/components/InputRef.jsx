import { useRef } from 'react'

const InputRef = () => {
    const inputRef = useRef(null)
    
  return (
    <div className='flex flex-col items-center gap-[10px]'>
        <input ref={inputRef} className='border-[1px] border-[#373F51] p-[5px] rounded-[5px]'/>
        <button 
        onClick={() => {
            const isActive = inputRef.current === document.activeElement
            isActive ? inputRef.current.blur() : inputRef.current.focus()
        }}
        onMouseDown={(e) => e.preventDefault()}
        className='hover:cursor-pointer hover:bg-[#373F51] transition border-[#373F51] border-[1px] p-[5px] rounded-[5px]'
        >active</button>
    </div>
  )
}

export default InputRef