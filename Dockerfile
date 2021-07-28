FROM node:14-alpine

WORKDIR /home/node

COPY package-lock.json package.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD npm start