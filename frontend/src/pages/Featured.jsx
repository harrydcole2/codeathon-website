import {
  Container,
  CircularProgress,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useGetBooks } from "../hooks/book";
import ReviewModal from "../components/ReviewModal";
import { useContext, useState } from "react";
import FeaturedBookCard from "../components/FeaturedBookCard";
import BookCard from "../components/BookCard";
import Iconify from "../components/Iconify"; // Import the Iconify component
import { AppContext } from "../components/AppContext";

const Featured = () => {
  const { data: books, isLoading, isError, error } = useGetBooks("featured");
  const { role } = useContext(AppContext);
  const [openModal, setOpenModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleModalOpen = (book) => {
    setSelectedBook(book);
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const handleReviewSubmit = () => {
    // Handle review submission logic here
    setOpenModal(false);
  };

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

  const [firstBook, ...otherBooks] = books;

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Featured
        </Typography>
        {role === "admin" && (
          <Button
            size="small"
            variant="contained"
            sx={{
              bgcolor: "#9a0147",
              color: "white",
              "&:hover": { bgcolor: "#7a0138" },
              px: 2,
              py: 1.5,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Iconify icon="mdi:add" sx={{ fontSize: 24 }} /> {/* Add icon */}
            Add Book
          </Button>
        )}
      </Box>

      <FeaturedBookCard book={firstBook} onReviewClick={handleModalOpen} />
      <br />

      {otherBooks.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}

      <ReviewModal
        open={openModal}
        onClose={handleModalClose}
        onSubmit={handleReviewSubmit}
        book={selectedBook}
      />
    </Container>
  );
};

export default Featured;
