require('dotenv').config();
const moment = require('moment');
const axios = require('axios');
const Spotify = require('node-spotify-api');
const keys = require('../keys');

function getGoogleBook(req, res) {
  console.log(req.query);
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

    res.json(response.data);
  })
    .catch((error) => {
      console.log(error);
      res.json(error);
    });
}

// GET '/api/searchsong'
// Parameters = artist & track
// example of query => localhost:3000/api/searchsong?artist=beatles&track=come+together

const spotify = new Spotify(keys.spotify);

const spotifyThis = (req, res) => {
  console.log(req.query)
  var artist = req.query.artist
  var title = req.query.title

  const queryString = `https://api.spotify.com/v1/search?type=track&q=title:${title}&artist:${artist}&limit=10`;

  spotify
    .request(queryString, (err, data) => {
      if (err) {
        console.log(err);
      }
      res.json(data);
    })
    .then(function (response) {
      console.log(response)

      var artist = response.tracks.items[0].artists[0].name
      var title = response.tracks.items[0].name;
      var album = response.tracks.items[0].album.name;
      var previewLink = response.tracks.items[0].preview_url;

      console.log(`

    ============================================
    Artist: ${artist}
    Song Title: ${title}
    Album Name: ${album}
    Preview: ${previewLink}
    ============================================
`);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
}

function movieThis() {
  let searchQuery;

  axios
    .get(`http://www.omdbapi.com/?t=${searchQuery}&apikey=${OMDB_API_KEY}`)
    .then((response) => {
      console.log(`
      Movie Title: ${response.data.Title}
      Release Date: ${moment(response.data.Released, 'DD MMM YYYY').format('MM-DD-YYYY')}
      IMDB Rating: ${response.data.Ratings[0].Value}
      Rotten Tomatoes Rating: ${response.data.Ratings[1].Value}
      Country of Origin: ${response.data.Country}
      Language: ${response.data.Language}
      Plot Summary: ${response.data.Plot}
      Actors: ${response.data.Actors}
`);
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = {
  spotifyThis,
  movieThis,
  getGoogleBook
};