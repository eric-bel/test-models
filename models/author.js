const { Schema, model } = require("mongoose");

const authorSchema = new Schema({
  authorname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = model("Author", authorSchema);

// const authorSchema = new Schema(
//   {
//     authorname: {
//       type: String,
//       required: true,
//     },
//     genre: {
//       type: String,
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );
