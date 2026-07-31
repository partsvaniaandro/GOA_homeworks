import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Loading from './components/Loading'
import Home from './components/Home'

const LazyHomeComponent = React.lazy(() => import('./components/Home'))
const LazyAboutComponent = React.lazy(() => import('./components/About'))


function App() {
  return (
    <>

      <BrowserRouter>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
            </nav>

            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about' element={<LazyAboutComponent />}/>  
              </Routes>
            </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
