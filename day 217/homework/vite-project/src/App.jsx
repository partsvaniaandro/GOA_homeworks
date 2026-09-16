import { useState } from 'react'
import axios from 'axios'
function App() {
  const [welcomeMessage, setWelcomeMessage] = useState('')
  const [profile, setProfile] = useState({})
  const [user, setUser] = useState('')
  const [products, setProducts] = useState({})

  axios.get('http://localhost:3000/welcome')
  .then(res => {
    setWelcomeMessage(res.data)
  })
  .catch(err => console.error(err))

  const fetchProfile = () => {
    axios.get('http://localhost:3000/profile')
    .then(res => {
      setProfile(res.data)
    })
    .catch(err => console.error(err))
  }

  const fetchUserId = () => {
    axios.get('http://localhost:3000/users/15')
    .then(res => {
      setUser(res.data)
    })
    .catch(err => console.error(err))
  }

  const fetchUserPosts = () => {
    axios.get('http://localhost:3000/users/15/posts/10')
    .then(res => {
      setUser(res.data)
    })
    .catch(err => console.error(err))
  }

  const fetchProducts = () =>{
    axios.get('http://localhost:3000/products?page=2&limit=5')
    .then(res => {
      setProducts(res.data)
    })
    .catch(err => {console.error(err)})
  }

  return (
    <div>
      <p>{welcomeMessage}</p>

      <div>
        <button onClick={() => fetchProfile()}>fetch profile</button>
        <p>{profile.name}</p>
        <p>{profile.age}</p>

        <button onClick={() => fetchUserId()}>fetch userId</button>
        <p>id: {user.userId}</p>

        <button onClick={() => fetchUserPosts()}>fetch userPosts</button>
        <p>id: {user.userId}</p>
        <p>posts: {user.postId}</p>

        <button onClick={() => fetchProducts()}>fetch products</button>
        <p>page: {products.page}</p>
        <p>limit: {products.limit}</p>
      </div>
      
    </div>
  )
}

export default App
