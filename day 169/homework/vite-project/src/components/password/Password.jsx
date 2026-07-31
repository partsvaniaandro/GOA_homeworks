import React, { useState } from 'react'
import PasswordLogic from './PasswordLogic'

const Password = () => {
  const [password, setPassword] = useState('')
  return (
    <div>
      <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
      <PasswordLogic password={password}/>
    </div>
  )
}

export default Password