# Use an official Node.js runtime as the base image
FROM node:18

# Set a working directory within the container
WORKDIR /app

# Copy package.json and package-lock.json to the container's working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Install necessary dependencies for Puppeteer
RUN apt-get update && \
    apt-get install -yq libgconf-2-4

# Copy your application code into the container
COPY . .

# Specify the command to run your application
CMD [ "node", "./src/index.js" ]
