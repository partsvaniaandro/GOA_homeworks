import React, { useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const InputStorage = ({ theme, setTheme }) => {
  const [value, setValue] = useLocalStorage('name', 'Anonymous')
  const [nameValue, setNameValue] = useState('')
  const [error, setError] = useState('')
  return (
    <div className='flex flex-col gap-[50px]'>
      <div>
        <input placeholder='username' value={nameValue} onChange={(e) => setNameValue(e.target.value)}/>

        <p>Your current username is: {value}</p>

        <p className='text-[red] font-medium'>{error}</p>

        <button onClick={() => {
          if(nameValue.length < 6){
            setError('username must contain 6 or more characters')
            return;
          }else{
            setError('')
            setValue(nameValue)
          }
        }}>Save Name</button>
      </div>

      <div>
        <button onClick={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')}>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</button>
      </div>

    </div>
  )
}

export default InputStorage