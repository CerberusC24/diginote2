const router = require('express').Router();
const withAuth = require('../../middleware/authentication');
const {
  newBook,
  getAllBooks,
  deletePostBook,
  getBookById
} = require('../../controllers/bookController');

// GET and POST at /api/book
router
  .route('/')
  .get(withAuth, getAllBooks)
  .get(withAuth, getBookById)
  .post(withAuth, newBook);

// DELETE at /api/book/delete/:id
router
  .route('/:id')
  .delete(withAuth, deletePostBook);

module.exports = router;