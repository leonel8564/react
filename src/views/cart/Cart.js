import React from 'react'
import {useCart} from '../../context/CartContext'
import {useNavigate} from 'react-router-dom'
import CartItem from '../../components/cartItems/CartItem'
function Cart() {
const {cart, emptyCart, totalCart}=useCart()
const navigate = useNavigate()
  return (
    <div>
      {cart.length
      ? <div>
       { cart.map((compra)=><CartItem key={compra.id} compra={compra}/>)}
          <p>Precio total: {totalCart()}</p>
          <button onClick={emptyCart}>Vaciar carrito</button>
        </div> 
      : <>
        <p>No tenés productos en tu carrito! :( </p>
        <button onClick={()=>navigate('/produc')}>Ir a productos</button>
      </>

      }
    </div>
  )
}

export default Cart