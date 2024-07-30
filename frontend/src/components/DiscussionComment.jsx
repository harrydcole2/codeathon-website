import { Box, Typography, Paper, Stack } from "@mui/material";
import Iconify from "./Iconify";

const DiscussionComment = ({ comment }) => (
  <Box sx={{ mb: 2 }}>
    <Paper
      elevation={1}
      sx={{
        p: 2,
        bgcolor: "grey.200",
        borderRadius: "18px",
        borderTopLeftRadius: 0,
        display: "flex",
        alignItems: "flex-start",
        maxWidth: "calc(100% - 20px)",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: "-10px",
          width: "20px",
          height: "20px",
          bgcolor: "grey.200",
          borderTopRightRadius: "50%",
        },
      }}
    >
      <Stack direction="column" spacing={1}>
        <Stack direction="row" spacing={1}>
          <Iconify
            icon="mdi:user-box-outline"
            sx={{ mr: 1, color: "#9a0147", fontSize: 20 }}
          />
          <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
            {comment.userPreferredName}
          </Typography>
        </Stack>
        <Typography variant="body2">{comment.content}</Typography>
      </Stack>
    </Paper>
  </Box>
);

export default DiscussionComment;
