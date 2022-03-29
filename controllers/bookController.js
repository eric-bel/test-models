const dbBook = require("../models/book");
const { v4: uuidv4 } = require("uuid");

class BookControllers {
  async createBook(req, res) {
    const { bookname, author } = req.body;
    try {
      const newBook = await dbBook.create({
        bookname,
        author,
      });
      if (!newBook) {
        res.status(400).json({ message: "Could not create new Author" });
        return;
      }
      res.status(200).json(newBook);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  async getAllBooks(req, res) {
    const AllBooks = await dbBook.find({});
    if (!AllBooks.length) {
      res.status(404).json({ message: "Could not find accounts" });
      return;
    }
    res.status(200).json(AllBooks);
  }
  catch(e) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = new BookControllers();
