import React, { useState } from 'react'

const Pop = () => {
    const [numArr, setNumArr] = useState([1, 2, 3, 4])
  return (
    <div>
        <button onClick={() => setNumArr(prev => prev.slice(0, -1))}>remove</button>
        <p>{numArr.map((item, index) => (
            <li key={index}>{item}</li>
        ))}</p>
        <button onClick={() => setNumArr(prev => [...prev, prev.length + 1])}>add</button>
    </div>
  )
}

export default Pop