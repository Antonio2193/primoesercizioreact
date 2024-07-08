import React from 'react';
import Button from 'react-bootstrap/Button';

function DeleteComment({ commentId, onDelete }) {
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
        console.error('Failed to delete comment');
      }
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  return (
    <Button variant="danger" onClick={handleDelete}>
      Delete
    </Button>
  );
}

export default DeleteComment;
