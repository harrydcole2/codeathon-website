import { useState } from "react";
import { useGetBooks } from "../hooks/book";
import PastBookList from "../components/PastBookList";
import ReviewModal from "../components/ReviewModal";
import EditBookModal from "../components/EditBookModal";
import { Container, CircularProgress, Typography, Box } from "@mui/material";

const PastPicks = () => {
  const { data: books, isLoading, isError, error } = useGetBooks("archived");
  const [openReviewModal, setOpenReviewModal] = useState(false);
  const [openEditBookModal, setOpenEditBookModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleReviewModalOpen = (book) => {
    setSelectedBook(book);
    setOpenReviewModal(true);
  };

  const handleReviewModalClose = () => {
    setOpenReviewModal(false);
    setSelectedBook(null);
  };

  const handleEditBookModalOpen = (book) => {
    setSelectedBook(book);
    setOpenEditBookModal(true);
  };

  const handleEditBookModalClose = () => {
    setOpenEditBookModal(false);
    setSelectedBook(null);
  };

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
            🚧 Our past picks section is currently under maintenance. Come back
            later for more content! 🚧
          </Typography>
        </Box>
        <Typography>Error fetching featured books: {error.message}</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ px: 0 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Past Picks
      </Typography>
      <PastBookList
        books={books}
        onReviewClick={handleReviewModalOpen}
        onEditClick={handleEditBookModalOpen}
      />
      {selectedBook && (
        <>
          <ReviewModal
            open={openReviewModal}
            onClose={handleReviewModalClose}
            book={selectedBook}
          />
          <EditBookModal
            open={openEditBookModal}
            onClose={handleEditBookModalClose}
            book={selectedBook}
          />
        </>
      )}
    </Container>
  );
};

export default PastPicks;
