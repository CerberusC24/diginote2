const jwt = require("jsonwebtoken");
const {
  Book
<<<<<<< HEAD
} = require("../models/");
=======
} = require("../models");
>>>>>>> 3db61307aaa58c1b4a1a18ad2b0f21b6a2c1f7c6

// export series of methods for handling routes:

//1. get back all books
const getAllBooks = async (req, res) => {
  Book.findAll({})
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
      id: req.params.id
    }
  })
    .then(dbBookData =>
      res.json(dbBookData),
      console.log(`Book has been successfully deleted`),
      res.json(`Book has been successfully deleted`))
    .catch(err => res.json(err));
}

module.exports = {
  newBook,
  getAllBooks,
  deletePostBook
};