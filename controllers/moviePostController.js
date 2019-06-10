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

// update a MoviePost
const updateMoviePost = (req, res) => {
  const {
    MovieId, PostId
  } = req.body;
  MoviePost.update({
    MovieId, PostId,
  }, {
    where: {
      id: req.params.postid
    }
  })
    .then(dbBookPostData => res.json(dbMoviePostData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
}

// delete a MoviePost
const deleteMoviePost = (req, res) => {
  console.log(req.params);
  MoviePost.destroy({
    where: {
      PostId: req.params.postid,
      MovieId: req.params.movieid
    }
  })
    .then(dbBookPostData => res.json(dbSongPostData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
}

module.exports = {
  newMoviePost,
  getAllMoviePost,
  getAllPostMovie,
  updateMoviePost,
  deleteMoviePost
};