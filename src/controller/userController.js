const express = require("express");
const { Login, ListAll, Register } = require("../service/userService");
const userController = express.Router();

userController.get("/", async (req, res) => {
  // FindAll(req, res);
  ListAll(req, res);
});

userController.post("/login", async (req, res) => {
  // Authen(req, res);
  Login(req, res);
});
userController.post("/register", async (req, res) => {
  Register(req, res);
});

module.exports = userController;
