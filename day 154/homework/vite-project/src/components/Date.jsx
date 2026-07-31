import React, { useState } from 'react'

const Dated = () => {
    const [arr, setArr] = useState([])
    const [name, setName] = useState('')

  return (
    <div>
        <input value={name} onChange={(e) => setName(e.target.value)}></input>
        <button onClick={() => {
            if(name === ''){
                return
            }
            setArr(prev => [...prev, {id:Date.now(), name:name}])
            setName('')
        }}>send</button>
        <p>{arr.map((item)=>(
            <li key={item.id}>- {item.name}</li>
        ))}</p>
    </div>
  )
}

export default Dated