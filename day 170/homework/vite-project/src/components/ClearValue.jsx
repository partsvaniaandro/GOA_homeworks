import React, { useRef } from 'react'

const ClearValue = () => {
    const inpRef = useRef(null)
  return (
    <div className='flex flex-col items-center gap-[10px]'>
        <input ref={inpRef} className='border-[1px] border-[#373F51] rounded-[5px]'/>
        <button onClick={() => inpRef.current.value=''} className='hover:cursor-pointer hover:bg-[#373F51] transition border-[1px] border-[#373F51] rounded-[5px] p-[5px]'>Clear</button>
    </div>
  )
}

export default ClearValue