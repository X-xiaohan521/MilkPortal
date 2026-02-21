package org.unimilk.MilkPortal.backend.service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.unimilk.MilkPortal.backend.dto.LoginResponse;
import org.unimilk.MilkPortal.backend.entity.User;
import org.unimilk.MilkPortal.backend.repo.UserRepo;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class AuthTokenServiceTest {

    @Autowired private AuthService authService;
    @Autowired private TokenService tokenService;
    @Autowired private UserRepo userRepo;

    @Test
    void verifyValidTokenShouldWork() {
        LoginResponse loginResponse = authService.onLogin("test", "123456");
        String result = tokenService.verifyToken(loginResponse.token());
        assertEquals("test", result);
    }

    @Test
    void verifyInvalidTokenShouldFail() {
        LoginResponse loginResponse = authService.onLogin("test", "123456");
        String result = tokenService.verifyToken(loginResponse.token().replace("o", "") + "r");
        assertEquals("", result);
    }

    @Test
    void userNotFoundShouldFail() {
        LoginResponse loginResponse = authService.onLogin("milk", "@1$22_21");
        assertFalse(loginResponse.success());
    }

    @Test
    void autoBcryptPassword() {
        User user = new User();
        user.setUsername("Karina");
        user.setPassword("1_57@249");
        userRepo.save(user);

        LoginResponse loginResponse = authService.onLogin("Karina", "1_57@249");
        assertFalse(loginResponse.success());

        LoginResponse loginResponse2 = authService.onLogin("Karina", "1_57@249");
        assertTrue(loginResponse2.success());

        userRepo.delete(user);
    }
}