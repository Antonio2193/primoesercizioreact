import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import DeleteComment from './DeleteComment';

function SingleComment({ comment, onDelete }) {
  return (
    <ListGroup>
      <ListGroup.Item>Rate: {comment.rate}</ListGroup.Item>
      <ListGroup.Item>Comment: {comment.comment}</ListGroup.Item>
      <ListGroup.Item>Author: {comment.author}</ListGroup.Item>
      <ListGroup.Item>
        <DeleteComment commentId={comment._id} onDelete={onDelete} />
      </ListGroup.Item>
    </ListGroup>
  );
}

export default SingleComment;
