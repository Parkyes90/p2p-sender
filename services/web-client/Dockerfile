# set context monorepo root
FROM node:16-alpine as builder

WORKDIR /web-client

COPY package* ./

RUN npm install

COPY . ./

EXPOSE 3000

FROM builder as development
CMD npm run start

FROM builder as production
RUN npm run build
