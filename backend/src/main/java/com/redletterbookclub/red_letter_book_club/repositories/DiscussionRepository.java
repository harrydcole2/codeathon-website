package com.redletterbookclub.red_letter_book_club.repositories;

import com.redletterbookclub.red_letter_book_club.models.Discussion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DiscussionRepository extends JpaRepository<Discussion, Long> {
}
