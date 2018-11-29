FROM node
WORKDIR app/
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "npm", "run", "build:dev" ]
EXPOSE 9000

