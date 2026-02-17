package org.unimilk.MilkPortal.backend.dto;

public record TestResponse(
        boolean success,
        String token,
        String username
) {}
