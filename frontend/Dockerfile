FROM node:10-alpine

RUN mkdir /app
WORKDIR /app
COPY ./package.json ./yarn.lock /app/
RUN yarn install
COPY . /app
