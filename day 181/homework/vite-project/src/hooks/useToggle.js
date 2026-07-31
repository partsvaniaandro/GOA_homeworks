import { useState } from 'react'

const useToggle = () => {
    const [value, setValue] = useState(false)
    const toggle = () => {
        setValue(prev => !prev)
    }
  return { value, toggle}
}

export default useToggle