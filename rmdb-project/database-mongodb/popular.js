const mongoose = require("mongoose");
const db = require("./index.js");
mongoose.Promise = global.Promise;

const popularSchema = new mongoose.Schema({
  countries: [String],
  description: String,
  directors: [String],
  genres: [String],
  imdb_rating: String,
  language: [],
  release_date: String,
  poster: String,
  stars: [],
  title: String,
  year: String,
  youtube_trailer_key: String,
  comments: [String],
});

const Popular = mongoose.model("Popular", popularSchema);
module.exports = Popular;
