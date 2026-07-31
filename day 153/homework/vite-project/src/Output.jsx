import React, { useState } from 'react'

const Output = () => {
    const [value, setValue] = useState()
  return (
    <div>
        <input className='w-[200px] h-[40px] border-1 border-black border-solid' onChange={(e) => setValue(e.target.value)}></input>
        <p>{value}</p>
    </div>
  )
}

export default Output