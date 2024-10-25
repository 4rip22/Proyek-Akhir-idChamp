import React, { useState } from 'react';
import NoteInput from '../components/NoteInput';
import NoteList from '../components/NoteList';
import NoteSearch from '../components/NoteSearch';
import '../styles/style.css';

const initialNotes = [
  {
    id: 1,
    title: "Babel",
    body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
    archived: false,
    createdAt: '2022-04-14T04:27:34.572Z',
  },
  {
    id: 2,
    title:"idcamp x dicoding",
    body: "Project ini adalah project terakhir saya dalam menyelesaikan kelas React Fundamental pada dicoding.",
    archived: false,
    createdAt: '2024-10-15T04:15:25.572Z',
  }
];

function App() {
  const [notes, setNotes] = useState(initialNotes);
  const [searchQuery, setSearchQuery] = useState('');

  const addNote = (note) => {
    setNotes([...notes, { ...note, id: +new Date() }]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const toggleArchive = (id) => {
    setNotes(
      notes.map(note =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  const filteredNotes = notes.filter(note => 
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Catatan Pribadi</h1>
      <NoteSearch setSearchQuery={setSearchQuery} />
      <NoteInput addNote={addNote} />
      <NoteList 
        notes={filteredNotes} 
        onDelete={deleteNote} 
        onArchive={toggleArchive} 
      />
    </div>
  );
}

export default App;
