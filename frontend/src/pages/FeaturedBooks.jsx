import { Container, CircularProgress, Typography } from "@mui/material";
import { useGetBooks } from "../hooks/book";
import BookCarousel from "../components/BookCarousel";

const FeaturedBooks = () => {
  // TODO: The Carousel doensn't work for 2 books, and 1 book may be limiting...
  const { data: books, isLoading, isError, error } = useGetBooks("featured");

  if (isLoading) {
    return (
      <Container>
        <CircularProgress />
        <Typography>Loading featured books...</Typography>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container>
        <Typography>Error fetching featured books: {error.message}</Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Featured Books:
      </Typography>
      <BookCarousel books={books} />
    </Container>
  );
};

export default FeaturedBooks;
