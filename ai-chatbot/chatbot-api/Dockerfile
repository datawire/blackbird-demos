ARG NODE_VERSION=18.0.0

FROM node:${NODE_VERSION}-alpine

# Use production node environment by default.
ENV NODE_ENV production

WORKDIR /usr/src/app

# Copy the rest of the source files into the image.
COPY . .

RUN npm install

# Run the application as a non-root user.
USER 1000

# Expose the port that the application listens on.
EXPOSE 80

# Run the application.
CMD node index.js