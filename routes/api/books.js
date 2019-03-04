const router = require("express").Router();
const bookController = require("../../controllers/bookController");

// For routes with /api/books 
router.route("/")
  .get(bookController.findAll)
  .post(bookController.create);

// For routes with /api/books/:id
router.route("/:id")
  .get(bookController.findById)
  .delete(bookController.remove);

module.exports = router;
