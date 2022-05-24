import {Card} from 'react-bootstrap';
import Itemcount from '../itemcount/Itemcount';

export default function Itemdetail ({producto}) {

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
            <Itemcount/>
        </Card>

    );
}