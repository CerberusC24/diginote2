require('dotenv').config();
const moment = require('moment');
const axios = require('axios');
const Spotify = require('node-spotify-api');
const spotify = new Spotify(
  {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
  });
const {
  Book, Song, Movie
} = require("../models");


// Begin Function for running the spotify api request and adding results to database
const spotifyThis = (req, res) => {

  const {
    artist,
    title
  } = req.query

  const query = `https://api.spotify.com/v1/search?type=track&q=${title}&${artist}&limit=1`;

  spotify
    .request(query)
    .then((trackData) => {

      const songData = {
        artist: trackData.tracks.items[0].artists[0].name,
        title: trackData.tracks.items[0].name,
        album: trackData.tracks.items[0].album.name,
        date: moment(trackData.tracks.items[0].album.release_date, "YYYY-MM-DD").format("MM-DD-YYYY"),
        previewLink: trackData.tracks.items[0].preview_url,
        albumCoverLarge: trackData.tracks.items[0].album.images[1].url,
        albumCoverSmall: trackData.tracks.items[0].album.images[2].url
      }

      Song.create(songData)
        .then(dbSongData => res.json(dbSongData))
        .catch(err => {
          console.log(err);
          res.json(err);
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
}
// End Function for running the spotify api request and adding results to database

// Begin Function for running the google-books api request and adding results to database
function getGoogleBook(req, res) {
  const {
    title,
    author
  } = req.query;

  const query = `inauthor:${author}+intitle:${title}`;

  axios.get('https://www.googleapis.com/books/v1/volumes', {
    params: {
      q: query
    },
  }).then((response) => {

    const bookData = {
      cover: response.data.items[0].volumeInfo.imageLinks.thumbnail,
      title: response.data.items[0].volumeInfo.title,
      authors: response.data.items[0].volumeInfo.authors.toString(),
      pages: response.data.items[0].volumeInfo.pageCount,
      year: moment(response.data.items[0].volumeInfo.publishedDate, "YYYY-MM-DD").format("MM-DD-YYYY"),
      plot: response.data.items[0].volumeInfo.description
    }

    Book.create(bookData)
      .then(dbBookData => {
        res.json(dbBookData)
        console.log(dbBookData)
      })
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  })
    .catch((error) => {
      console.log(error);
      res.json(error);
    });
}
// End Function for running the google-books api request and adding results to database

// Begin Function for running the OMDB api request and adding results to database
function movieThis(req, res) {

  const {
    title
  } = req.query

  const query = title
  console.log(query);
  axios
    .get(`http://www.omdbapi.com`, {
      params: {
        t: query,
        apikey: process.env.OMDBKEY
      }
    })
    .then((response) => {

      const movieData = {
        poster: response.data.Poster,
        title: response.data.Title,
        year: moment(response.data.Released, 'DD MMM YYYY').format('MM-DD-YYYY'),
        plot: response.data.Plot,
        cast: response.data.Actors,
        rated: response.data.Rated
      }

      Movie.create(movieData)
        .then(dbMovieData => res.json(dbMovieData))
        .catch(err => {
          console.log(err);
          res.json(err);
        });
    })
    .catch((error) => {
      console.log("hit .catch()")
      console.log(error);
      res.json(error);
    })
}
// End Function for running the OMDB api request and adding results to database

module.exports = {
  spotifyThis,
  movieThis,
  getGoogleBook
};