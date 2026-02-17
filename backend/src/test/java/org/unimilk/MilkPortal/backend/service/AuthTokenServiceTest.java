package org.unimilk.MilkPortal.backend.service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.unimilk.MilkPortal.backend.dto.LoginResponse;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class AuthTokenServiceTest {

    @Autowired private AuthService authService;
    @Autowired private TokenService tokenService;

    @Test
    void verifyValidTokenShouldWork() {
        LoginResponse loginResponse = authService.onLogin("test", "123");
        String result = tokenService.verifyToken(loginResponse.token());
        assertEquals("test", result);
    }

    @Test
    void verifyInvalidTokenShouldFail() {
        LoginResponse loginResponse = authService.onLogin("test", "123");
        String result = tokenService.verifyToken(loginResponse.token().replace("o", "") + "r");
        assertEquals("", result);
    }
}