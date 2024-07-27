import { Container } from "@mui/material"
import BookCarousel from "../components/BookCarousel"

const FeaturedBooks = () => {
  return (
    <Container>
      <h1>
        Featured Books:
      </h1>
      <BookCarousel/>
    </Container>
    
  )
}

export default FeaturedBooks
