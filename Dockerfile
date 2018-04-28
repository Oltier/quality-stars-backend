FROM node:8-alpine

ENV NODE_ENV="production"

ADD package.json package.json
ADD package-lock.json package-lock.json
RUN npm install
ADD server /server

EXPOSE 3000

CMD node .
