import React from 'react';

const Notes = ({ notes, onRemove }) => {
  return (
    <ul className="list-group">
      {notes.map(note =>
        <li
          className="list-group-item note"
          key={note.id}
        >
          <strong>{note.title}</strong>
          <small className="note-date">{note.date}</small>
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={() => onRemove(note.id)}
          >
            &times;
          </button>
        </li>
      )}
    </ul>
  );
}

export default Notes;
