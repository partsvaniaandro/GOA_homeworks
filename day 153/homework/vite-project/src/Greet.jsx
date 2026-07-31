import React, { useState } from 'react'

const Greet = () => {
    const [value, setValue] = useState('')
    const [display, setDisplay] = useState('hidden')
  return (
    <div>
        <p>input name</p>
        <input className='w-[200px] h-[40px] border-[1px] border-black border-solid' onChange={(e) => {
            setValue(e.target.value) 
            setDisplay('hidden')
        }}></input>
        <button className='w-[80px] h-[40px] border-[1px] border-black border-dashed hover:cursor-pointer active:border-solid' onClick={() => {
            if(value === ''){
                setValue('noName')
                return(
                    setDisplay('block')
                )
            }
            else{
                return(
                    setDisplay('block')
                )
            }
        }}>submit</button>
        <p className={`${display} font-bold`}>{`Hello ${value}`}</p>
    </div>
  )
}

export default Greet