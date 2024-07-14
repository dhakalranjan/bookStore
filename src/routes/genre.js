// src/routes/author.js
const express = require("express");
const router = express.Router();
const { 
    handleCreateGenre,
    handleGetGenre,
    handleDeleteGenreById,
    handleGetGenreById,
    handlePatchGenreById
    } = require("../controller/genreController");


router.route("/").post(handleCreateGenre).get(handleGetGenre)

router.route("/:id").delete(handleDeleteGenreById).get(handleGetGenreById).patch(handlePatchGenreById)

//Single Author 



module.exports = router;