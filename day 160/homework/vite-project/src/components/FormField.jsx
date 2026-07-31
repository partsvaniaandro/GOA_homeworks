import React from 'react'

const FormField = ({ id, label, type = 'text' }) => {
  return (
    <div>
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id}/>
    </div>
  )
}

export default FormField