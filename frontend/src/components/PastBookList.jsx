import { Container, Box } from "@mui/material";
import BookCard from "./BookCard";

const PastBookList = ({ books }) => {
  console.log(
    "title",
    books.map((book) => book.title)
  );
  return (
    <Container sx={{ mt: 4, width: "100%", px: 0 }}>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </Box>
    </Container>
  );
};

export default PastBookList;
