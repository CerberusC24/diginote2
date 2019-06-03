const router = require("express").Router();
const withAuth = require("../../middleware/authentication");
const {
  newMovie,
  getAllMovies,
  deletePostMovie
} = require("../../controllers/movieController")

// GET and POST at /api/movie
router
  .route("/")
  .get(withAuth, getAllMovies)
  .post(withAuth, newMovie);

// DELETE at /api/movie
router
  .route("/:id")
  .delete(withAuth, deletePostMovie);

module.exports = router;