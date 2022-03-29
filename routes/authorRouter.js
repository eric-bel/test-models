const express = require("express");
const router = express.Router();
const controller = require("../controllers/authorController");

router.post("/createauthor", controller.createAuthor);
router.get("/getallauth", controller.getAllAuthors);

module.exports = router;
