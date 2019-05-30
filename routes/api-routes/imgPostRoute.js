const router = require("express").Router();
const withAuth = require("../../middleware/authentication");
const {
  getAllImgPost,
  getAllPostImg,
  newImgPost
} = require("../../controllers/imgpostController")

router
  .route("/")
  .post(withAuth, newImgPost);
router
  .route("/post/:postid")
  .get(withAuth, getAllImgPost)
router
  .route("/Img/:imgid")
  .get(withAuth, getAllPostImg);

module.exports = router;