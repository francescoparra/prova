const express = require("express");
const userController = require("../controller/userController");

const router = express.Router();

router.post("/user/register", userController.newUser);

module.exports = router;