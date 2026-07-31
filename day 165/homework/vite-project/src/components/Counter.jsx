import { useReducer, useState } from 'react'

const countReducer = (state, action) => {
    switch(action.type){
        case 'INCREMENT': return state + Number(action.payload)
        case 'DECREMENT': return state - Number(action.payload)
        case 'RESET': return 0
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(countReducer, 0)
    const [incrementValue, setIncrementValue] = useState(1)
  return (
    <div className='flex flex-col gap-[20px]'>

        <div className='flex justify-center gap-[20px] items-center'>
            <button onClick={() => dispatch(
                {
                    type: 'DECREMENT',
                    payload: incrementValue
                }
            )}>-</button>
            <p>{state}</p>
            <button onClick={() => dispatch(
                {
                    type: 'INCREMENT',
                    payload: incrementValue
                }
            )}>+</button>
        </div>
        
        <div className='flex gap-[20px] justify-center'>
            <button onClick={() => dispatch(
                {
                    type: 'RESET'
                }
            )}>RESET</button>

            <input value={incrementValue} onChange={(e) => setIncrementValue(e.target.value)}  className='w-[100px] text-center'/>
        </div>
    </div>
  )
}

export default Counter