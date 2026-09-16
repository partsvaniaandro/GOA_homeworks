import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [content, setcontent] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/')
    .then(res => {
      setcontent(res.data.content)
    })
    .catch(err => console.error(err))
  }, [])

  const getRequest = (params) => {
    axios.get(`http://localhost:3000${params}`)
    .then(res => {
      setcontent(res.data.content)
    })
    .catch(err => console.error(err))
  }
  return (
    <div style={{display:'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center', height: '100vh'}}>
      <div style={{display:'flex', gap: '30px'}}>
        <button onClick={() => {
          getRequest('/about')
        }}>about</button>
        
        <button onClick={() => {
          getRequest('/contact')
        }}>contact</button>

        <button onClick={() => {
          getRequest('/user/5')
        }}>userId</button>

        <button onClick={() => {
          getRequest('/user/5/posts/1')
        }}>postId</button>
      </div>
      <p>{content}</p>
    </div>
  )
}

export default App
