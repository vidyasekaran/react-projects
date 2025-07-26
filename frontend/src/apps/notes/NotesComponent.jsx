import React, { useState } from "react";
import NotesForm from "./NotesForm";
import NoteList from "./NotesList";

const NotesComponent = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
    console.log("am in NotesComponent" + notes);
  };

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <div className="container mt-4">
      <h2>📝 My Notes</h2>
      <NotesForm onAdd={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} />
    </div>
  );
};

export default NotesComponent;
