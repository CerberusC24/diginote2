const jwt = require("jsonwebtoken");
const {
  Song
} = require("../models");

// create a new song
const newSong = (req, res) => {
  const {
    artist, title, date
  } = req.body;
  Song.create({
    artist, title, date
    })
    .then(dbSongData => res.json(dbSongData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
};

// get back all Songs
const getAllSongs = async (req, res) => {
  Song.findAll({

  })
  .then(dbSongData => res.json(dbSongData))
  .catch(err => res.json(err));
};

// delete user songs
const deleteUserSong = async (req, res) => {
  Song.destroy({
      where: {
        id: req.body.id
      }
    })
    .then(dbSongData => res.json(dbSongData))
    .catch(err => res.json(err));
}

module.exports = {
  newSong,
  getAllSongs,
  deleteUserSong
};