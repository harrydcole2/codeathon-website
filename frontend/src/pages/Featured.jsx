import { Container, CircularProgress, Typography } from "@mui/material";
import { useGetBooks } from "../hooks/book";
import ReviewModal from "../components/ReviewModal";
import { useState } from "react";
import FeaturedBook from "../components/FeaturedBook";

const Featured = () => {
  const { data: books, isLoading, isError, error } = useGetBooks("featured");
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
      <Typography variant="h3" gutterBottom sx={{ mb: 4 }}>
        Featured Books
      </Typography>

      <FeaturedBook
        book={firstBook}
        isProminent={true}
        onReviewClick={handleModalOpen}
      />

      {otherBooks.map((book) => (
        <FeaturedBook
          key={book.id}
          book={book}
          isProminent={false}
          onReviewClick={handleModalOpen}
        />
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
