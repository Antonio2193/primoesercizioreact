import SingleBook from "./SingleBook";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CommentArea from './CommentArea';
import { useState } from "react";
import './AllTheBooks.css';
import {ThemeContext} from "../context/ThemeContextProvider";
import { useContext } from 'react';


function AllTheBooks({ books }) {
  const { theme } = useContext(ThemeContext);
  // funzione che restituisce la lista di libri passando il parametro books all'interno della funzione

    // Stato per gestire la visualizzazione di un singolo libro
    const [selected, setSelected] = useState(null);

    // Funzione per gestire la visualizzazione di un singolo libro 
    const handleClick = (asin) => {
      if(asin === selected ){
        setSelected(null);
      }else{
        setSelected(asin);
      }

     
    };

  return (
    <main className={theme === 'light' ? 'mx-2' : 'bg-dark mx-2'} data-bs-theme={theme}>
      <h3 className="text-center text-primary">Book List:</h3>
      <Container>
        <Row>
          <Col xs = {6} md = {8} lg={10}>
            <div className="d-flex flex-wrap justify-content-center">
              {books.map((b) => (
                <SingleBook key={b.asin} book={b} selected={selected} handleClick={handleClick} />
              ))}
            </div>
          </Col>
          <Col xs = {6} md = {4} lg={2} className="colonnaSticky">
          {selected && <CommentArea asin={selected} />}
          </Col>
        </Row>
      </Container>
    </main>
  );
}
export default AllTheBooks;
