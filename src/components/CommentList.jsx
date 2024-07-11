import React from 'react';
import SingleComment from './SingleComment';

// Funzione che gestisce la lista dei commenti passando i parametri comments, onDelete e onPut all'interno della funzione
function CommentList({ comments, onDelete, onPut }) {
  // Funzione che gestisce l'eliminazione di un commento passando il parametro commentId all'interno della funzione
  const handleDelete = (commentId) => {
    const updatedComments = comments.filter(comment => comment._id !== commentId);
    onDelete(updatedComments);
  };

  // Funzione che gestisce la modifica di un commento passando il parametro updatedComment all'interno della funzione
  const handlePut = (updatedComment) => {
    onPut(updatedComment);
  };

  return (
    <div>
      {/* Ciclo che gestisce i commenti passando il parametro comment all'interno della funzione SingleComment */}
      {comments.map((comment) => (
        <SingleComment key={comment._id} comment={comment} onDelete={handleDelete} onPut={handlePut} />
      ))}
    </div>
  );
}

export default CommentList;
