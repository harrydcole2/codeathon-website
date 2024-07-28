import { Container, Box } from '@mui/material';
import PastBookCard from './PastBookCard';

const bookData = [
  {
    title: '1984',
    author: 'George Orwell',
    description: '1984 by George Orwell is a dystopian novel set in a totalitarian society ruled by the Party',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250'
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    description: 'Brave New World explores a future society driven by technology and consumerism.  Brave New World explores a future society driven by technology and consumerism. Brave New World explores a future society driven by technology and consumerism. Brave New World explores a future society driven by technology and consumerism.' ,
    image: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250'
  },
  // Add more book data here
];

const PastBookList = () => {
  return (
    <Container sx={{ mt: 4, width: '100%',}}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {bookData.map((book, index) => (
          <PastBookCard
            key={index}
            title={book.title}
            author={book.author}
            description={book.description}
            image={book.image}
          />
        ))}
      </Box>
    </Container>
  );
};

export default PastBookList;
