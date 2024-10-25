import React from "react";

function NoteSearch({setSearchQuery}){
    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    }
    return (
        <input 
        type="text" 
        placeholder="Cari Catatan........."
        onChange={handleSearch}
        />
    )
    
};
export default NoteSearch;
