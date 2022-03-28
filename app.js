var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});

const start = async () => {
  try {
    // await mongoose.connect(process.env.DBURL);
  } catch (e) {
    console.log(e);
  }
};
start();

module.exports = app;
