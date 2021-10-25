/* eslint-disable camelcase */
const db = require("./index.js");
const Slider = require("./movieSlider.js");

const slides = [
  {
    title: "Tarung Sarung",
    year: "2020",
    description:"Wealthy and spoiled, a young man finds something to fight for when he falls in love with an environment activist protesting his family's business.",
    release_date: "2020-12-31",
    imdb_id: "tt11749980",
    imdb_rating: "7.3",
    poster:
      "https://occ-0-1068-1723.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABUBr7deJ9FBA3VgK7TW-0raf8s0LC12sU8Uz3428E8w5PU9WyKcMsD9n7qIaLtSmMOKLeJSw0RaKoh0NLyYfqy94EOWE.jpg?r=d4b",
    vote_count: "5",
    youtube_trailer_key: "AgaXQPJCRjA",
    genres: ["Action", "Drama", "Adventure"],
    stars: [
      "Panji Zoni",
      "Yayan Ruhian",
      "Maizura",
      "Cemal Faruk",
      "Surya Saputra",
      "Jarot SuperDJ",
      "Doyok SuperDJ",
      "Annette Edoarda",
      "Imelda Therinne",
      "Hajra Romessa",
    ],
    directors: ["Archie Hekagery"],
    countries: ["Indonesia"],
    language: ["Bahasa indonesia"],
  },
  {
    title: "Once upon a time in Holywood",
    year: "2019",
    release_date: "2019-05-21",
    description:"it is the first Tarantino film not to involve Bob and Harvey Weinstein, as Tarantino ended his partnership with the brothers following the sexual abuse allegations against the latter.",
    imdb_id: "tt4806220",
    imdb_rating: "7.5",
    poster:
      "https://static01.nyt.com/images/2019/07/24/arts/24onceupon1/24onceupon1-superJumbo.jpg",
    youtube_trailer_key: "ELeMaP8EPAA",
    genres: ["Drama", "Comedy"],
    stars: [
      "Leonardo DiCaprio",
      "Brad Pitt",
      "Margot Robbie",
      "Emile Hirsch",
      "Margaret Qualley",
      "Timothy Olyphant",
      "Austin Butler",
      "Dakota Fanning",
      "Bruce Dern",
      "Al Pacino",
    ],
    directors: ["	Quentin Tarantino"],
    countries: ["United States", "United Kingdom", "China"],
    language: ["English"],
  },

  {
    title: "Night teeth",
    year: "2021",
    release_date: "2021-10-20",
    description:"A young driver picks up two mysterious women for a night of party hopping. But when his passengers reveal their true nature, he must fight to stay alive.",
    imdb_id: "tt1459013",
    imdb_rating: "4.4",
    poster:
      "https://www.rollingstone.com/wp-content/uploads/2021/09/Night-Teeth-Featured-Image.png",
    vote_count: "5",
    youtube_trailer_key: "ZNu-G-rd4H4",
    genres: ["Thriller", "Horror"],
    stars: [
      "Jorge Lendeborg Jr",
      "Debby Ryan",
      "Megan Fox",
      "Sydney Sweeney",
      "Lucy Fry",
      "Alfie Allen",
    ],
    directors: ["Adam Randall"],
    countries: ["	United States"],
    language: ["English"],
  },
  {
    title: "The Guilty",
    year: "2021",
    release_date: "2021-09-11",
    description:"Over the course of a single morning at a 911 dispatch call centre, call operator Joe Baylor (Jake Gyllenhaal) tries to save the life of Emily (Riley Keough), who says she has been kidnapped.",
    imdb_id: "tt0426883",
    imdb_rating: "6.7",
    poster:
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2021/08/Jake-Gyllenhaal-The-Guilty.jpg",
    vote_count: "5",
    youtube_trailer_key: "NaB_ERMAZu4",
    genres: ["Crime", "Drama", "Thriller", "Action"],
    stars: [
      "Jake Gyllenhaal",
      "Ethan Hawke",
      "Riley Keough",
      "Justin Timberlake",
      "Shawn Hatosy",
      "Ben Foster",
      "Harry Dean Stanton",
      "Matthew Barry",
      "Fernando Vargas",
      "Vincent Kartheiser",
    ],
    directors: ["Antoine Fuqua"],
    countries: ["United States of America"],
    language: ["English"],
  },
  {
    title: "My Friend, Tucker",
    year: "2019",
    release_date: "2019-03-03",
    description:"A troubled young man named Hamilton returns home for the first time in years since leaving for college and reconnects with his childhood best friend, Tucker. ",
    imdb_id: "tt7972040",
    imdb_rating: "8.2",
    poster:
      "https://m.media-amazon.com/images/M/MV5BODJkMzkwMGQtNTdhZi00MTYxLWJjYzgtMTFmMmZlYTliMmJhXkEyXkFqcGdeQXVyNTExNjA1MzE@._V1_.jpg",
    vote_count: "5",
    youtube_trailer_key: "uApF4dWsUn0",
    genres: ["Comedy", "Drama"],
    stars: ["Avery Anthony", "Mitchell Edwards"],
    directors: ["Clarence Williams IV"],
    countries: ["United States of America"],
    language: ["English"],
  },
];



const insertWorst = function () {
  Slider.create(slides)
    .then(() => {
      console.log("Database seeded successfully");
    })
    .catch((error) => {
      console.log("error seeding the database: ", error);
    });
};

insertWorst();
