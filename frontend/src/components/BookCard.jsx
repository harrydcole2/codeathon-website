import { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
} from "@mui/material";
// import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // Fake reviews
  book.reviews = [
    { id: 1, text: "Great read! Couldn't put it down.", rating: 5 },
  ];

  return (
    <Card
      sx={{
        display: "flex",
        width: "100%",
        borderRadius: 2,
        padding: "0 2 2 0", // may change this?
        mb: 2,
        boxShadow: 3,
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 70, height: 100, objectFit: "cover" }}
        image={book.image}
        alt={book.title}
      />
      <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1, p: 1 }}>
        <CardContent
          sx={{
            flex: "1 0 auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="h6" component="div" sx={{ mr: 2 }}>
                  {book.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {book.author}
                </Typography>
              </Box>
              {/* Commented out discussion link
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ fontSize: "1.1rem" }}
              >
                <Link to="/discussions">Discussion</Link>
              </Typography>
              */}
            </Box>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                fontSize: "1.1rem",
                maxHeight: expanded ? "none" : "3rem",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: expanded ? "none" : 1,
                WebkitBoxOrient: "vertical",
              }}
            >
              {book.description}
            </Typography>
          </Box>
          {expanded && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="h6">Reviews:</Typography>
              {book.reviews.map((review) => (
                <Box key={review.id} sx={{ mt: 1 }}>
                  <Typography variant="body2">{review.text}</Typography>
                  <Typography variant="caption">
                    Rating: {review.rating}/5
                  </Typography>
                </Box>
              ))}
            </Box>
          )}
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}>
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
        </CardContent>
      </Box>
    </Card>
  );
};

export default BookCard;
