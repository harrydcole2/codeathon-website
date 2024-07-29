import { useContext, useState } from "react";
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
import { AppContext } from "./AppContext";

const FeaturedBookCard = ({ book }) => {
  const [expanded, setExpanded] = useState(false);
  const { role } = useContext(AppContext);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  book.reviews = [
    { id: 1, content: "Great read! Couldn't put it down.", rating: 5 },
    {
      id: 2,
      content: "Interesting plot, but the pacing was a bit slow.",
      rating: 4,
    },
    { id: 3, content: "A masterpiece of modern literature.", rating: 5 },
  ];

  return (
    <Card
      sx={{
        width: "100%",
        borderRadius: 2,
        mb: 2,
        boxShadow: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          bgcolor: "grey.300",
          justifyContent: "center",
          alignItems: "center",
          height: 400, // TODO: Careful with height scaling
        }}
      >
        <CardMedia
          component="img"
          sx={{
            maxHeight: 400,
            width: "auto",
            maxWidth: "100%",
            objectFit: "contain",
          }}
          image={"book-wallpaper.jpg"} //TODO: Allow the image to come from the book
          alt={book.title}
        />
      </Box>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "24px",
        }}
      >
        <Box>
          <Typography variant="h5" component="div" sx={{ mb: 1 }}>
            {book.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
            {book.author}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              fontSize: "1.1rem",
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
          sx={{ display: "flex", justifyContent: "flex-end", mt: 2.5, gap: 1 }}
        >
          {role === "admin" && (
            <Button
              size="small"
              variant="outlined"
              sx={{
                borderColor: "#9a0147",
                color: "#9a0147",
                "&:hover": { borderColor: "#9a0147", color: "#9a0147" },
              }}
            >
              Edit Book
            </Button>
          )}
          {role !== "" && (
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
          )}
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
    </Card>
  );
};

export default FeaturedBookCard;