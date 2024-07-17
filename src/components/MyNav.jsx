import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import './MyNav.css'
import {ThemeContext} from "../context/ThemeContextProvider";
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';

// Funzione che gestisce la barra di ricerca passando il parametro search e handleSearch all'interno della funzione 
function MyNav({search,handleSearch}) {

  const { theme ,toggleTheme } = useContext(ThemeContext);
    return (
        <>
           <Navbar expand="lg" className={theme === 'light' ? 'bg-body-tertiary border border-bottom-1' : 'bg-dark border border-bottom-1'} data-bs-theme={theme}>
      <Container fluid>
        <Navbar.Brand href="#home">EPICBOOKS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Aboutk</Nav.Link>
            <Nav.Link href="#link">Browse</Nav.Link>
          </Nav>
          <Button className="me-2"variant="light" onClick={() => toggleTheme()}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
  <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
</svg></Button>
          <InputGroup className="mb-1 barraRicerca">
        <Form.Control
          placeholder="Search for a book"
          value = {search}
          onChange = {handleSearch}
        />
      </InputGroup>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    )
}

export default MyNav;