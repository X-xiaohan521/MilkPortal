FROM eclipse-temurin:21-jre
LABEL authors="unimilk"
WORKDIR /app
COPY target/backend-1.0.0.jar app.jar
RUN mkdir "data"
CMD ["java","-jar","app.jar"]
