import { useState, useContext } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import { useAddCommentToDiscussion } from "../hooks/discussion";
import { AppContext } from "./AppContext";

const AddCommentModal = ({ open, onClose, discussionId }) => {
  const [comment, setComment] = useState("");
  const { token } = useContext(AppContext);
  const addCommentMutation = useAddCommentToDiscussion();

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = async () => {
    if (comment.trim()) {
      try {
        await addCommentMutation.mutateAsync({
          id: discussionId,
          newComment: { content: comment },
          token,
        });
        setComment("");
        onClose();
      } catch (error) {
        console.error("Error adding comment:", error);
      }
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Add a Comment</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="comment"
          label="Your comment"
          type="text"
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          value={comment}
          onChange={handleCommentChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          color="primary"
          variant="contained"
          disabled={!comment.trim() || addCommentMutation.isLoading}
        >
          {addCommentMutation.isLoading ? "Submitting..." : "Submit"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddCommentModal;
