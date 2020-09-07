FROM node:alpine

EXPOSE 3000

WORKDIR /usr/src
COPY original-tsconfig.json tsconfig.json

WORKDIR /usr/src/current
COPY tsconfig.json tsconfig.json
COPY package.json package.json

RUN yarn

COPY src src

ENV NEXT_PUBLIC_API http://localhost:9000
RUN NEXT_PUBLIC_API=http://localhost:9000 yarn build

CMD NEXT_PUBLIC_API=http://localhost:9000 yarn start