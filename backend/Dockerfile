# ===== Stage 1: Build =====
FROM maven:3.9-eclipse-temurin-21 AS build
LABEL authors="unimilk"

WORKDIR /build

COPY pom.xml .
RUN mvn -B dependency:go-offline

COPY src ./src
RUN mvn clean package -DskipTests

# ===== Stage 2: Run =====
FROM eclipse-temurin:21-jre
LABEL authors="unimilk"

WORKDIR /app

RUN mkdir -p /app/data

COPY --from=build /build/target/*.jar app.jar

CMD ["java","-jar","app.jar"]
