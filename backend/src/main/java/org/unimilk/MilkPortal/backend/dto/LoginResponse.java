package org.unimilk.MilkPortal.backend.dto;

public record LoginResponse(
        boolean success,
        String token,
        String message
) {}
