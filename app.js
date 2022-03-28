var express = require("express");
require("dotenv").config();
var app = express();
const mongoose = require("mongoose");

const PORT = process.env.PORT;

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(PORT, function () {
  console.log(`Started on ${PORT}`);
});

const start = async () => {
  try {
    await mongoose.connect(process.env.DBURL);
  } catch (e) {
    console.log(e);
  }
};
start();

module.exports = app;
