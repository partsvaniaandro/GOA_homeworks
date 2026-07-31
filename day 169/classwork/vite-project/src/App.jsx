import {  } from 'react'
import Store from './Components/Store'
import Cart from './Components/Cart'
import { AddToCartProvider } from './contexts/AddToCartContext'

function App() {


  return (
    <div className='flex flex-wrap justify-center items-center bg-[#242424]'>
      <AddToCartProvider>
        <Store />
        <Cart />
      </AddToCartProvider>
    </div>
  )
}

export default App