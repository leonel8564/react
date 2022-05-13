import {Card,Button} from 'react-bootstrap';
export default function Item ({Productos}) {
    return(
        <Card style={{ width: '18rem', border:"1px solid black" }}>
            <Card.Img variant="top" src={Productos.image} />
            <Card.Body>
                <Card.Title>{Productos.title}</Card.Title>
                <Card.Text>
                    <p>{Productos.stock}</p>
                    <p>{Productos.price}</p>
                </Card.Text>
                <Button variant="dark">ver mas</Button>
            </Card.Body>
        </Card>
    );
}