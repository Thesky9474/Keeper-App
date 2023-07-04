import React, { useState } from 'react';
import './styles.css';
import Header from "./component/header";
import Note from "./component/note";
import Footer from "./component/footer";
import CreateArea from './component/createArea';


function App() {
  const [noteItem, setNoteItem] = useState([]);

  function addNote(note) {
    setNoteItem((prevItems) => {
      return [...prevItems, note];
    });
  }

  function deleteNote(id) {
    setNoteItem((prevItems) => {
      return prevItems.filter((item, index) => {
      return index!==id;
      })
    });
  }



  return (
    <div>
      <Header />
      <CreateArea 
      onAdd = {addNote}
      />
      {
        noteItem.map((item, index) => {
        return (
        <Note 
        id = {index}
        key = {index}
        title = {item.title}
        content = {item.content}
        onDelete = {deleteNote}
        />
      )})}
      <Footer />
    </div>
  );
}

export default App;
