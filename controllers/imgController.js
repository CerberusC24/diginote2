const jwt = require("jsonwebtoken");
const {
  Img
} = require("../models");

// export a series of methods for handling our routes:

//1. get back all Img
const getAllImg = async (req, res) => {
  Img.findAll({

  })
  .then(dbImgData => res.json(dbImgData))
  .catch(err => res.json(err));
}

//2. delete user Img
const deleteUserImg = async (req, res) => {
  Img.destroy({
      where: {
        id: req.body.id
      }
    })
    .then(dbImgData => res.json(dbImgData))
    .catch(err => res.json(err));
}

//3. create a new Img
const newImg = (req, res) => {
  const {
    url
  } = req.body;
  Img.create({
    url
    })
    .then(dbImgData => res.json(dbImgData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
};

// export all functions as methods we can import into our route definition:

module.exports = {
  newImg,
  getAllImg,
  deleteUserImg
};