import {useParams} from 'react-router-dom'
import {Card, Container, Row, Col, Button} from 'react-bootstrap'
import { books } from '../data/books'
import CommentArea from '../components/CommentArea'
import { Link } from 'react-router-dom'



function BookDetails () {

    const {asin} = useParams()
    const selectedBook = books.find(b => b.asin === asin)

    return (
        <>
        <Container>
            <Row>
                <Col xs={12} md={6}>
                    <Card className="bookCard" style={{ width: '18rem' }}>
                        <Card.Img className="copertine" variant="top" src={selectedBook.img} />
                        <Card.Body>
                            <Card.Title>{selectedBook.title}</Card.Title>
                            <Card.Text>{selectedBook.price}€</Card.Text>
                            <Button as={Link} to= "/" variant="primary" style={{width:'50%'}}>Home</Button>  

                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} md={6}>
                    <CommentArea asin={selectedBook.asin} />
                </Col>
            </Row>
        </Container>
        
        <h1>Book Details</h1>
        </>

    )
}



export default BookDetails