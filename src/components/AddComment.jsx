import Form from "react-bootstrap/Form";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

function AddComment({ asin, addedComment }) {
  const initialFormState = {
    rate: "",
    comment: "",
    elementId: asin,
  };

  const [formValue, setFormValue] = useState(initialFormState); // State per memorizzare i valori del form
  const [showError, setShowError] = useState(false); // State per gestire la visibilità dell'alert di errore

  const handleChange = (event) => { // Funzione per gestire il cambiamento del valore del form
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
      setFormValue(initialFormState);  // Reset del form
    } else {
      setShowError(true); // Mostra l'alert di errore
    }
  };

  return (
    <>
      {/* Alert di errore */}
      <Alert
        variant="danger"
        onClose={() => setShowError(false)}
        dismissible
        show={showError}
      >
        <Alert.Heading>Error!</Alert.Heading>
        <p>Failed to save comment. Please try again.</p>
      </Alert>
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
    </>
  );
}

export default AddComment;
