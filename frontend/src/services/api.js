import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:5000/api'; // Update with your backend URL

export const fetchMembers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/members`);
    return response.data.members;
  } catch (error) {
    throw error;
  }
};

export const fetchBooks = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/books`);
    return response.data.books;
  } catch (error) {
    throw error;
  }
};

export const fetchBooksToReturn = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/books_to_return`);
    return response.data.books;
  } catch (error) {
    throw error;
  }
};

export const issueBook = async (memberId, bookId) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/issue_book`, {
      member_id: memberId,
      book_id: bookId
    });
    return response.data.message;
  } catch (error) {
    throw error;
  }
};

export const returnBook = async (bookId) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/return_book/${bookId}`);
    return response.data.message;
  } catch (error) {
    throw error;
  }
};
