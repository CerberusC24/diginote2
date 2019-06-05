const router = require("express").Router();
const withAuth = require("../../middleware/authentication");
const {
  newMovie,
  getAllMovies,
  deletePostMovie,
  getMovieById
} = require("../../controllers/movieController")

// GET and POST at /api/movie
router
  .route("/")
  .get(withAuth, getAllMovies)
  .post(withAuth, newMovie);

  router
  .route("/:id")
  .get(withAuth, getMovieById);

// DELETE at /api/movie
router
  .route("/:id")
  .delete(withAuth, deletePostMovie);

module.exports = router;