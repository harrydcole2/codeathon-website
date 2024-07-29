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

const BookCard = ({ book, onReviewClick }) => {
  const [expanded, setExpanded] = useState(false);
  const { role } = useContext(AppContext);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        display: "flex",
        width: "100%",
        borderRadius: 2,
        mb: 2,
        boxShadow: 3,
        minHeight: 250,
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
          image={"bookstack.jpg"}
          alt={book.title}
        />
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
                mb: 1,
              }}
            >
              <Typography variant="h6" component="div">
                {book.title}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                {book.author}
              </Typography>
            </Box>
            <Typography
              variant="body2"
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
                {book.reviews.length > 0 && <Divider sx={{ mb: 2 }} />}
                {book.reviews.map((review) => (
                  <Review key={review.id} review={review} />
                ))}
              </Box>
            </>
          )}
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", mt: 1, gap: 1 }}
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
                onClick={() => onReviewClick(book)}
              >
                Review
              </Button>
            )}
            <Button
              size="small"
              variant="contained"
              sx={{
                bgcolor: "#9a0147",
                color: "white",
                "&:hover": { bgcolor: "#7a0138" },
              }}
              onClick={handleExpandClick}
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
