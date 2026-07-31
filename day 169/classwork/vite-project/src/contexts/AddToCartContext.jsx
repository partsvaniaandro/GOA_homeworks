import { createContext, useState} from "react";
export const AddToCartContext = createContext()
export const AddToCartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const addToCart = (item) => {
    setCart(prev => {
        const exists = prev.find(cartItem => cartItem.id === item.id);
        if (exists) {
            return prev;
        }
        return [...prev, { ...item, amount: 1 }];
    });
}
    const removeFromCart = (clickedId) => {
        setCart(prev => prev.filter(cartItem => cartItem.id !== clickedId))
    }
    
    //increase and decrease amount

    const increaseAmount = (id) => {
    setCart(prev =>
        prev.map(item =>
            item.id === id ? { ...item, amount: item.amount + 1 } : item
        ))
    }

    const decreaseAmount = (id) => {
    setCart(prev =>
        prev.map(item =>
            item.id === id ? { ...item, amount: Math.max(item.amount - 1, 1) } : item
        )
    )
}

    return(
        <AddToCartContext.Provider value={{ cart, addToCart, removeFromCart, increaseAmount, decreaseAmount }}>
            { children }
        </AddToCartContext.Provider>
    )
}