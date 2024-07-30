import { useContext, useState } from "react";
import { Box, Typography, Chip, Divider, Button } from "@mui/material";
import EditDiscussionModal from "./EditDiscussionModal";
import AddCommentModal from "./AddCommentModal";
import DiscussionComment from "./DiscussionComment";
import { AppContext } from "./AppContext";

const DiscussionItem = ({ discussion }) => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openCommentModal, setOpenCommentModal] = useState(false);
  const { role } = useContext(AppContext);

  const handleOpenEditModal = () => setOpenEditModal(true);
  const handleCloseEditModal = () => setOpenEditModal(false);
  const handleOpenCommentModal = () => setOpenCommentModal(true);
  const handleCloseCommentModal = () => setOpenCommentModal(false);

  return (
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
          <Typography variant="h6">{discussion.title}</Typography>
          <Box>
            <Chip label={discussion.topicTag} size="small" sx={{ mr: 1 }} />
          </Box>
        </Box>
        <Typography variant="body2" paragraph>
          {discussion.content}
        </Typography>
        {discussion.comments &&
          discussion.comments.map((comment, index) => (
            <DiscussionComment key={index} comment={comment} />
          ))}
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
          {role === "admin" && (
            <Button
              variant="outlined"
              onClick={handleOpenEditModal}
              size="small"
              sx={{
                mr: 1,
                borderColor: "#9a0147",
                color: "#9a0147",
                "&:hover": { borderColor: "#9a0147", color: "#9a0147" },
              }}
            >
              Edit
            </Button>
          )}
          {role !== "" && (
            <Button
              variant="outlined"
              size="small"
              onClick={handleOpenCommentModal}
              sx={{
                borderColor: "#9a0147",
                color: "#9a0147",
                "&:hover": { borderColor: "#9a0147", color: "#9a0147" },
              }}
            >
              Comment
            </Button>
          )}
        </Box>
      </Box>
      <Divider />
      <EditDiscussionModal
        open={openEditModal}
        onClose={handleCloseEditModal}
        discussion={discussion}
      />
      <AddCommentModal
        open={openCommentModal}
        onClose={handleCloseCommentModal}
        discussionId={discussion.id}
      />
    </Box>
  );
};

export default DiscussionItem;
