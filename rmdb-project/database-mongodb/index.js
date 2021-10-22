const mongoose = require('mongoose');

const uri= require ('./url')



var db= main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(uri);
}

module.exports = db;
