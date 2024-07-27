package com.redletterbookclub.red_letter_book_club.repositories;

import com.redletterbookclub.red_letter_book_club.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(String name);
}