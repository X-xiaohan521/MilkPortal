package org.unimilk.MilkPortal.backend.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
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
    private final AuthenticationManager authenticationManager;

    @Autowired
    public AuthService(UserRepo userRepo, JwtUtils jwtUtils, AuthenticationManager authenticationManager) {
        this.userRepo = userRepo;
        this.jwtUtils = jwtUtils;
        this.authenticationManager = authenticationManager;
    }

    public LoginResponse onLogin(String username, String password) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(username, password)
            );
            log.info("User {} login success.", username);
            return new LoginResponse(true, jwtUtils.generateToken(authentication.getName()), "Login success.");
        } catch (AuthenticationException e) {
            log.warn("User {} login failed: invalid username or password.", username);
            return new LoginResponse(false, "", "Invalid username or password.");
        }
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
