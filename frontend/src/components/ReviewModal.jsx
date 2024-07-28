import { useState } from 'react';
import { Modal, Box, Typography, TextField, Button, Rating } from '@mui/material';

const ReviewModal = ({ open, onClose, onSubmit }) => {
  const [newReview, setNewReview] = useState({ value: 0, review: '' });

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prevReview) => ({
      ...prevReview,
      [name]: value,
    }));
  };

  const handleReviewSubmit = () => {
    onSubmit(newReview);
    setNewReview({ value: 0, review: '' });
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4
      }}>
        <Typography id="modal-title" variant="h6" component="h2">
          Leave a Review
        </Typography>
        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        <TextField
          fullWidth
          id="review"
          name="review"
          label="Review"
          multiline
          rows={4}
          value={newReview.review}
          onChange={handleReviewChange}
          sx={{ mt: 2 }}
        />
        <Button onClick={handleReviewSubmit} variant="contained" sx={{ mt: 2 }}>
          Submit
        </Button>
      </Box>
    </Modal>
  );
};

export default ReviewModal;
