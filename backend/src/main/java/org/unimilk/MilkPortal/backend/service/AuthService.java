package org.unimilk.MilkPortal.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.unimilk.MilkPortal.backend.dto.LoginResponse;
import org.unimilk.MilkPortal.backend.entity.User;
import org.unimilk.MilkPortal.backend.repo.UserRepo;
import org.unimilk.MilkPortal.backend.util.JwtUtils;

@Service
public class AuthService {
    private final UserRepo userRepo;
    private final JwtUtils jwtUtils;

    @Autowired
    public AuthService(UserRepo userRepo, JwtUtils jwtUtils) {
        this.userRepo = userRepo;
        this.jwtUtils = jwtUtils;
    }

    public LoginResponse onLogin(String username, String password) {
        User user = userRepo.findByUsername(username).orElse(null);
        if (user == null) {
            return new LoginResponse(false, "", "User not found.");
        } else if (!user.getPassword().equals(password)) {
            return new LoginResponse(false, "", "Password incorrect.");
        }
        return new LoginResponse(true, jwtUtils.generateToken(username), "Login success.");
    }

    public void onRegister(String username, String password) {
        if (userRepo.findByUsername(username).isPresent()) {
            return;
        }
        User user = new User();
        user.setUsername(username);
        user.setPassword(password);
        userRepo.save(user);
    }
}
