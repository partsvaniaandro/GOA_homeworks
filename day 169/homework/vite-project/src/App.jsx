import {  } from 'react'
import Password from './components/password/Password'
import Search from './components/search/Search'
import Cart from './components/Cart/Cart'


function App() {


  return (
    <div className='p-[20px] flex flex-col justify-center items-center gap-[50px]'>
      {/* 1 */}
      <Password />

      {/* 2 */}
      <Search />

      {/* 3 */}
      <Cart />
    </div>
  )
}

export default App
