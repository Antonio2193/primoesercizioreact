import { useState } from "react";
import { books } from "./data/books";
import AllTheBooks from "./components/AllTheBooks";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import BookDetails from "./pages/BookDetails";
import ThemeContextProvider  from "./context/ThemeContextProvider";



function App() {
  const [search, setSearch] = useState(''); // Stato per memorizzare il valore della barra di ricerca
  const [filteredBooks, setFilteredBooks] = useState(books); // Stato per memorizzare i libri filtrati dal valore della barra di ricerca 

  // Funzione che gestisce la barra di ricerca passando il parametro search e handleSearch all'interno della funzione
  const handleSearch = (e) => {
    setSearch(e.target.value);
    const filtered = books.filter((b) => b.title.toLowerCase().includes(e.target.value.toLowerCase())); // Filtra i libri in base al valore della barra di ricerca
    setFilteredBooks(filtered); // Aggiorna i libri filtrati
  }

  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <div>
          <MyNav search={search} handleSearch={handleSearch} /> {/* Passa il valore della barra di ricerca e la funzione handleSearch all'interno del componente MyNav */}
          <Welcome /> {/* Mostra il messaggio di benvenuto all'interno del componente Welcome */}
          <Routes>
            <Route path="/" element={<AllTheBooks books={filteredBooks} />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="/*" element={<Navigate to="/404" />} />
            <Route path="/book/:asin" element={<BookDetails />} />
          </Routes>
          <MyFooter />
        </div>
      </ThemeContextProvider>

    </BrowserRouter>
  );
}

export default App;
