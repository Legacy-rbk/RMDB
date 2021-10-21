const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const tvSchema = new mongoose.Schema({
  countries: [String],
  description: String,
  directors: [String],
  genres: [String],
  // eslint-disable-next-line camelcase
  imdb_rating: String,
  language: [],
  release_date: String,
  poster: String,
  stars: [],
  title: String,
  year: String,
  youtube_trailer_key: String,
  comments: [String]  

});
const Tv = mongoose.model('Tv', tvSchema);

module.exports = Tv;