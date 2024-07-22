import React, { useState, useEffect } from 'react';
import AddComment from './AddComment';
import CommentList from './CommentList';
import Alert from 'react-bootstrap/Alert';

function CommentArea({ asin }) {
  const [comments, setComments] = useState([]); // Stato per memorizzare i commenti
  const [showError, setShowError] = useState(false); // Stato per gestire la visibilità dell'alert di errore

  // Funzione per recuperare i commenti dal server
  const fetchComments = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
        headers: {
         "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjllM2ExZTA5OWJlMjAwMTU5MWNjMDkiLCJpYXQiOjE3MjE2NDU1OTgsImV4cCI6MTcyMjg1NTE5OH0.liPVPxJnB45bjc_fBQUvw8nNwLUglNQSvfC4nNls8h0",
        },
      });
      if (response.ok) {
        const data = await response.json();
        setComments(data); // Imposta i commenti recuperati dal server nello stato
      } else {
        setShowError(true); // Mostra l'alert di errore se il recupero dei commenti fallisce;
      }
    } catch (error) {
      setShowError(true); // Mostra l'alert di errore se si verifica un errore nel fetch;
    }
  };

  // Esegui il fetch dei commenti quando il componente viene montato
  useEffect(() => {
    fetchComments();
  }, [asin]);

  // Funzione per chiudere l'alert di errore
  const handleCloseErrorAlert = () => { 
    setShowError(false);
  };

  // Funzione per aggiornare la lista dei commenti dopo l'eliminazione
  const handleDeleteComment = (updatedComments) => {
    setComments(updatedComments);
  };

  // Funzione per aggiornare i commenti dopo l'aggiunta di un nuovo commento
  const handleAddedComment = async () => {
    fetchComments();
  };

  // Funzione per aggiornare i commenti dopo la modifica di un commento
  const handleUpdateComment = (updatedComment) => {
    setComments(prevComments =>
      prevComments.map(comment =>
        comment._id === updatedComment._id ? updatedComment : comment
      )
    );
  };

  return (
    <div>
      {/* Alert di errore */}
      <Alert
        variant="danger"
        onClose={handleCloseErrorAlert}
        dismissible
        show={showError}
      >
        <Alert.Heading>Error!</Alert.Heading>
        <p>Failed to fetch comments. Please try again later.</p>
      </Alert>

      {/* Componente AddComment */}
      <AddComment asin={asin} addedComment={handleAddedComment} />

      {/* Componente CommentList */}
      <CommentList comments={comments} onDelete={handleDeleteComment} onPut={handleUpdateComment} addedComment={handleAddedComment}/>
    </div>
  );
}

export default CommentArea;
