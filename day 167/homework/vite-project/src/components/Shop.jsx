import { useReducer } from 'react'

const products = [
    { id: 1, name: "Laptop", price: 2500, category: "Electronics", stock: 10 },
    { id: 2, name: "Headphones", price: 300, category: "Electronics", stock: 25 },
    { id: 3, name: "T-Shirt", price: 50, category: "Clothing", stock: 50 },
    { id: 4, name: "Sneakers", price: 200, category: "Clothing", stock: 0 },
    { id: 5, name: "Hat", price: 25, category: "Accessories", stock: 15 },
]

const shopReducer = (state, action) => {
    switch(action.type){
        case 'TOGGLE_IN_STOCK':
            return { ...state, stockFilter: action.payload }
        case 'FILTER_CATEGORY':
            return { ...state, categoryFilter: action.payload }
        default:
            return state
    }
}

const Shop = () => {
    const [state, dispatch] = useReducer(shopReducer, { 
        products,
        stockFilter: null,
        categoryFilter: 'all'
    })

    // moqmedebs nebismier tipis filtrze
    const filteredProducts = state.products
        .filter(item => {
            if (state.stockFilter === null) return true
            return state.stockFilter ? item.stock !== 0 : item.stock === 0
        })
        .filter(item => {
            if (state.categoryFilter === 'all') return true
            return item.category === state.categoryFilter
        })

    // avtomaturad avigot optionebi kategoriebit
    const categories = ['all', ...new Set(products.map(item => item.category))]

    return (
        <div>
            {/* maragis gilakebi */}
            <div className='flex gap-[30px]'>
                <p>stock:</p>
                <button onClick={()=>dispatch({ type: 'TOGGLE_IN_STOCK', payload: null })} className='border-[1px] border-[black] rounded-[5px] w-[150px]'>All</button>
                <button onClick={()=>dispatch({ type: 'TOGGLE_IN_STOCK', payload: true })} className='border-[1px] border-[black] rounded-[5px] w-[150px]'>In Stock</button>
                <button onClick={()=>dispatch({ type: 'TOGGLE_IN_STOCK', payload: false })} className='border-[1px] border-[black] rounded-[5px] w-[150px]'>Not In Stock</button>
            </div>

            {/* kategoriis shercheva */}
            <div>
                <select onChange={(e)=>dispatch({ type: 'FILTER_CATEGORY', payload: e.target.value })}>
                    {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
            </div>

            {/* produqtebis mappingi */}
            <div>
                {filteredProducts.map(item => (
                    <div key={item.id}>
                        <p>{item.name}</p>
                        <p>${item.price}</p>
                        <div>
                            <p>category: {item.category}</p>
                            <p>stock: {item.stock}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Shop