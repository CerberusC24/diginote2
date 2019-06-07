const jwt = require("jsonwebtoken");
const {
  BookPost

} = require("../models");


// export a series of methods for handling our routes:

//1. get back all books related to a post
const getAllBookPost = async (req, res) => {
  BookPost.findAll({
    where: {
      PostId: req.params.postid
    }
  })
    .then(dbBookPostData => res.json(dbBookPostData))
    .catch(err => res.json(err));
}

//2. get back all posts related to a book
const getAllPostBook = async (req, res) => {
  BookPost.findAll({
    where: {
      BookId: req.params.bookid
    }
  })
    .then(dbBookPostData => res.json(dbBookPostData))
    .catch(err => res.json(err));
}

//3. create a new BookPost
const newBookPost = (req, res) => {
  const {
    BookId, PostId
  } = req.body;
  BookPost.create({
    BookId, PostId,
  })
    .then(dbBookPostData => res.json(dbBookPostData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
};

// 4. update a BookPost
const updateBookPost = (req, res) => {
  const {
    BookId, PostId
  } = req.body;
  BookPost.update({
    BookId, PostId,
  }, {
    where: {
      id: req.params.postid
    }
  })
    .then(dbBookPostData => res.json(dbBookPostData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
}

// delete a BookPost
const deleteBookPost = (req, res) => {
  BookPost.destroy({
    where: {
      PostId: req.params.bookid
    }
  })
    .then(dbBookPostData => res.json(dbSongPostData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
}

// export all functions as methods we can import into our route definitions:

module.exports = {
  getAllBookPost,
  getAllPostBook,
  newBookPost,
  updateBookPost,
  deleteBookPost
};