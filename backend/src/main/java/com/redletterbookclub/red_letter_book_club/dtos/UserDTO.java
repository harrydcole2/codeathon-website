package com.redletterbookclub.red_letter_book_club.dtos;
public class UserDTO {
    private Long id;
    private String username;
    private String email;
    private String preferredName;
    private String roleName;
    private String token;

    public UserDTO() {}
    public UserDTO(Long id, String username, String email, String preferredName, String roleName, String token) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.preferredName = preferredName;
        this.roleName = roleName;
        this.token = token;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPreferredName() {
        return preferredName;
    }

    public void setPreferredName(String preferredName) {
        this.preferredName = preferredName;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
