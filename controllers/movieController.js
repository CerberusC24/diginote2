const jwt = require("jsonwebtoken");
const {
  Movie
} = require("../models");

// create a new Movie
const newMovie = (req, res) => {
   Movie.create(
    req.body
    )
    .then(dbMovieData => res.json(dbMovieData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
};

// get back all Movies
const getAllMovies = async (req, res) => {
  Movie.findAll({

  })
  .then(dbMovieData => res.json(dbMovieData))
  .catch(err => res.json(err));
};

// get back all Movies
const getMovieById = async (req, res) => {

  const movieId = req.body.id

  Movie.findAll({
    where: {
      id: movieId
    }
  })
  .then(dbMovieData => res.json(dbMovieData))
  .catch(err => res.json(err));
};

// delete user Movies
const deletePostMovie = async (req, res) => {
  Movie.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(dbVidData => 
      res.json(dbVidData),
      console.log(`Movie has been successfully deleted`),
      res.json(`Movie has been successfully deleted`))
    .catch(err => res.json(err));
}

module.exports = {
  newMovie,
  getAllMovies,
  deletePostMovie,
  getMovieById
};