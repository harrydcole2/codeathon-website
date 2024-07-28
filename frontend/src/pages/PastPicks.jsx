import { useGetBooks } from "../hooks/book";
import PastBookList from "../components/PastBookList";
import { Container, CircularProgress, Typography } from "@mui/material";

const PastPicks = () => {
  // Fetch archived books
  const { data: books, isLoading, isError, error } = useGetBooks("archived");

  console.log(books);
  if (isLoading) {
    return (
      <Container>
        <CircularProgress />
        <Typography>Loading past picks...</Typography>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container>
        <Typography>Error fetching past picks: {error.message}</Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ textDecoration: "underline" }}
        gutterBottom
      >
        Book Club Past Picks
      </Typography>
      <PastBookList books={books} />
    </Container>
  );
};

export default PastPicks;
