//*1) შექმენი ფორმა <label> და <input>-ით, სადაც <label> მიემართება <input>-ს htmlFor-ით, ID-ს გენერაცია მოახდინე useId-ის დახმარებით.
import { useId } from 'react'
import Fruits from './components/Fruits'
import FullName from './components/fullName'
import Info from './components/Info'

function App() {
  const inputId = useId()
  return (
    <>
      <div>
        <label htmlFor={inputId}></label>
        <input id={inputId}/>
        <Fruits />
        <FullName />
        <Info />
      </div>
    </>
  )
}

export default App
