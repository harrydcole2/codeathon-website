import { useState } from "react";
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
import { useCreateDiscussion } from "../hooks/discussion";

const AddDiscussionModal = ({ open, onClose }) => {
  const createDiscussion = useCreateDiscussion();

  const [newDiscussion, setNewDiscussion] = useState({
    title: "",
    topicTag: "",
    content: "",
    contentQuill: "",
    archived: false,
    book: null,
    user: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewDiscussion((prevDiscussion) => ({
      ...prevDiscussion,
      [name]: value,
    }));
  };

  // const handleArchivedChange = (e) => {
  //   setNewDiscussion((prevDiscussion) => ({
  //     ...prevDiscussion,
  //     archived: e.target.value === "true",
  //   }));
  // };

  const handleSubmit = async () => {
    try {
      if (
        !newDiscussion.title ||
        !newDiscussion.topicTag ||
        !newDiscussion.content
      ) {
        alert("Title, topic tag, and content are required.");
        return;
      }
      createDiscussion.mutate(newDiscussion, {
        onSuccess: () => {
          setNewDiscussion({
            title: "",
            topicTag: "",
            content: "",
            contentQuill: "",
            archived: false,
            book: null,
            user: null,
          });
          onClose();
        },
      });
    } catch (error) {
      console.error("Error creating discussion:", error);
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
        Add New Discussion
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
            value={newDiscussion.title}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Topic Tag"
            name="topicTag"
            value={newDiscussion.topicTag}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Content"
            name="content"
            value={newDiscussion.content}
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
              value={newDiscussion.archived.toString()}
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
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{
              bgcolor: "#9a0147",
              color: "white",
              "&:hover": { bgcolor: "#7a0138" },
            }}
          >
            Add Discussion
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default AddDiscussionModal;
