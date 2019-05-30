const jwt = require("jsonwebtoken");
const {
  ImgPost
} = require("../models");

// create a new ImgPost
const newImgPost = (req, res) => {
  console.log(req.body);
  const {
  ImgId, PostId
  } = req.body;
  ImgPost.create({
      ImgId, PostId,
    })
    .then(dbImgPostData => res.json(dbImgPostData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
};

// get back all Imgs related to posts
const getAllImgPost = async (req, res) => {
  ImgPost.findAll({
    where: {
      PostId: req.params.postid
    }
  })
  .then(dbImgPostData => res.json(dbImgPostData))
  .catch(err => res.json(err));
}

// get back posts related to Imgs

const getAllPostImg = async(req, res) => {
  ImgPost.findAll({
    where: {
      ImgId: req.params.imgid
    }
  })
  .then(dbImgPostData => res.json(dbImgPostData))
  .catch(err => res.json(err));
}

// exporting

module.exports = {
  getAllImgPost,
  getAllPostImg,
  newImgPost
};