FROM node:12 as build

WORKDIR /app

COPY . .

RUN npm ci \
  && npm run test \
  && npm run build

FROM nginx:1.17-alpine

WORKDIR /app

EXPOSE 80

COPY --from=build /app/config/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
