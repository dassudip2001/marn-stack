const express = require("express");

const router = express.Router();
const userController = require("../controller/userController");

// Register route
router.post("/register", userController.register);

// Login route
router.post("/login", userController.login);

module.exports = router;
