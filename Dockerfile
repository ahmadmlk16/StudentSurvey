FROM node:14.18.1 AS build-step
RUN npm install -g @angular/cli
WORKDIR /app
COPY package.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD ng serve --host 0.0.0.0