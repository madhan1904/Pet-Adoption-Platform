const express = require("express");
const registerMiddleware = require("../Middlewares/RegisterMid");
const register = express.Router();

register.post("/", registerMiddleware, (req, res, next) => {
  res.send("In register route");
});

module.exports = register;
