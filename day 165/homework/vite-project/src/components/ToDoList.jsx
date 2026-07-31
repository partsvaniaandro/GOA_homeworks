import { useReducer, useState } from 'react'
import { TiDeleteOutline } from "react-icons/ti";
import { IoMdCheckbox } from "react-icons/io";


const toDoListReducer = (state, action) => {
    switch(action.type){
        case 'ADD_TASK': return [...state, {
            id: Date.now(),
            text: action.payload,
            completed: false
        }]

        case 'DELETE_TASK': return state.filter((item) => {
            if(item.id === action.payload){
                return false
            }
            else{
                return true
            }
        })

        case 'TOGGLE_TASK': return state.map((item) => {
            if(item.id === action.payload){
                return {...item, completed: !item.completed}
            }
            else{
                return item
            }
        })
    }
}

const ToDoList = () => {
    const [state, dispatch] = useReducer(toDoListReducer, [])
    const [inputValue, setInputValue] = useState('')

  return (
    <div className='h-[600px]'>
        <div className='flex justify-center items-center gap-[20px]'>
            <button onClick={() => {
                if(inputValue === ''){
                    return
                }
                else if(state.some(item => item.text.toLowerCase() === inputValue.toLowerCase())){
                    return
                }
                else{
                    dispatch(
                        {
                            type: 'ADD_TASK',
                            payload: inputValue
                        }
                    )
                }
            }}>Add Task</button>
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        </div>
        <div className='flex flex-col gap-[20px]'>
            {state.map((item) => (
                <p id={item.id} className='flex justify-between items-center gap-[20px] border-[solid] border-[1px] border-[lightslategray] rounded-[10px]'>
                    <p className={item.completed ? 'line-through opacity-50' : ''}>{item.text}</p>
                    <div>
                        <button onClick={() => dispatch(
                            {
                                type: 'TOGGLE_TASK',
                                payload: item.id
                            }
                        )}>
                            <IoMdCheckbox />
                        </button>
                        <button onClick={() => dispatch(
                            {
                                type: 'DELETE_TASK',
                                payload: item.id
                            }
                        )}>
                            <TiDeleteOutline />
                        </button>
                    </div>
                </p>
            ))}
        </div>
    </div>
  )
}

export default ToDoList