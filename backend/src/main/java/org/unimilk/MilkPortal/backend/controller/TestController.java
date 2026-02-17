package org.unimilk.MilkPortal.backend.controller;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.unimilk.MilkPortal.backend.dto.TestResponse;

@RestController
@RequestMapping(("/api/test"))
public class TestController {
    @GetMapping("login")
    public TestResponse testLogin(HttpServletRequest req) {
        String token = req.getHeader("token");
        String username = (String) req.getAttribute("username");
        return new TestResponse(true, token, username);
    }
}
