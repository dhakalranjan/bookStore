const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    bookTitle:{
        type:String,
        required:true,
        trim: true,
    },
    bookDescription:{
        type:String,
        required:true
    }, 
    publishDate:{
        type:Date,
    },
    bookImage:{
        type:String,
    },
    authorName: {
      type:String
      },
    genreName:{
    type:String
    }
})

const BOOK = mongoose.model("book",bookSchema)
module.exports= {
    BOOK,
}