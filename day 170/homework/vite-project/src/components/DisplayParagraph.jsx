import React, { useRef, useState } from 'react'

const DisplayParagraph = () => {
    const pRef = useRef(null)
    const [display, setDisplay] = useState(true)
  return (
    <div className='flex flex-col items-center justify-center gap-[10px] h-[100px]'>
        <p ref={pRef} className={`${display ? 'block' : 'hidden'}`}>Hello World</p>
        <button onClick={() => setDisplay(prev => !prev)} className='hover:cursor-pointer hover:bg-[#373F51] transition border-[1px] border-[#373F51] rounded-[5px] p-[5px]'>{display ? 'Hide' : 'Show'}</button>
    </div>
  )
}

export default DisplayParagraph