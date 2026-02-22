package org.unimilk.MilkPortal.backend.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.unimilk.MilkPortal.backend.entity.User;
import org.unimilk.MilkPortal.backend.repo.UserRepo;

@Slf4j
@Service
public class UserService {
    private final UserRepo userRepo;

    @Value("${app.avatar.uri}")
    private String avatarBaseUri;

    @Autowired
    public UserService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    public String getAvatarUri(String username) throws UsernameNotFoundException {
        try {
            User user = userRepo.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("User " + username + " not found."));
            String avatarUri = user.getAvatarUri();
            if (avatarUri == null || avatarUri.isEmpty()) {
                log.info("User {} avatarUri is empty, return default avatarUri.", username);
                return avatarBaseUri + "/default.png";
                // TODO: Username can't be "default", pay attention to that when designing register api.
            } else {
                return avatarUri;
            }
        } catch (UsernameNotFoundException e) {
            log.error("User fetch attempt failed: {}", e.getMessage());
            return "";
        }
    }

    public void setAvatar() {

    }
}
