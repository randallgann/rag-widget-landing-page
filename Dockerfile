# Multi-stage build for Landing Page

# Build stage
FROM node:18-alpine AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy source code
COPY . .

# Build React app
RUN npm run build

# Production stage for React frontend
FROM nginx:alpine

# Copy built assets from build stage
COPY --from=build /app/build /usr/share/nginx/html

# Install tools needed for entrypoint
RUN apk add --no-cache bash

# Copy nginx config and entrypoint script
WORKDIR /app
COPY nginx.conf .
COPY docker-entrypoint.sh /docker-entrypoint.sh

# Set default environment variables - simplified for landing page
ENV API_URL="http://api-service:3001"
ENV CORS_ORIGIN="*"

# Use our custom entrypoint script
ENTRYPOINT ["/docker-entrypoint.sh"]
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]