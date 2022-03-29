const express = require("express");
const router = express.Router();
const controller = require("../controllers/bookController");

router.post("/createbook", controller.createBook);
router.get("/getallbooks", controller.getAllBooks);

module.exports = router;
