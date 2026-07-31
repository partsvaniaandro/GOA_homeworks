import { useState } from 'react'

const Products = () => {
    const [products] = useState([
        { name: 'vashli', price: 2},
        { name: 'msxali', price: 4},
        { name: 'atami', price: 3}
    ])

    const priceSum = products.reduce((sum, product) => sum + product.price, 0)
  return (
    <div className='flex flex-col justify-center items-center border-[1px] border-[#4c4c4c] rounded-[10px] p-[40px] gap-[30px]'>
        <form>
            <ul className='flex flex-col gap-[20px] list-disc'>
                {products.map((item, index) => (
                    <li key={index}><p>product: {item.name} <br/> price: {item.price}</p></li>
                ))}
            </ul>
        </form>
        <p>total price: {priceSum}</p>
    </div>
  )
}

export default Products