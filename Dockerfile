FROM harbor.vimpelcom.ru/dockerhub/library/node@sha256:0952d404a44c0c1f10423b7f9a7a373427a2fca5704afe2d46fe152524b8a403

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