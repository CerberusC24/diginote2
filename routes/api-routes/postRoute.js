const router = require("express").Router();
const withAuth = require("../../middleware/authentication");
const {
  newPost,
  getUserPosts,
  deleteUserPost,
  updateUserPost
} = require("../../controllers/postController")

// GET and POST at /api/post
router
  .route("/")
  .get(withAuth, getUserPosts)
  .post(withAuth, newPost);

// DELETE at /api/post/delete:id  
  router
  .route("/delete/:id")
  .delete(withAuth, deleteUserPost);

// PUT at /api/post/update/:id  
  router
  .route("/update/:id")
  .put(withAuth, updateUserPost);  

module.exports = router;