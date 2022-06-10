import React from 'react'
import {useCart} from '../../context/CartContext'

const CartItem = ({compra}) => {
    const{deleteItem}=useCart()
  return (
    <div style={{display:'flex'}}>
        <img src={compra.image} alt={compra.title} style={{width:'10rem'}}/>
        <p>{compra.title}</p>
        <p>cantitad:{compra.quantity}</p>
        <p>${compra.price}</p>
        <button onClick={()=>deleteItem(compra.id)}>borrar item</button>
    </div>
  )
}

export default CartItem