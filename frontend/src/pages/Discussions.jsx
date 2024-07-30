import { Container, Box, Typography, Paper, Divider } from "@mui/material";
import DiscussionItem from "../components/DiscussionItem";

const Discussions = () => {
  const discussionData = [
    {
      title: "The Future of AI",
      topicTag: "Technology",
      content:
        "As AI continues to evolve, what implications will it have on society and the job market?",
      comments: [
        {
          user: "TechEnthusiast",
          content:
            "I believe AI will create more jobs than it displaces, but we need to focus on reskilling the workforce.",
        },
        {
          user: "AIResearcher",
          content:
            "The key is to develop AI that augments human capabilities rather than replacing them entirely.",
        },
      ],
    },
    {
      title: "Climate Change Solutions",
      topicTag: "Environment",
      content:
        "Exploring innovative approaches to combat climate change and reduce carbon emissions.",
      comments: [
        {
          user: "GreenAdvocate",
          content:
            "We need to invest more in renewable energy sources and improve energy efficiency across all sectors.",
        },
        {
          user: "ClimateScientist",
          content:
            "Carbon capture technologies show promise, but they need to be scaled up significantly to make a real impact.",
        },
      ],
    },
    {
      title: "Mental Health Awareness",
      topicTag: "Health",
      content:
        "Discussing the importance of mental health and strategies for maintaining well-being.",
      comments: [
        {
          user: "WellnessCoach",
          content:
            "Regular exercise and mindfulness practices can significantly improve mental health.",
        },
        {
          user: "PsychologyStudent",
          content:
            "We need to continue working to reduce the stigma around seeking help for mental health issues.",
        },
        {
          user: "WellnessCoach",
          content:
            "Regular exercise and mindfulness practices can significantly improve mental health.",
        },
        {
          user: "PsychologyStudent",
          content:
            "We need to continue working to reduce the stigma around seeking help for mental health issues.",
        },
      ],
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
          minHeight: "calc(100vh - 100px)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="body1" paragraph>
          Welcome to our Discussions section. Here, you can engage in thoughtful
          conversations on various topics, share your insights, and learn from
          others. Each discussion focuses on a specific subject, allowing for
          in-depth exploration and diverse perspectives.
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
          {discussionData.map((discussion, index) => (
            <DiscussionItem
              key={index}
              title={discussion.title}
              topicTag={discussion.topicTag}
              content={discussion.content}
              comments={discussion.comments}
            />
          ))}
        </Box>
      </Paper>
    </Container>
  );
};

export default Discussions;
