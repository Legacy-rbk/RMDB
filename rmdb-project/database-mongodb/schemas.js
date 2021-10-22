const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;



const videoSchema = new mongoose.Schema({

  'countries': [String],
  'description': String,
  'directors': [String],
  'genres': [String],
  'imdb_rating': Number,
  'language': [String],
  'release_date': String,
  'stars': [String],
  'title': String,
  'year': Number,
  'youtube_trailer_key': String,


});
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  toWatchList: [],
  history: { type: Object },
  coomments: { type: Object }
});

const Video = mongoose.model('Video', videoSchema);
const User = mongoose.model('User', userSchema);

module.exports = { Video, User };
