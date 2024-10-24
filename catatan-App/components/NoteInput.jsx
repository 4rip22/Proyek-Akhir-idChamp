import React, { useState } from 'react';

function NoteInput({addNote}){
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [titleLimit,setTitleLimit] = useState(50);

    const handleSubmit = (event) => {
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
    const handleTitleChange = (event) => {
        if(event.target.value.length <= 50){
            setTitle(event.target.value);
            setTitleLimit(50 - event.target.value.length);
        }
    }
    return (
        <form onSubmit ={handleSubmit}>
            <input type="text" 
            value={title}
            onChange={handleTitleChange}
            placeholder='Title'
            required
            />
        </form>
    )
};

export default NoteInput;