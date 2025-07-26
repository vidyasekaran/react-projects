import React, { useState } from "react";

const NotesForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("am in NotesForm...");
    if (!title || !desc) return;

    onAdd({
      title,
      desc,
    });

    setTitle("");
    setDesc("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <input
        type="text"
        value={title}
        className="form-control mb-2"
        placeholder="Note Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="form-control mb-2"
        value={desc}
        placeholder="Note Desc"
        onChange={(e) => setDesc(e.target.value)}
      />
      <button className="btn btn-primary">Add Note</button>
    </form>
  );
};

export default NotesForm;
