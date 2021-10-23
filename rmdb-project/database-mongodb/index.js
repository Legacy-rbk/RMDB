const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();
const uri = process.env.DBURL;




var db= main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(uri);
}

module.exports = db;
