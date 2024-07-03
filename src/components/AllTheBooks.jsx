import { books } from "../data/books";
import SingleBook from "./SingleBook";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";

function AllTheBooks() {
    const [search,setSearch] = useState('');
    const [filteredBooks,setFilteredBooks] = useState(books);
    const handleSearch = (e) => {
        setSearch(e.target.value);
        const filtered = books.filter((b) => b.title.toLowerCase().includes(e.target.value.toLowerCase()));
        setFilteredBooks(filtered);
    }

  return (
    <main className="mx-2">
      <h3 className="text-center text-primary">Book List:</h3>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search for a book"
          onChange = {handleSearch}
        />
      </InputGroup>
      <div className="d-flex flex-wrap justify-content-center">
        {filteredBooks.map((b) => (
          <SingleBook key={b.asin} book={b} />
        ))}
      </div>
    </main>
  );
}
export default AllTheBooks;
