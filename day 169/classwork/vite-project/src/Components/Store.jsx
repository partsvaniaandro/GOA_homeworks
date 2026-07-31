import { useContext } from 'react'
import { Data } from '../Data'
import { AddToCartContext } from '../contexts/AddToCartContext'

const Store = () => {
    const { addToCart } = useContext(AddToCartContext)
  return (
        <div className='flex flex-wrap justify-center items-center gap-[20px]'>
            {Data.map((product)=>(
                <div key={product.id} className='border-[1px] border-[#4a4a4a] rounded-[10px] p-[30px] text-[white] flex flex-col justify-center items-center gap-[20px]'>
                    <img src={product.imageUrl} className='w-[300px] h-[300px]'/>
                    <p>{product.name}</p>
                    <p>{product.description}</p>
                    <div className='flex gap-[20px] border-[1px] border-[#4a4a4a] p-[5px] rounded-[30px] bg-[#707070]'>
                        <p>{product.rating}</p>
                        <p>${product.price}</p>
                    </div>
                    <button onClick={() => addToCart(product)} className='bg-[#707070] p-[15px] rounded-[10px] cursor-pointer'>ADD TO CART</button>
                </div>
            ))}
        </div>
  )
}

export default Store