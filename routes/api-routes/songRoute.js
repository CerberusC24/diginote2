const router = require("express").Router();
const withAuth = require("../../middleware/authentication");
const {
  newSong,
  getAllSongs,
  deleteUserSong
} = require("../../controllers/songController")

// GET and POST at /api/song
router
  .route("/")
  .get(withAuth, getAllSongs)
  .post(withAuth, newSong);

// DELETE at /api/song/delete/:id  
router.route("/delete/:id")
  .delete(withAuth, deleteUserSong);

module.exports = router;