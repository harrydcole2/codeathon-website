/* eslint-disable react/no-unescaped-entities */
import { Container, Typography, Box, Grid, Paper, Avatar } from "@mui/material";
import Iconify from "../components/Iconify";

const About = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={12}>
            <Avatar
              alt="Red Letter Book Club"
              src="bookshelf.jpg"
              sx={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{ color: "#9a0147", fontWeight: "bold" }}
            >
              Red Letter Book Club
            </Typography>
            <Typography variant="h6" gutterBottom>
              A site by Jennie Cole
            </Typography>
            <Typography variant="body1" paragraph>
              Hello fellow book lovers! Reading and writing have always been an
              important part of my life. From the time I was little until now, I
              can't remember a time I've gone to bed without picking up
              something to read. And as I've gotten older, I've realized just
              how much I love talking about the books too! Sharing a book with
              friends adds another level of enjoyment to the reading experience.
              There have been so many times when one of my friends has opened up
              an entirely different perspective in a book that I would never
              have found on my own.
            </Typography>
            <Typography variant="body1" paragraph>
              For years I have been a member of different book clubs. Each one
              has been a unique learning experience which I treasure. But book
              clubs tend to ebb and flow and with our busy schedules it is hard
              to keep them alive and thriving. I always invited anyone who was
              interested in joining but over time I realized that wasn't the
              dynamic I was looking for. After two of my good friends encouraged
              me to start up a book club again, I decided I was going to take a
              different approach. I was going to be selective in who I invited.
              I was going to invite people I knew loved to read and people who I
              thought might really invest in the idea of a book club. I sent out
              an invitation in a red envelope, hence the name of the book club,
              and invited them to join. The number of invites was low but the
              response was high and these women have become my closest and
              dearest friends. Our relationship extends well beyond books and
              we've shared all the highs and lows that life offers over the past
              years.
            </Typography>
            <Typography variant="body1" paragraph>
              Book clubs are a place to talk about books but they are also a
              place to celebrate, grieve, process, learn, grow, support and
              refine. I wanted to extend the community that I built with this
              website. Whether you are dying to talk about the book you just
              read or whether you want to create your own book club, I am hoping
              that this website and my blog can help you get started. Since time
              is always a factor, I want to make the process easier for you.
              Each month I will feature a book. I will have a free flyer for you
              to download and send out to your own Red Letter Readers. On my
              blog I will have tips on forming your own book club and other
              books that I've reviewed as well as fun ideas for themes and
              get-togethers. Eventually, I hope to add a store where you can
              find curated items related to all things reading.
            </Typography>
            <Typography variant="body1" paragraph>
              Happy Reading!
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
              <Iconify
                icon="mdi:facebook"
                sx={{ mr: 1, color: "#9a0147", fontSize: 24 }}
              />
              <Typography variant="body2">
                Follow on Facebook: @jennie.b.cole
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Iconify
                icon="mdi:instagram"
                sx={{ mr: 1, color: "#9a0147", fontSize: 24 }}
              />
              <Typography variant="body2">
                Follow on Instagram: @kjcolefamily
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default About;
