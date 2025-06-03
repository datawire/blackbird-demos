ARG NODE_VERSION=18.0.0

FROM node:${NODE_VERSION}-alpine

# Use production node environment by default.
ENV NODE_ENV production

WORKDIR /usr/src/app

# Copy the rest of the source files into the image.
COPY . .

RUN npm install

# Required by supergateway to run the server
ARG PORT
ENV PORT=$PORT

ARG BASE_URL
ENV BASE_URL=$BASE_URL

USER 1000:1000

EXPOSE ${PORT}

ENTRYPOINT npx -y supergateway --stdio "node build/index.js" --port "$PORT" --baseUrl "$BASE_URL"