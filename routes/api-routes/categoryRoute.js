const router = require("express").Router();
const withAuth = require("../../middleware/authentication");
const {
  newCategory,
  getAllCategories,
  getPostbyCategory,
  deleteUserCategory,
  getCategoryById
} = require("../../controllers/categoryController")

// GET and POST at /api/category
router
  .route("/")
  .get(withAuth, getAllCategories)
  .get(withAuth, getCategoryById)
  .post(withAuth, newCategory);

// GET posts by category and DELETE categories by ID at:
// /api/category/:id
router
  .route("/:id")
  .get(withAuth, getPostbyCategory)
  .delete(withAuth, deleteUserCategory);

module.exports = router;