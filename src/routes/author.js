// src/routes/author.js
const express = require("express");
const router = express.Router();
const { handleCreateAuthor,
    handleGetAuthor,
    handleGetAuthorById,
    handleDeleteAuthorById,
    handlePatchAuthorById,
 } = require("../controller/authorController");

router.route("/").post(handleCreateAuthor).get(handleGetAuthor);


//Single Author 
router.route("/:id").get(handleGetAuthorById).delete(handleDeleteAuthorById).patch(handlePatchAuthorById)


module.exports = router;