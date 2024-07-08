import Form from "react-bootstrap/Form";
import { useState } from "react";
import Button from "react-bootstrap/Button";

function AddComment({ asin, addedComment }) {
  const initialFormState = {
    rate: "",
    comment: "",
    elementId: asin,
  };

  const [formValue, setFormValue] = useState(initialFormState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSaveComment = async () => {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/comments/`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjhhZDA0ZmQzOTNmYzAwMTU5NzQwMTAiLCJpYXQiOjE3MjAzNzMzMjcsImV4cCI6MTcyMTU4MjkyN30.nVYiXy0ac-ROcPM0XP4uJAjgV7SUi6kuJ84FzQsY9GU",
        },
        method: "POST",
        body: JSON.stringify(formValue),
      }
    );
    if (response.ok) {
      addedComment();
      setFormValue(initialFormState); // Reset the form
    } else {
      // Handle errors if needed
      console.error("Failed to save comment");
    }
  };

  return (
    <Form>
      <Form.Group controlId="rate">
        <Form.Label>Rate</Form.Label>
        <Form.Control
          type="number"
          placeholder="Rate"
          min="1"
          max="5"
          name="rate"
          value={formValue.rate}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="comment">
        <Form.Label>Comment</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Comment here"
          name="comment"
          value={formValue.comment}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" onClick={handleSaveComment}>
        Submit form
      </Button>
    </Form>
  );
}

export default AddComment;
