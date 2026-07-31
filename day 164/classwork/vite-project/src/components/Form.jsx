import { useState } from 'react'
import { useContext } from 'react'
import { UsersListContext } from '../context/UsersListContext'

const Form = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')

    const { addUser } = useContext(UsersListContext)
    const handleSubmit = (e) => {
        e.preventDefault()

        if(name === '' || age === '' || email === ''){
            return(null)
        }

        addUser({
            id: Date.now(),
            name: name,
            age: age,
            email: email
        })

        setName('')
        setAge('')
        setEmail('')
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='enter name' value={name} onChange={(e) => {setName(e.target.value)}}/>
            <input type='number' placeholder='enter age' value={age} onChange={(e) => {setAge(e.target.value)}}/>
            <input type='email' placeholder='enter email' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form