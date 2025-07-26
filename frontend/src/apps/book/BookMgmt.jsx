// src/App.jsx
import React, { useState, useEffect } from "react";
import AddBookForm from "./AddBookForm";
import BookList from "./BookList";

const BookMgmt = () => {
  const [books, setBooks] = useState([]);

  // 🔁 Load books from localStorage on first render
  useEffect(() => {
    const storedBooks = localStorage.getItem("books");
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks));
    }
  }, []);

  // 💾 Save books to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const handleAddBook = (book) => {
    setBooks([...books, book]);
  };

  return (
    <div className="container mt-4">
      <h2>📚 Library Management</h2>
      <AddBookForm onAddBook={handleAddBook} />
      <BookList books={books} />
    </div>
  );
};

export default BookMgmt;
