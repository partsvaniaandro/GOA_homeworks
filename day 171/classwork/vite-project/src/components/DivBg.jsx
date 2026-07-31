import React, { useRef } from 'react'

const DivBg = () => {
    const divRef = useRef(null)
  return (
    <div>
        <div ref={divRef} className='w-[100px] h-[100px] border-[1px] rounded-[5px]'></div>
        <button onClick={() => divRef.current.classList.add('bg-green-500')} className='hover:cursor-pointer border-[1px] rounded-[5px] p-[5px]'>Change background</button>
    </div>
  )
}

export default DivBg