package org.unimilk.MilkPortal.backend.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import org.unimilk.MilkPortal.backend.dto.LoginRequest;
import org.unimilk.MilkPortal.backend.dto.LoginResponse;
import org.unimilk.MilkPortal.backend.exception.BusinessException;
import org.unimilk.MilkPortal.backend.response.UniResponse;
import org.unimilk.MilkPortal.backend.service.AuthService;

@Slf4j
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final AuthService authService;

    @Autowired
    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public UniResponse login(@RequestBody LoginRequest req) {
        if (req.username() == null || req.username().isBlank()) {
            log.warn("User login attempt failed: username empty.");
            throw new BusinessException("Username can't be empty.");
        }

        if (req.password() == null || req.password().isBlank()) {
            log.warn("User {} login failed: password empty.", req.username());
            throw new BusinessException("Password can't be empty.");
        }
        LoginResponse loginResponse = authService.onLogin(req.username(), req.password());
        return UniResponse.success(loginResponse.message(), loginResponse.token());
    }


    @PostMapping("/register")
    public UniResponse register() {
        return UniResponse.error("Register not allowed.");
    }
}
