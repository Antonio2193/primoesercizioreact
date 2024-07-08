import React, { useState, useEffect } from 'react';
import AddComment from './AddComment';
import CommentList from './CommentList';

function CommentArea({ asin }) {
  const [comments, setComments] = useState([]);

  // Funzione per recuperare i commenti dal server
  const fetchComments = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
        headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjhhZDA0ZmQzOTNmYzAwMTU5NzQwMTAiLCJpYXQiOjE3MjAzNzMzMjcsImV4cCI6MTcyMTU4MjkyN30.nVYiXy0ac-ROcPM0XP4uJAjgV7SUi6kuJ84FzQsY9GU",
        },
      });
      if (response.ok) {
        const data = await response.json();
        setComments(data); // Imposta i commenti recuperati dal server nello stato
      } else {
        console.error('Failed to fetch comments');
      }
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  // Esegui il fetch dei commenti quando il componente viene montato
  useEffect(() => {
    fetchComments();
  }, [asin]);

  // Funzione per aggiornare la lista dei commenti dopo l'eliminazione
  const handleDeleteComment = (updatedComments) => {
    setComments(updatedComments);
  };

  // Funzione per aggiornare i commenti dopo l'aggiunta di un nuovo commento
  const handleAddedComment = async () => {
    fetchComments();
  };

  return (
    <div>
      <AddComment asin={asin} addedComment={handleAddedComment} />
      <CommentList comments={comments} onDelete={handleDeleteComment} />
    </div>
  );
}

export default CommentArea;
