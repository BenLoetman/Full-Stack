# Use node:18-slim for a smaller, faster base image
FROM node:current-slim

# Set the working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies in a single layer to optimize caching
RUN npm install && \
    npm install ioredis lucide-react cross-spawn@latest && \
    npm cache clean --force

# Copy the rest of the application code
COPY . .

# Expose port 3000 for the application
EXPOSE 3000

# Default command to start the application
CMD ["npm", "run", "dev"]
