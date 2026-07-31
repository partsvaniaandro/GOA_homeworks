import { useContext } from 'react'
import { NameObjContext } from '../contexts/NameObjContext'

const Name = () => {
    const nameObj = useContext(NameObjContext)
  return (
    <div>
        <p>{nameObj.name}</p>
    </div>
  )
}

export default Name