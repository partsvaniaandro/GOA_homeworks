import { useContext } from 'react'
import { NumberContext } from '../contexts/NumberContext'

const Number = () => {
    const number = useContext(NumberContext)
  return (
    <div>
        <p>{`the number is ${number}`}</p>
    </div>
  )
}

export default Number