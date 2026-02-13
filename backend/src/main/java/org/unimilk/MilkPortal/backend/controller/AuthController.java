package org.unimilk.MilkPortal.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import org.unimilk.MilkPortal.backend.dto.LoginRequest;
import org.unimilk.MilkPortal.backend.dto.LoginResponse;
import org.unimilk.MilkPortal.backend.dto.RegisterResponse;
import org.unimilk.MilkPortal.backend.service.AuthService;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final AuthService authService;

    @Autowired
    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest req) {
        if (req.username() == null || req.username().isBlank()) {
            return new LoginResponse(false, "", "Username can't be empty.");
        }

        if (req.password() == null || req.password().isBlank()) {
            return new LoginResponse(false, "", "Password can't be empty.");
        }

        return authService.onLogin(req.username(), req.password());
    }


    @PostMapping("/register")
    public RegisterResponse register() {
        return new RegisterResponse(0L, "DefaultUser");
    }
}
