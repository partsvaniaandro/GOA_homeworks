import { useState } from 'react'

const InputDisplay = () => {
    const [value, setValue] = useState('')
  return (
    <div className='flex flex-col gap-[10px] justify-items-center items-center'>
        <form>
            <input onChange={(e)=>setValue(e.target.value)} className='border-[solid] border-[1px] border-[lightgray] rounded-[5px] text-center'/>
        </form>
        <p className='border-[solid] border-[1px] border-[lightgray] h-[26px] rounded-[5px] w-[400px]'>{value}</p>
    </div>
  )
}

export default InputDisplay