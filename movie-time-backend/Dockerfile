FROM node:22.2.0-alpine

RUN apk update && apk add --no-cache bash

WORKDIR /app

COPY . .

RUN npm install

CMD ["npm", "run", "start"]