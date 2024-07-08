import React from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';

function DeleteComment({ commentId, onDelete }) {
  const [showError, setShowError] = useState(false); // Stato per gestire la visibilità dell'alert di errore

  const handleDelete = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`, {
        method: 'DELETE',
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjhhZDA0ZmQzOTNmYzAwMTU5NzQwMTAiLCJpYXQiOjE3MjAzNzMzMjcsImV4cCI6MTcyMTU4MjkyN30.nVYiXy0ac-ROcPM0XP4uJAjgV7SUi6kuJ84FzQsY9GU",
        },
      });
      if (response.ok) {
        onDelete(commentId); // Chiamiamo la funzione onDelete passando l'ID del commento eliminato
      } else {
        setShowError(true); // Mostra l'alert di errore se la cancellazione fallisce
      }
    } catch (error) {
      setShowError(true); // Mostra l'alert di errore se si verifica un errore durante la cancellazione
    }
  };

  // Funzione per chiudere l'alert di errore
  const handleCloseErrorAlert = () => {
    setShowError(false);
  };

  return (
    <>
      {/* Alert di errore */}
      <Alert
        variant="danger"
        onClose={handleCloseErrorAlert}
        dismissible
        show={showError}
      >
        <Alert.Heading>Error!</Alert.Heading>
        <p>Failed to delete comment. Please try again later.</p>
      </Alert>

      {/* Pulsante di eliminazione */}
      <Button variant="danger" onClick={handleDelete}>
        Delete
      </Button>
    </>
  );
}

export default DeleteComment;
