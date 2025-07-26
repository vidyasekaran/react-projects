// src/components/AddBookForm.jsx
import React, { useState } from "react";

const AddBookForm = ({ onAddBook }) => {
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    isbn: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setBookData({
      ...bookData,
      [e.target.name]: e.target.value,
    });

    // Clear error as user types
    setErrors((prevErrors) => ({
      ...prevErrors,
      [e.target.name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!bookData.title.trim()) newErrors.title = "Title is required";
    if (!bookData.author.trim()) newErrors.author = "Author is required";
    if (!bookData.isbn.trim()) newErrors.isbn = "ISBN is required";
    else if (!/^\d{10,13}$/.test(bookData.isbn))
      newErrors.isbn = "ISBN must be 10 to 13 digits";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // Stop form submission
    }

    onAddBook(bookData); // send data to parent
    setBookData({ title: "", author: "", isbn: "" }); // clear form
    setErrors({}); // Clear errors
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div>
        <input
          type="text"
          name="title"
          value={bookData.title}
          onChange={handleChange}
          placeholder="Book Title"
        />
        {errors.title && <div style={{ color: "red" }}>{errors.title}</div>}
      </div>

      <div>
        <input
          type="text"
          name="author"
          value={bookData.author}
          onChange={handleChange}
          placeholder="Author"
        />
        {errors.author && <div style={{ color: "red" }}>{errors.author}</div>}
      </div>

      <div>
        <input
          type="text"
          name="isbn"
          value={bookData.isbn}
          onChange={handleChange}
          placeholder="ISBN (10-13 digits)"
        />
        {errors.isbn && <div style={{ color: "red" }}>{errors.isbn}</div>}
      </div>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBookForm;
