const express = require("express")
const router = express.Router();
const {handleCreateBook} = require("../controller/bookController")





router.route("/").post(handleCreateBook)



module.exports = router;
