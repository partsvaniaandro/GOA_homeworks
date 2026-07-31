import React from 'react'

const SearchLogic = ({ searchTerm, products, searchFilter }) => {
  return (
    <div className='flex flex-wrap justify-center items-center p-[80px] gap-[40px] text-center'>
        {searchTerm === '' ? products.map((item) => (
            <div key={item.id} className='border-[1px] rounded-[5px] p-[40px] flex flex-col justify-center items-center gap-[20px]'>
                <p>{item.name}</p>
                <p>${item.price}</p>
            </div>
        )) : searchFilter.map((item)=>(
            <div key={item.id}>
                <p>{item.name}</p>
                <p>${item.price}</p>
            </div>
        ))}
    </div>
  )
}

export default SearchLogic