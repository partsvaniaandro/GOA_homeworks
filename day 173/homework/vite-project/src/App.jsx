import {  } from 'react'
import Counter from './components/Counter'
import useToggle from './hooks/useToggle'
import SideBar from './components/SideBar'

function App() {
  const {bool, toggleBool} = useToggle()

  return (
    <div className={`${bool ? 'bg-[#ffffff] text-[#1F1F1F]' : 'bg-[#1F1F1F] text-[#ffffff]'} h-[100vh]`}>
      <button className='border-[2px] rounded-[5px]' onClick={toggleBool}>{bool ? 'Dark Mode' : 'Light Mode'}</button>
      <Counter />
      <SideBar />
    </div>
  )
}

export default App
