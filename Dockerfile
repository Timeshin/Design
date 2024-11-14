FROM node:20.18.0-alpine as development

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]
