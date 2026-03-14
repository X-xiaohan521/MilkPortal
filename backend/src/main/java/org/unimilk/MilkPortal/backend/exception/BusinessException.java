package org.unimilk.MilkPortal.backend.exception;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class BusinessException extends RuntimeException {

    public String log;

    public BusinessException() {}
    public BusinessException(String message) {
        super(message);
    }
    public BusinessException(String message, String log) {
        super(message);
        this.setLog(log);
    }
    public BusinessException(Throwable cause) {super(cause);}
    public BusinessException(String message, Throwable cause) {super(message, cause);}

}
