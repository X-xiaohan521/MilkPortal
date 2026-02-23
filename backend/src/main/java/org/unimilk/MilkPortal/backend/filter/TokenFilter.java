package org.unimilk.MilkPortal.backend.filter;

import jakarta.servlet.*;
import jakarta.servlet.annotation.WebFilter;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.unimilk.MilkPortal.backend.service.TokenService;

import java.io.IOException;

@Slf4j
@Component
@WebFilter(urlPatterns = "/*")
public class TokenFilter implements Filter {

    private final TokenService tokenService;

    @Autowired
    public TokenFilter(TokenService tokenService) {
        this.tokenService = tokenService;
    }

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        Filter.super.init(filterConfig);
    }

    @Override
    public void doFilter(ServletRequest servletRequest,
                         ServletResponse servletResponse,
                         FilterChain filterChain)
            throws IOException, ServletException {

        HttpServletRequest req = (HttpServletRequest) servletRequest;
        HttpServletResponse resp = (HttpServletResponse) servletResponse;

        if ("OPTIONS".equalsIgnoreCase(req.getMethod())) {
            log.info("HTTP pre-check: allowed pass.");
            filterChain.doFilter(req, resp);
            return;
        }

        String requestURI = req.getRequestURI();

        if (isPublicPath(requestURI)) {
            log.info("Access public uri: allowed pass.");
            filterChain.doFilter(req, resp);
            return;
        }

        String authHeader = req.getHeader("Authorization");

        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            log.warn("Missing or invalid Authorization header: prohibited.");
            resp.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            return;
        }

        String token = authHeader.substring(7);

        if (token.isEmpty()) {
            log.warn("Token is empty: prohibited.");
            resp.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            return;
        }

        String username = tokenService.verifyToken(token);

        if (username == null || username.isEmpty()) {
            log.warn("Token invalid: prohibited.");
            resp.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            return;
        }

        log.info("User {} access restricted uri with a valid token: allowed pass.", username);
        req.setAttribute("username", username);

        filterChain.doFilter(req, resp);
    }

    @Override
    public void destroy() {
        Filter.super.destroy();
    }

    private boolean isPublicPath(String path) {
        return path.equals("/api/auth/login") || path.startsWith("/uploads/avatar/");
    }
}
