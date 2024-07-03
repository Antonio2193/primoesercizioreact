import Card from 'react-bootstrap/Card';
import './SingleBook.css'
import { useState } from 'react';

function SingleBook ({book}){
const [border,setBorder] = useState(false);
const handleClick = () => {
  setBorder(!border);
}


    return(
        <Card className={border ? "redBorder bookCard" : "bookCard"} style={{ width: '18rem' }} onClick={handleClick}>
                     <Card.Img variant="top" className=" copertine" src={book.img}/>
                     <Card.Body>
                       <Card.Title>{book.title}</Card.Title>
                       <Card.Text>{book.price}€</Card.Text>
                       <Card.Text>{book.category}</Card.Text>
                     </Card.Body>
                   </Card>
    )
}
export default SingleBook;