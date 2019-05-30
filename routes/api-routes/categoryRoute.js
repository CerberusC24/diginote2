const router = require("express").Router();
const withAuth = require("../../middleware/authentication");
const {
  newCategory,
  getAllCategories,
  getPostbyCategory,
  deleteUserCategory
} = require("../../controllers/categoryController")

// GET and POST at /api/category
router
  .route("/")
  .get(withAuth, getAllCategories)
  .post(withAuth, newCategory);

// GET posts by category at /api/category/:id
router
  .route("/:id")
  .get(withAuth, getPostbyCategory)

// DELETE at /api/category/delete/:id
router
  .route("/delete/:id")
  .delete(withAuth, deleteUserCategory);

module.exports = router;