const router = require("express").Router();
const withAuth = require("../../middleware/authentication");
const {
  newSong,
  getAllSongs,
  deleteUserSong,
  getSongById
} = require("../../controllers/songController")

// GET and POST at /api/song
router
  .route("/")
  .get(withAuth, getAllSongs)
  .post(withAuth, newSong);

  router
  .route("/:id")
  .get(withAuth, getSongById)

// DELETE at /api/song/delete/:id  
router.route("/:id")
  .delete(withAuth, deleteUserSong);

module.exports = router;