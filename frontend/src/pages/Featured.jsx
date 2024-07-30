import { useContext, useState } from "react";
import {
  Container,
  CircularProgress,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useGetBooks } from "../hooks/book";
import ReviewModal from "../components/ReviewModal";
import NewBookModal from "../components/NewBookModal";
import EditBookModal from "../components/EditBookModal";
import FeaturedBookCard from "../components/FeaturedBookCard";
import BookCard from "../components/BookCard";
import Iconify from "../components/Iconify";
import { AppContext } from "../components/AppContext";

const Featured = () => {
  const { data: books, isLoading, isError, error } = useGetBooks("featured");
  const { role } = useContext(AppContext);
  const [openReviewModal, setOpenReviewModal] = useState(false);
  const [openNewBookModal, setOpenNewBookModal] = useState(false);
  const [openEditBookModal, setOpenEditBookModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [bookToEdit, setBookToEdit] = useState(null);

  const handleReviewModalOpen = (book) => {
    setSelectedBook(book);
    setOpenReviewModal(true);
  };

  const handleReviewModalClose = () => {
    setOpenReviewModal(false);
    setSelectedBook(null);
  };

  const handleNewBookModalOpen = () => {
    setOpenNewBookModal(true);
  };

  const handleNewBookModalClose = () => {
    setOpenNewBookModal(false);
  };

  const handleEditBookModalOpen = (book) => {
    setBookToEdit(book);
    setOpenEditBookModal(true);
  };

  const handleEditBookModalClose = () => {
    setOpenEditBookModal(false);
    setBookToEdit(null);
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
            onClick={handleNewBookModalOpen}
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
            <Iconify icon="mdi:add" sx={{ fontSize: 24 }} />
            Add Book
          </Button>
        )}
      </Box>

      <FeaturedBookCard
        book={firstBook}
        onReviewClick={handleReviewModalOpen}
        onEditClick={handleEditBookModalOpen}
      />
      <br />

      {otherBooks.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          onReviewClick={handleReviewModalOpen}
          onEditClick={handleEditBookModalOpen}
        />
      ))}

      {selectedBook && (
        <ReviewModal
          open={openReviewModal}
          onClose={handleReviewModalClose}
          book={selectedBook}
        />
      )}

      <NewBookModal open={openNewBookModal} onClose={handleNewBookModalClose} />

      {bookToEdit && (
        <EditBookModal
          open={openEditBookModal}
          onClose={handleEditBookModalClose}
          book={bookToEdit}
        />
      )}
    </Container>
  );
};

export default Featured;
