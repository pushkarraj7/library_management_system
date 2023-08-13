import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MemberList from './components/MemberList';
import BookList from './components/BookList';
import ReturnBookList from './components/ReturnBookForm';
import IssueBookForm from './components/IssueBookForm';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              {/* Update the links as needed */}
              {/* <Link to="/">Home</Link> */}
            </li>
            {/* Add more navigation links */}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<h1>Welcome to the Library Management System</h1>} />
          <Route path="/members" element={<MemberList />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/return-books" element={<ReturnBookList />} />
          <Route path="/issue-book" element={<IssueBookForm />} />
          {/* Add more routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
