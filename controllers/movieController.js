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

// delete user Movies
const deletePostMovie = async (req, res) => {
  Movie.destroy({
      where: {
        id: req.body.id
      }
    })
    .then(dbVidData => res.json(dbVidData))
    .catch(err => res.json(err));
}

module.exports = {
  newMovie,
  getAllMovies,
  deletePostMovie
};