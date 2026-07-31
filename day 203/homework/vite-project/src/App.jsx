import { useEffect, useState } from 'react'
import Search from './Components/Search'

function App() {
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState(null)
  const [debouncedSearch, setDebouncedSearch] = useState('')
  const [loaded, setLoaded] = useState(false)
  
  useEffect(() => {
    console.log('useEffect')
    console.log(debouncedSearch)
    if(debouncedSearch === '' && category === null){
      fetch(`http://localhost:3000/products`)
      .then(res => res.json())
      .then(data => setProducts(data))
    }else{
      fetch(`http://localhost:3000/products?search=${debouncedSearch}&category=${category}`)
      .then(res => res.json())
      .then(data => setProducts(data))
    }
  }, [debouncedSearch, category])
  return (
    <div className='flex flex-col justify-start items-center h-[100vh] p-[30px] gap-[50px]'>
      <Search setCategory={setCategory} setDebouncedSearch={setDebouncedSearch}/>
      <div className='flex flex-wrap justify-center items-center gap-[100px]'>
        {products.map((item) => (
          <div key={item.id} className='w-[400px] h-[600px]  flex flex-col justify-start items-center bg-[lightGray]'>
            <img src={item.image} className='w-[90%]'/>
            <p>${item.price}</p>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
