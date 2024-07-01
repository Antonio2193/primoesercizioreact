import { books } from "../data/books";
import Books from "./Books";


function AllTheBooks(){
    return (
        <main className="mx-2">
            
            <h3 className="text-center text-primary">Book List:</h3>
            <div className="d-flex flex-wrap justify-content-center">
                {books.map((b) => (
                     <Books key={b.asin} book={b} />
                )
            )} 
           </div>
        </main>
    )
}
export default AllTheBooks;