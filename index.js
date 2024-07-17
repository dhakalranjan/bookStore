// index.js
const express = require('express');
const app = express();
const PORT = 8800;
const authorRouter = require("./src/routes/author");
const genreRouter = require("./src/routes/genre");
const bookRouter = require("./src/routes/book");
const userRouter = require("./src/routes/user")

const { connectMongoDb } = require("./connection");


//Middleware
app.use(express.urlencoded({ extended: false }));

//Routes for Author
app.use("/api/author", authorRouter);
app.use("/api/genre", genreRouter);
app.use("/api/book", bookRouter);
app.use("/api/user", userRouter);








//Mongoose COnnection
connectMongoDb("mongodb://127.0.0.1:27017/bookStore").then(() => {
    console.log("MongoDB is successfully connected");
})

app.listen(PORT, () => {
    console.log(`Server has started at port ${PORT}`);
});