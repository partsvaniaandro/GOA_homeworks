import React, { useState } from 'react'

const Random = () => {
    const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const [random, setRandom] = useState()
  return (
    <div>
        <button className='bg-gray-700 w-[100px] h-[30px] rounded-[10px]' onClick={() => {
            const randomIndex = Math.floor(Math.random() * numArr.length)
            setRandom(numArr[randomIndex])
        }}>Randomize</button>
        <p>you rolled {random} and {random > 7 ? 'you won!' : 'you lost!'}</p>
    </div>
  )
}

export default Random