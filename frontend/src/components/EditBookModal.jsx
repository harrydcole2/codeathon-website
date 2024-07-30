import { useState, useContext } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  IconButton,
  Box,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useUpdateBook, useDeleteBook } from "../hooks/book";
import { AppContext } from "../components/AppContext";

const EditBookModal = ({ open, onClose, book }) => {
  const { token } = useContext(AppContext);
  const updateBookMutation = useUpdateBook();
  const deleteBookMutation = useDeleteBook();

  const [editedBook, setEditedBook] = useState({
    title: book.title,
    author: book.author,
    description: book.description,
    pictureUrl: book.pictureUrl || "",
    archived: book.archived || false,
    datePublished: book.datePublished || "",
    genre: book.genre || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleArchivedChange = (e) => {
    setEditedBook((prevBook) => ({
      ...prevBook,
      archived: e.target.value === "true",
    }));
  };

  const handleUpdate = async () => {
    try {
      if (!editedBook.title || !editedBook.author || !editedBook.description) {
        alert("Title, author, and description are required.");
        return;
      }
      updateBookMutation.mutate(
        { id: book.id, updatedBook: editedBook, token },
        {
          onSuccess: () => {
            onClose();
          },
        }
      );
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  const handleDelete = async () => {
    try {
      deleteBookMutation.mutate(book.id, token, {
        onSuccess: () => {
          onClose();
        },
      });
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: "#9a0147",
          color: "white",
        }}
      >
        Edit Book
        <IconButton onClick={onClose} sx={{ color: "white" }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box
          component="form"
          sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}
        >
          <TextField
            label="Title"
            name="title"
            value={editedBook.title}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Author"
            name="author"
            value={editedBook.author}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Description"
            name="description"
            value={editedBook.description}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Picture URL"
            name="pictureUrl"
            value={editedBook.pictureUrl}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Date Published"
            name="datePublished"
            value={editedBook.datePublished}
            onChange={handleChange}
            fullWidth
            type="date"
            sx={{ mb: 2 }}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Genre"
            name="genre"
            value={editedBook.genre}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <FormControl component="fieldset">
            <RadioGroup
              row
              name="archived"
              value={editedBook.archived.toString()}
              onChange={handleArchivedChange}
            >
              <FormControlLabel
                value="false"
                control={<Radio />}
                label="Featured"
              />
              <FormControlLabel
                value="true"
                control={<Radio />}
                label="Archived"
              />
            </RadioGroup>
          </FormControl>
          <Box
            sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}
          >
            <Button
              onClick={handleDelete}
              variant="outlined"
              sx={{
                flex: 1,
                borderColor: "#9a0147",
                color: "#9a0147",
                "&:hover": { borderColor: "#7a0138", color: "#7a0138" },
              }}
            >
              Delete Book
            </Button>
            <Button
              onClick={handleUpdate}
              variant="contained"
              sx={{
                flex: 1,
                bgcolor: "#9a0147",
                color: "white",
                "&:hover": { bgcolor: "#7a0138" },
              }}
            >
              Update Book
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default EditBookModal;
