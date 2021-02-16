FROM node
WORKDIR '/app'
COPY package*.json ./
RUN npm install
RUN npm install -g serve
COPY . .
RUN npm run build:prod
EXPOSE 5000
CMD ["serve", "-s", "build:prod"]
