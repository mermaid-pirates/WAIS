#이런식으로하면 빌드는 수동, 자동화시킬 수도 있긴 함.
FROM nginx:latest
COPY ./build/ /usr/share/nginx/html/
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d
EXPOSE 80