FROM postgres

ENV POSTGRES_PASSWORD blackbird
ENV POSTGRES_DB demo

COPY init.sql /docker-entrypoint-initdb.d/

EXPOSE 5432

USER 999:999