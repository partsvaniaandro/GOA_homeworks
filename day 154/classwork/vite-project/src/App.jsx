import { useEffect, useState } from 'react'
import './App.css'

//mount

function App() {
  const [count, setCount] = useState(0)
  useEffect (()=>{
    setInterval(() => {
    console.log('Hello World!')
  }, 1000)
  }, [])
  // window.addEventListener('resize', ()=>{
  //   console.log('hello')
  // })
  
  return (
    <>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </>
  )
}

export default App
