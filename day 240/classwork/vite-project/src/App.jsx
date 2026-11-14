import { useState } from 'react'
import { useToggle } from 'omni-hooks'

function App() {
  const { value, toggle } = useToggle('my-toggle', false)

  return (
    <>
      <p>{value ? 'On' : 'Off'}</p>
      <button onClick={toggle}>Toggle</button>
    </>
  )
}

export default App
