import { createContext, useContext, useState } from "react"

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addToCart = (item)=>{
        const itemInCart = cart.find((prod) => prod.id === item.id)
        if(itemInCart){
            const updatedCart = cart.map((prod) =>{
                if(prod.id === item.id){
                    return {...prod, quantity: item.quantity + prod.quantity}
                }else{
                    return prod
                }
            })
            setCart(updatedCart)
        }else{
            setCart([...cart, item])
        }
    }
    
    const emptyCart = () => {
        setCart([])
    }

    const deleteItem = (id) => {
        setCart(cart.filter((prod) => prod.id !== id))
    }

    const isInCart = (id)=>{
        setCart(cart.find((prod) => prod.id === id))
    }

    const itemsInCart = () =>{
        return cart.reduce((acc, prod) => acc += prod.quantity, 0)
    }
    console.log("carrito",cart)
    return(
        <CartContext.Provider value={{cart, addToCart, emptyCart, deleteItem, isInCart, itemsInCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)