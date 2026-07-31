import React, { useRef } from 'react'

const HighLight = () => {
    const pRef = useRef(null)
  return (
    <div>
        <p ref={pRef} className='w-[100px]'>Highlight Me!</p>
        <button onClick={() => pRef.current.classList.add('bg-yellow-100')} className='hover:cursor-pointer border-[1px] rounded-[5px] p-[5px]'>Hightlight</button>
    </div>
  )
}

export default HighLight