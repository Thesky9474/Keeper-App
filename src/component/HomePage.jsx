import React from 'react';
import { useState, useEffect } from "react";
import { createNote, deleteNote, listenToUserNotes } from "../utils/NoteService";
import { useAuth } from "../context/AuthContext";
import '../styles.css';
import Header from "./header";
import Note from "./note";
import Footer from "./footer";
import CreateArea from './createArea';
import { useTheme } from "../context/ThemeContext";

function App() {
  const { user } = useAuth();
  const [notes, setNotes] = useState([]);
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    if (!user) return;
    const unsubscribe = listenToUserNotes(user.uid, setNotes);
    return () => unsubscribe();
  }, [user]);

  const addNote = (newNote) => {
    if (!user) return;
    createNote(user.uid, newNote.title, newNote.content);
  };

  const removeNote = (id) => {
    deleteNote(id);
  };

  return (
    <div className={`homepage-container ${theme}`}>
      <Header />
      <main className="main-content">
        <CreateArea onAdd={addNote} />
        <div className="notes-container">
          {notes.map((note) => (
            <Note
              key={note.id}
              id={note.id}
              title={note.title}
              content={note.content}
              onDelete={removeNote}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
