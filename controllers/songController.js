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

// get back song by id
const getSongById = async (req, res) => {

  const songId = req.body.id

  Song.findAll({
    where: {
      id: songId
    }

  })
  .then(dbSongData => res.json(dbSongData))
  .catch(err => res.json(err));
};

// delete user songs
const deleteUserSong = async (req, res) => {
  Song.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(dbSongData => 
      res.json(dbSongData),
      console.log(`Song has been successfully deleted`),
      res.json(`Song has been successfully deleted`))
    .catch(err => res.json(err));
}

module.exports = {
  newSong,
  getAllSongs,
  deleteUserSong,
  getSongById
};