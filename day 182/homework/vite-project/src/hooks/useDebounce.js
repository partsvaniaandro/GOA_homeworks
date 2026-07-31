import { useEffect, useState } from 'react'

const useDebounce = (value, time) => {
  const [debounced, setDebounced] = useState(value)

  useEffect(()=>{
    const id = setTimeout(() => {
        setDebounced(value)
    }, time);

    return () => clearTimeout(id)
  }, [value, time])

  return debounced
}

export default useDebounce