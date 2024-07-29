import Rating from "@mui/material/Rating";
import { Typography, Box, Divider, Chip } from "@mui/material";

const Review = ({ review }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", mb: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <Chip
          label="John Doe" // TODO: Remove hardcoded name, replace with the users preferred name
          sx={{ mr: 2, bgcolor: "#9a0147", color: "white" }}
        />
        <Rating name="read-only" value={review.rating} readOnly size="large" />
      </Box>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
        {review.content}
      </Typography>
      <Divider sx={{ mt: 2 }} />
    </Box>
  );
};

export default Review;
