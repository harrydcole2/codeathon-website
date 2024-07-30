package com.redletterbookclub.red_letter_book_club.dtos;

import java.util.List;

public class DiscussionDTO {
    private Long id;
    private String title;
    private String userPreferredName;
    private String topicTag;
    private String content;
    private boolean archived;
    private List<CommentDTO> comments;

    public DiscussionDTO() {}

    public DiscussionDTO(Long id, String title, String userPreferredName, String topicTag,
                         String content, boolean archived, List<CommentDTO> comments) {
        this.title = title;
        this.userPreferredName = userPreferredName;
        this.topicTag = topicTag;
        this.content = content;
        this.archived = archived;
        this.comments = comments;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

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