const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
  email : {type:String , required : true , unique : true },
  username: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true, minlength: 6},
  toWatchList: [],
  history: { type: Object },
  coomments: { type: Object }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
