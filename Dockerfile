# Gebruik een vaste versie van Node.js
FROM node:22

# Stel de werkdirectory in
WORKDIR /app

# Kopieer package.json en package-lock.json
COPY package*.json ./

# Installeer de dependencies (inclusief Nodemon)
RUN npm install

# Kopieer de rest van de applicatie
COPY . .

# Stel de omgevingsvariabelen in
ENV PORT=12345
ENV MONGO_URL=mongodb://my-mongo-container:27017

# Open de poort binnen de container
EXPOSE 12345

# Gebruik Nodemon voor live reload tijdens development
CMD ["npm", "run", "dev"]
