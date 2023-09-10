FROM node:20.6.0-alpine
LABEL version="1.0"
WORKDIR /app
COPY . /app
EXPOSE 8080
CMD [ "node", "start.js" ]