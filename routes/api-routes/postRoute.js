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

// DELETE at /api/posts/delete:id  
  router
  .route("/delete/:id")
  .delete(withAuth, deleteUserPost);

// PUT at /api/posts/update/:id  
  router
  .route("/update/:id")
  .put(withAuth, updateUserPost);  

module.exports = router;