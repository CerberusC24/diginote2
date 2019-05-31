const router = require("express").Router();
const withAuth = require("../../middleware/authentication");
const {
  getUserInfo,
  login,
  register,
  deleteUser
} = require("../../controllers/usersController")

// GET at /api/users
router
  .route("/")
  .get(withAuth, getUserInfo);


router
  .route("/login")
  .post(login);


router
  .route("/register")
  .post(register);

// DELETE at /api/users/:id
router
  .route("/:id")
  .delete(withAuth, deleteUser)

module.exports = router;