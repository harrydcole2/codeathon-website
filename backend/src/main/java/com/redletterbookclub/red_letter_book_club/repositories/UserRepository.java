package com.redletterbookclub.red_letter_book_club.repositories;

import com.redletterbookclub.red_letter_book_club.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}