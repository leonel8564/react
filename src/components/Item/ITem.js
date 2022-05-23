import {Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function Item ({producto}) {

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
                <Link to={`/product/${producto.id}`}>ver mas</Link>

            </Card.Body>

        </Card>

    );

}