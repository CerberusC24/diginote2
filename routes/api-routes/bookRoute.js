const router = require('express').Router();
const withAuth = require('../../middleware/authentication');
const {
  newBook,
  getAllBooks,
  deletePostBook
} = require('../../controllers/bookController');

// GET and POST at /api/book
router
  .route('/')
  .get(withAuth, getAllBooks)
  .post(withAuth, newBook);

// DELETE at /api/book/delete/:id
router
  .route('/delete/:id')
  .delete(withAuth, deletePostBook);

module.exports = router;