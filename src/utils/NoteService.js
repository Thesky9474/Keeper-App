import { db } from "./firebase";
import {
  collection,
  addDoc,
  query,
  where,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";

export const createNote = async (userId, title, content) => {
  await addDoc(collection(db, "notes"), {
    userId,
    title,
    content,
    createdAt: new Date(),
  });
};

export const listenToUserNotes = (userId, callback) => {
  const q = query(collection(db, "notes"), where("userId", "==", userId));
  return onSnapshot(q, (querySnapshot) => {
    const notes = [];
    querySnapshot.forEach((doc) => {
      notes.push({ id: doc.id, ...doc.data() });
    });
    callback(notes);
  });
};

export const deleteNote = async (noteId) => {
  await deleteDoc(doc(db, "notes", noteId));
};
