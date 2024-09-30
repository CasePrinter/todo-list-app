FROM node:10-alpine

WORKDIR /app

COPY ./package.json ./package-lock.json /app/

RUN npm install

COPY . /app/

RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start"]