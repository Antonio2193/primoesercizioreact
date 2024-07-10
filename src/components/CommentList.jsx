import React from 'react';
import SingleComment from './SingleComment';

function CommentList({ comments, onDelete, onPut }) {
  const handleDelete = (commentId) => {
    const updatedComments = comments.filter(comment => comment._id !== commentId);
    onDelete(updatedComments);
  };

  const handlePut = (updatedComment) => {
    onPut(updatedComment);
  };

  return (
    <div>
      {comments.map((comment) => (
        <SingleComment key={comment._id} comment={comment} onDelete={handleDelete} onPut={handlePut} />
      ))}
    </div>
  );
}

export default CommentList;
