import React from 'react';

const Notes = ({ notes }) => {
  return (
    <ul className="list-group">
      {notes.map(note =>
        <li
          className="list-group-item note"
          key={note.id}
        >
          <strong>{note.title}</strong>
          <small className="note-date">{new Date().toLocaleDateString()}</small>
          <button
            type="button"
            className="btn btn-danger btn-sm"
          >
            &times;
          </button>
        </li>
      )}
      {/* <li className="list-group-item">Выучить JS</li>
      <li className="list-group-item">Выучить React</li>
      <li className="list-group-item">Выучить TypeScript</li> */}
    </ul>
  );
}

export default Notes;
