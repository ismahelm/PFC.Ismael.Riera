FROM node:20

WORKDIR /app

COPY package.json ./
RUN npm install  

COPY . .

RUN npx sequelize-cli db:migrate --env seeders  
RUN npx sequelize-cli db:seed:all --env seeders

EXPOSE 5000
CMD ["npm", "start"]