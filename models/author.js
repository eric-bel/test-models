const { Schema, model } = require("mongoose");

const authorSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      unique: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Author", authorSchema);
