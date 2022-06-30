import React, { useState } from 'react';
import {Card} from 'react-bootstrap';
import Itemcount from '../itemcount/Itemcount';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function Itemdetail ({producto}) {
    const {id, title, stock, price, image} = producto
    const [count, setCount] = React.useState(1)
    const[Compra,setCompra] = useState(false)
    const Navigate= useNavigate()
    const{addToCart}= useCart()
    const onAdd = () =>{
        const item ={
            id,
            title,
            stock,
            price,
            image,
            quantity:count
        }
        setCompra(true)
        addToCart(item)
    }
    return(
        <div className='itemDetail'>
            <Card style={{ width: '18rem', border:"1px solid black" }}>

                <Card.Img variant="top" src={producto.image} />

                <Card.Body>

                    <Card.Title>{producto.title}</Card.Title>

                    <Card.Text className='text'>
                        {producto.stock}
                    </Card.Text>
                    <Card.Text className='text'>
                        {producto.price}
                    </Card.Text>

                </Card.Body>
                {Compra ? <button onClick={()=>Navigate("/cart")}>ir al carrito</button>:<Itemcount stock={producto.stock} count={count} setCount={setCount} onAdd={onAdd}/>}
            </Card>
        </div>
    );
}
