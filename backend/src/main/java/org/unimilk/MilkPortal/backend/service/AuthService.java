package org.unimilk.MilkPortal.backend.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.unimilk.MilkPortal.backend.dto.LoginResponse;
import org.unimilk.MilkPortal.backend.entity.User;
import org.unimilk.MilkPortal.backend.repo.UserRepo;
import org.unimilk.MilkPortal.backend.util.JwtUtils;

@Slf4j
@Service
public class AuthService {
    private final UserRepo userRepo;
    private final JwtUtils jwtUtils;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public AuthService(UserRepo userRepo, JwtUtils jwtUtils, PasswordEncoder passwordEncoder) {
        this.userRepo = userRepo;
        this.jwtUtils = jwtUtils;
        this.passwordEncoder = passwordEncoder;
    }

    public LoginResponse onLogin(String username, String password) {
        User user = userRepo.findByUsername(username).orElse(null);
        if (user == null) {
            log.warn("User {} login failed: user not found.", username);
            return new LoginResponse(false, "", "User not found.");
        } else if (!user.getPassword().startsWith("$2a$")) {
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            userRepo.save(user);
            log.warn("User {} password deprecated: updated BCrypt encoding.", username);
            return new LoginResponse(false, "", "Password invalid, please try again.");
        } else if (!passwordEncoder.matches(password, user.getPassword())) {
            log.warn("User {} login failed: password incorrect.", username);
            return new LoginResponse(false, "", "Password incorrect.");
        }
        log.info("User {} login success.", username);
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
