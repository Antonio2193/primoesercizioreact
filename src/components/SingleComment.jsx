import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";


// Funzione che restituisce un singolo commento passando il parametro comment all'interno della funzione 
function SingleComment({ comment, onDelete, onPut }) {
  const [showError, setShowError] = useState(false); // Stato per gestire la visibilità dell'alert di errore
  const [isEditing, setIsEditing] = useState(false); // Stato per gestire la modalità di modifica
  const [newComment, setNewComment] = useState(comment.comment); // Stato per il nuovo testo del commento
  const [newRate, setNewRate] = useState(comment.rate); // Stato per la nuova valutazione

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${comment._id}`,
        {
          method: "DELETE",
          headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjllM2ExZTA5OWJlMjAwMTU5MWNjMDkiLCJpYXQiOjE3MjE2NDU1OTgsImV4cCI6MTcyMjg1NTE5OH0.liPVPxJnB45bjc_fBQUvw8nNwLUglNQSvfC4nNls8h0",
          },
        }
      );
      if (response.ok) {
        onDelete(comment._id); // Chiamiamo la funzione onDelete passando l'ID del commento eliminato
      } else {
        setShowError(true); // Mostra l'alert di errore se la cancellazione fallisce
      }
    } catch (error) {
      setShowError(true); // Mostra l'alert di errore se si verifica un errore durante la cancellazione
    }
  };

  // Funzione per modificare un commento passando il parametro comment all'interno della funzione 
  const handlePut = async () => {
    const updatedComment = { ...comment, comment: newComment, rate: newRate }; // Dati aggiornati da inviare
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${comment._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjllM2ExZTA5OWJlMjAwMTU5MWNjMDkiLCJpYXQiOjE3MjE2NDU1OTgsImV4cCI6MTcyMjg1NTE5OH0.liPVPxJnB45bjc_fBQUvw8nNwLUglNQSvfC4nNls8h0",
          },
          body: JSON.stringify(updatedComment),
        }
      );
      if (response.ok) {
        onPut(updatedComment); // Chiamiamo la funzione onPut passando il commento aggiornato
        setIsEditing(false); // Esci dalla modalità di modifica
      } else {
        setShowError(true); // Mostra l'alert di errore se l'aggiornamento fallisce
      }
    } catch (error) {
      setShowError(true); // Mostra l'alert di errore se si verifica un errore durante l'aggiornamento
    }
  };

  // Funzione per chiudere l'alert di errore
  const handleCloseErrorAlert = () => {
    setShowError(false);
  };

  return (
    <ListGroup data-testid="comment">
      <ListGroup.Item>
        {isEditing ? (
          <Form>
            <Form.Group controlId="formComment">
              <Form.Label>Comment</Form.Label>
              <Form.Control
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)} 
              />
            </Form.Group>
            <Form.Group controlId="formRate">
              <Form.Label>Rate</Form.Label>
              <Form.Control
                type="number"
                value={newRate}
                onChange={(e) => setNewRate(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={handlePut}>
              Save
            </Button>
            <Button variant="secondary" onClick={() => setIsEditing(false)}>
              Cancel
            </Button>
          </Form>
        ) : (
          <>
            <p>Rate: {comment.rate}</p>
            <p>Comment: {comment.comment}</p>
            <p>Author: {comment.author}</p>
            <Button variant="primary" onClick={() => setIsEditing(true)} style={{marginRight: "10px"}}>
              Modify
            </Button>
            {/* Pulsante di eliminazione */}
            <Button
              variant="danger"
              onClick={handleDelete}
              style={{ display: "inline" }}
            >
              Delete
            </Button>
          </>
        )}
      </ListGroup.Item>
      <ListGroup.Item>
        {/* Alert di errore */}
        <Alert
          variant="danger"
          onClose={handleCloseErrorAlert}
          dismissible
          show={showError}
        >
          <Alert.Heading>Error!</Alert.Heading>
          <p>Failed to delete or modify the comment. Please try again later.</p>
        </Alert>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default SingleComment;
