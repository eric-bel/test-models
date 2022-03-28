const express = require("express");
const router = express.Router();
const controller = require("../controllers/authorController");

router.get("/", controller.createAuthor);
console.log(controller.createAuthor);


module.exports = router;
