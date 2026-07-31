import React, { useRef, useState } from 'react'

const InputSelect = () => {
    const inpRef = useRef(null)
    const [value, setValue] = useState("Hello world");
  return (
    <div>
        <input ref={inpRef} className='border-[1px] rounded-[5px]' value={value} onChange={(e) => setValue(e.target.value)}/>
        <button onClick={() => inpRef.current.select()} className='hover:cursor-pointer border-[1px] rounded-[5px] p-[5px]'>Select</button>
    </div>
  )
}

export default InputSelect