import { Container, Box } from "@mui/material";
import PastBookCard from "./PastBookCard";

const PastBookList = ({ books }) => {
  console.log(
    "title",
    books.map((book) => book.title)
  );
  return (
    <Container sx={{ mt: 4, width: "100%" }}>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {books.map((book) => (
          <PastBookCard
            key={book.id}
            title={book.title}
            author={book.author}
            description={book.description}
            image={
              "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250" // temporary image
            }
          />
        ))}
      </Box>
    </Container>
  );
};

export default PastBookList;
