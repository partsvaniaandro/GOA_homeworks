import {  } from 'react'
import Counter from './components/Counter'
import Input from './components/Input'
import ClickTracker from './components/ClickTracker'
import ColorParagraph from './components/ColorParagraph'
import Timer from './components/Timer'


function App() {

  return (
    <div className='flex flex-col justify-center items-center gap-[100px]'>
      <Counter />
      <Input />
      <ClickTracker />
      <ColorParagraph />
      <Timer />
    </div>
  )
}

export default App
