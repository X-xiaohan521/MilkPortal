package org.unimilk.MilkPortal.backend.util;

import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@Slf4j
@SpringBootTest
public class LoggerTest {
    @Test
    void testLogging() {
        log.info("Logging debug...");
    }
}
