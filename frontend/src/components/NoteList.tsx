import React from 'react';
import { Note } from './NoteForm';

interface NoteListProps {
  notes: Note[];
  onEdit: (note: Note) => void;
  onDelete: (id: number) => void;
}

const NoteList: React.FC<NoteListProps> = ({ notes, onEdit, onDelete }) => (
  <ul>
    {notes.map(note => (
      <li key={note.id}>
        <strong>{note.title}</strong>
        <p>{note.content}</p>
        <div className="actions">
          <button onClick={() => onEdit(note)}>Editar</button>
          <button onClick={() => note.id && onDelete(note.id)}>Remover</button>
        </div>
      </li>
    ))}
  </ul>
);

export default NoteList;
