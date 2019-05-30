const router = require("express").Router();
const withAuth = require("../../middleware/authentication");
const {
  getAllBookPost,
  getAllPostBook,
  newBookPost
} = require("../../controllers/bookPostController")

router
  .route("/")
  .post(newBookPost);
router
  .route("/post/:postid")
  .get(getAllBookPost)
router
  .route("/book/:bookid")
  .get(getAllPostBook);

module.exports = router;