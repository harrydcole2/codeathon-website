import { useState } from "react";
import { Card, CardContent, CardMedia, Typography, Box, Button, Container } from "@mui/material";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import { Link } from "react-router-dom";
import Review from "./Review";

const BookCarousel = ({ books, reviews }) => {
  const [goToSlide, setGoToSlide] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const slides = books.map((book, index) => ({
    key: index,
    content: (
      <Card sx={{ display: "flex", width: "50vw", height: expanded ? 'auto' : "50vh", transition: "height 0.3s" }}>
        <CardMedia
          component="img"
          sx={{ width: 300 }}
          image={book.coverImage}
          alt={book.title}
        />
        <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
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
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ fontSize: "1.1rem", mt: 2 }}
            >
              <Link to="/discussions">Discussion</Link>
            </Typography>
          </CardContent>
          {expanded && (
            <Box sx={{ mt: 2 }}>
              {reviews.map((review) => (
                <Review key={review.id} value={review.value} review={review.review} />
              ))}
            </Box>
          )}
          <Button
            variant="outlined"
            onClick={handleExpandClick}
            sx={{ mt: 2, alignSelf: 'flex-start' }}
          >
            {expanded ? "Close Reviews" : "See Reviews"}
          </Button>
        </Box>
      </Card>
    ),
    onClick: () => setGoToSlide(index),
  }));

  return (
    <Container sx={{ width: "100%", height: expanded ? 'auto' : 500, position: "relative" }}>
      <Carousel
        slides={slides}
        goToSlide={goToSlide}
        offsetRadius={2}
        showNavigation={false}
        animationConfig={config.gentle}
      />
    </Container>
  );
};

export default BookCarousel;
