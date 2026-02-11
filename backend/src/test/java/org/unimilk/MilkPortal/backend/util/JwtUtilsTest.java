package org.unimilk.MilkPortal.backend.util;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class JwtUtilsTest {

    @Autowired
    private JwtUtils jwtUtils;

    @Test
    public void testGenerateAndParseToken() {
        JwtUtils.generateNewSecretKey();
        String token = jwtUtils.generateToken("Milk");
        System.out.println("Token: " + token);
        String extractedUsername = jwtUtils.extractUsername(token);
        assertEquals("Milk", extractedUsername);
    }
}