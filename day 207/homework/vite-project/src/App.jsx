import axios from "axios"
import { useEffect, useState } from "react";
function App() {
  const [id, setId] = useState('')
  const [users, setUsers] = useState([])
  const [user, setUser] = useState(null)


  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://localhost:3008/users')
      return res.data
    } catch (err) {
      console.error('Failed to fetch', err)
      throw err
    }
  }
  useEffect(() => {
    fetchUsers().then(data => setUsers(data))
  }, [])

  const searchById = async (id) => {
    try {
      const res = await axios.get(`http://localhost:3008/users?id=${id}`)
      return res.data
    } catch (err) {
      console.error('Failed to fetch', err)
      throw err
    }
  };
  const handleSearch = () => {
    searchById(id).then(data => setUser(data))
  }

  return (
    <div>
      <div className="flex gap-[30px items-center justify-center]">
        <input onChange={(e) => {
          setId(e.target.value)
        }}/>
        <button onClick={() => {
          handleSearch()
          console.log(user)
        }}>search id</button>
      </div>
      <div>
        <button onClick={() => {
          users.forEach(el => {
            console.log(el)
          });
        }}>log users</button>
      </div>
    </div>
  )
}

export default App