import React from 'react'

const PasswordLogic = ({ password }) => {
    const passwordLength = password.length

    const overEightSymbols = () => {
        if(password.length > 8){
            return true
        }
        else if(password.length <= 8){
            return false
        }
    }

    const includesNum = /\d/.test(password)
  return (
    <div className='text-center'>
        <p>The length of the password: {passwordLength}</p>
        <p>{overEightSymbols() ? 'Password is over 8 symbols' : 'Password is not over eight symbols'}</p>
        <p>{includesNum ? 'Password includes a number' : 'Password does not include a number'}</p>
    </div>
  )
}

export default PasswordLogic