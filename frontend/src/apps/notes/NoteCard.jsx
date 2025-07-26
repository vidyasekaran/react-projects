import React from "react";

const NoteCard = ({ note, index, onDelete }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text">{note.desc}</p>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => onDelete(index)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
