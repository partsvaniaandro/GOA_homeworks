import {} from 'react'
import Counter from './components/counter'
import Cookie from './components/Cookie'
import TextDisplay from './components/TextDisplay'
import Random from './components/Random'
import Limit from './components/Limit'

function App() {

  return (
    <>
      <div className='flex justify-evenly items-center mt-[200px] h-[400px]'>
        <Counter />
        <Cookie />
        <TextDisplay />
        <Random />
        <Limit />
      </div>
    </>
  )
}

export default App
