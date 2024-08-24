// routes/productRoutes.js

const express = require("express");
const productController = require("../controller/productController");
const authM = require("../middleware");

const router = express.Router();

// Route to create a product (only for authenticated users)
router.post("/create", authM, productController.createProduct);

module.exports = router;
