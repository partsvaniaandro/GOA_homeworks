import React from 'react'
import InputDebounce from './Components/InputDebounce'
import FilterUsers from './Components/FilterUsers'

const App = () => {
  return (
    <div className='flex flex-col gap-[60px]'>
      <InputDebounce />
      <FilterUsers />
    </div>
  )
}

export default App