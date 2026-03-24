FROM node:alpine as base

WORKDIR /src/web

COPY ../JewelryFront/package.json ./
COPY ../JewelryFront/src/public ./public
COPY ../JewelryFront/src ./src

RUN npm install
FROM base as build
WORKDIR /src/web

RUN npm run build

FROM nginx as runtime

COPY --from=build ./nginx.conf /etc/nginx/conf.d/default.conf
