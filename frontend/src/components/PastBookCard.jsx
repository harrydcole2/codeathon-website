import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const PastBookCard = ({ title, author, description, image }) => {
  return (
    <Card sx={{ display: 'flex', maxWidth: '100%', borderRadius: 2, mb: 2, boxShadow: 3 }}>
      <CardMedia
        component="img"
        sx={{ width: 70, height: 100, objectFit: 'cover' }} // Adjust width and height as needed
        image={image}
        alt={title}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, p: 1 }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="h6" component="div" sx={{ mr: 2 }}>
                {title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {author}
              </Typography>
            </Box>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
              <Link to="/discussions">Discussion</Link>
            </Typography>
          </Box>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem' }}>
            {description}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default PastBookCard;
