import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const BookCard = ({ title, author, description, image }) => {
  return (
    <Card sx={{ display: 'flex', maxWidth: 800, borderRadius: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: 350, height: 600 }} // Adjust width and height as needed
        image={image}
        alt={title}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <CardContent sx={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {author}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', mt: 2, flexGrow: 1 }}>
            {description}
          </Typography>
          <Box sx={{ mt: 'auto' }}>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
              <Link to="/discussions">Discussion</Link>
            </Typography>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};

export default BookCard;
