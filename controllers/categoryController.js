const jwt = require("jsonwebtoken");
const {
  Post, Category
} = require("../models");

// export a series of methods for handling our routes:

//1. get back all categories
const getAllCategories = async (req, res) => {
  Category.findAll({

  })
  .then(dbPostData => res.json(dbPostData))
  .catch(err => res.json(err));
}

//2. getting the user's categories
const getPostbyCategory = async (req, res) => {
  Category.findAll({
    where: {
      categoryTitle: req.params.name
    },
    // include post
    include: [Post]
    // // end include post
  })
  .then(dbPostData => res.json(dbPostData))
  .catch(err => res.json(err));
};

//3. delete the user's categories
const deleteUserCategory = async (req, res) => {
  Category.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => res.json(err));
}

//4. create a new category
const newCategory = (req, res) => {
  const {
    categoryTitle
  } = req.body;
  Category.create({
      categoryTitle,
    })
    .then(dbCategoryData => res.json(dbCategoryData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
};

// export all functions as methods we can import into our route definitions:

module.exports = {
  newCategory,
  getAllCategories,
  getPostbyCategory,
  deleteUserCategory
};