const jwt = require("jsonwebtoken");
const {
  Post
} = require("../models");

// create a new post
const newPost = (req, res) => {
  const {
    title,
    body
  } = req.body;

  Post.create({
      title,
      body,
      UserId: req.id
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
};

// getting the user's posts
const getUserPosts = async (req, res) => {
  Post.findAll({
      where: {
        UserId: req.id
      },
      // include post
      include: [{
        all: true,
        nested: true
      }]
      // // end include post
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => res.json(err));
};

// getting the user's posts
const getUserPostById = async (req, res) => {

  const postId = req.params.id

  Post.findAll({
      where: {
        id: postId 
      },
      include: [{
        all: true,
        nested: true
      }]
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => res.json(err));
};


// delete user posts
const deleteUserPost = async (req, res) => {
  Post.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => res.json(err));
}

// update a user post
const updateUserPost = async (req, res) => {
  Post.update({
      title: req.body.title,
      body: req.body.body,
    }, {
      where: {
        id: req.params.id
      }
    })
    .then(dbPostData => {
      console.log(dbPostData);
      res.json(dbPostData)
    })
    .catch(err => {
      console.log(err);
      res.json(err)
    });
}

// exporting

module.exports = {
  newPost,
  getUserPosts,
  deleteUserPost,
  updateUserPost,
  getUserPostById
};