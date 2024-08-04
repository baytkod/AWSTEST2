FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g nodemon
RUN npm install @prisma/client
COPY . .
RUN npx prisma generate
EXPOSE 3001
CMD ["nodemon", "--watch", "src", "--exec", "ts-node", "src/main.ts"]