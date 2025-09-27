import React, { useState, useEffect } from 'react';

export interface Note {
  id?: number;
  title: string;
  content: string;
}

interface NoteFormProps {
  initialNote?: Note;
  onSave: (note: Note) => void;
}

const NoteForm: React.FC<NoteFormProps> = ({ initialNote, onSave }) => {
  const [title, setTitle] = useState(initialNote?.title || '');
  const [content, setContent] = useState(initialNote?.content || '');

  useEffect(() => {
    setTitle(initialNote?.title || '');
    setContent(initialNote?.content || '');
  }, [initialNote]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ ...initialNote, title, content });
    setTitle('');
    setContent('');
  };

  return (
  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Conteúdo"
        value={content}
        onChange={e => setContent(e.target.value)}
        required
        rows={3}
      />
      <button type="submit" style={{ alignSelf: 'flex-end' }}>Salvar</button>
    </form>
  );
};

export default NoteForm;
