import {  } from 'react'
import InputRef from './components/InputRef'
import ChangeTextColor from './components/ChangeTextColor'
import IncreaseDivWidth from './components/IncreaseDivWidth'
import ClearValue from './components/ClearValue'
import DisplayParagraph from './components/DisplayParagraph'
import ScrollToBottom from './components/ScrollToBottom'

function App() {
  return (
    <div className='flex flex-col justify-center items-center gap-[100px] bg-[#1B1B1E] text-[#D8DBE2] p-[50px]'>
      <InputRef />
      <ChangeTextColor />
      <IncreaseDivWidth />
      <ClearValue />
      <DisplayParagraph />
      <ScrollToBottom />
    </div>
  )
}

export default App
