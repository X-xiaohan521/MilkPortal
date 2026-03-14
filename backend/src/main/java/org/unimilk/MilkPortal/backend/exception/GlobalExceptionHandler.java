package org.unimilk.MilkPortal.backend.exception;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.unimilk.MilkPortal.backend.response.UniResponse;

@Slf4j
@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler
    public UniResponse handleBusinessException(BusinessException e) {
        if (e.getLog() != null && !e.getLog().isEmpty()) {
            log.warn(e.getLog());
        }
        return UniResponse.error(e.getMessage());
    }
}
