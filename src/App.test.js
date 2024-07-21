import { findAllByTestId, fireEvent, getByPlaceholderText, render, screen } from '@testing-library/react';
import App from './App'

test ('il componente welcome è montato correttamente', () => {
   render(<App />);
    const welcomeComponent = screen.getByText(/Welcome/i);
    expect(welcomeComponent).toBeInTheDocument();

})  


test ('all the books contiene 150 libri', () => {
   render(<App />);

   const bookCards = screen.getAllByTestId('book-img');
   expect(bookCards).toHaveLength(150);
})


test ('verifica che commentarea sia reinderizzato correttamente', () => {
   render(<App />);

   const bookCards = screen.getAllByTestId('book-img');
   fireEvent.click (bookCards[0]);

   const rate = screen.getByPlaceholderText(/rate/i);
   expect(rate).toBeInTheDocument();

})


describe('filtraggio tramite NavBar', () => {
    test('test1', () => {
        render(<App />);

        const filterInput = screen.getByPlaceholderText(/Search for a book/i);
        fireEvent.change(filterInput, { target: { value: 'star wars' } });

        const bookCards = screen.getAllByTestId('book-img');
        expect(bookCards).toHaveLength(2);
    })
    
    
    test('test2', () => {
        render(<App />);

        const filterInput = screen.getByPlaceholderText(/Search for a book/i);
        fireEvent.change(filterInput, { target: { value: 'ba' } });

        const bookCards = screen.getAllByTestId('book-img');
        expect(bookCards).toHaveLength(9);
    })

    test('test3', () => {
        render(<App />);

        const filterInput = screen.getByPlaceholderText(/Search for a book/i);
        fireEvent.change(filterInput, { target: { value: 'abc' } });

        const bookCards = screen.queryAllByTestId('book-img');
        expect(bookCards).toHaveLength(0);
    })
})


test ('se clicco sull img del libro diventa rosso', () => {
   render(<App />);

   const bookCards = screen.getAllByTestId('book-img');
   fireEvent.click (bookCards[10]);

   expect(bookCards[10]).toHaveClass('redBorder');
})


test ('se clicco sull img del secondo libro il primo perde il bordo rosso', () => {
   render(<App />);

   const bookCards = screen.getAllByTestId('book-img');
   fireEvent.click (bookCards[10]);

   expect(bookCards[10]).toHaveClass('redBorder');

   fireEvent.click (bookCards[23]);

   expect(bookCards[10]).not.toHaveClass('redBorder');
    
})



test('verifica che non ci sia singlecomment prima che clicchi sul primo libro', () => {
   render(<App />);

   const singlecomment = screen.queryByTestId('comment');

   expect(singlecomment).not.toBeInTheDocument();
   /* expect(singlecomment).toBeNull(); */

})


test ('verifica che cliccando sul libro escano i commenti',async() => {
   render(<App />);

   const bookCards = screen.getAllByTestId('book-img');
   fireEvent.click (bookCards[0]);

   const singlecomment = await screen.findAllByTestId('comment');
   expect(singlecomment).not.toHaveLength(0);
    
})
