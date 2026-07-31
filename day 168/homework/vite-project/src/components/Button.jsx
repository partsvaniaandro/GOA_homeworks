import React from 'react'

const Button = ({ color, on, changeOn, id }) => {
    console.log(color)
  return (
    <div onClick={() => changeOn(id)} style={{background: color, opacity: on ? 1 : 0.3, height: '100px', width: '100px', borderRadius: '100%'}}></div>
  )
}

export default Button