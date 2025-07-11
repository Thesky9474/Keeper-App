import { Card, CardContent, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function Note({ title, content, onDelete, id }) {
  return (
    <Card sx={{ margin: 2, padding: 1, width: 300 }}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <IconButton onClick={() => onDelete(id)} sx={{ float: "right" }}>
          <DeleteIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
}

export default Note;
