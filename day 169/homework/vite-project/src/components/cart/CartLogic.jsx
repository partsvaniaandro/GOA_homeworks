import React, {  } from 'react'

const CartLogic = ({ decreaseAmount, increaseAmount, removeProduct, products }) => {
  const totalPrice = products.reduce((sum, item) => sum + (item.amount * item.price), 0)
  const totalAmount = products.reduce((sum, item) => sum + item.amount, 0)
  return (
    <div className='flex flex-wrap gap-[45px]'>
      {products.map((item)=>(
        <div key={item.id} className='flex flex-col justify-center items-center p-[40px] border-[1px] rounded-[5px]'>
          <p>{item.name}</p>
          <p className='text-[green]'>${item.price}</p>

          <div className='flex gap-[10px]'>
            <button onClick={() => decreaseAmount(item.id)} className='bg-red-400 w-[20px] h-[20px] rounded-[100%] flex justify-center items-center cursor-[pointer]'>-</button>
            <p>Amount: {item.amount}</p>
            <button onClick={() => increaseAmount(item.id)} className='bg-green-400 w-[20px] h-[20px] rounded-[100%] flex justify-center items-center cursor-[pointer]'>+</button>
          </div>

          <button onClick={() => removeProduct(item.id)} className='bg-red-500 w-[40px] h-[20px] rounded-[5px] flex justify-center items-center cursor-[pointer]'>X</button>
        </div>
      ))}
      <p>Total Price: ${totalPrice}</p>
      <p>Total Amount: {totalAmount}</p>
    </div>
  )
}

export default CartLogic