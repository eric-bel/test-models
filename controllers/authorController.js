const dbAuthor = require("../models/author");
const { v4: uuidv4 } = require("uuid");

class AuthorsControllers {
  async createAuthor(req, res) {
    const { username, email, password } = req.body;
    try {
      const newAuthor = await dbAuthor.create(
        {
          UserId: uuidv4(),
          username: username,
          email: email,
          password: password,
        },
        { timestamps: true }
      );
      if (!newAuthor) {
        res.status(400).json({ message: "Could not create new Author" });
        return;
      }
      res.status(200).json(newAuthor);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  async getAllAuthors(req, res) {
    const AllAuthors = await dbAuthor.find({});
    if (!AllAuthors.length) {
      res.status(404).json({ message: "Could not find accounts" });
      return;
    }
    res.status(200).json(AllAuthors);
  }
  catch(e) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = new AuthorsControllers();
