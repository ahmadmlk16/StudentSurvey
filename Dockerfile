FROM node:14.18.1 AS build-step
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.16.1-alpine AS prod-stage
COPY --from=build-step /app/dist/StudentSurvey /usr/share/nginx/html