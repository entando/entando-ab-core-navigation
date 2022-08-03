ARG NODE_VERSION=gallium
ARG ALPINE_VERSION=3.15

FROM node:${NODE_VERSION}-alpine${ALPINE_VERSION}

RUN apk add openjdk11-jre openssl

ARG NODE_ENV="production"
ENV NODE_ENV=${NODE_ENV}
ENV PORT=8081

WORKDIR /app

COPY package.json .
COPY dist/app-builder-menu-bff/src .
COPY dist/app-builder-menu-bff/node_modules ./node_modules

COPY entrypoint.sh .
RUN chmod +x entrypoint.sh

RUN chmod g=u /app

EXPOSE 8081
ENTRYPOINT ["./entrypoint.sh"]
