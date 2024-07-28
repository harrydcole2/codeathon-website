import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import Review from "./Review";

const BookCard = ({ title, author, description, image }) => {
  return (
    <Card sx={{ display: "flex", maxWidth: "70vw", borderRadius: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: 350, height: 600 }}
        image={image}
        alt={title}
      />
      <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {author}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ fontSize: "1.1rem", mt: 2 }}
          >
            {description}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ fontSize: "1.1rem", mt: 2 }}
          >
            <Link to="/discussions">Discussion</Link>
          </Typography>
        </CardContent>
        <Review/>
      </Box>
      
    </Card>
  );
};

export default BookCard;
