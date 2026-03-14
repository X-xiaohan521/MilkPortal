package org.unimilk.MilkPortal.backend.dto;

public record LoginResponse(
        String token,
        String message
) {}
