// src/components/BookList.jsx
import React from "react";

const BookList = ({ books }) => {
  return (
    <div>
      <h3>Books in Library</h3>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <strong>{book.title}</strong> by {book.author} (ISBN: {book.isbn})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
