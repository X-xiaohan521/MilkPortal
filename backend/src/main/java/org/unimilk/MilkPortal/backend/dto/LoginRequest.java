package org.unimilk.MilkPortal.backend.dto;

public record LoginRequest(
        String username,
        String password
) {}
