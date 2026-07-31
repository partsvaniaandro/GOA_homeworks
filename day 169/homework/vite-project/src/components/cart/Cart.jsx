import React, { useState } from 'react'
import CartLogic from './CartLogic'

const productsArr = [
  { id: 1, name: "Laptop", price: 1200, amount: 5 },
  { id: 2, name: "Headphones", price: 150, amount: 10 },
  { id: 3, name: "Shirt", price: 25, amount: 20 },
  { id: 4, name: "Sneakers", price: 90, amount: 15 },
  { id: 5, name: "Coffee Maker", price: 80, amount: 8 },
  { id: 6, name: "Desk Chair", price: 200, amount: 7 },
  { id: 7, name: "Notebook", price: 5, amount: 50 },
  { id: 8, name: "Backpack", price: 60, amount: 12 }
]

const Cart = () => {
    const [products, setProducts] = useState(productsArr)

    const decreaseAmount = (id) => {
        const updated = products.map((item)=>(
            item.id === id ? {...item, amount: item.amount - 1} : item
        ))
        setProducts(updated)
    }

    const increaseAmount = (id) => {
        const updated = products.map((item)=>(
            item.id === id ? {...item, amount: item.amount + 1} : item
        ))
        setProducts(updated)
    }

    const removeProduct = (id) => {
        const updated = products.filter((item)=>(
            item.id !== id
        ))
        setProducts(updated)
    }
  return (
    <div>
        <CartLogic decreaseAmount={decreaseAmount} increaseAmount={increaseAmount} removeProduct={removeProduct} products={products}/>
    </div>
  )
}

export default Cart