const router = require("express").Router();
const withAuth = require("../../middleware/authentication");
const {
  getAllMoviePost,
  getAllPostMovie,
  newMoviePost,
  updateMoviePost,
  deleteMoviePost
} = require("../../controllers/moviepostController")

router
  .route("/")
  .post(withAuth, newMoviePost)

router
  .route("/movie/:movieid")
  .get(withAuth, getAllPostMovie);
router
  .route("/:postid")
  .get(withAuth, getAllMoviePost)
  .put(withAuth, updateMoviePost)

  router
  .route("/:movieid/:postid")
  .delete(withAuth, deleteMoviePost)


module.exports = router;