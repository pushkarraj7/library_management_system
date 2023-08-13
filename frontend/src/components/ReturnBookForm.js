import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ReturnBookList() {
  const [booksToReturn, setBooksToReturn] = useState([]);

  useEffect(() => {
    fetchBooksToReturn();
  }, []);

  const fetchBooksToReturn = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/books_to_return'); // Update the API endpoint
      setBooksToReturn(response.data.books);
    } catch (error) {
      console.error('Error fetching books to return:', error);
    }
  };

  const handleReturnBook = async bookId => {
    try {
      const response = await axios.post(`http://127.0.0.1:5000/return_book/${bookId}`);
      console.log('Book returned:', response.data.message);
      // Refresh the list after returning a book
      fetchBooksToReturn();
    } catch (error) {
      console.error('Error returning book:', error);
    }
  };

  return (
    <div>
      <h1>Books to Return</h1>
      <ul>
        {booksToReturn.map(book => (
          <li key={book.id}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Due Date: {book.due_date}</p>
            <button onClick={() => handleReturnBook(book.id)}>Return Book</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReturnBookList;
