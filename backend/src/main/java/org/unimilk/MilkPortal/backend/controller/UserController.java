package org.unimilk.MilkPortal.backend.controller;

import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.unimilk.MilkPortal.backend.dto.MeResponse;
import org.unimilk.MilkPortal.backend.service.UserService;

@Slf4j
@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/me")
    public MeResponse me(HttpServletRequest req) {
        String username = (String) req.getAttribute("username");
        String avatarUri = userService.getAvatarUri(username);
        return new MeResponse(username, avatarUri);
    }

    @GetMapping("/avatar")
    public void getAvatar() {

    }

    @PostMapping("/avatar")
    public void setAvatar() {

    }
}
