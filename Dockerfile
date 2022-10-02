FROM node:lts-alpine

WORKDIR /app

RUN npm install -g http-server

COPY package*.json ./

RUN npm install 

COPY . .



EXPOSE 8080

CMD ["npm", "run", "build", "http-server", "dist"]