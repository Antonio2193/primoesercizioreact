import SingleBook from "./SingleBook";

function AllTheBooks({ books }) { // funzione che restituisce la lista di libri passando il parametro books all'interno della funzione 

  return (
    <main className="mx-2">
      <h3 className="text-center text-primary">Book List:</h3>
      <div className="d-flex flex-wrap justify-content-center">
        {books.map((b) => (
          <SingleBook key={b.asin} book={b} />
        ))}
      </div>
    </main>
  );
}
export default AllTheBooks;
