import React from "react";
import "../styles/Note.css";

const Note = ({ note, onDelete }) => {
  const formatDate = new Date(note.created_at).toLocaleDateString("en-US");
  return (
    <div className="note-container">
      <div className="border">
        <p className="note-title">{note.title}</p>
        <p className="note-content">{note.content}</p>
        <p className="note-date">{formatDate}</p>

        <button className="delete-button" onClick={() => onDelete(note.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Note;
