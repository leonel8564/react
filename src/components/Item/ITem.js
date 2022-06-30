import {Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function Item ({producto}) {

    return(
        <Card style={{ width: '18rem', border:"1px solid black" }}className="card">
            <Card.Img variant="top" className='imagen' src={producto.image} />
            <Card.Body>
                <Card.Title>{producto.title}</Card.Title>
                <Card.Text className='text'>
                    {producto.stock}
                </Card.Text>
                <Card.Text className='text'>
                    {producto.price}
                </Card.Text>
                <Link className='buton' to={`/product/${producto.id}`}>ver mas</Link>
            </Card.Body>
        </Card>
    );
}