import React, { useEffect, useState } from 'react';
import NoteForm, { Note } from '../components/NoteForm';
import NoteList from '../components/NoteList';
import { getNotes, createNote, updateNote, deleteNote } from '../services/noteService';

const NotesPage: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [editingNote, setEditingNote] = useState<Note | undefined>(undefined);

  useEffect(() => {
    getNotes().then(setNotes);
  }, []);

  const handleSave = async (note: Note) => {
    if (note.id) {
      const updated = await updateNote(note);
      setNotes(notes.map(n => (n.id === updated.id ? updated : n)));
      setEditingNote(undefined);
    } else {
      const created = await createNote(note);
      setNotes([...notes, created]);
    }
  };

  const handleEdit = (note: Note) => {
    setEditingNote(note);
  };

  const handleDelete = async (id: number) => {
    await deleteNote(id);
    setNotes(notes.filter(n => n.id !== id));
  };

  return (
    <div className="container">
      <h1>Anotações</h1>
      <NoteForm initialNote={editingNote} onSave={handleSave} />
      <NoteList notes={notes} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default NotesPage;
