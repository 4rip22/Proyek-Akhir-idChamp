import React from "react";

function NoteItem({ note, onDelete, onArchive }) {
  const handleArchive = () => {
    const confirmArchive = note.archived 
      ? window.confirm("Apakah anda yakin ingin membatalkan pengarsipan catatan ini?")
      : window.confirm("Apakah anda yakin ingin mengarsipkan catatan ini?");

    if (confirmArchive) {
      onArchive(note.id);
    }
  };

  return (
    <div className="note-item">
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <p><small>{new Date(note.createdAt).toLocaleDateString()}</small></p>
      <button onClick={() => onDelete(note.id)}>Hapus</button>
      <button onClick={handleArchive}>
        {note.archived ? "Batal Pengarsipan" : "Arsipkan"}
      </button>
    </div>
  );
}

export default NoteItem;
