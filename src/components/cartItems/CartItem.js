import React from 'react'
import {useCart} from '../../context/CartContext'

const CartItem = ({compra}) => {
    const{deleteItem}=useCart()
  return (
    <div className='carritoItem'>
        <img src={compra.image} alt={compra.title} style={{width:'10rem'}}/>
        <p>{compra.title}</p>
        <p style={{}}>cantitad:{compra.quantity}</p>
        <p>${compra.price}</p>
        <button onClick={()=>deleteItem(compra.id)}>borrar item</button>
    </div>
  )
}

export default CartItem