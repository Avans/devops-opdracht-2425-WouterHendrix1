# Gebruik een vaste Node.js versie
FROM node:22

# Maak een werkdirectory aan in de container
WORKDIR /app

# Kopieer package info en installeer dependencies
COPY package*.json ./
RUN npm install

# Kopieer de rest van de app
COPY . .

# Geef aan op welke poort de container luistert (binnen de container)
ENV MONGO_URL=mongodb://mongo-wouter-container:27017
ENV PORT=12345
ENV DB_NAME=mydb


# Zet de poort open (optioneel)
EXPOSE 12345

# Start de app
CMD ["npx", "nodemon", "--legacy-watch", "./bin/www"]

