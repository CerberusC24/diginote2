const jwt = require("jsonwebtoken");
const {
  MoviePost
} = require("../models");

// create a new Movie
const newMoviePost = (req, res) => {
  const {
    MovieId, PostId
  } = req.body;
  MoviePost.create({
    MovieId, PostId
    })
    .then(dbMovieData => res.json(dbMovieData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
};

// get back all Movies related to posts
const getAllMoviePost = async (req, res) => {
  MoviePost.findAll({
    where: {
      PostId: req.params.postid
    }
  })
  .then(dbMoviePostData => res.json(dbMoviePostData))
  .catch(err => res.json(err));
}

// get back posts related to Movies

const getAllPostMovie = async(req, res) => {
  MoviePost.findAll({
    where: {
      MovieId: req.params.Movieid
    }
  })
  .then(dbMoviePostData => res.json(dbMoviePostData))
  .catch(err => res.json(err));
}

module.exports = {
  newMoviePost,
  getAllMoviePost,
  getAllPostMovie,

};