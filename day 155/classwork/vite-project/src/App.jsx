import { useState } from "react"
import Timer from "./components/Timer"
import Window from "./components/Window"

function App() {
  const [show, setShow] = useState(true)
  const [count, setCount] = useState(0)
  return (
    <>
      {show ? <Timer count={count} setCount={setCount}/> : <></>}
      {show ? <Window /> : <></>}
      <button onClick={() => setShow(prev => !prev)}>{show ? 'hide' : 'show'}</button>
    </>
  )
}

export default App