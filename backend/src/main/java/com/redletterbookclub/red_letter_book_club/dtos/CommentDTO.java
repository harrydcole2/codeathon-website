package com.redletterbookclub.red_letter_book_club.dtos;
public class CommentDTO {
    private Long discussionId;
    private String userPreferredName;
    private String content;
    public CommentDTO() {}

    public CommentDTO(Long discussionId, String userPreferredName, String content) {
        this.discussionId = discussionId;
        this.userPreferredName = userPreferredName;
        this.content = content;
    }
    public Long getDiscussionId() {
        return discussionId;
    }

    public void setDiscussionId(Long discussionId) {
        this.discussionId = discussionId;
    }

    public String getUserPreferredName() {
        return userPreferredName;
    }

    public void setUserPreferredName(String userPreferredName) {
        this.userPreferredName = userPreferredName;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}