const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("./models/user");

const authM = async (req, res, next) => {
  // console.log("Authenticating user...");
  // const header = req.headers.authorization;
  // if (header === null || header === undefined) {
  //   res.status(401).send("Unauthorized");
  // }

  // const token = header.split(" ")[1];

  // jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
  //   if (err) {
  //     res.status(403).send("Forbidden");
  //   }
  //   console.log("User authenticated");
  //   next();
  // });

  const token = req.query.token || req.header("Authorization"); // Check both query and headers

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({ message: "Invalid token" });
    }

    req.user = user; // Attach the user to the request object
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = authM;
