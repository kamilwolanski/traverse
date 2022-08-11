FROM node:18-alpine
RUN apk add --no-cache --virtual .builds-deps build-base make py3-pip g++ vips-dev
WORKDIR /app
ADD . ./
RUN npm ci
RUN npm run buildpath
