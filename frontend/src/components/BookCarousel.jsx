import { useState } from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";

const BookCarousel = ({ books }) => {
  const [goToSlide, setGoToSlide] = useState(0);

  const slides = books.map((book, index) => ({
    key: index,
    content: (
      <Card sx={{ display: "flex", width: 600, height: 300 }}>
        <CardMedia
          component="img"
          sx={{ width: 200 }}
          image={book.coverImage}
          alt={book.title}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {book.title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {book.author}
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              component="div"
            >
              {book.genre}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component="div"
              sx={{ mt: 2 }}
            >
              {book.description}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    ),
    onClick: () => setGoToSlide(index),
  }));

  return (
    <Box sx={{ width: "100%", height: 500, position: "relative" }}>
      <Carousel
        slides={slides}
        goToSlide={goToSlide}
        offsetRadius={2}
        showNavigation={false}
        animationConfig={config.gentle}
      />
    </Box>
  );
};

export default BookCarousel;
