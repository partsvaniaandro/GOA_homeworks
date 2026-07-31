import React, { useState } from 'react'
import SearchLogic from './SearchLogic'
const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Headphones", price: 150 },
  { id: 3, name: "Shirt", price: 25 },
  { id: 4, name: "Sneakers", price: 90 },
  { id: 5, name: "Coffee Maker", price: 80 },
  { id: 6, name: "Desk Chair", price: 200 },
  { id: 7, name: "Notebook", price: 5 },
  { id: 8, name: "Backpack", price: 60 }
]
const Search = () => {
    const [searchTerm, setSearchTerm] = useState('')

    const searchFilter = products.filter((item)=>(
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    ))
  return (
    <div className='border-[1px] rounded-[5px] flex flex-col justify-center items-center p-[20px]'>
        <input type='text' onChange={(e)=>setSearchTerm(e.target.value)} searchFilter={searchFilter} value={searchTerm} className='border-[1px] rounded-[5px]'/>
        <SearchLogic searchTerm={searchTerm} products={products} searchFilter={searchFilter}/>
    </div>
  )
}

export default Search