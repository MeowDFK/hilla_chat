package com.example.application.data.service;

import com.example.application.data.entity.User;
import com.example.application.data.repository.UserRepository;
import com.vaadin.flow.server.VaadinRequest;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Optional;
import java.util.logging.Logger;

@Service
public class UserService {

    private static final Logger logger = Logger.getLogger(UserService.class.getName());

    private final UserRepository userRepository;
   
    

    public record UserRecord(
        Long id,
        @NotNull
        @NotBlank
        String account,
        @NotBlank
        @NotNull
        String password,
        @NotBlank
        @NotNull
        String repeatPassword,
        @NotBlank
        @NotNull
        String username,
        @NotNull
        String gender,
        @NotNull
        String mbti
    ){}

    public UserRecord toUserRecord(User u){
        return new UserRecord(
            u.getId(),
            u.getAccount(),
            u.getPassword(),
            u.getPassword(),
            u.getUsername(),
            u.getGender(),
            u.getMbti()
        );
    }

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
        
    }
    
    public User registerUser( 
            String account,
            String password,
            String nickName
            ) {
        logger.info("Registering user: " + account);
        if (userRepository.findByAccount(account).isPresent() || userRepository.findByPassword(password).isPresent()) {
            throw new IllegalArgumentException("Username or email already exists");
        }

        User user = new User();
        user.setAccount(account);
        user.setPassword(password);
        user.setUsername(nickName);
        return userRepository.save(user);
    }

    public Optional<User> findByAccount(String account) {
        return userRepository.findByAccount(account);
    }

     public User login(String username, String password, HttpSession session) {
        Optional<User> userOpt = userRepository.findByUsernameAndPassword(username, password);
        if (userOpt.isPresent()) {
            User user = userOpt.get();
            session.setAttribute("currentUser", user); // Store user in session
            return user;
        } else {
            throw new IllegalArgumentException("Invalid username or password");
        }
    }
    public User loginUser(String userName, String password) {
        logger.info("Logging in user: " + userName);
        Optional<User> userOptional = userRepository.findByUsername(userName);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            if (password.equals(user.getPassword())) {
                Authentication authentication = new UsernamePasswordAuthenticationToken(
                        userName,
                        password,
                        Collections.singletonList(() -> "ROLE_USER")
                );
                SecurityContextHolder.getContext().setAuthentication(authentication);
                return user;
            } else {
                throw new IllegalArgumentException("Invalid password");
            }
        } else {
            throw new IllegalArgumentException("User not found");
        }
    }
    public User getUserByAccount(String account) {
        return userRepository.findByAccount(account).orElseThrow(() -> new IllegalArgumentException("User not found by account"+account));
    }
    public void logout(HttpSession session) {
        session.invalidate(); // Invalidate the session
    }
    public User getCurrentUser(HttpSession session) {
        return (User) session.getAttribute("currentUser"); // Retrieve user from session
    }

    public User getUserById(Long id) {
        return userRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("User not found"));
    }

    
}
