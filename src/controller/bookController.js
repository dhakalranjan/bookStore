const { BOOK } = require("../model/book");
const { AUTHOR } = require("../model/author");
const { GENRE } = require("../model/genre");

async function handleCreateBook(req, res, next) {
  const book = req.body;
  //calling author and genre in here to add in Books
  const authorName = await AUTHOR.findById(book.author);
  const genreName = await GENRE.findById(book.genre);
  try {
    if (!book) {
      return res.status(400).json({ error: "All fields are required" });
    }
    if (!book.title) {
      return res.status(400).json({ error: "Title is required required" });
    }
    if (!book.description) {
      return res
        .status(400)
        .json({ error: "Description is required required" });
    }
    if (!book.publishDate) {
      return res
        .status(400)
        .json({ error: "Published date is required required" });
    }

    const createBook = await BOOK.create({
      bookTitle: book.title,
      bookDescription: book.description,
      publishDate: book.publishDate,
      bookImage: book.bookImage,
      authorName: authorName.authorUsername,
      genreName: genreName.genreTitle,
    });
    console.log(createBook)
    return res
      .status(201)
      .json({ message: "Book is added successfully", createBook });
      
  } catch (error) {
    console.error("Error creating genre:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  handleCreateBook,
};
