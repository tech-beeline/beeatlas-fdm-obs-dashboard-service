FROM node:lts-alpine3.22

WORKDIR /usr/src/app

RUN npm config set registry https://nexus.vimpelcom.ru/repository/npm-all/
RUN npm config set strict-ssl false

COPY package.json /usr/src/app

RUN rm -rf node_modules package-lock.json
RUN npm cache clean --force 
RUN npm install --omit=dev 
RUN mv node_modules ../ 
RUN rm -fr /tmp/*
RUN npm cache clean --force

COPY . .

CMD ["node", "src/index.mjs"]