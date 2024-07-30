import {
  Container,
  Box,
  Typography,
  Paper,
  Chip,
  Divider,
} from "@mui/material";

const DiscussionItem = ({ title, topicTag, content }) => (
  <Box>
    <Box sx={{ py: 2 }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Chip label={topicTag} size="small" sx={{ mb: 1 }} />
      <Typography variant="body2">{content}</Typography>
    </Box>
    <Divider />
  </Box>
);

const Discussions = () => {
  const discussionData = [
    {
      title: "The Future of AI",
      topicTag: "Technology",
      content:
        "As AI continues to evolve, what implications will it have on society and the job market?",
    },
    {
      title: "Climate Change Solutions",
      topicTag: "Environment",
      content:
        "Exploring innovative approaches to combat climate change and reduce carbon emissions.",
    },
    {
      title: "Mental Health Awareness",
      topicTag: "Health",
      content:
        "Discussing the importance of mental health and strategies for maintaining well-being.",
    },
  ];

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
        <Typography variant="h4" fontWeight="bold">
          Discussions
        </Typography>
      </Box>
      <Paper
        elevation={3}
        sx={{
          mt: 2,
          p: 2,
          minHeight: "80vh", // Adjust the 100px as needed
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="body1"
          paragraph
          py={2}
          sx={{ fontSize: "1.2rem" }}
        >
          Welcome to our Book Club discussion board! Here, you can engage in
          thoughtful conversations on various topics, share your insights, and
          learn from others. Each discussion is tagged with a topic, usually a
          book or literature genre. Take a look at the topics below and join the
          conversation!
        </Typography>
        <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
          {discussionData.length > 0 && <Divider />}
          {discussionData.map((discussion, index) => (
            <DiscussionItem
              key={index}
              title={discussion.title}
              topicTag={discussion.topicTag}
              content={discussion.content}
            />
          ))}
        </Box>
      </Paper>
    </Container>
  );
};

export default Discussions;
