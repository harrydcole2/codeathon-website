import { useGetBooks } from "../hooks/book";
import PastBookList from "../components/PastBookList";
import { Container, CircularProgress, Typography, Box } from "@mui/material";

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
        <Box
          sx={{
            backgroundColor: "#ffeb3b",
            padding: 2,
            borderRadius: 1,
          }}
        >
          <Typography fontWeight="bold">
            {" "}
            🚧 Our past picks section is currently under maintenance Come back
            later for more content! 🚧
          </Typography>
        </Box>
        <Typography>Error fetching featured books: {error.message}</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ px: 0 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        // sx={{ textDecoration: "underline" }}
        gutterBottom
      >
        Past Picks
      </Typography>
      <PastBookList books={books} />
    </Container>
  );
};

export default PastPicks;
