import { Box, Typography, Chip, Divider } from "@mui/material";
import DiscussionComment from "./DiscussionComment";

const DiscussionItem = ({ title, topicTag, content, comments }) => (
  <Box>
    <Box sx={{ py: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6">{title}</Typography>
        <Chip label={topicTag} size="small" />
      </Box>
      <Typography variant="body2" paragraph>
        {content}
      </Typography>
      {comments.map((comment, index) => (
        <DiscussionComment key={index} {...comment} />
      ))}
    </Box>
    <Divider />
  </Box>
);

export default DiscussionItem;
