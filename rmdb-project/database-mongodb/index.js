const mongoose = require('mongoose');
// const dotenv = require ('dotenv')
// dotenv.config()
// const mongoUri = process.env.DBURL
const uri= require ('./env')


// var db = mongoose.connect(uri, {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }, () => {
//   console.log(`db connected ${uri}`);
// });

var db= main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(uri);
}

module.exports = db;
