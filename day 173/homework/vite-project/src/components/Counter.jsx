import {} from 'react'
import useCounter from '../hooks/useCounter'

const Counter = () => {
    const {count, increment, decrement, reset} = useCounter()
  return (
    <div>
        <p>{count}</p>
        <div className='flex gap-[20px]'>
            <button onClick={increment}>+</button>
            <button onClick={reset}>RESET</button>
            <button onClick={decrement}>-</button>
        </div>
    </div>
  )
}

export default Counter