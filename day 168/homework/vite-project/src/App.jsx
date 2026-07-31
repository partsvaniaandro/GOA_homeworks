import { useState } from 'react'
import Button from './components/Button'
import Input from './components/Input';
import Products from './components/Products';
import Inputs from './components/input calculate/Inputs';

const buttonData = [
  { id: 1, color: "red", on: true },
  { id: 2, color: "blue", on: true },
  { id: 3, color: "green", on: true },
  { id: 4, color: "yellow", on: true },
  { id: 5, color: "purple", on: true },
  { id: 6, color: "orange", on: true },
  { id: 7, color: "pink", on: true },
  { id: 8, color: "black", on: true },
]; 


function App() {
  const [buttons, setButtons] = useState(buttonData)

  const changeOn = (id) => {
    setButtons(prev => prev.map((item)=>(
      item.id === id ? {...item, on: !item.on} : item
    )))
  }
  //gasaketebelia button 35 xazze
  return (
      <div className='flex flex-col justify-center items-center h-[150vh] bg-[#262626] gap-[40px] text-[white]'>

        <div className='flex flex-col justify-center items-center border-[1px] border-[#4c4c4c] rounded-[10px] p-[60px] gap-[20px]'>
          <div className='flex justify-center items-center gap-[20px]'>
            {buttons.map((item)=>(
              <Button color={item.color} on={item.on} changeOn={changeOn} id={item.id} key={item.id}/>
            ))}
          </div>
          
          <div>
            <button className='text-[#ffffff] bg-[#4c4c4c] w-[200px] h-[40px] rounded-[5px] active:bg-[#3e3e3e] hover:cursor-pointer' onClick={()=> setButtons(prev => prev.map((item)=>(
              {...item, on:!item.on}
            )))}>OPPOSITE</button>
          </div>
        </div>

        <Input />

        <Products />

        <Inputs />
      </div>
  )
}

export default App
