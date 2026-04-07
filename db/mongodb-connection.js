const {MongoClient} = require("mongodb");
const {mongoURI} = require("../config/config.js");

const dbName = 'products';

// create mongoDB client (modern driver no longer needs legacy options)
const client = new MongoClient(mongoURI);

module.exports = client;

