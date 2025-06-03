FROM node:alpine

WORKDIR /app

# Required by supergateway to run the server
ARG PORT
ENV PORT=$PORT

ARG BASE_URL
ENV BASE_URL=$BASE_URL

ARG DB_HOST
ENV DB_HOST=$DB_HOST

ARG DB_NAME
ENV DB_NAME=$DB_NAME

ARG DB_USER
ENV DB_USER=$DB_USER

ARG DB_PASSWORD
ENV DB_PASSWORD=$DB_PASSWORD

USER 1000:1000

EXPOSE ${PORT}

ENTRYPOINT npx -y supergateway --stdio "npx -y @modelcontextprotocol/server-postgres postgresql://$DB_USER:$DB_PASSWORD@$DB_HOST:5432/$DB_NAME" --port "$PORT" --baseUrl "$BASE_URL"