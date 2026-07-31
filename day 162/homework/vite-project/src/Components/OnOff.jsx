import { useContext } from 'react'
import { BooleanContext } from '../contexts/BooleanContext'
import { ButtonTextContent } from '../contexts/ButtonTextContext'

const OnOff = () => {
    const [indicator, setIndicator] = useContext(BooleanContext)
    const buttonText = useContext(ButtonTextContent)
  return (
    <div>
        <p style={{ color: indicator ? 'green' : 'red', fontSize:'36px', background:'#1a1a1a'}}>{indicator ? 'ON' : 'OFF'}</p>
        <button onClick={() => setIndicator(prev => !prev)}>{buttonText}</button>
    </div>
  )
}

export default OnOff