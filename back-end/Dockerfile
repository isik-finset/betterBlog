FROM node:lts-alpine

WORKDIR /app

ENV NODE_ENV development
COPY package.json yarn.lock ./
# COPY prisma ./prisma/


RUN yarn

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]