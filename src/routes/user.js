const express = require("express");
const router = express.Router();

const {handleCreateUser,handleUserLogin} = require("../controller/userController")

router.route("/").post(handleCreateUser)
router.route("/login").post(handleUserLogin)



module.exports = router;