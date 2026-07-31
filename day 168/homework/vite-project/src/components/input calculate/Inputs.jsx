import React, { useState } from 'react'
import InputCalculator from './InputCalculator'

const Inputs = () => {
    const [firstNum, setFirstNum] = useState('')
    const [secondNum, setSecondNum] = useState('')
  return (
    <div className='border-[1px] border-[#4c4c4c] rounded-[10px] p-[30px] flex flex-col justify-center items-center gap-[20px]'>
        <div className='flex justify-center gap-[20px]'>
            <input type='number' onChange={(e)=>setFirstNum(e.target.value)} value={firstNum} onFocus={() => setFirstNum('')} className='text-center border-[2px] border-[#4c4c4c]'/>
            <p className='text-[24px]'>+</p>
            <input type='number' onChange={(e)=>setSecondNum(e.target.value)} value={secondNum} onFocus={() => setSecondNum('')} className='text-center border-[2px] border-[#4c4c4c]'/>
        </div>
        <InputCalculator firstNum={Number(firstNum)} secondNum={Number(secondNum)}/>
    </div>
  )
}

export default Inputs