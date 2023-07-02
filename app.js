require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("jsonwebtoken");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    msg: "Welcome to our API",
  });
});
app.listen(3000);
