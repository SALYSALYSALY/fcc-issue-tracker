require("dotenv").config();
const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");

const URI = process.env.MONGO_URI;
const dbconnect = mongoose.connect(URI);

module.exports = dbconnect;
