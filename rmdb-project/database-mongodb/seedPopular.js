const db = require('./index.js');
const Popular = require('./popular.js');
const best = [
  {
    title: 'Aladdin',
    year: '2019',
    release_date: '2023-07-14',
    imdb_id: 'tt11779248',
    imdb_rating: '5.6',
    poster: 'https://m.media-amazon.com/images/M/MV5BY2Q2NDI1MjUtM2Q5ZS00MTFlLWJiYWEtNTZmNjQ3OGJkZDgxXkEyXkFqcGdeQXVyNTI4MjkwNjA@._V1_SX300.jpg',
    vote_count: '0',
    popularity: '3.429',
    youtube_trailer_key: 'foyufD52aog',
    rated: 'PG-13',
    genres: [
      'Fantasy',
      'Family',
      'Adventure',
    ],
    stars: [
      'Dennis Quaid',
      'Meagan Good',
      'Michael Ealy'
    ],
    directors: [
      'Guy Ritchie'
    ],
    countries: ['United States of America'
    ],
    language: [
      'English',
    ]
  },
  {
    title: 'Bad Blood',
    year: '2017',
    release_date: '07 Dec 2018',
    poster: 'https://m.media-amazon.com/images/M/MV5BMzRmNzZkMmMtMzU5YS00ZThhLWE2YzItZTNhNGMwMmI1MjQyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    imdb_id: 'tt5795144',
    imdb_rating: '6.8',
    vote_count: '90',
    popularity: '7.913',
    youtube_trailer_key: '8JbZKsfgXq0',
    genres: [
      'Drama',
      'Crime'
    ],
    stars: [
      'Jennifer Lawrence',
      'Mike Gassaway'  
    ],
    directors: [
      'Adam McKay'
    ],
    countries: [
      'Germany',
      'Italy',
    ],
    language: [
      'English'
    ]
  },
  {
    title: 'Jurassic World: Dominion',
    year: '2022',
    release_date: '2022-06-09',
    imdb_id: 'tt8041270',
    imdb_rating: '7.29167',
    vote_count: '48',
    poster: 'https://m.media-amazon.com/images/M/MV5BMDhkODhmZjEtMmE5My00MTE1LTllZGItMDkwOTZlMjY1ZWUyXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg',
    popularity: '32.399',
    youtube_trailer_key: 'LLFSNWU8yx8',
    rated: 'Action, Adventure, Sci-Fi ',
    runtime: 90,
    genres: [
      'Adventure',
      'Action',
      'Sci-Fi',
      'Thriller'
    ],
    stars: [
      'Chris Pratt',
      'Bryce Dallas Howard',
      'Laura Dern',
      'Jeff Goldblum',
      'Mamoudou Athie',
      'Scott Haze',
      'Dichen Lachman',
      'Sam Neill',
      'Daniella Pineda',
      'Campbell Scott'
    ],
    directors: [
      'Colin Trevorrow'
    ],
    countries: [
      'United States of America'
    ],
    'language': [
      'English'
    ]
  },
  {
    title: 'The Bad Guys',
    year: '2022',
    release_date: '2022-04-08',
    imdb_id: 'tt8115900',
    imdb_rating: '0',
    vote_count: '0',
    poster: 'https://m.media-amazon.com/images/M/MV5BOTlhNmVjOWMtNzNjNC00OTY0LWEyODUtY2Q4NDhiNTgzZDE2XkEyXkFqcGdeQXVyODk1MjAxNzQ@._V1_.jpg',
    popularity: '4.193',
    youtube_trailer_key: 'chlHZJlTQ7E',
    rated: 'Animation, Action, Comedy ',
    runtime: 90,
    genres: [
      'Animation',
      'Action',
      'Comedy'
    ],
    stars: [
      'Sam Rockwell',
      'Craig Robinson',
      'Awkwafina',
      'Marc Maron'
    ],
    directors: [
      'Pierre Pierfel',
      'Roger Allers',
      'Pierre Perifel',
      '2 more credits'
    ],
    countries: [
      'United States of America'
    ],
    language: [
      'English'
    ]
  }, {
    title: 'Last Looks',
    year: '2020',
    release_date: '2021-12-31',
    imdb_id: 'tt9244554',
    poster: 'https://m.media-amazon.com/images/M/MV5BNWZkNGYzZDItMDg0Yy00NzBmLTg0MzEtMGJmNTQzYTllMDExXkEyXkFqcGdeQXVyMTA0Njg1ODU2._V1_SX300.jpg',
    imdb_rating: '5',
    vote_count: '0',
    youtube_trailer_key: '18YolVgfasM',
    genres: [
      'Action',
      'Crime',
      'Thriller'
    ],
    stars: [
      'Charlie Hunnam',
      'Mel Gibson',
      'Eiza González',
      'Clancy Brown',
      'Rupert Friend',
      'Lucy Fry',
      'Dominic Monaghan',
      'Jacob Scipio',
      'Paul Ben-Victor',
      'Method Man',
      'Morena Baccarin'
    ],
    directors: [
      'Tim Kirkby'
    ],
    countries: [
      'United States of America'
    ],
    language: [
      'English'
    ]
  },
  {
    title: 'Sherlock Holmes 3',
    year: '2021',
    release_date: '2021-12-24',
    imdb_id: 'tt2094116',
    imdb_rating: '8.25843',
    poster: 'https://comic.systems/images/actu/cinema-actu-150518-114105',
    youtube_trailer_key: 's1s-XbvncNg',
    rated: '5.5',
    genres: [
      'Mystery',
      'Action',
      'Crime',
      'Adventure'
    ],
    stars: [
      'Robert Downey Jr.',
      'Jude Law',
      'Jared Harris',
      'Eddie Marsan',
      'Rachel McAdams',
    ],
    directors: [
      'Dexter Fletcher'
    ],
    countries: [
      'United States of America'
    ],
    language: [
      'English'
    ]
  },
  {
    title: 'Submission',
    year: '2019',
    release_date: '2019-09-19',
    poster: 'https://m.media-amazon.com/images/M/MV5BN2M4NzAyOTgtZTUxYi00MjRjLTk1ZjgtNTI5YThkYWE2OWViXkEyXkFqcGdeQXVyMjg5OTIyMDk@._V1_.jpg',
    imdb_id: 'tt4824256',
    imdb_rating: '7.1',
    youtube_trailer_key: 'P11MroggtPo',
    genres: [
      'Drama',
      'Sport',
    ],
    stars: [
      'Scott Pryor',
      'Darrin Henson',
      'Eric Roberts',
      'Lorynn York',
      'Kevin Sizemore',
      'Sara McMann',
      'Lunden De\'Leon',
      'Ovince Saint Preux',
      'John Gray',
      'Adam Minarovich',
      'Lauren York',
      'Darrin Dewitt Henson',
      'Dixie Light',
      'Lawrence Gilligan',
      'Micah Pryor',
      'Danny Williams-Lopez',
      'J Randall'
    ],
    directors: [
      'J.M. Berrios'
    ],
    countries: [
      'United States of America',
      'USA'
    ],
    language: [
      'English',
      'en'
    ],
  },
  {
    title: 'The Nightingale',
    year: '2022',
    release_date: '2022-12-23',
    'imdb_rating': '6.79167',
    poster: 'https://m.media-amazon.com/images/M/MV5BNjVmZmY1NmQtMWNhZS00ZDUwLTk5ZTQtZGE4NWIyM2YwMDRiXkEyXkFqcGdeQXVyODY3Nzc0OTk@._V1_SX300.jpg',
    youtube_trailer_key: 'YuP8g_GQIgI',
    rated: '6.6',
    genres: [
      'Drama',
      'History',
      'War'
    ],
    stars: [
      'Elle Fanning',
      'Dakota Fanning'
    ],
    directors: [
      'Mélanie Laurent',
      'Michelle MacLaren'
    ],
    countries: [
      'United States of America',
      'USA'
    ],
    language: [
      'English',
      'N/A'
    ]
  },
  {
    title: 'Kung Fury',
    year: '2020',
    imdb_rating: '8.875',
    vote_count: '8',
    poster: 'https://m.media-amazon.com/images/M/MV5BMjQwMjU2ODU5NF5BMl5BanBnXkFtZTgwNTU1NjM4NTE@._V1_SX300.jpg',
    popularity: '2.435',
    youtube_trailer_key: 'nO_DIwuGBnA',
    rated: 'Action, Comedy, Crime',
    genres: [
      'Action',
      'Comedy',
      'Sci-Fi',
      'Fantasy',
      'Crime',
      'Science Fiction'
    ],
    stars: [
      'David Sandberg',
      'Michael Fassbender',
      'Arnold Schwarzenegger',
      'David Hasselhoff',
      'Leopold Nilsson',
      'Eleni Young',
      'Alexandra Shipp',
      'Anton Kottas',
      'Jorma Taccone',
      'Max Kraus'
    ],
    directors: [
      'David Sandberg'
    ],
    countries: [
      'Sweden',
      'United States of America'
    ],
    language: [
      'English',
      'Deutsch',
      'svenska',
      'English, German, Swedish'
    ]
  },
  {
    title: 'A Mother\'s Crime',
    year: '2017',
    release_date: '2017-08-21',
    imdb_id: 'tt7444708',
    imdb_rating: '6.8',
    poster: 'https://m.media-amazon.com/images/M/MV5BM2FkZmI4ZWYtNTZlYy00YjBlLWE1OWItNjNlOTQ3ZGQ0NTMxXkEyXkFqcGdeQXVyNzY4ODc3OTA@._V1_SX300.jpg',
    youtube_trailer_key: '2TxoDMfZudM',
    genres: [
      'Thriller',
      'TV Movie'
    ],
    stars: [
      'Jenny Gabrielle',
      'April Bowlby',
      'Amber Lynn Ashley',
      'Ryan Jason Cook',
      'J.D. Garfield',
      'Allyson Harbert',
      'Matt Page',
      'Brytnee Ratledge',
      'Matthew Van Wettering',
      'Arina Gancicova'
    ],
    directors: [
      'Farhad Mann',
      'Lora Martinez-Cunningham',
      'Amber LeRae Earls',
    ],
    countries: [
      'United States of America',
      'USA'
    ],
    language: [
      'English'
    ]
  }


];
const insertBest = function() {
  Popular.create(best)
    .then(() => {
      console.log('Database seeded successfully');
    })
    .catch((error) => {
      console.log('error seeding the database: ', error);
    })
    
};
insertBest();