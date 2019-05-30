const jwt = require("jsonwebtoken");
const {
  SongPost
} = require("../models");

// create a new Song
const newSongPost = (req, res) => {
  const {
    SongId, PostId
  } = req.body;
  SongPost.create({
    SongId, PostId
    })
    .then(dbSongData => res.json(dbSongData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
};

// get back all Songs related to posts
const getAllSongPost = async (req, res) => {
  SongPost.findAll({
    where: {
      PostId: req.params.postid
    }
  })
  .then(dbSongPostData => res.json(dbSongPostData))
  .catch(err => res.json(err));
}

// get back posts related to Songs

const getAllPostSong = async(req, res) => {
  SongPost.findAll({
    where: {
      SongId: req.params.Songid
    }
  })
  .then(dbSongPostData => res.json(dbSongPostData))
  .catch(err => res.json(err));
}

module.exports = {
  newSongPost,
  getAllSongPost,
  getAllPostSong,

};