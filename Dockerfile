FROM node
WORKDIR app/
COPY COPY package*.json ./
RUN npm install
COPY . .
CMD [ "npm", "build:dev" ]
EXPOSE 3000
