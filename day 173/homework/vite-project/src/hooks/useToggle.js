import { useState } from 'react'

const useToggle = () => {
    const [bool, setBool] = useState(true)

    const toggleBool = () => {
        setBool(prev => !prev)
    }

  return {bool, toggleBool}
}

export default useToggle