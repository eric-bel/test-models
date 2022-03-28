const dbAuthor = require("../models/author");

class AuthorsControllers {
  async createAuthor(req, res) {
    const { username, email, password } = req.body;
    try {
      const newAuthor = await dbAuthor.create({
        username: username,
        email: email,
        password: password,
      });
      res.status(200).json(newAuthor);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

module.exports = new AuthorsControllers();
