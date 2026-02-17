package org.unimilk.MilkPortal.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.unimilk.MilkPortal.backend.entity.User;
import org.unimilk.MilkPortal.backend.repo.UserRepo;
import org.unimilk.MilkPortal.backend.util.JwtUtils;

@Service
public class TokenService {
    private final JwtUtils jwtUtils;
    private final UserRepo userRepo;

    @Autowired
    public TokenService(JwtUtils jwtUtils, UserRepo userRepo) {
        this.jwtUtils = jwtUtils;
        this.userRepo = userRepo;
    }

    public String verifyToken(String token) {
        try {
            String username = jwtUtils.extractUsername(token);
            User user = userRepo.findByUsername(username).orElseThrow();
            return user.getUsername();
        } catch (Exception e) {
            return "";
        }
    }
}
