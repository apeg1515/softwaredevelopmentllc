FROM node:16-alpine

WORKDIR /usr/app

COPY package.json .
RUN npm install

ADD . /usr/app

EXPOSE 5046

CMD ["npm", "start"]

