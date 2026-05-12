FROM node:alpine as base

WORKDIR /src/web

COPY ../JewelryFront/package.json ./
COPY ../JewelryFront/index.html ./
COPY ../JewelryFront/public ./public
COPY ../JewelryFront/src ./src
COPY ../JewelryFront/vite.config.js ./

RUN npm install

FROM base as build

RUN npm run build

FROM nginx:alpine as runtime

COPY --from=build /src/web/dist /usr/share/nginx/html
COPY ../JewelryFront/nginx.conf /etc/nginx/conf.d/default.conf