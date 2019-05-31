const router = require("express").Router();
const withAuth = require("../../middleware/authentication");
const {
  newPost,
  getUserPosts,
  deleteUserPost,
  updateUserPost
} = require("../../controllers/postController")

// GET and POST at /api/posts
router
  .route("/")
  .get(withAuth, getUserPosts)
  .post(withAuth, newPost);

// DELETE at /api/posts/delete 
  router
  .route("/:id")
  .put(withAuth, updateUserPost)
  .delete(withAuth, deleteUserPost);


module.exports = router;