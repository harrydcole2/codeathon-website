import { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
  Divider,
} from "@mui/material";
import Review from "./Review";

const BookCard = ({ book }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // Fake reviews
  book.reviews = [
    { id: 1, content: "Great read! Couldn't put it down.", rating: 5 },
    {
      id: 2,
      content: "Interesting plot, but the pacing was a bit slow.",
      rating: 4,
    },
    { id: 3, content: "A masterpiece of modern literature.", rating: 5 },
    { id: 4, content: "Meh.", rating: 2 },
  ];

  return (
    <Card
      sx={{
        display: "flex",
        width: "100%",
        borderRadius: 2,
        mb: 2,
        boxShadow: 3,
        minHeight: 250, // Ensure the card is at least as tall as the image
      }}
    >
      <Box
        sx={{
          width: 200,
          bgcolor: "grey.300",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: 200,
            height: 250,
            objectFit: "cover",
          }}
          image={"keep-calm.jpg"}
          alt={book.title}
        />
        {/* Gray box to fill any extra space */}
        <Box sx={{ flexGrow: 1, bgcolor: "grey.300" }} />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1, p: 2 }}>
        <CardContent
          sx={{
            flex: "1 0 auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            p: 0,
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
                WebkitLineClamp: expanded ? "none" : 3,
                WebkitBoxOrient: "vertical",
              }}
            >
              {book.description}
            </Typography>
          </Box>
          {expanded && (
            <>
              <Box sx={{ mt: 4 }}>
                <Divider sx={{ mb: 2 }} />
                {book.reviews.map((review) => (
                  <Review key={review.id} review={review} />
                ))}
              </Box>
            </>
          )}
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", mt: 1, gap: 1 }}
          >
            <Button
              size="small"
              variant="outlined"
              sx={{
                borderColor: "#9a0147",
                color: "#9a0147",
                "&:hover": { borderColor: "#9a0147", color: "#9a0147" },
              }}
            >
              Review
            </Button>
            <Button
              onClick={handleExpandClick}
              size="small"
              variant="contained"
              sx={{
                bgcolor: "#9a0147",
                color: "white",
                "&:hover": { bgcolor: "#7a0138" },
              }}
            >
              {expanded ? "Show Less" : "Show More"}
            </Button>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};

export default BookCard;
