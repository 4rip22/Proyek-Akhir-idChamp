import React, {useState} from 'react';
import NoteItem from '../components/NoteItem';
import NoteList from '../components/NoteList';
import NoteSearch from '../components/NoteSearch';
import "../styles/style.css";

const initialNodes = [
    {
        id: 1,
        title: "Babel",
        body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
        archived: false,
        createdAt: '2022-04-14T04:27:34.572Z'
      },
]

function App(){
    const [notes, setNotes] = useState(initialNodes);
    const [searchQuery, setSearchQuery] = useState('');

    const addNote = (note) => {
        setNotes([...notes, {...note,id: +new Date()}]);
    }
    const deleteNote = (id) => {
        setNotes([...notes.filter(note => note.id !== id)]);
    }
    const toggleArchive = (id) => {
        setNotes(
            notes.map(note => {
                note.id === id ? {...note,archived: !note.archived} : note
            })
        );
    };
    const filteredNodes = notes.filter(note => {
        note.title.toLowerCase().includes(searchQuery.toLowerCase())
    });
};
return (
    <div className="App">
        <h1>Catatan Pribadi</h1>
        <NoteSearch setSearchQuery={setSearchQuery}/>
    </div>
)
export default App;