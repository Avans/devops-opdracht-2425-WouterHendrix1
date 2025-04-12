# Gebruik een Node.js image als basis
FROM node:18

# Stel de werkdirectory in
WORKDIR /app

# Kopieer en installeer alleen package.json en package-lock.json
COPY package*.json ./
RUN npm install --omit=dev  # Alleen productie-dependencies installeren

# Kopieer de rest van de code
COPY . .

# Start de applicatie
CMD ["node", "server.js"]
