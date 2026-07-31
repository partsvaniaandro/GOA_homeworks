import { useState } from 'react'

const InputObj = () => {
    const [error, setError] = useState('')
    const [form, setForm] = useState({ name: '', password: '', email: '' })
    const [values, setValues] = useState(Object.values(form))
    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
  return (
    <div>
        <input placeholder='name'  name='name'onChange={handleChange}/>
        <input placeholder='password' name='password' onChange={handleChange}/>
        <input placeholder='email' name='email' onChange={handleChange}/>
        <p>{error}</p>

        <button onClick={() => {
            const isEmpty = Object.values(form).some(value => value.trim() === '')
            if(isEmpty){
                setError('fields should not be empty')
                setValues({})
            }else{
                setError('')
                setValues(Object.values(form))
            }
        }}>print</button>

        {Object.entries(values).map(([key, value]) => (
            <p key={key}>
                {key}: {value}
            </p>
        ))}
    </div>
  )
}

export default InputObj