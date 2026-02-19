# ===== Stage 1: Build =====
FROM node:alpine AS build
LABEL authors="unimilk"

WORKDIR /build

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# ===== Stage 2: Run =====
FROM node:alpine AS runner
LABEL authors="unimilk"

WORKDIR /app

COPY --from=build /build/package*.json ./
COPY --from=build /build/node_modules ./node_modules
COPY --from=build /build/.next ./.next
COPY --from=build /build/public ./public

CMD ["npm","run","start"]
