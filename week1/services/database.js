const { MongoClient } = require("mongodb");
require('dotenv').config();

const uri = process.env.MONGO_URL || "mongodb://localhost:27017";

const client = new MongoClient(uri);

const db = client.db(process.env.MONGO_DB || "test");

module.exports = {

    db: db,
    client: client

};