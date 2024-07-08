import React from 'react';
import SingleComment from './SingleComment';

function CommentList({ comments, onDelete }) {
  const handleDelete = (commentId) => {
    const updatedComments = comments.filter(comment => comment._id !== commentId);
    onDelete(updatedComments);
  };

  return (
    <div>
      {comments.map((comment) => (
        <SingleComment key={comment._id} comment={comment} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default CommentList;
