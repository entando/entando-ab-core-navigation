ARG NODE_VERSION=gallium
ARG ALPINE_VERSION=3.15

FROM node:${NODE_VERSION}-alpine${ALPINE_VERSION}

ARG NODE_ENV="production"
ENV NODE_ENV=${NODE_ENV}
ENV PORT=8081

WORKDIR /app

COPY package.json .
COPY dist/app-builder-menu-bff/src .
COPY dist/app-builder-menu-bff/node_modules ./node_modules

EXPOSE 8081
ENTRYPOINT ["node", "index.js"]
