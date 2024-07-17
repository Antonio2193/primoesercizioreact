import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './SingleBook.css';
import { Link } from 'react-router-dom';
import {ThemeContext} from "../context/ThemeContextProvider";
import { useContext } from 'react';

//Funzione che gestisce la visualizzazione di un singolo libro passando il parametro book all'interno della funzione
function SingleBook({ book, selected, handleClick }) {


  return (
    <Card className={selected === book.asin ? "redBorder bookCard" : "bookCard"} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={book.img} onClick={() => handleClick(book.asin)} />
      <Card.Body className='d-flex flex-column justify-content-between'>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>{book.price}€</Card.Text>
        <Button as={Link} to={`/book/${book.asin}`} variant="primary" style={{width:'50%'}}>Details</Button>

       
      </Card.Body>
    </Card>
  );
}

export default SingleBook;
