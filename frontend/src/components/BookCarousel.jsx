import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
} from "@mui/material";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import { Link } from "react-router-dom";
import Review from "./Review";
import ReviewModal from "./ReviewModal";

const BookCarousel = ({ books, reviews }) => {
  const [goToSlide, setGoToSlide] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [carouselHeight, setCarouselHeight] = useState(350);
  const [openModal, setOpenModal] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    // Adjust carousel height when expanded state changes
    setCarouselHeight(expanded ? 700 : 350);
  }, [expanded]);

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const handleReviewSubmit = () => {
    // Handle review submission logic here
    setOpenModal(false);
  };

  const slides = books.map((book, index) => ({
    key: index,
    content: (
      <Card
        sx={{
          display: "flex",
          width: "50vw",
          height: expanded ? "70vh" : "50vh",
          maxHeight: expanded ? "70vh" : "50vh",
          overflow: "auto",
          transition: "all 0.3s",
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 300, height: "100%", objectFit: "cover" }}
          image={book.coverImage}
          alt={book.title}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            overflow: "auto",
          }}
        >
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
            <Box sx={{ mt: 2, px: 2, pb: 2 }}>
              {reviews.map((review) => (
                <Review
                  key={review.id}
                  value={review.value}
                  review={review.review}
                />
              ))}
            </Box>
          )}
          <Box sx={{ display: "flex", gap: 2, mx: 2 }}>
            <Button
              variant="contained"
              onClick={handleModalOpen}
              sx={{ mt: 2, alignSelf: "flex-start" }}
            >
              Leave a Review
            </Button>
            <Button
              variant="outlined"
              onClick={handleExpandClick}
              sx={{ mt: 2, alignSelf: "flex-start" }}
            >
              {expanded ? "Close Reviews" : "See Reviews"}
            </Button>
          </Box>
        </Box>
      </Card>
    ),
    onClick: () => setGoToSlide(index),
  }));

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: carouselHeight,
          transition: "height 0.3s",
          position: "relative",
        }}
      >
        <Carousel
          slides={slides}
          goToSlide={goToSlide}
          offsetRadius={2}
          showNavigation={false}
          animationConfig={config.gentle}
        />
      </Box>
      <ReviewModal
        open={openModal}
        onClose={handleModalClose}
        onSubmit={handleReviewSubmit}
      />
    </Box>
  );
};

export default BookCarousel;
