import { useState } from "react";
import { books } from "./data/books";
import AllTheBooks from "./components/AllTheBooks";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";

function App() {
  const [search,setSearch] = useState('');
  const [filteredBooks,setFilteredBooks] = useState(books);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    const filtered = books.filter((b) => b.title.toLowerCase().includes(e.target.value.toLowerCase()));
    setFilteredBooks(filtered);
}

  return (
    <div>
      <MyNav search = {search} handleSearch = {handleSearch} />
      <Welcome />
      <AllTheBooks books = {filteredBooks}/>
      <MyFooter />
    </div>
  );
}

export default App;
