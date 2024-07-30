package com.redletterbookclub.red_letter_book_club.repositories;

import com.redletterbookclub.red_letter_book_club.models.Comment;
import com.redletterbookclub.red_letter_book_club.models.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findByDiscussionId(Long discussionId);
}
