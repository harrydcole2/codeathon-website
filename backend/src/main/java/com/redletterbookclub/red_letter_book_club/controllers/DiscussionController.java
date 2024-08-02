package com.redletterbookclub.red_letter_book_club.controllers;

import com.redletterbookclub.red_letter_book_club.dtos.DiscussionDTO;
import com.redletterbookclub.red_letter_book_club.dtos.CommentDTO;
import com.redletterbookclub.red_letter_book_club.models.Discussion;
import com.redletterbookclub.red_letter_book_club.models.Comment;
import com.redletterbookclub.red_letter_book_club.models.User;
import com.redletterbookclub.red_letter_book_club.repositories.DiscussionRepository;
import com.redletterbookclub.red_letter_book_club.repositories.CommentRepository;
import com.redletterbookclub.red_letter_book_club.repositories.UserRepository;
import com.redletterbookclub.red_letter_book_club.utils.TokenUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/discussion")
public class DiscussionController {

    @Autowired
    private DiscussionRepository discussionRepository;
    @Autowired
    private CommentRepository commentRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private TokenUtil tokenUtil;

    @GetMapping
    public ResponseEntity<?> getAll() {
        List<Discussion> discussions = discussionRepository.findAllByOrderByUpdatedAtDesc();
        List<DiscussionDTO> discussionDTOs = discussions.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
        return ResponseEntity.ok(discussionDTOs);
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestBody Discussion newDiscussion, @RequestParam String token) {
        String role = tokenUtil.extractRole(token);
        if (!role.equals("admin") && !role.equals("user")) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized");
        }

        String email = tokenUtil.extractEmail(token);
        User user = userRepository.findByEmail(email).orElse(null);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not found");
        }

        newDiscussion.setUser(user);
        Discussion createdDiscussion = discussionRepository.save(newDiscussion);
        DiscussionDTO discussionDTO = convertToDTO(createdDiscussion);
        return ResponseEntity.status(201).body(discussionDTO);
    }

    @GetMapping("/{id}")
    public ResponseEntity<DiscussionDTO> getById(@PathVariable Long id) {
        Optional<Discussion> discussion = discussionRepository.findById(id);
        return discussion.map(d -> ResponseEntity.ok(convertToDTO(d)))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteById(@PathVariable Long id, @RequestParam String token) {
        String role = tokenUtil.extractRole(token);
        if (!role.equals("admin")) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized");
        }

        if (discussionRepository.existsById(id)) {
            discussionRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateById(@PathVariable Long id, @RequestBody Discussion updatedDiscussion, @RequestParam String token) {
        String role = tokenUtil.extractRole(token);
        if (!role.equals("admin")) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized");
        }

        if (discussionRepository.existsById(id)) {
            updatedDiscussion.setId(id);
            Discussion discussion = discussionRepository.save(updatedDiscussion);
            DiscussionDTO discussionDTO = convertToDTO(discussion);
            return ResponseEntity.ok(discussionDTO);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/{id}/comment")
    public ResponseEntity<?> addCommentToDiscussion(@PathVariable Long id, @RequestParam String token, @RequestBody Comment newComment) {
        String email = tokenUtil.extractEmail(token);
        User user = userRepository.findByEmail(email).orElse(null);

        if (user != null) {
            Optional<Discussion> discussion = discussionRepository.findById(id);
            if (discussion.isPresent()) {
                newComment.setDiscussion(discussion.get());
                newComment.setUser(user);
                Comment createdComment = commentRepository.save(newComment);
                CommentDTO commentDTO = convertToDTO(createdComment);
                return ResponseEntity.status(201).body(commentDTO);
            } else {
                return ResponseEntity.notFound().build();
            }
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Create an account first");
    }

    private DiscussionDTO convertToDTO(Discussion discussion) {
        List<CommentDTO> comments = commentRepository.findByDiscussionId(discussion.getId()).stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());

        DiscussionDTO discussionDTO = new DiscussionDTO();
        discussionDTO.setTitle(discussion.getTitle());
        // discussionDTO.setUserPreferredName(discussion.getUser().getPreferredName());
        discussionDTO.setTopicTag(discussion.getTopicTag());
        discussionDTO.setContent(discussion.getContent());
        discussionDTO.setArchived(discussion.isArchived());
        discussionDTO.setComments(comments);
        discussionDTO.setId(discussion.getId());
        return discussionDTO;
    }

    private CommentDTO convertToDTO(Comment comment) {
        CommentDTO commentDTO = new CommentDTO();
        commentDTO.setDiscussionId(comment.getDiscussion().getId());
        commentDTO.setUserPreferredName(comment.getUser().getPreferredName());
        commentDTO.setContent(comment.getContent());
        return commentDTO;
    }
}