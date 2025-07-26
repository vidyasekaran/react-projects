import React from "react";
import NoteCard from "./NoteCard";

const NoteList = ({ notes, onDelete }) => {
  return (
    <div className="row">
      {notes.map((note, index) => (
        <div key={index} className="col-md-4 mb-3">
          <NoteCard note={note} index={index} onDelete={onDelete} />
        </div>
      ))}
    </div>
  );
};

export default NoteList;
