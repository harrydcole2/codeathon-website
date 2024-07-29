import { Typography, Box } from "@mui/material";
import StoreCarousel from "../components/StoreCarousel";

const Store = () => {
  const storeItems = [
    {
      image: "https://example.com/book1.jpg",
      name: "Classic Novel Collection",
      description:
        "A set of five timeless classics beautifully bound in hardcover. This collection includes works from renowned authors that have shaped literature through the ages.",
      price: 79.99,
    },
    {
      image: "https://example.com/book2.jpg",
      name: "Modern Fiction Bestsellers",
      description:
        "The top three bestselling fiction books of the year in paperback. Dive into the most talked-about stories of our time, featuring compelling narratives and unforgettable characters.",
      price: 49.99,
    },
    {
      image: "https://example.com/accessory.jpg",
      name: "Deluxe Bookmarks Set",
      description:
        "A set of five luxury metal bookmarks with unique designs. Each bookmark is crafted with intricate detailing and finished with a high-quality enamel.",
      price: 24.99,
    },
  ];

  return (
    <Box sx={{ padding: 4 }}>
      {
        //TODO: have actual store items from the database, and get rid of error message
        /* <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ mb: 4, textAlign: "center" }}
      >
        Store
      </Typography> */
      }
      <Box
        sx={{
          backgroundColor: "#ffeb3b",
          padding: 2,
          borderRadius: 1,
        }}
      >
        <Typography fontWeight="bold">
          {" "}
          🚧 Our online store is currently under maintenance. We are working
          hard to bring you a new and improved shopping experience. Stay tuned,
          exciting things are coming soon! 🚧
        </Typography>
      </Box>
      <StoreCarousel items={storeItems} />
    </Box>
  );
};

export default Store;
