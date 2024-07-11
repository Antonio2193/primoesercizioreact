import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import './MyNav.css'

// Funzione che gestisce la barra di ricerca passando il parametro search e handleSearch all'interno della funzione 
function MyNav({search,handleSearch}) {
    return (
        <>
           <Navbar expand="lg" className="bg-body-tertiary border border-bottom-1">
      <Container fluid>
        <Navbar.Brand href="#home">EPICBOOKS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Aboutk</Nav.Link>
            <Nav.Link href="#link">Browse</Nav.Link>
          </Nav>
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