# build
FROM node:16.16.0 as builder
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY ./ ./
RUN npm run build

# run
FROM nginx:latest
COPY --from=builder /usr/src/app/build /usr/share/nginx/html/
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d
EXPOSE 80