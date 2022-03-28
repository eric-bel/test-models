const express = require("express");
const router = express.Router();
const controller = require("../controllers/authorController");

router.get("/createauthor", controller.createAuthor);
router.get("/getallauth", controller.getAllAuthors);

module.exports = router;
