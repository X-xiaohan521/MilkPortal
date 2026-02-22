package org.unimilk.MilkPortal.backend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.beans.factory.annotation.Value;

@Configuration
public class StaticResourceConfig implements WebMvcConfigurer {

    @Value("${app.avatar.dir}")
    private String avatarDir;

    @Value("${app.avatar.uri}")
    private String avatarUri;

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler(avatarUri + "/**")
                .addResourceLocations("file:" + avatarDir + "/");
    }
}