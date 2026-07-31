import React, { useEffect, useState } from 'react'

const Count = () => {
    const [count, setCount] = useState(0)
    useEffect(()=>{
        console.log('Count Changed')
    }, [count])
  return (
    <div className='flex'>
        <button onClick={() => setCount(prev => prev-1)}>-</button>
        <p>{count}</p>
        <button onClick={() => setCount(prev => prev+1)}>+</button>
    </div>
  )
}

export default Count