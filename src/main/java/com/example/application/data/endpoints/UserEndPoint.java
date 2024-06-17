package com.example.application.data.endpoints;

import com.example.application.data.entity.User;
import com.example.application.data.service.UserService;
import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.BrowserCallable;
import dev.hilla.Endpoint;
import jakarta.servlet.http.HttpSession;

import jakarta.validation.constraints.NotNull;


import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

@BrowserCallable
@AnonymousAllowed
@Endpoint
public class UserEndPoint {


    

    @Autowired
    private UserService userService;
    
    @Autowired
    private HttpSession session;

    public UserService.UserRecord register( UserService.UserRecord userRecord){
         return userService.registerUser(
                userRecord.account(),
                userRecord.password(),
                userRecord.username()
                );
    }

    public UserService.UserRecord login(String account, String password) {
        return userService.login(account, password, session);
    }

    public Optional<User> getUserByAccount(String account) {
        return userService.findByAccount(account);
    }

    public void logout() {
        userService.logout(session);
    }

    public User getUserById(Long id) {
        return userService.getUserById(id);
    }
    public String getCurrentUser() { //account
         User Currentuser =userService.getCurrentUser(session);
         return Currentuser.getAccount();
    }
}
