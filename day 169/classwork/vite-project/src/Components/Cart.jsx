import {  useContext } from 'react'
import { AddToCartContext } from '../contexts/AddToCartContext'
import { Data } from '../Data'


const Cart = () => {
  const { cart, removeFromCart, increaseAmount, decreaseAmount } = useContext(AddToCartContext)
  
  const totalAmount = cart.reduce((sum, item) => sum + item.amount, 0)
  const totalPrice = cart.reduce((sum, item) => sum + (item.amount * item.price), 0)


  return (
    <div className='flex flex-wrap text-[white]'>
      {cart.map((product)=>(
        <div key={product.id}>
          <img src={product.imageUrl} className='w-[300px] h-[300px]'/>
          <p>{product.name}</p>
          <p>{product.description}</p>
          <div>
              <p>{product.rating}</p>
              <p>{product.price}</p>
          </div>
          <div>
            <p>Amount: {product.amount}</p>
            <button onClick={() => increaseAmount(product.id)} className='cursor-pointer'>+</button>
            <button onClick={() => decreaseAmount(product.id)} className='cursor-pointer'>-</button>
          </div>
          <button onClick={() => removeFromCart(product.id)}>REMOVE FROM CART</button>
        </div>
      ))}

      <p>Total amount of items in the cart: {totalAmount}</p>
      <p>Total Price: {totalPrice}</p>
    </div>
  )
}

export default Cart