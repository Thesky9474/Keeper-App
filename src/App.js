import React from 'react';
import './styles.css';
import Header from "./component/header";
import Note from "./component/note";
import Footer from "./component/footer";
import notes from "./notes";


function createNotes(detail) {
  return <Note 
    key = {detail.key}
    title = {detail.title}
    content = {detail.content}
  />;
}


function App() {
  return (
    <div>
      <Header />
      {notes.map(createNotes)}
      <Footer />
    </div>
  );
}

export default App;
