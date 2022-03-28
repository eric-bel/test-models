const { Schema, model } = require("mongoose");

const authorSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Author", authorSchema);
