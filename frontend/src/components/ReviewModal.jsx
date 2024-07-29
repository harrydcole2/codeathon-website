import { useState, useContext } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Rating,
} from "@mui/material";
import { useAddReviewToBook } from "../hooks/book";
import { AppContext } from "../components/AppContext";

const ReviewModal = ({ open, onClose, book }) => {
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState("");
  const { token } = useContext(AppContext);

  const addReviewMutation = useAddReviewToBook();

  const handleSubmit = () => {
    if (rating === 0 || content.trim() === "") {
      alert("Please provide a rating and content for the review.");
      return;
    }

    addReviewMutation.mutate(
      { id: book.id, newReview: { rating, content }, token },
      {
        onSuccess: () => {
          onClose();
          setRating(0);
          setContent("");
        },
        onError: (error) => {
          alert(`Failed to add review: ${error.message}`);
        },
      }
    );
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle fontWeight="bold">Rate {book.title}</DialogTitle>
      <DialogContent>
        <Rating
          value={rating}
          onChange={(_, newValue) => setRating(newValue)}
          precision={1}
          sx={{ mb: 2 }}
        />
        <TextField
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          label="Review"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          sx={{ mb: 2 }}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          sx={{
            color: "#9a0147",
            "&:hover": {
              bgcolor: "#f5f5f5",
            },
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          disabled={addReviewMutation.isLoading}
          sx={{
            bgcolor: "#9a0147",
            "&:hover": {
              bgcolor: "#7a0138",
            },
          }}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ReviewModal;
