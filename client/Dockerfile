# --- STAGE 1: Build the Application ---
FROM node:20-alpine AS builder
WORKDIR /app

# Copy package files first to leverage Docker layer caching
COPY package*.json ./
RUN npm ci

# Copy the rest of the application files and build
COPY . .
RUN npm run build

# --- STAGE 2: Serve with Nginx ---
FROM nginx:alpine

# Copy the compiled production assets from Stage 1 to Nginx web root
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy a custom Nginx configuration to handle React routing correctly
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]