import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete, onArchive }) {  
    const activeNotes = notes.filter(note => !note.archived);
    const archivedNotes = notes.filter(note => note.archived);

    return (
        <div>
            <h2>Catatan Aktif</h2>
            {activeNotes.length > 0 ? (
                <div className="note-list">
                    {activeNotes.map(note => (
                        <NoteItem 
                            key={note.id} 
                            note={note} 
                            onDelete={onDelete} 
                            onArchive={onArchive}
                        />
                    ))}
                </div>
            ) : <p>Tidak ada catatan aktif</p>}
        
            <h2>Catatan Diarsipkan</h2>  
            {archivedNotes.length > 0 ? (
                <div className="note-list">
                    {archivedNotes.map(note => (
                        <NoteItem 
                            key={note.id} 
                            note={note} 
                            onDelete={onDelete} 
                            onArchive={onArchive}
                        />
                    ))}
                </div>
            ) : <p>Tidak ada catatan yang diarsipkan</p>} 
        </div>
    );
}

export default NoteList;
