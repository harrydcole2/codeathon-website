import { Container } from "@mui/material";
import BookCarousel from "../components/BookCarousel";

const FeaturedBooks = () => {
  const books = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      description: "A classic of modern American literature...",
      coverImage: "url_to_image",
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      description: "A classic of modern American literature...",
      coverImage: "url_to_image",
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      description: "A classic of modern American literature...",
      coverImage: "url_to_image",
    },
    {
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      description:
        "1984 by George Orwell is a dystopian novel set in a totalitarian society ruled by the Party...",
      coverImage:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
    },
    {
      title: "Brave New World",
      author: "Aldous Huxley",
      genre: "Dystopian",
      description:
        "Brave New World explores a future society driven by technology and consumerism...",
      coverImage:
        "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250",
    },
  ];

  return (
    <Container>
      <h1>Featured Books:</h1>
      <BookCarousel books={books} />
    </Container>
  );
};

export default FeaturedBooks;
