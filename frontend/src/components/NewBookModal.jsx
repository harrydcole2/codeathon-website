import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
  Typography,
} from "@mui/material";
import { useCreateBook } from "../hooks/book"; // Import the hook

const NewBookModal = ({ open, onClose }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");
  const [archived, setArchived] = useState(false);
  const [datePublished, setDatePublished] = useState("");
  const [genre, setGenre] = useState("");
  const { mutate: createBook, isLoading, isError, error } = useCreateBook();

  const handleSubmit = () => {
    if (!title || !author || !description) {
      alert("Title, author, and description are required.");
      return;
    }

    const newBook = {
      title,
      author,
      description,
      pictureUrl,
      archived,
      datePublished,
      genre,
    };

    createBook(newBook, {
      onSuccess: () => {
        onClose();
        setTitle("");
        setAuthor("");
        setDescription("");
        setPictureUrl("");
        setArchived(false);
        setDatePublished("");
        setGenre("");
      },
    });
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>Add New Book</DialogTitle>
      <DialogContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            p: 2,
          }}
        >
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            fullWidth
          />
          <TextField
            label="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            fullWidth
          />
          <TextField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            fullWidth
            multiline
            rows={4}
          />
          <TextField
            label="Picture URL"
            value={pictureUrl}
            onChange={(e) => setPictureUrl(e.target.value)}
            fullWidth
          />
          <TextField
            label="Date Published"
            type="date"
            value={datePublished}
            onChange={(e) => setDatePublished(e.target.value)}
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            fullWidth
          />
          <TextField
            label="Archived"
            type="checkbox"
            checked={archived}
            onChange={(e) => setArchived(e.target.checked)}
            fullWidth
          />
          {isError && <Typography color="error">{error.message}</Typography>}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          disabled={isLoading}
        >
          {isLoading ? "Creating..." : "Create Book"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewBookModal;
