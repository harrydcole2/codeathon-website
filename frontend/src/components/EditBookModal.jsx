import { useState, useEffect, useContext } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import { useUpdateBook, useDeleteBook } from "../hooks/book";
import { AppContext } from "./AppContext";

const EditBookModal = ({ open, onClose, book }) => {
  book = {
    title: "",
    author: "",
    description: "",
    pictureUrl: "",
    archived: false,
    datePublished: "",
    genre: "",
  };

  const updateBookMutation = useUpdateBook();
  const deleteBookMutation = useDeleteBook();
  const { token } = useContext(AppContext);

  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [description, setDescription] = useState(book.description);
  const [pictureUrl, setPictureUrl] = useState(book.pictureUrl);
  const [archived, setArchived] = useState(book.archived);
  const [dataPublished, setDataPublished] = useState(book.dataPublished);
  const [genre, setGenre] = useState(book.genre);

  const handleUpdate = () => {
    updateBookMutation.mutate(
      {
        id: book.id,
        updatedBook: {
          title,
          author,
          description,
          pictureUrl,
          archived,
          dataPublished,
          genre,
        },
        token,
      },
      {
        onSuccess: () => {
          onClose();
        },
      }
    );
  };

  const handleDelete = () => {
    deleteBookMutation.mutate(book.id, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  useEffect(() => {
    if (book) {
      setTitle(book.title);
      setAuthor(book.author);
      setDescription(book.description);
      setPictureUrl(book.pictureUrl);
      setArchived(book.archived);
      setDataPublished(book.dataPublished);
      setGenre(book.genre);
    }
  }, [book]);

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "90%",
          maxWidth: 600,
          bgcolor: "background.paper",
          p: 3,
          borderRadius: 2,
          boxShadow: 24,
        }}
      >
        <Typography variant="h6" component="h2" gutterBottom>
          Edit Book
        </Typography>
        <TextField
          label="Title"
          fullWidth
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Author"
          fullWidth
          margin="normal"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <TextField
          label="Description"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          label="Picture URL"
          fullWidth
          margin="normal"
          value={pictureUrl}
          onChange={(e) => setPictureUrl(e.target.value)}
        />
        <TextField
          label="Published Date"
          fullWidth
          margin="normal"
          type="date"
          value={dataPublished}
          onChange={(e) => setDataPublished(e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Genre"
          fullWidth
          margin="normal"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
          <Button
            variant="outlined"
            color="error"
            onClick={handleDelete}
            disabled={deleteBookMutation.isLoading}
            sx={{ width: "50%" }}
          >
            {deleteBookMutation.isLoading ? (
              <CircularProgress size={24} />
            ) : (
              "Delete"
            )}
          </Button>
          <Button
            variant="contained"
            sx={{ bgcolor: "#9a0147", color: "white", width: "50%" }}
            onClick={handleUpdate}
            disabled={updateBookMutation.isLoading}
          >
            {updateBookMutation.isLoading ? (
              <CircularProgress size={24} />
            ) : (
              "Update"
            )}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default EditBookModal;
