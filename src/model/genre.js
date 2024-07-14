const mongoose = require("mongoose")

const genreSchema = new mongoose.Schema({
    genreTitle:{
        type:String,
        required :true,
       
    },
    genreDescription:{
        type:String,
        required :true,

    }
})

const GENRE = mongoose.model("Genre", genreSchema);
module.exports = {
    GENRE,
};