require("dotenv").config();
const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");

async function main(callback) {
  const URI = process.env.MONGO_URI;
  const dbconnect = mongoose.connect(URI);

  try {
    await callback(dbconnect);
  } catch (e) {
    console.error(e);
    throw new Error("Unable to Connect to Database");
  }
}

module.exports = main;
