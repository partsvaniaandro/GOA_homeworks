import React, { useState } from 'react'

const TaskList = () => {
    const [listArr, setListArr] = useState([])
  return(
    <div>
        <p>{listArr.map((item, index)=>(
            <li key={index}>{item}</li>
        ))}</p>
        <button onClick={() => {
            setListArr(prev => [...prev, 'new task'])
            }}>add</button>
    </div>
  )
}
export default TaskList