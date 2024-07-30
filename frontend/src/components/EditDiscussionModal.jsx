import { useState, useContext } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useUpdateDiscussion, useDeleteDiscussion } from "../hooks/discussion";
import { AppContext } from "../components/AppContext";

const EditDiscussionModal = ({ open, onClose, discussion }) => {
  const { token } = useContext(AppContext);
  const updateDiscussionMutation = useUpdateDiscussion();
  const deleteDiscussionMutation = useDeleteDiscussion();

  const [editedDiscussion, setEditedDiscussion] = useState({
    title: discussion.title,
    topicTag: discussion.topicTag,
    content: discussion.content,
    contentQuill: discussion.contentQuill || "",
    archived: discussion.archived || false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedDiscussion((prevDiscussion) => ({
      ...prevDiscussion,
      [name]: value,
    }));
  };

  //   const handleArchivedChange = (e) => {
  //     setEditedDiscussion((prevDiscussion) => ({
  //       ...prevDiscussion,
  //       archived: e.target.value === "true",
  //     }));
  //   };

  const handleUpdate = async () => {
    try {
      if (
        !editedDiscussion.title ||
        !editedDiscussion.topicTag ||
        !editedDiscussion.content
      ) {
        alert("Title, topic tag, and content are required.");
        return;
      }
      updateDiscussionMutation.mutate(
        { id: discussion.id, updatedDiscussion: editedDiscussion, token },
        {
          onSuccess: () => {
            onClose();
          },
        }
      );
    } catch (error) {
      console.error("Error updating discussion:", error);
    }
  };

  const handleDelete = async () => {
    try {
      console.log(discussion);
      deleteDiscussionMutation.mutate(
        { id: discussion.id, token },
        {
          onSuccess: () => {
            onClose();
          },
        }
      );
    } catch (error) {
      console.error("Error deleting discussion:", error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: "#9a0147",
          color: "white",
        }}
      >
        Edit Discussion
        <IconButton onClick={onClose} sx={{ color: "white" }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box
          component="form"
          sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}
        >
          <TextField
            label="Title"
            name="title"
            value={editedDiscussion.title}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Topic Tag"
            name="topicTag"
            value={editedDiscussion.topicTag}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Content"
            name="content"
            value={editedDiscussion.content}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            sx={{ mb: 2 }}
          />
          {/* <FormControl component="fieldset">
            <RadioGroup
              row
              name="archived"
              value={editedDiscussion.archived.toString()}
              onChange={handleArchivedChange}
            >
              <FormControlLabel
                value="false"
                control={<Radio />}
                label="Active"
              />
              <FormControlLabel
                value="true"
                control={<Radio />}
                label="Archived"
              />
            </RadioGroup>
          </FormControl> */}
          <Box
            sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}
          >
            <Button
              onClick={handleDelete}
              variant="outlined"
              sx={{
                flex: 1,
                borderColor: "#9a0147",
                color: "#9a0147",
                "&:hover": { borderColor: "#7a0138", color: "#7a0138" },
              }}
            >
              Delete Discussion
            </Button>
            <Button
              onClick={handleUpdate}
              variant="contained"
              sx={{
                flex: 1,
                bgcolor: "#9a0147",
                color: "white",
                "&:hover": { bgcolor: "#7a0138" },
              }}
            >
              Update Discussion
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default EditDiscussionModal;
