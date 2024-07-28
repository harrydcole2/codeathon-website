import Rating from '@mui/material/Rating';
import { Typography, Box, Divider } from "@mui/material";

const Review = ({value, review}) => {
  
      return (
    <Box sx={{ display: 'flex', flexDirection: 'column', mb: 2 }}>
      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
      </Typography>
      <Rating name="read-only" value={value} readOnly />
      <Typography variant="body2" sx={{ mt: 1 }}>
        {review}
      </Typography>
      <Divider sx={{ mt: 2 }} />
    </Box>
  );
}

export default Review;
