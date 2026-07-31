import React, { useEffect, useState } from 'react'
import { IoIosSearch } from "react-icons/io";

const Search = ({ setCategory, setDebouncedSearch }) => {
    const [searchTerm, setSearchTerm] = useState('')
    useEffect(() => {
            const timeout = setTimeout(() => {
                setDebouncedSearch(searchTerm)
            }, 500);

            return () => clearTimeout(timeout)
        }, [searchTerm])
  return (
    <div className='flex justify-center items-center gap-[30px]'>
        <div className='flex justify-center items-center'>
            <input type='text' className='w-[200px] h-[40px] bg-[lightGray]' onChange={(e) => {
                setSearchTerm(e.target.value)
            }}/>
            <button className='w-[40px] h-[40px] bg-[lightGray] flex justify-center items-center'><IoIosSearch /></button>
        </div>
        <div>
            <select className='bg-[lightGray] h-[40px] p-[5px]' onChange={(e) => {
                setCategory(e.target.value === 'null' ? null : e.target.value)
            }}>
                <option value="null">Choose an option</option>
                <option value="men's clothing">Men's clothing</option>
                <option value="women's clothing">Women's clothing</option>
                <option value="electronics">Electronics</option>
                <option value="jewelry">Jewelry</option>
            </select>
        </div>
    </div>
  )
}

export default Search