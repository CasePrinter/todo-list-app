FROM node:10-alpine

WORKDIR /app

COPY ./package.json ./package-lock.json /app/

RUN npm install

COPY . /app/

RUN npm run build

EXPOSE 8080
CMD ["npm", "run", "typeorm:run", "&&", "npm", "run", "start"]