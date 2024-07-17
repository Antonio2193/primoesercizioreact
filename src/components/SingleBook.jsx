import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './SingleBook.css';
import { Link } from 'react-router-dom';
import {ThemeContext} from "../context/ThemeContextProvider";
import { useContext } from 'react';

//Funzione che gestisce la visualizzazione di un singolo libro passando il parametro book all'interno della funzione
function SingleBook({ book, selected, handleClick }) {

  const { theme } = useContext(ThemeContext);


  return (
    <Card className={theme === 'light' ? 'bookCard' : 'bg-dark bookCard'} style={{ width: '18rem' }}>
      <Card.Img className={selected === book.asin ? "redBorder copertine" : "copertine"} variant="top" src={book.img} onClick={() => handleClick(book.asin)} />
      <Card.Body className='d-flex flex-column justify-content-between'>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>{book.price}€</Card.Text>
        <Button as={Link} to={`/book/${book.asin}`} variant="primary" style={{width:'50%'}}>Details</Button>

       
      </Card.Body>
    </Card>
  );
}

export default SingleBook;
