import React, { useState } from 'react';
import {Card} from 'react-bootstrap';
import Itemcount from '../itemcount/Itemcount';
import { useNavigate } from 'react-router-dom';

export default function Itemdetail ({producto}) {
    const [count, setCount] = React.useState(1)
    const[Compra,setCompra] = useState(false)
    const Navigate= useNavigate()
    const onAdd = () =>{
        console.log("funciona")
        setCompra(true)
    }
    return(

        <Card style={{ width: '18rem', border:"1px solid black" }}>

            <Card.Img variant="top" src={producto.image} />

            <Card.Body>

                <Card.Title>{producto.title}</Card.Title>

                <Card.Text>
                    {producto.stock}
                </Card.Text>
                <Card.Text>
                    {producto.price}
                </Card.Text>

            </Card.Body>
            {Compra ? <button onClick={()=>Navigate("/cart")}>ir al carrito</button>:<Itemcount stock={producto.stock} count={count} setCount={setCount} onAdd={onAdd}/>}
        </Card>

    );
}