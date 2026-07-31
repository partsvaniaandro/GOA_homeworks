import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './components/Home'
import Loading from './components/Loading'

const LazyProducts = React.lazy(() => import('./components/Products'))
const LazyContact = React.lazy(() => import('./components/Contact'))

function App() {
  

  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to='/Home'>Home</Link>
          <Link to='/Products'>Products</Link>
          <Link to='/Contact'>Contact</Link>
        </nav>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path='/Home' element={<Home />}/>
            <Route path='/Products' element={<LazyProducts />}/>
            <Route path='/Contact' element={<LazyContact />}/>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
