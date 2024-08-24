const express = require("express");
const connectDb = require("./src/db/connect");
const userRouter = require("./src/route/userRoute");
const productRouter = require("./src/route/productRoute");
const authM = require("./src/middleware");
// how to import dotenv
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDb();
const port = 3000;
app.use("/api/auth", userRouter);
app.use("/api/product", productRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// auth middleware get route
app.get("/api/auth", authM, async (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
