const router = require("express").Router();
const withAuth = require('../../middleware/authentication');
const {
  getAllBookPost,
  getAllPostBook,
  newBookPost,
  updateBookPost,
  deleteBookPost
} = require("../../controllers/bookPostController")

router
  .route("/")
  .post(withAuth, newBookPost)
  
  router
  .route("/book/:bookid")
  .get(withAuth, getAllPostBook);

router
  .route("/:postid")
  .get(withAuth, getAllBookPost)
  .put(withAuth, updateBookPost)
  .delete(withAuth, deleteBookPost)
  


module.exports = router;