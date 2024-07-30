import { Container, Box } from "@mui/material";
import BookCard from "./BookCard";

const PastBookList = ({ books, onReviewClick, onEditClick }) => {
  return (
    <Container sx={{ mt: 4, width: "100%", px: 0 }}>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onReviewClick={onReviewClick}
            onEditClick={onEditClick}
          />
        ))}
      </Box>
    </Container>
  );
};

export default PastBookList;
