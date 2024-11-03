require("dotenv").config();
const mongoose = require("mongoose");

async function connectDb() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Database connected successfully!");
}

module.exports = connectDb;
