FROM node:22
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV PORT=5000
CMD ["npx", "nodemon", "--legacy-watch", "./bin/www"]
