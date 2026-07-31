import {  } from 'react'
import useLocalStorage from './hooks/useLocalStorage'

import InputStorage from './components/InputStorage'
import InputObj from './components/InputObj'
import ProfileCard from './components/ProfileCard'


function App() {
  const [theme, setTheme] = useLocalStorage("theme", "light")

  return (
    <div className={`${theme === 'light' ? 'bg-gray-100 text-gray-700' : 'bg-gray-800 text-gray-100'} h-[100vh] flex flex-col gap-[70px] justify-center items-center`}>
      <InputStorage theme={theme} setTheme={setTheme}/>
      <InputObj />
      <ProfileCard />
    </div>
  )
}

export default App
