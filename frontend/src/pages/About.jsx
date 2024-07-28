import { Container, Typography, Box, Grid, Paper, Avatar } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import BookIcon from "@mui/icons-material/Book";

const About = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4}>
            <Avatar
              alt="Red Letter Book Club"
              src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              sx={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{ color: "#9a0147", fontWeight: "bold" }}
            >
              Red Letter Book Club
            </Typography>
            <Typography variant="h6" gutterBottom>
              Bringing readers together since 2010
            </Typography>
            <Typography variant="body1" paragraph>
              Founded by avid readers Sarah Johnson and Mark Thompson, Red
              Letter Book Club has been a cornerstone of the local literary
              community for over a decade. Our mission is to foster a love for
              reading, encourage critical thinking, and create a space for
              lively discussions about books from all genres.
            </Typography>
            <Typography variant="body1" paragraph>
              We meet every second Tuesday of the month at the Oakwood Community
              Center. Our club has grown from a small group of 5 friends to a
              vibrant community of over 50 active members, ranging from young
              adults to retirees.
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
              <EmailIcon sx={{ mr: 1, color: "#9a0147" }} />
              <Typography variant="body2">
                Contact us: info@redletterbookclub.com
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <BookIcon sx={{ mr: 1, color: "#9a0147" }} />
              <Typography variant="body2">
                Next meeting: July 9, 2024 - The Midnight Library by Matt Haig
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default About;
