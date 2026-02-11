package org.unimilk.MilkPortal.backend.dao;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.unimilk.MilkPortal.backend.pojo.User;

@SpringBootTest
class SqliteConnectionTest {

    @Autowired
    UserRepo repo;

    @Test
    void touchDb() {
        User user = new User();
        user.setUsername("test");
        user.setPassword("123");

        repo.save(user);
    }

}