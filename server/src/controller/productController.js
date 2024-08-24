// controllers/productController.js

const Product = require("../models/product");

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const { name, price, description } = req.body;

    // Create a new product linked to the authenticated user
    const product = new Product({
      name,
      price,
      description,
      user: req.user._id, // Link the product to the user
    });

    await product.save();
    res.status(201).json({ message: "Product created successfully", product });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
