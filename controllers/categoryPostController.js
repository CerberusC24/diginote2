const jwt = require("jsonwebtoken");
const {
  CategoryPost
} = require("../models");

// export a series of methods for handling our routes:

//1. get back all categories related to a post
const getAllCategoryPost = async (req, res) => {
  CategoryPost.findAll({
    where: {
      PostId: req.params.postid
    }
  })
  .then(dbCategoryIdData => res.json(dbCategoryIdData))
  .catch(err => res.json(err));
}

//2. get back posts related to a category
const getAllPostCategory = async(req, res) => {
  CategoryPost.findAll({
    where: {
      BookId: req.params.categoryid
    }
  })
  .then(dbCategoryIdData => res.json(dbCategoryIdData))
  .catch(err => res.json(err));
}

//3. create a new BookPost
const newCategoryPost = (req, res) => {
  const {
  PostId, CategoryId
  } = req.body;
  CategoryPost.create({
      PostId, CategoryId
    })
    .then(dbCategoryIdData => res.json(dbCategoryIdData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
};

// export all functions as methods we can import into our route definitions

module.exports = {
  getAllCategoryPost,
  getAllPostCategory,
  newCategoryPost
};