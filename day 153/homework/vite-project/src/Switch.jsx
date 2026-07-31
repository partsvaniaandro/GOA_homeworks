import React, { useState } from 'react'

const Switch = () => {
    const [bg, setBg] = useState('bg-red-500')
  return (
    <div>
        <div className={`${bg} w-[50px] h-[50px] rounded-full transition duration-100 ease-in hover:cursor-pointer`} onClick={() => setBg(prev => prev === 'bg-red-500' ? 'bg-green-500' : 'bg-red-500')}></div>
    </div>
  )
}

export default Switch