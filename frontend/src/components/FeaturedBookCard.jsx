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

const FeaturedBookCard = ({ book }) => {
  const [expanded, setExpanded] = useState(false);

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
        display: "flex",
        width: "100%",
        minHeight: "400px",
        borderRadius: 2,
        mb: 2,
        boxShadow: 3,
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 300, objectFit: "cover" }} // TODO: needs to be dynamic and not set the height
        image={"keep-calm.jpg"}
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
                <Typography variant="h5" component="div" sx={{ mr: 2 }}>
                  {book.title}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  {book.author}
                </Typography>
              </Box>
            </Box>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                fontSize: "1.1rem",
                maxHeight: expanded ? "none" : "4.5rem",
                // overflow: "hidden",
                // textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: expanded ? "none" : 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {book.description}
            </Typography>
          </Box>
          {/* delete these obviously... */}
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          {expanded && (
            <>
              <Box sx={{ mt: 4 }}>
                <Divider sx={{ mb: 1 }} />
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
              Open Discussion
            </Button>
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

export default FeaturedBookCard;
