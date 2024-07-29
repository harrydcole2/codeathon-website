package com.redletterbookclub.red_letter_book_club.controllers;

import com.redletterbookclub.red_letter_book_club.models.User;
import com.redletterbookclub.red_letter_book_club.models.Role;
import com.redletterbookclub.red_letter_book_club.repositories.UserRepository;
import com.redletterbookclub.red_letter_book_club.repositories.RoleRepository;
import com.redletterbookclub.red_letter_book_club.utils.TokenUtil;
import com.redletterbookclub.red_letter_book_club.dtos.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:8000", allowedHeaders = "*") // TODO: replace with production url in environment
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private TokenUtil tokenUtil;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @GetMapping("/list")
    public ResponseEntity<?> getAll(@RequestParam String token) {
        String role = tokenUtil.extractRole(token);
        if (!role.equals("admin")) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized");
        }

        List<UserDTO> users = userRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
        return ResponseEntity.ok(users);
    }

    @GetMapping("/login")
    public ResponseEntity<?> login(@RequestParam String email, @RequestParam String password) {
        User user = userRepository.findByEmail(email).orElse(null);

        if (user != null && passwordEncoder.matches(password, user.getPassword())) {
            String token = tokenUtil.generateToken(email, user.getRole().getName());
            UserDTO userDTO = convertToDTO(user);
            userDTO.setToken(token);
            return ResponseEntity.ok(userDTO);
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body("Username already exists");
        }

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setUsername(user.getEmail());

        Role userRole = roleRepository.findByName("USER").orElse(null);
        if (userRole == null) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("User role not found");
        }
        user.setRole(userRole);

        User savedUser = userRepository.saveAndFlush(user);
        String token = tokenUtil.generateToken(savedUser.getEmail(), "USER");

        UserDTO userDTO = convertToDTO(savedUser);
        userDTO.setToken(token);

        return ResponseEntity.ok(userDTO);
    }

    private UserDTO convertToDTO(User user) {
        return new UserDTO(
                user.getId(),
                user.getEmail(), //always same as username
                user.getEmail(),
                user.getPreferredName(),
                user.getRole().getName(),
                null
        );
    }

    // TODO: Eventually add new delete/update endpoints to make an account a better experience
}