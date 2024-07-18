import { useParams } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { books } from '../data/books';
import CommentArea from '../components/CommentArea';
import { ThemeContext } from "../context/ThemeContextProvider";
import { useContext, useEffect } from "react";

function BookDetails() {
    const { theme, setIsSearchDisabled } = useContext(ThemeContext);
    const { asin } = useParams();
    const selectedBook = books.find(b => b.asin === asin);

    useEffect(() => {
        setIsSearchDisabled(true);
        return () => setIsSearchDisabled(false); // Re-enable search form when leaving the page
    }, [setIsSearchDisabled]);

    return (
        <div className={theme === 'light' ? '' : 'bg-dark'}data-bs-theme={theme}>
            <h1 className="text-center text-primary">Book Details: {selectedBook.title}</h1>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <Card className="bookCard" style={{ width: '18rem' }}>
                            <Card.Img className="copertine" variant="top" src={selectedBook.img} />
                            <Card.Body>
                                <Card.Title>{selectedBook.title}</Card.Title>
                                <Card.Text>{selectedBook.price}€</Card.Text>
                                {/* <Button as={Link} to="/" variant="primary" style={{ width: '50%' }}>Home</Button> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6}>
                        <CommentArea asin={selectedBook.asin} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default BookDetails;
