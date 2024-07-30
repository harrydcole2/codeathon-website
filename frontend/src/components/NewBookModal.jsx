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
import { useCreateBook } from "../hooks/book";
import { AppContext } from "../components/AppContext";

const NewBookModal = ({ open, onClose }) => {
  const { token } = useContext(AppContext);
  const createBook = useCreateBook();

  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    description: "",
    pictureUrl: "",
    archived: false,
    datePublished: "",
    genre: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleArchivedChange = (e) => {
    setNewBook((prevBook) => ({
      ...prevBook,
      archived: e.target.value === "true",
    }));
  };

  const handleSubmit = async () => {
    try {
      if (!newBook.title || !newBook.author || !newBook.description) {
        alert("Title, author, and description are required.");
        return;
      }
      createBook.mutate(newBook, token, {
        onSuccess: () => {
          setNewBook({
            title: "",
            author: "",
            description: "",
            pictureUrl: "",
            archived: false,
            datePublished: "",
            genre: "",
          });
        },
      });
      onClose();
    } catch (error) {
      console.error("Error creating book:", error);
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
        Add New Book
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
            value={newBook.title}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Author"
            name="author"
            value={newBook.author}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Description"
            name="description"
            value={newBook.description}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Picture URL"
            name="pictureUrl"
            value={newBook.pictureUrl}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Date Published"
            name="datePublished"
            value={newBook.datePublished}
            onChange={handleChange}
            fullWidth
            type="date"
            sx={{ mb: 2 }}
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            label="Genre"
            name="genre"
            value={newBook.genre}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <FormControl component="fieldset">
            <RadioGroup
              row
              name="archived"
              value={newBook.archived.toString()}
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
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{
              bgcolor: "#9a0147",
              color: "white",
              "&:hover": { bgcolor: "#7a0138" },
            }}
          >
            Add Book
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default NewBookModal;
