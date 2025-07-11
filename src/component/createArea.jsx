import { useState } from "react";
import { TextField, Button, Card, CardContent } from "@mui/material";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

function CreateArea({ onAdd }) {
  const [note, setNote] = useState({ title: "", content: "" });

  const handleChange = (name, value) => {
    setNote((prev) => ({ ...prev, [name]: value }));
  };

  const submitNote = (e) => {
    e.preventDefault();
    if (!note.title || !note.content) return;
    onAdd(note);
    setNote({ title: "", content: "" });
  };

  return (
    <Card sx={{ margin: 2, padding: 2 }}>
      <CardContent>
        <TextField
          label="Title"
          fullWidth
          value={note.title}
          onChange={(e) => handleChange("title", e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <ReactQuill
          value={note.content}
          onChange={(value) => handleChange("content", value)}
          theme="snow"
          placeholder="Write something..."
        />
        <Button variant="contained" sx={{ marginTop: 2 }} onClick={submitNote}>
          Add
        </Button>
      </CardContent>
    </Card>
  );
}

export default CreateArea;
