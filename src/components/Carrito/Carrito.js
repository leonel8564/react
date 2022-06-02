import { useCart } from "../../context/CartContext"

export default function Carrito({count}) {
    const {itemsInCart} = useCart()
    return (
        <div>
            <img className="img" src="/img/carrito.jpg" alt="carrito" />
            {itemsInCart() || ''}
        </div>
    )
}