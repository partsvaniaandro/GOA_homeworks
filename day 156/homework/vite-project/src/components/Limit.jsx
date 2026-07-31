import React, { useState } from 'react'

const Limit = () => {
    const [count, setCount] = useState(0)
    const [showMessage, setShowMessage] = useState(false)
  return (
    <div>
        <button className='bg-gray-700 w-[80px] h-[30px] rounded-[10px]' onClick={() => 
            setCount(prev => {
              const newNum = prev === 10 ? 10 : prev + 1
              if (newNum === 10){
                setShowMessage(true)
                setTimeout(() => setShowMessage(false), 2000)
              }
              return newNum
            })}>+</button>
        <p>{count}</p>
        {showMessage ? <p className='text-[red]'>limit reached</p> : null}
    </div>
  )
}

export default Limit