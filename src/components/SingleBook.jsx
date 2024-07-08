import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import CommentArea from './CommentArea';
import './SingleBook.css';

function SingleBook({ book }) {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <Card className={selected ? "redBorder bookCard" : "bookCard"} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={book.img} onClick={handleClick} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>{book.price}€</Card.Text>
        {selected && <CommentArea asin={book.asin} />}
      </Card.Body>
    </Card>
  );
}

export default SingleBook;
