#syntax=docker/dockerfile:1.2

FROM node:12-alpine3.11 as base

RUN mkdir -p /home/node/app/.ng-build-cache && chown -R node:node /home/node

USER node

WORKDIR /home/node/app

#########################

FROM base as dev

WORKDIR /home/node/app

ENV NODE_ENV=dev

COPY --chown=node:node package.json yarn.lock ./

RUN --mount=type=secret,id=npmrc,dst="/home/node/.npmrc",required=true,uid=1000,gid=1000 --mount=type=cache,dst="/home/node/.yarn-cache",uid=1000,gid=1000 yarn install --cache-folder /home/node/.yarn-cache

COPY . .

ENTRYPOINT ["/home/node/app/entrypoint.dev.sh"]

#########################

FROM base as builder

USER node
WORKDIR /home/node/app

COPY package.json yarn.lock ./
RUN --mount=type=cache,target=/home/node/app/.yarn-cache,uid=1000,gid=1000 --mount=type=secret,id=npmrc,dst="/home/node/app/.npmrc",required=true,uid=1000,gid=1000 yarn --cache-folder /home/node/app/.yarn-cache

COPY . .

RUN --mount=type=cache,target=/home/node/app/.ng-build-cache,uid=1000,gid=1000 NG_BUILD_CACHE=/home/node/app/.ng-build-cache yarn build:ssr

#########################

FROM node:12-alpine3.11 as runner

WORKDIR /home/node/app
USER node 

ENV NODE_ENV=production

COPY package.json ./

COPY --from=builder /home/node/app/dist dist

ENTRYPOINT ["npm", "run", "serve:ssr"]