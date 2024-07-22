const express = require("express")
const router = express.Router();
const {handleCreateBook,handleDeleteBook} = require("../controller/bookController")





router.route("/").post(handleCreateBook)
router.route("/:id").delete(handleDeleteBook)



module.exports = router;
