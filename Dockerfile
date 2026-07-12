# Multi-stage Dockerfile for Next.js production build

# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Install Bun
RUN npm install -g bun

# Copy package files
COPY package.json bun.lock* ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy source files
COPY . .

# Build the application
RUN bun run build

# Stage 2: Runtime
FROM node:20-alpine AS runner

WORKDIR /app

# Install Bun
RUN npm install -g bun

# Copy built files from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/bun.lock* ./bun.lock*

# Install production dependencies only
RUN bun install --production --frozen-lockfile

# Expose port
EXPOSE 3000

# Start the server
CMD ["bun", "run", "start"]