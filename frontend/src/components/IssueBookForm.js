import React, { useState, useEffect } from 'react';
import axios from 'axios';

function IssueBookForm() {
  const [members, setMembers] = useState([]);
  const [books, setBooks] = useState([]);
  const [selectedMember, setSelectedMember] = useState('');
  const [selectedBook, setSelectedBook] = useState('');

  useEffect(() => {
    fetchMembers();
    fetchBooks();
  }, []);

  const fetchMembers = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/members'); // Update the API endpoint
      setMembers(response.data.members);
    } catch (error) {
      console.error('Error fetching members:', error);
    }
  };

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/books'); // Update the API endpoint
      setBooks(response.data.books);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleMemberChange = event => {
    setSelectedMember(event.target.value);
  };

  const handleBookChange = event => {
    setSelectedBook(event.target.value);
  };

  const handleIssueBook = async event => {
    event.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:5000/issue_book', {
        member_id: selectedMember,
        book_id: selectedBook
      });

      console.log('Book issued:', response.data.message);
    } catch (error) {
      console.error('Error issuing book:', error);
    }
  };

  return (
    <div>
      <h2>Issue Book</h2>
      <form onSubmit={handleIssueBook}>
        <label>
          Select Member:
          <select value={selectedMember} onChange={handleMemberChange}>
            <option value="">Select a member</option>
            {members.map(member => (
              <option key={member.id} value={member.id}>
                {member.name}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Select Book:
          <select value={selectedBook} onChange={handleBookChange}>
            <option value="">Select a book</option>
            {books.map(book => (
              <option key={book.id} value={book.id}>
                {book.title}
              </option>
            ))}
          </select>
        </label>
        <br />
        <button type="submit">Issue Book</button>
      </form>
    </div>
  );
}

export default IssueBookForm;
