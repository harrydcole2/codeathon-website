package com.redletterbookclub.red_letter_book_club.dtos;

import java.util.List;

public class DiscussionDTO {
    private String title;
    private String userPreferredName;
    private String topicTag;
    private String content;
    private boolean archived;
    private List<CommentDTO> comments;

    // Constructors
    public DiscussionDTO() {}

    public DiscussionDTO(String title, String userPreferredName, String topicTag,
                         String content, boolean archived, List<CommentDTO> comments) {
        this.title = title;
        this.userPreferredName = userPreferredName;
        this.topicTag = topicTag;
        this.content = content;
        this.archived = archived;
        this.comments = comments;
    }

    // Getters and Setters
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getUserPreferredName() {
        return userPreferredName;
    }

    public void setUserPreferredName(String userPreferredName) {
        this.userPreferredName = userPreferredName;
    }

    public String getTopicTag() {
        return topicTag;
    }

    public void setTopicTag(String topicTag) {
        this.topicTag = topicTag;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public boolean isArchived() {
        return archived;
    }

    public void setArchived(boolean archived) {
        this.archived = archived;
    }

    public List<CommentDTO> getComments() {
        return comments;
    }

    public void setComments(List<CommentDTO> comments) {
        this.comments = comments;
    }
}