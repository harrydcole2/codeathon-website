package com.redletterbookclub.red_letter_book_club.repositories;

import com.redletterbookclub.red_letter_book_club.models.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {
}
