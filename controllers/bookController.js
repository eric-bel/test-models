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
        res.status(400).json({ message: "Could not create new Book" });
        return;
      }
      res.status(200).json(newBook);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  async getAllBooks(req, res) {
    const AllBooks = await dbBook.find({});
    try {
      if (!AllBooks.length) {
        res.status(404).json({ message: "Could not find accounts" });
        return;
      }
      res.status(200).json(AllBooks);
    } catch (e) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  // async getBookAuthor(req, res) {
  //   const bookAuthor = await dbBook
  //     .findOne({ bookname: "The Interpretation of Dreams" })
  //     .populate("author");
  //   if (!bookAuthor.length) {
  //     res.status(404).json({ message: "Could not find author(s)" });
  //     return;
  //   }
  //   res.status(200).json(bookAuthor);
  // }
  // catch(e) {
  //   res.status(500).json({ message: "Internal Server Error" });
  // }
  async getBookAuthor(req, res) {
    const oneBookByName = await dbBook.find(req.body).populate("author");
    try {
      if (!oneBookByName.length) {
        res.status(404).json({ message: "Could not find book" });
        return;
      }
      console.log(oneBookByName[0].author.authorname);
      res.status(200).json(oneBookByName[0].author.authorname);
    } catch (e) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

module.exports = new BookControllers();
