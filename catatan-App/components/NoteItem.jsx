import React from "react";

function NoteItem({note, onDelete,onArchive}) {
    return (
      <div className="note-item">
        <h3>{note.title}</h3>
        <p>{note.body}</p>
         <p><small>{new Date(note.createdAt).toLocaleDateString()}</small></p>
         <button onClick={() => onDelete(note.id)}>Delete</button>
         <button onClick={() => onArchive(note.id)}>
            {note.archived ? "Batal Pengarsipan" : "Arsipkan" }
         </button>
      </div>
    )
}
export default NoteItem;