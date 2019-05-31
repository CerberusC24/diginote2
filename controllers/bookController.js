const jwt = require("jsonwebtoken");
const {
  Book
} = require("../models");

// export series of methods for handling routes:

//1. get back all books
const getAllBooks = async (req, res) => {
  Book.findAll({

  })
    .then(dbBookData => res.json(dbBookData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
}

//2. create a new book
const newBook = (req, res) => {
  Book.create(req.body)
    .then(dbBookData => res.json(dbBookData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
};

//3. delete book
const deletePostBook = async (req, res) => {
  Book.destroy({
    where: {
      id: req.body.id
    }
  })
    .then(dbBookData => res.json(dbBookData))
    .catch(err => res.json(err));
}

module.exports = {
  newBook,
  getAllBooks,
  deletePostBook
};