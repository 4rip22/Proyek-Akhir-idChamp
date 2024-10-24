import React, { useState } from 'react';

function NoteInput({addNote}){
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [titleLimit,setTitleLimit] = useState(50);

    const handleTitleChange = (event) => {
        event.preventDefault();
        addNote({
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString(),
        });
        setTitle('');
        setBody('');
        setTitleLimit(50);
    }
}
export default NoteInput;