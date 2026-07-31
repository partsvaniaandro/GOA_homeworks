import { useState } from 'react'

const AlertEmail = () => {
    const [value, setValue] = useState('')
    const handleSubmit = (e)=>{
        e.preventDefault()
        alert(value)
    }
  return (
    <div className='flex flex-col items-center mt-[50px]'>
        <p className='text-[32px]'>email alert</p>
        <form onSubmit={handleSubmit} className='flex flex-col border-[solid] border-[1px] border-[lightgray] rounded-[5px] w-[500px]'>
            <input type='email' onChange={(e)=>setValue(e.target.value)} className='text-center'/>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default AlertEmail