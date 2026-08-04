import { useState } from "react"
import { useEffect } from "react"
import axios from 'axios'
function App() {
  const [contactData, setContactData] = useState('')
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:3000/')
    .then(response => setData(response.data))
    .catch(err => console.error('request failed: ', err))
  }, [])
  return (
    <div>
      <p>{data}</p>
      <button onClick={() => {
        axios.get('http://localhost:3000/about')
        .then(response => setData(response.data))
        .catch(err => console.error('request failed: ', err))
      }}>about</button>

      <div>
        <button onClick={() => {
          axios.get('http://localhost:3000/contact')
          .then(response => setContactData(response.data))
          .catch(err => console.error('request failed: ', err))
        }}>contact</button>

        <div>
          <p>{contactData.email}</p>
          <p>{contactData.number}</p>
        </div>
      </div>
    </div>
  )
}

export default App