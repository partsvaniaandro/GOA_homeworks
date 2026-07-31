import { useState } from 'react'

const Input = () => {
    const [name, setName] = useState('')
    const length = name.length //derived state. მოდის name useState-დან
  return (
    <div className='flex flex-col justify-center items-center gap-[20px] border-[1px] border-[#4c4c4c] rounded-[10px] p-[20px]'>
        <input onChange={(e) => setName(e.target.value)} value={name} className='border-[2px] border-[#4c4c4c] text-center' placeholder='Text'/>
        <p>{length}</p>
    </div>
  )
}

export default Input