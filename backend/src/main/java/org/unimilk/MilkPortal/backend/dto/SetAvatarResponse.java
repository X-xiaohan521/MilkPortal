package org.unimilk.MilkPortal.backend.dto;

public record SetAvatarResponse(
        boolean success,
        String newAvatar
) {}
