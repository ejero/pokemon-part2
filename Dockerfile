FROM node:18
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE 1234
CMD [ "npm", "start" ]