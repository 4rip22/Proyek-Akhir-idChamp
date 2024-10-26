// App.js
import React, { useState } from 'react';
import NoteInput from '../components/NoteInput';
import NoteList from '../components/NoteList';
import NoteSearch from '../components/NoteSearch';
import { getInitialData  } from '../src/utils/data';
import '../styles/style.css';

function App() {
  const [notes, setNotes] = useState(getInitialData );
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
