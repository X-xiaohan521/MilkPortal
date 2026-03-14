package org.unimilk.MilkPortal.backend.response;

import lombok.Data;

@Data
public class UniResponse {
    private Integer code;
    private String msg;
    private Object data;

    private UniResponse() {}
    
    public static UniResponse success() {
        UniResponse uniResp = new UniResponse();
        uniResp.code = 1;
        uniResp.msg = "success";
        return uniResp;
    }

    public static UniResponse success(Object data) {
        UniResponse uniResp = new UniResponse();
        uniResp.data = data;
        uniResp.code = 1;
        uniResp.msg = "success";
        return uniResp;
    }

    public static UniResponse success(String msg, Object data) {
        UniResponse uniResp = new UniResponse();
        uniResp.msg = msg;
        uniResp.data = data;
        uniResp.code = 1;
        uniResp.msg = "success";
        return uniResp;
    }

    public static UniResponse error(String msg) {
        UniResponse uniResp = new UniResponse();
        uniResp.msg = msg;
        uniResp.code = 0;
        return uniResp;
    }
}
