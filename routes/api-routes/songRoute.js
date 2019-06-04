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
  .get(withAuth, getSongById)
  .post(withAuth, newSong);

// DELETE at /api/song/delete/:id  
router.route("/:id")
  .delete(withAuth, deleteUserSong);

module.exports = router;