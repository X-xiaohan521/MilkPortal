package org.unimilk.MilkPortal.backend.util;

import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.io.Encoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;

import javax.crypto.SecretKey;
import java.util.Date;

@Component
public class JwtUtils {
    /**
     * Loads SECRET_KEY from environment variable on startup.
     */
    private final SecretKey SECRET_KEY = Keys.hmacShaKeyFor(
            Decoders.BASE64.decode(
                    System.getenv("JWT_SECRET")
            )
    );

    public String generateToken(String username) {
        return Jwts.builder()
                .subject(username)
                .issuer("milk-server")
                .expiration(new Date(System.currentTimeMillis() + 3600_000))
                .signWith(SECRET_KEY)
                .compact();
    }

    public String extractUsername(String token) {
        Claims claims = Jwts.parser()
                .verifyWith(SECRET_KEY)
                .build()
                .parseSignedClaims(token)
                .getPayload();

        return claims.getSubject();
    }

    /**
     * Generates a new SECRET_KEY.
     * Note: you have to store the new SECRET_KEY in environment variable `JWT_SECRET` yourself, otherwise it won't be used.
     * @return the Base64 encoding representation of the newly generated SECRET_KEY
     */
    public static String generateNewSecretKey() {
        SecretKey key = Jwts.SIG.HS256.key().build();
        return Encoders.BASE64.encode(key.getEncoded());
    }
}
