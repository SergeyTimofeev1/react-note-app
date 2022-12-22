import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const Notes = ({ notes, onRemove }) => {
  return (
    <TransitionGroup component='ul' className="list-group">
      {notes.map(note =>
        <CSSTransition key={note.id} classNames={'note'} timeout={500}>
          <li
            className="list-group-item note"
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
        </CSSTransition>
      )}
    </TransitionGroup>
  );
}

export default Notes;
