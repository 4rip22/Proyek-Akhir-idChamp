import React, { useState } from 'react';

function NoteInput({addNote}){
    const [title, setTitle] = useState('')
    const [content, setBody] = useState('')
    const [titleLimit,setTitleLimit] = useState(50);
}