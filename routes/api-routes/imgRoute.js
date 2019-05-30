const router = require("express").Router();
const withAuth = require("../../middleware/authentication");
const {
  newImg,
  getAllImg,
  deleteUserImg
} = require("../../controllers/imgController")

router
  .route("/")
  .get(withAuth, getAllImg);
router
  .route("/")
  .post(withAuth, newImg);
router
  .route("/delete/:id")
  .delete(withAuth, deleteUserImg);


module.exports = router;