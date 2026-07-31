import React, { useRef, useState } from 'react'

const IncreaseDivWidth = () => {
    const divRef = useRef(null)
    const [indicator, setIndicator] = useState(false)
  return (
    <div className='flex flex-col items-center gap-[10px]'>
        <div ref={divRef} className='w-[300px] h-[300px] border-[1px] border-[#373F51] rounded-[5px]'></div>
        <button
        onClick={() => {
            setIndicator(prev => {
                if(!prev){
                    divRef.current.classList.remove('w-[300px]')
                    divRef.current.classList.add('w-[600px]')
                }
                else{
                    divRef.current.classList.remove('w-[600px]')
                    divRef.current.classList.add('w-[300px]')
                }
                return !prev
            })
        }}
        className='hover:cursor-pointer border-[1px] hover:bg-[#373F51] transition border-[#373F51] rounded-[5px] p-[5px]'
        >{indicator ? 'Decrease Width' : 'Increase Width'}</button>
    </div>
  )
}

export default IncreaseDivWidth