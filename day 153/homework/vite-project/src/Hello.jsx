import React, { useState } from 'react'

const Hello = () => {
    const [text, setText] = useState('Hello')
  return (
    <div>
        <p>{text}</p>
        <button onClick={() => setText(prev => prev === 'Hello' ? 'Hello React' : 'Hello')}>Change</button>
    </div>
  )
}

export default Hello