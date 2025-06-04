ARG NODE_VERSION=18.0.0

FROM node:${NODE_VERSION}-alpine

WORKDIR /usr/src/app
COPY . .
RUN npm install && npm install typescript -g
RUN npm run build

ARG PORT
ENV PORT=$PORT

USER 1000:1000

EXPOSE ${PORT}

ENTRYPOINT ["node","build/index.js", "--port", "${PORT}"]