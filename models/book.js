const { Schema, model } = require("mongoose");

const bookSchema = new Schema(
  {
    bookname: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "Author",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Book", bookSchema);
