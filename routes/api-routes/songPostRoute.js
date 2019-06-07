const router = require("express").Router();
const withAuth = require("../../middleware/authentication");
const {
  getAllSongPost,
  getAllPostSong,
  newSongPost,
  updateSongPost,
  deleteSongPost
} = require("../../controllers/songpostController")

router
  .route("/")
  .post(withAuth, newSongPost)

  router
  .route("/song/:songid")
  .get(withAuth, getAllPostSong);
  
router
  .route("/:postid")
  .get(withAuth, getAllSongPost)
  .put(withAuth, updateSongPost)

  router
  .route("/:songid/:postid")
  .delete(withAuth, deleteSongPost)

module.exports = router;