const { MongoClient } = require("mongodb");

// Gebruik omgevingsvariabelen
const uri = process.env.MONGO_URL;
const dbName = process.env.DB_NAME || "defaultdb";

console.log("Connecting to:", uri, dbName);

const client = new MongoClient(uri);
const db = client.db(dbName);

module.exports = {
  db,
  client
};
