import React, { useState } from "react";
import "../styles.css"
import Zoom from "@mui/material/Zoom";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

function CreateArea(props) {

    const [isExpanded, setExpended] = useState(false)

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleExpand() {
        setExpended(true);
    }

    function handleInput(event) {
        const {name, value} = event.target;
        setNote((prevNote) => {
            return {
            ...prevNote,
            [name]: value
    }});
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        })
        event.preventDefault();
    }




return (
    <div>
    <form className="create-note">
        {isExpanded && <input name="title" onChange={handleInput} placeholder="Title" value={note.title}/>}
        <textarea name="content" onClick={handleExpand} onChange={handleInput} placeholder="Take a note..." rows={isExpanded ? 3 : 1} value={note.content}/>
        <Zoom in={isExpanded}><Fab onClick={submitNote}><AddIcon /></Fab></Zoom>
    </form>
    </div>
    );
}

export default CreateArea;
