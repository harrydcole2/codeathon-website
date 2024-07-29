import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
  Button,
  Collapse,
} from "@mui/material";
import { Link } from "react-router-dom";
import Review from "../components/Review";
import { useState } from "react";

const FeaturedBook = ({ book, onReviewClick }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const reviews = [
    { id: 1, value: 5, review: "My fav book" },
    { id: 2, value: 2, review: "No me gusta" },
    { id: 3, value: 3, review: "Mid" },
    { id: 4, value: 4, review: "Almost really great" },
  ];

  return (
    <Card
      sx={{
        display: "flex",
        mb: 2,
        borderRadius: "8px",
        height: "600px",
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: "33%",
          objectFit: "cover",
        }}
        image={book.coverImage}
        alt={book.title}
      />
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <CardContent sx={{ flex: "1 0 auto", overflow: "auto" }}>
          <Typography variant="h4" gutterBottom>
            {book.title}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {book.author}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            {book.genre}
          </Typography>
          <Typography variant="body1" paragraph>
            {book.description}
          </Typography>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
            pt: 0,
          }}
        >
          <Box>
            <Button
              variant="contained"
              component={Link}
              to="/discussions"
              sx={{ mr: 2 }}
            >
              Discussion
            </Button>
            <Button variant="outlined" onClick={() => onReviewClick(book)}>
              Leave a Review
            </Button>
          </Box>
          <Button
            onClick={handleExpandClick}
            size="small"
            variant="outlined"
            sx={{
              borderColor: "#9a0147",
              color: "#9a0147",
              "&:hover": { borderColor: "#9a0147", color: "#9a0147" },
            }}
          >
            {expanded ? "Show Less" : "See More"}
          </Button>
        </Box>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Reviews
            </Typography>
            {reviews.map((review) => (
              <Review
                key={review.id}
                value={review.value}
                review={review.review}
              />
            ))}
          </CardContent>
        </Collapse>
      </Box>
    </Card>
  );
};

export default FeaturedBook;
