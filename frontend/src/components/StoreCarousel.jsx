import { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const StoreCarousel = ({ items }) => {
  const [goToSlide, setGoToSlide] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const slides = items.map((item, index) => ({
    key: index,
    content: (
      <Card
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          width: isMobile ? "80vw" : "50vw",
          height: isMobile ? "80vh" : "28.125vw",
          maxHeight: isMobile ? "none" : "80vh",
          overflow: "hidden",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: isMobile ? "100%" : "33.33%",
            height: isMobile ? "40%" : "100%",
            objectFit: "cover",
          }}
          image={item.image}
          alt={item.name}
          onError={(event) => {
            event.target.src = "keep-calm.jpg";
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: isMobile ? "100%" : "66.67%",
            height: isMobile ? "60%" : "100%",
          }}
        >
          <CardContent sx={{ flex: "1 0 auto", overflow: "auto" }}>
            <Typography component="div" variant="h5" gutterBottom>
              {item.name}
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              component="div"
              gutterBottom
            >
              ${item.price.toFixed(2)}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component="div"
              sx={{ mt: 2 }}
            >
              {item.description}
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              disabled
              sx={{
                backgroundColor: "#9a0147",
                "&:hover": {
                  backgroundColor: "#7f003e",
                },
              }}
            >
              Buy Now
            </Button>
          </Box>
        </Box>
      </Card>
    ),
    onClick: () => setGoToSlide(index),
  }));

  return (
    <Box
      sx={{
        width: "100%",
        height: isMobile ? "90vh" : "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: isMobile ? "85vh" : "65vh",
          position: "relative",
        }}
      >
        <Carousel
          slides={slides}
          goToSlide={goToSlide}
          offsetRadius={isMobile ? 0 : 2}
          showNavigation={false}
          animationConfig={config.gentle}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <IconButton
          onClick={() =>
            setGoToSlide((prev) => (prev - 1 + slides.length) % slides.length)
          }
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton
          onClick={() => setGoToSlide((prev) => (prev + 1) % slides.length)}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default StoreCarousel;
