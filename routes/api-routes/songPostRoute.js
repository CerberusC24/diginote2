const router = require("express").Router();
const withAuth = require("../../middleware/authentication");
const {
  getAllSongPost,
  getAllPostSong,
  newSongPost
} = require("../../controllers/songpostController")

router
  .route("/")
  .post(withAuth, newSongPost);
router
  .route("/post/:postid")
  .get(withAuth, getAllSongPost);
router
  .route("/song/:songid")
  .get(withAuth, getAllPostSong);

module.exports = router;