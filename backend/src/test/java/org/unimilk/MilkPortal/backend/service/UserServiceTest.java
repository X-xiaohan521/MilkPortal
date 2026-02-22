package org.unimilk.MilkPortal.backend.service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.unimilk.MilkPortal.backend.entity.User;
import org.unimilk.MilkPortal.backend.repo.UserRepo;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class UserServiceTest {

    @Autowired private UserService userService;
    @Autowired private UserRepo userRepo;

    @Test
    void getDefaultAvatarUriShouldWork() {
        String avatarUri = userService.getAvatarUri("test");
        assertEquals("/uploads/avatar/default.png", avatarUri);
    }

    @Test
    void getNormalAvatarUriShouldWork() {
        User user = new User();
        user.setUsername("Keats");
        user.setPassword("123456");
        user.setAvatarUri("/uploads/avatar/Keats.png");
        userRepo.save(user);
        String avatarUri = userService.getAvatarUri("Keats");
        userRepo.delete(user);
        assertEquals("/uploads/avatar/Keats.png", avatarUri);
    }

    @Test
    void userNotFoundShouldReturnEmptyString() {
        String avatarUri = userService.getAvatarUri("John");
        assertEquals("", avatarUri);
    }

}