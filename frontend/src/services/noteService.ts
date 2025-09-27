import { Note } from '../components/NoteForm';

const API_URL = 'http://localhost:3000/notes';

export async function getNotes(): Promise<Note[]> {
  const res = await fetch(API_URL);
  return res.json();
}

export async function createNote(note: Note): Promise<Note> {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(note),
  });
  return res.json();
}

export async function updateNote(note: Note): Promise<Note> {
  const res = await fetch(`${API_URL}/${note.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(note),
  });
  return res.json();
}

export async function deleteNote(id: number): Promise<void> {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
}
