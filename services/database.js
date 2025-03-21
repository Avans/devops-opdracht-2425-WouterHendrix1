const { MongoClient } = require("mongodb");
require('dotenv').config();

const uri = process.env.MONGO_URL;
log(uri);

const client = new MongoClient(uri);

const db = client.db(process.env.MONGO_DB);

module.exports = {

    db: db,
    client: client

};