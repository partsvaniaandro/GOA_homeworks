import React, { useContext } from 'react'
import { HelloWorldContext } from '../contexts/HelloWorldContext'
import { TextColorContext } from '../contexts/TextColorContext'

const HelloWorld = () => {
    const hello = useContext(HelloWorldContext)
    const textColor = useContext(TextColorContext)

  return (
    <div>
        <p style={{ color:textColor }}>{hello}</p>
    </div>
  )
}

export default HelloWorld