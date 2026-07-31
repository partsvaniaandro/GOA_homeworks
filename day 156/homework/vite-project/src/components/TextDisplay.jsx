import React, { useState } from 'react'

const TextDisplay = () => {
    const [display, setDisplay] = useState(true)
  return (
    <div className='h-[20%]'>
        <button className='bg-gray-700 w-[80px] h-[30px] rounded-[10px]' onClick={() => setDisplay(prev => !prev)}>{display ? 'hide' : 'show'}</button>
        <p className={display ? 'block' : 'hidden'}>Hello!</p>
    </div>
  )
}

export default TextDisplay