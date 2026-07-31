import {  } from 'react'
import FrontPage from './components/FrontPage'
import ErrorBoundary from './components/ErrorBoundary'


function App() {
  

  return (
    <div>
      <ErrorBoundary>
        <FrontPage />
      </ErrorBoundary>
    </div>
  )
}

export default App
