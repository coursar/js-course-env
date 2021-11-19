FROM node:16-alpine as build
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm i
COPY . .
RUN npm run build

FROM nginx:alpine
WORKDIR /app
COPY --from=build /app/dist .
COPY nginx.conf.template /etc/nginx/templates/default.conf.template

